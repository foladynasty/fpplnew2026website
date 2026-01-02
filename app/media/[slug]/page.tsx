import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink, Tag, Share2, Download } from 'lucide-react';
import { getResourceBySlug, getResources, getMediaType, getResourceCategory, getFeaturedImageUrl, getFileDownloadUrl, WPMediaItem } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

// Helper to decode HTML entities
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
        .replace(/&nbsp;/g, " ");
}

// Helper to format date
function formatDate(dateStr: string): string {
    if (!dateStr) return '';

    // Check if it's strictly YYYYMMDD (from ACF)
    if (dateStr.length === 8 && !dateStr.includes('-')) {
        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);
        return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Generate static params for all resources
export async function generateStaticParams() {
    try {
        const resources = await getResources(undefined, 100);
        return resources.map((resource) => ({
            slug: resource.slug,
        }));
    } catch (error) {
        console.warn('Failed to generate static params for resources:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const resource = await getResourceBySlug(slug);

    if (!resource) {
        return { title: 'Resource Not Found' };
    }

    const title = decodeHtmlEntities(resource.title.rendered);
    const excerpt = resource.excerpt?.rendered.replace(/<[^>]*>/g, '').substring(0, 160) || '';

    return {
        title: `${title} | Financial Perspectives`,
        description: excerpt,
    };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const resource = await getResourceBySlug(slug);

    if (!resource) {
        notFound();
    }

    // Get related resources (same category)
    const categoryInfo = getResourceCategory(resource);
    const categorySlug = categoryInfo?.slug;

    let relatedResources: WPMediaItem[] = [];
    if (categorySlug) {
        const allInCategory = await getResources(categorySlug, 6);
        relatedResources = allInCategory.filter(r => r.id !== resource.id).slice(0, 3);
    }

    // Extract Data
    const title = decodeHtmlEntities(resource.title.rendered);
    const date = resource.acf?.publish_date || resource.date;
    const author = resource.acf?.source_name || 'Financial Perspectives';
    const mediaType = getMediaType(resource);
    const featuredImage = getFeaturedImageUrl(resource);
    const downloadUrl = getFileDownloadUrl(resource);
    const externalUrl = resource.acf?.external_url;

    // Define colors based on media type for the Hero Background
    const typeColors: Record<string, { gradient: string, text: string }> = {
        'news': { gradient: 'from-teal to-teal-700', text: 'text-teal' },
        'press': { gradient: 'from-blue-600 to-blue-800', text: 'text-blue-600' },
        'publication': { gradient: 'from-primary-600 to-primary-800', text: 'text-primary-600' },
        'video': { gradient: 'from-red-600 to-red-800', text: 'text-red-600' },
        'resource': { gradient: 'from-slate-600 to-slate-800', text: 'text-slate-600' },
    };

    // Default to Teal if unknown
    const styles = typeColors[mediaType] || typeColors['news'];

    // Process content to fix WordPress legacy HTML
    let processedContent = resource.content.rendered;

    // 1. Remove fixed widths from tables
    processedContent = processedContent.replace(/width="[0-9]+"/g, '');
    processedContent = processedContent.replace(/style="[^"]*width:[^"]*"/g, '');

    // 2. Identify and style the CTA Table (Ready to Write Your Own Success Story)
    // We use index-based search to safely find the specific table without regex greediness
    const ctaMarker = "Ready to Write Your Own Success Story?";
    const ctaIndex = processedContent.indexOf(ctaMarker);

    if (ctaIndex !== -1) {
        const tableStartIndex = processedContent.lastIndexOf('<table', ctaIndex);
        const tableEndIndex = processedContent.indexOf('</table>', ctaIndex);

        if (tableStartIndex !== -1 && tableEndIndex !== -1) {
            const ctaHTML = processedContent.substring(tableStartIndex, tableEndIndex + 8);

            const newCTA = `
                <div class="bg-primary-50 border border-primary-100 rounded-xl p-8 my-10 text-center not-prose">
                    <h3 class="text-2xl font-bold text-primary mb-4">Ready to Write Your Own Success Story?</h3>
                    <p class="text-charcoal mb-6">Join the 20,000+ professionals who have advanced their careers with Singapore’s pioneer in CFP® education.</p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/cfp-certification-program" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all no-underline">
                            Explore CFP® Program
                        </a>
                         <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-primary-50 transition-all no-underline">
                            Speak with Advisor
                        </a>
                    </div>
                </div>
            `;

            processedContent = processedContent.replace(ctaHTML, newCTA);
        }
    }

    // 3. Clean up other tables to be responsive
    processedContent = processedContent.replace(
        /<table/g,
        '<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="w-full text-left border-collapse"'
    );
    processedContent = processedContent.replace(/<\/table>/g, '</table></div>');

    // 4. Style Table Headings
    processedContent = processedContent.replace(/<thead>/g, '<thead class="bg-gray-50 text-primary font-bold">');
    processedContent = processedContent.replace(/<td>/g, '<td class="p-4 border-t border-gray-100">');
    processedContent = processedContent.replace(/<td class="p-4 border-t border-gray-100"><strong>/g, '<td class="p-4 border-t border-gray-100 font-bold text-primary">');

    // 5. Convert [Link to: ...] text to actual links if any remain
    processedContent = processedContent.replace(/\[Link to: (.*?)\]/g, '');

    // 6. Style ALL content elements with explicit Tailwind classes (bypassing prose issues)
    // H2 Headings - Large, bold, primary color, good spacing
    processedContent = processedContent.replace(
        /<h2>/g,
        '<h2 class="text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 leading-tight font-display">'
    );
    processedContent = processedContent.replace(
        /<h2 /g,
        '<h2 class="text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 leading-tight font-display" '
    );

    // H3 Headings
    processedContent = processedContent.replace(
        /<h3>/g,
        '<h3 class="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 leading-tight font-display">'
    );
    processedContent = processedContent.replace(
        /<h3 /g,
        '<h3 class="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 leading-tight font-display" '
    );

    // H4 Headings
    processedContent = processedContent.replace(
        /<h4>/g,
        '<h4 class="text-xl md:text-2xl font-bold text-primary mt-8 mb-4 leading-tight font-display">'
    );

    // Paragraphs - Good size, relaxed spacing
    processedContent = processedContent.replace(
        /<p>/g,
        '<p class="text-lg text-charcoal leading-8 mb-6">'
    );
    processedContent = processedContent.replace(
        /<p /g,
        '<p class="text-lg text-charcoal leading-8 mb-6" '
    );

    // Unordered Lists
    processedContent = processedContent.replace(
        /<ul>/g,
        '<ul class="list-disc list-inside space-y-3 my-6 text-lg text-charcoal pl-4">'
    );

    // List Items with gold bullets
    processedContent = processedContent.replace(
        /<li>/g,
        '<li class="text-lg text-charcoal leading-8 marker:text-gold">'
    );
    processedContent = processedContent.replace(
        /<li /g,
        '<li class="text-lg text-charcoal leading-8 marker:text-gold" '
    );

    // Links - Teal color, bold
    processedContent = processedContent.replace(
        /<a href/g,
        '<a class="text-teal font-semibold hover:text-teal-700 hover:underline transition-colors" href'
    );

    // Blockquotes - Styled with gold border
    processedContent = processedContent.replace(
        /<blockquote>/g,
        '<blockquote class="border-l-4 border-gold bg-gray-50 py-6 px-8 my-10 italic text-xl text-charcoal rounded-r-lg">'
    );

    // Strong/Bold text - Primary color for emphasis
    processedContent = processedContent.replace(
        /<strong>/g,
        '<strong class="font-bold text-primary">'
    );

    // Emphasis/Italic
    processedContent = processedContent.replace(
        /<em>/g,
        '<em class="italic text-charcoal">'
    );

    return (
        <main className="min-h-screen bg-cool-gray">
            <Header />

            {/* Hero / Header Section - Styled like Events Page */}
            <section className={`bg-gradient-to-r ${styles.gradient} text-white py-12 mt-28 lg:mt-32`}>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <Link href="/media" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Media & Resources
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide border border-white/30">
                                {mediaType}
                            </span>
                            {categoryInfo && (
                                <span className="text-white/90 text-sm flex items-center gap-1 font-medium bg-white/10 px-3 py-1 rounded-full">
                                    <Tag className="w-3 h-3" />
                                    {categoryInfo.name}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-white/90 border-t border-white/20 pt-6 mt-6">
                            <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg">
                                <Calendar className="w-4 h-4 text-gold" />
                                <span className="font-medium">{formatDate(date)}</span>
                            </div>
                            {author && (
                                <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg">
                                    <User className="w-4 h-4 text-gold" />
                                    <span className="font-medium">{author}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">
                            <article className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                                {featuredImage && (
                                    <img
                                        src={featuredImage}
                                        alt={title}
                                        className="w-full h-auto rounded-lg mb-8 object-cover max-h-[500px]"
                                    />
                                )}

                                {/* WordPress Content Body */}
                                <div
                                    className="prose prose-lg max-w-none 
                                    font-sans
                                    text-charcoal
                                    prose-headings:font-display prose-headings:text-primary prose-headings:font-bold
                                    
                                    /* H1 is handled by the hero, so we focus on H2/H3 for content */
                                    prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
                                    prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
                                    prose-h4:text-xl sm:prose-h4:text-2xl prose-h4:mt-8 prose-h4:mb-4
                                    
                                    prose-p:text-lg prose-p:leading-8 prose-p:text-charcoal prose-p:mb-8
                                    
                                    prose-a:text-teal prose-a:font-semibold prose-a:no-underline hover:prose-a:text-teal-700 hover:prose-a:underline
                                    
                                    prose-li:text-lg prose-li:leading-8 prose-li:text-charcoal prose-li:marker:text-gold prose-li:mb-2
                                    
                                    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-10
                                    
                                    prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-gray-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:leading-relaxed prose-blockquote:text-charcoal prose-blockquote:my-10"
                                    dangerouslySetInnerHTML={{ __html: processedContent }}
                                />

                                {/* Action Buttons */}
                                <div className="mt-12 flex flex-wrap gap-4 border-t border-gray-100 pt-8">
                                    {downloadUrl && (
                                        <a
                                            href={downloadUrl}
                                            download
                                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download Resource
                                        </a>
                                    )}
                                    {externalUrl && (
                                        <a
                                            href={externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                        >
                                            Visit Link
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1 space-y-8">
                            {/* Share Widget */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Share this
                                </h3>
                                <div className="flex gap-2">
                                    {/* Add real share links if needed */}
                                    <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm font-medium">Facebook</button>
                                    <button className="flex-1 bg-sky-500 text-white py-2 rounded hover:bg-sky-600 text-sm font-medium">Twitter</button>
                                    <button className="flex-1 bg-blue-800 text-white py-2 rounded hover:bg-blue-900 text-sm font-medium">LinkedIn</button>
                                </div>
                            </div>

                            {/* Related Resources */}
                            {relatedResources.length > 0 && (
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h3 className="font-bold text-primary mb-4">Related {categoryInfo?.name || 'Content'}</h3>
                                    <div className="space-y-4">
                                        {relatedResources.map((rel) => (
                                            <Link
                                                key={rel.id}
                                                href={`/media/${rel.slug}`}
                                                className="block group"
                                            >
                                                <h4 className="font-semibold text-charcoal group-hover:text-teal transition-colors line-clamp-2 mb-1">
                                                    {decodeHtmlEntities(rel.title.rendered)}
                                                </h4>
                                                <span className="text-xs text-slate-gray">
                                                    {formatDate(rel.acf?.publish_date || rel.date)}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Newsletter CTA */}
                            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white text-center">
                                <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                                <p className="text-white/80 text-sm mb-4">Get the latest financial insights delivered to your inbox.</p>
                                <Link href="/contact" className="inline-block w-full bg-white text-primary font-bold py-2 rounded hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </Link>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
