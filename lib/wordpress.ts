// lib/wordpress.ts

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    type: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt?: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
    };
}

export interface WPEvent extends WPPost {
    acf?: { // All fields are optional strings from WP API
        start_date?: string; // Format: Y-m-d H:i:s
        end_date?: string;   // Format: Y-m-d H:i:s
        registration_link?: string;
        location?: string;
        // Legacy fallback
        event_date?: string;
    };
}

export interface WPMediaItem extends WPPost {
    acf?: {
        media_type?: string; // e.g., "news: News", "video: Video", etc.
        external_url?: string;
        file_download?: string | { url: string };
        source_name?: string;
        publish_date?: string; // Format: YYYYMMDD
    };
}

/**
 * Generic fetcher for any WP Post Type
 */
export async function getPosts<T>(postType: string = 'posts', params: Record<string, string | number> = {}): Promise<T[]> {
    if (!WORDPRESS_API_URL) {
        console.warn('WORDPRESS_API_URL is not defined in environment variables.');
        return [];
    }

    const searchParams = new URLSearchParams({
        _embed: 'true',
        per_page: '100',
        ...params as any
    });

    const endpoint = `${WORDPRESS_API_URL}/wp-json/wp/v2/${postType}?${searchParams.toString()}`;

    try {
        const res = await fetch(endpoint, {
            cache: 'no-store', // Disable caching to get fresh data
        });

        if (!res.ok) {
            if (res.status === 404) return [];
            throw new Error(`Failed to fetch ${postType}: ${res.status}`);
        }

        const data = await res.json();
        return data as T[];
    } catch (error) {
        console.warn(`Error fetching ${postType} from WordPress.`, error);
        return [];
    }
}

/**
 * Get Events, optionally filtered by 'event_category' slug (e.g. 'cfp-courses')
 * Note: Filtering by taxonomy slug in standard WP API usually requires an extra step (getting ID first)
 * OR installing a plugin like "REST API Filter Fields".
 * 
 * To keep it simple/native, we fetch all events (lightweight enough) and filter in JS.
 */
export async function getUpcomingEvents(categorySlug?: string): Promise<WPEvent[]> {
    const events = await getPosts<WPEvent>('events', { per_page: 50 });

    // Use start of today for comparison (so today's events are included)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events.filter(event => {
        // Filter by Date: Show events where end_date >= today (for ongoing events)
        // OR start_date >= today (for future events)
        const startDateStr = event.acf?.start_date || event.acf?.event_date;
        const endDateStr = event.acf?.end_date;

        if (startDateStr || endDateStr) {
            // Use end_date if available (for ongoing multi-day events), otherwise use start_date
            const relevantDateStr = endDateStr || startDateStr;
            const eventDate = new Date(relevantDateStr!);
            eventDate.setHours(23, 59, 59, 999); // End of the event day
            if (eventDate < today) return false; // Only hide if event has completely ended
        }
        // If no date at all, still show (better than hiding)

        // Filter by Category (if requested)
        if (categorySlug) {
            const hasCategory = event._embedded?.['wp:term']?.flat().some(
                term => term.slug === categorySlug && term.taxonomy === 'event_category'
            );
            if (!hasCategory) return false;
        }

        return true;
    }).sort((a, b) => {
        const dateStrA = a.acf?.start_date || a.acf?.event_date || '';
        const dateStrB = b.acf?.start_date || b.acf?.event_date || '';

        // Sorting works perfectly with "YYYY-MM-DD HH:mm:ss" strings
        const dateA = dateStrA ? new Date(dateStrA).getTime() : 0;
        const dateB = dateStrB ? new Date(dateStrB).getTime() : 0;
        return dateA - dateB;
    });
}

/**
 * Get Resources, optionally filtered by 'resource_category' slug (e.g. 'publications', 'videos')
 */
export async function getResources(categorySlug?: string, limit = 50): Promise<WPMediaItem[]> {
    const params: Record<string, string | number> = { per_page: 100 }; // Fetch more to filter client-side

    const allResources = await getPosts<WPMediaItem>('resources', params);

    let filtered = allResources;

    if (categorySlug && categorySlug !== 'all' && categorySlug !== 'all-media') {
        filtered = allResources.filter(item =>
            item._embedded?.['wp:term']?.flat().some(
                term => term.slug === categorySlug && term.taxonomy === 'resource_category'
            )
        );
    }

    // Sort by publish_date (newest first), then by post date
    filtered.sort((a, b) => {
        const dateA = a.acf?.publish_date || a.date;
        const dateB = b.acf?.publish_date || b.date;
        return dateB.localeCompare(dateA);
    });

    return filtered.slice(0, limit);
}

/**
 * Get a single resource by slug
 */
export async function getResourceBySlug(slug: string): Promise<WPMediaItem | null> {
    const resources = await getPosts<WPMediaItem>('resources', { slug });
    return resources[0] || null;
}

/**
 * Get all resource categories
 */
export async function getResourceCategories(): Promise<Array<{ id: number; name: string; slug: string; count: number }>> {
    if (!WORDPRESS_API_URL) {
        console.warn('WORDPRESS_API_URL is not defined in environment variables.');
        return [];
    }

    try {
        const res = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/resource_categories?per_page=100`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) return [];

        const data = await res.json();
        return data.map((cat: any) => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            count: cat.count || 0,
        }));
    } catch (error) {
        console.warn('Error fetching resource categories:', error);
        return [];
    }
}

/**
 * Helper to extract media type from ACF field
 */
export function getMediaType(resource: WPMediaItem): string {
    const mediaType = resource.acf?.media_type || '';
    // Handle format like "news: News" -> returns "news"
    return mediaType.split(':')[0]?.trim().toLowerCase() || 'news';
}

/**
 * Helper to get resource category from embedded terms
 */
export function getResourceCategory(resource: WPMediaItem): { name: string; slug: string } | null {
    const terms = resource._embedded?.['wp:term']?.flat() || [];
    const categoryTerm = terms.find((t: any) => t.taxonomy === 'resource_category');
    return categoryTerm ? { name: categoryTerm.name, slug: categoryTerm.slug } : null;
}

/**
 * Helper to get featured image URL
 */
export function getFeaturedImageUrl(resource: WPMediaItem): string | null {
    return resource._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

/**
 * Helper to get file download URL
 */
export function getFileDownloadUrl(resource: WPMediaItem): string | null {
    const fileDownload = resource.acf?.file_download;
    if (!fileDownload) return null;
    return typeof fileDownload === 'string' ? fileDownload : fileDownload.url;
}

