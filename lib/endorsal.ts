// lib/endorsal.ts - Endorsal API Integration

const ENDORSAL_API_KEY = process.env.ENDORSAL_API_KEY;
const ENDORSAL_PROPERTY_ID = '5e667d88afe81a4d5ed53c2c'; // Your Endorsal property ID

export interface EndorsalTestimonial {
    _id: string;
    name: string;
    email?: string;
    company?: string;
    position?: string; // Job title field
    avatar?: {
        url?: string;
        sizes?: {
            medium?: string;
            large?: string;
        };
    };
    rating?: number;
    comments: string; // This is the actual testimonial text field
    added?: number; // Timestamp
    source?: { platform?: string };
    featured?: number; // 1 = featured, 0 = not featured
    approved?: number; // 1 = approved, 0 = not approved
    tags?: string[];
}

export interface EndorsalResponse {
    success: boolean;
    data: EndorsalTestimonial[];
}

/**
 * Fetch all approved testimonials from Endorsal
 */
export async function getTestimonials(limit?: number): Promise<EndorsalTestimonial[]> {
    if (!ENDORSAL_API_KEY) {
        console.warn('ENDORSAL_API_KEY is not defined in environment variables.');
        return [];
    }

    try {
        const response = await fetch(
            `https://api.endorsal.io/v1/properties/${ENDORSAL_PROPERTY_ID}/testimonials`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${ENDORSAL_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            console.error(`Endorsal API error: ${response.status} ${response.statusText}`);
            return [];
        }

        const result: EndorsalResponse = await response.json();

        if (!result.success || !result.data) {
            console.warn('Endorsal API returned unsuccessful response');
            return [];
        }

        // Filter to only approved testimonials
        const approved = result.data.filter(t => t.approved === 1);

        return limit ? approved.slice(0, limit) : approved;
    } catch (error) {
        console.error('Error fetching testimonials from Endorsal:', error);
        return [];
    }
}

/**
 * Get featured testimonials (prioritized for homepage)
 */
export async function getFeaturedTestimonials(limit: number = 3): Promise<EndorsalTestimonial[]> {
    const testimonials = await getTestimonials();

    // Sort by featured first, then by rating, then by date
    const sorted = testimonials.sort((a, b) => {
        // Featured first
        if (a.featured === 1 && b.featured !== 1) return -1;
        if (a.featured !== 1 && b.featured === 1) return 1;

        // Then by rating (higher first)
        const ratingA = a.rating || 5;
        const ratingB = b.rating || 5;
        if (ratingB !== ratingA) return ratingB - ratingA;

        // Then by date (newer first)
        const dateA = a.added || 0;
        const dateB = b.added || 0;
        return dateB - dateA;
    });

    return sorted.slice(0, limit);
}
