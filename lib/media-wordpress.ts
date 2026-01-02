// lib/media-wordpress.ts
// Functions to fetch and transform WordPress Resources to match MediaItem format

import { getResources, getMediaType, getResourceCategory, getFeaturedImageUrl, getFileDownloadUrl, WPMediaItem } from './wordpress';
import type { MediaItem, DownloadableResource, MediaType } from './media-content';

/**
 * Decode HTML entities in text
 */
function decodeHtmlEntities(text: string): string {
    return text
        .replace(/&#8217;/g, "'")
        .replace(/&#8216;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&#8211;/g, "–")
        .replace(/&#8212;/g, "—")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/<[^>]*>/g, ''); // Strip any HTML tags
}

/**
 * Transform a WordPress Resource into a MediaItem for display
 */
export function wpResourceToMediaItem(resource: WPMediaItem): MediaItem {
    const mediaType = getMediaType(resource);
    const category = getResourceCategory(resource);
    const featuredImage = getFeaturedImageUrl(resource);
    const downloadUrl = getFileDownloadUrl(resource);

    // Map WordPress media_type to our MediaType
    const typeMap: Record<string, MediaType> = {
        'news': 'news',
        'press': 'press',
        'video': 'video',
        'publication': 'publication',
        'podcast': 'podcast',
        'download': 'resource',
        'resource': 'resource',
    };

    // Parse publish_date (format: YYYYMMDD) to YYYY-MM-DD
    let dateStr = resource.date.split('T')[0]; // Default to WP post date
    if (resource.acf?.publish_date) {
        const pd = resource.acf.publish_date;
        if (pd.length === 8) {
            dateStr = `${pd.substring(0, 4)}-${pd.substring(4, 6)}-${pd.substring(6, 8)}`;
        }
    }

    // Strip HTML tags and decode entities from excerpt for description
    const excerpt = resource.excerpt?.rendered || '';
    const description = decodeHtmlEntities(excerpt).trim().substring(0, 200);

    // Decode title
    const title = decodeHtmlEntities(resource.title.rendered);

    // Determine URL logic:
    // 1. External URL (if provided) takes precedence for direct links
    // 2. Otherwise default to internal detail page /media/[slug]

    const externalUrl = resource.acf?.external_url;

    // For specific types, we might prefer external behavior, but for generic "news" or "articles", we want the detail page.
    let url = `/media/${resource.slug}`;

    if (externalUrl && externalUrl.trim() !== '') {
        url = externalUrl;
    }

    return {
        id: `wp-${resource.id}`,
        type: typeMap[mediaType] || 'news',
        title: title,
        description: description,
        date: dateStr,
        source: resource.acf?.source_name || undefined,
        category: category?.name,
        thumbnail: featuredImage || undefined,
        url: url,
        downloadUrl: downloadUrl || undefined,
        featured: false, // Can be enhanced later
        tags: category ? [category.name] : [],
    };
}

/**
 * Transform a WordPress Resource into a DownloadableResource
 */
export function wpResourceToDownloadable(resource: WPMediaItem): DownloadableResource {
    const featuredImage = getFeaturedImageUrl(resource);
    const downloadUrl = getFileDownloadUrl(resource);

    return {
        id: `wp-${resource.id}`,
        title: resource.title.rendered.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&amp;/g, "&"),
        description: (resource.excerpt?.rendered || '').replace(/<[^>]*>/g, '').trim().substring(0, 200),
        category: 'guide', // Default category
        fileType: 'PDF',
        thumbnail: featuredImage || '/placeholder-resource.jpg',
        downloadUrl: downloadUrl || undefined,
        viewUrl: resource.acf?.external_url || `/media/${resource.slug}`,
        featured: false,
        tags: [],
    };
}

/**
 * Fetch all resources from WordPress and transform to MediaItems
 */
export async function getWPMediaItems(categorySlug?: string): Promise<MediaItem[]> {
    const resources = await getResources(categorySlug);
    return resources.map(wpResourceToMediaItem);
}

/**
 * Fetch resources by category slug mapping
 * Maps frontend tab slugs to WordPress taxonomy slugs
 */
const categorySlugMap: Record<string, string | undefined> = {
    'all': undefined,
    'press': 'press-and-coverage',
    'news': 'news-and-announcement',
    'publications': 'publications',
    'videos': 'videos',
    'resources': 'downloadable-resources',
};

export async function getMediaByTab(tab: string): Promise<MediaItem[]> {
    const wpSlug = categorySlugMap[tab];
    return getWPMediaItems(wpSlug);
}

/**
 * Get all categories with their WordPress slugs
 */
export function getCategoryMapping() {
    return categorySlugMap;
}
