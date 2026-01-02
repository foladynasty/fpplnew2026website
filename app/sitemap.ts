import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fp-edu.com'

    // Core pages
    const routes = [
        '',
        '/about',
        '/cfp',
        '/scfp-hnwi',
        '/cpd',
        '/cpd/master-fund-advisor',
        '/cpd/aum-growth',
        '/cpd/ilp-sales-masterclass',
        '/cpd/estate-legacy-planning',
        '/events',
        '/media',
        '/testimonials',
        '/contact',
        // SCFP Modules
        '/scfp-hnwi/advising-hnw-individuals',
        '/scfp-hnwi/customer-onboarding-ethics',
        '/scfp-hnwi/financial-planning-sme',
        '/scfp-hnwi/gig-economy-planning',
        '/scfp-hnwi/products-structures',
        '/scfp-hnwi/retirement-planning-hnw',
        '/scfp-hnwi/segmentation-targeting',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.includes('/scfp-hnwi/') ? 0.6 : 0.8,
    }))
}
