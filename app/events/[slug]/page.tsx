import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, ArrowLeft, ArrowRight, ExternalLink, Users, Award } from 'lucide-react';

// Types
interface WPEvent {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    acf?: {
        start_date?: string;
        end_date?: string;
        location?: string;
        registration_link?: string;
    };
    _embedded?: {
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
    };
}

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://fppl.fp-edu.com';

// Helper to format date
function formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Helper to get category from event
function getEventCategory(event: WPEvent): string {
    const terms = event._embedded?.['wp:term']?.flat() || [];
    const catTerm = terms.find((t) => t.taxonomy === 'event_category');
    if (catTerm) {
        if (catTerm.slug.includes('cfp')) return 'CFP';
        if (catTerm.slug.includes('cpd')) return 'CPD';
        if (catTerm.slug.includes('scfp')) return 'SCFP-HNWI';
        if (catTerm.slug.includes('webinar')) return 'Webinar';
    }
    return 'CFP'; // Default
}

// Generate static params for all events
export async function generateStaticParams() {
    try {
        const res = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/events?per_page=100`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        if (!res.ok) return [];

        const events = await res.json() as WPEvent[];
        return events.map((event) => ({
            slug: event.slug,
        }));
    } catch (error) {
        console.warn('Failed to generate static params for events:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const res = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/events?slug=${slug}&_embed`);
        if (!res.ok) return { title: 'Event Not Found' };

        const events = await res.json() as WPEvent[];
        if (!events.length) return { title: 'Event Not Found' };

        const event = events[0];
        return {
            title: `${event.title.rendered.replace(/<[^>]*>/g, '')} | Financial Perspectives`,
            description: `View the full schedule for ${event.title.rendered.replace(/<[^>]*>/g, '')}. IBF-approved course with funding available.`,
        };
    } catch {
        return { title: 'Event | Financial Perspectives' };
    }
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch the current event
    let event: WPEvent | null = null;
    let relatedEvents: WPEvent[] = [];

    try {
        // Fetch current event - cache for 1 hour to reduce API calls
        const eventRes = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/events?slug=${slug}&_embed`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (eventRes.ok) {
            const events = await eventRes.json() as WPEvent[];
            if (events.length) {
                event = events[0];

                // Get related events in the same category - also cached for 1 hour
                const category = getEventCategory(event);
                const allEventsRes = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/events?_embed&per_page=20`, {
                    next: { revalidate: 3600 } // Cache for 1 hour
                });

                if (allEventsRes.ok) {
                    const allEvents = await allEventsRes.json() as WPEvent[];
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    relatedEvents = allEvents.filter((e) => {
                        if (e.slug === slug) return false;
                        if (getEventCategory(e) !== category) return false;

                        const dateStr = e.acf?.start_date || e.acf?.end_date;
                        if (dateStr) {
                            const eventDate = new Date(dateStr);
                            eventDate.setHours(0, 0, 0, 0);
                            if (eventDate < today) return false;
                        }
                        return true;
                    }).sort((a, b) => {
                        const dateA = a.acf?.start_date ? new Date(a.acf.start_date).getTime() : 0;
                        const dateB = b.acf?.start_date ? new Date(b.acf.start_date).getTime() : 0;
                        return dateA - dateB;
                    }).slice(0, 5);
                }
            }
        }
    } catch (error) {
        console.error('Error fetching event:', error);
    }

    // Not found state
    if (!event) {
        return (
            <main className="min-h-screen bg-white">
                <Header />
                <div className="pt-40 pb-20 container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-primary mb-4">Event Not Found</h1>
                    <p className="text-slate-gray mb-8">The event you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <Link href="/events" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to All Events
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const category = getEventCategory(event);
    const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
        'CFP': { bg: 'bg-primary-600', text: 'text-primary-600', gradient: 'from-primary-600 to-primary-700' },
        'CPD': { bg: 'bg-teal', text: 'text-teal', gradient: 'from-teal to-teal-600' },
        'SCFP-HNWI': { bg: 'bg-purple-600', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-700' },
        'Webinar': { bg: 'bg-orange-500', text: 'text-orange-500', gradient: 'from-orange-500 to-orange-600' },
    };
    const colors = categoryColors[category] || categoryColors['CFP'];

    return (
        <main className="min-h-screen bg-cool-gray">
            <Header />

            {/* Hero Banner */}
            <section className={`bg-gradient-to-r ${colors.gradient} text-white py-12 mt-28 lg:mt-32`}>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <Link href="/events" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Events
                        </Link>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">{category}</span>
                            {event.acf?.end_date && (
                                <span className="bg-gold/90 text-white px-3 py-1 rounded-full text-sm font-semibold">Multi-day Course</span>
                            )}
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: event.title.rendered }} />

                        <div className="flex flex-wrap gap-6 text-white/90 mt-6">
                            {event.acf?.start_date && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>
                                        {formatDate(event.acf.start_date)}
                                        {event.acf.end_date && ` - ${formatDate(event.acf.end_date)}`}
                                    </span>
                                </div>
                            )}
                            {event.acf?.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    <span>{event.acf.location}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8">

                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-xl shadow-lg p-8">
                                    <h2 className="text-2xl font-bold text-primary mb-6">Course Schedule & Details</h2>

                                    {/* WordPress Content */}
                                    <div
                                        className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-teal hover:prose-a:text-teal-600 prose-table:border-collapse prose-th:bg-primary-50 prose-th:p-3 prose-td:p-3 prose-td:border prose-th:border prose-table:w-full"
                                        dangerouslySetInnerHTML={{ __html: event.content.rendered }}
                                    />

                                    {/* Registration CTA */}
                                    <div className="mt-10 pt-8 border-t border-gray-200">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            {event.acf?.registration_link ? (
                                                <a
                                                    href={event.acf.registration_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all`}
                                                >
                                                    Register Now
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            ) : (
                                                <a
                                                    href="https://wa.me/6581117890"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all`}
                                                >
                                                    Contact to Register
                                                    <ArrowRight className="w-5 h-5" />
                                                </a>
                                            )}
                                            <a
                                                href="https://wa.me/6581117890"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                                            >
                                                WhatsApp Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar - Related Modules */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-40">
                                    <h3 className={`text-lg font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                                        <Award className="w-5 h-5" />
                                        Other {category} Modules
                                    </h3>

                                    {relatedEvents.length > 0 ? (
                                        <ul className="space-y-3">
                                            {relatedEvents.map((relEvent) => (
                                                <li key={relEvent.id}>
                                                    <Link
                                                        href={`/events/${relEvent.slug}`}
                                                        className="block p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
                                                    >
                                                        <h4
                                                            className="font-semibold text-charcoal group-hover:text-primary transition-colors text-sm line-clamp-2"
                                                            dangerouslySetInnerHTML={{ __html: relEvent.title.rendered }}
                                                        />
                                                        {relEvent.acf?.start_date && (
                                                            <p className="text-xs text-slate-gray mt-1 flex items-center gap-1">
                                                                <Calendar className="w-3 h-3" />
                                                                {formatDate(relEvent.acf.start_date)}
                                                            </p>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-slate-gray">No other upcoming {category} modules at this time.</p>
                                    )}

                                    <div className="mt-6 pt-4 border-t border-gray-200">
                                        <Link
                                            href="/events"
                                            className={`inline-flex items-center gap-2 ${colors.text} text-sm font-semibold hover:underline`}
                                        >
                                            View All Upcoming Courses
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                    {/* Quick Info Box */}
                                    <div className="mt-6 bg-cool-gray rounded-lg p-4">
                                        <h4 className="font-semibold text-charcoal text-sm mb-3">Quick Info</h4>
                                        <ul className="space-y-2 text-sm text-charcoal">
                                            <li className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gold" />
                                                Limited seats available
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Award className="w-4 h-4 text-gold" />
                                                IBF-STS Funding Eligible
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-gold" />
                                                Early registration recommended
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Download Schedule CTA - Only for CFP */}
                                    {category === 'CFP' && (
                                        <div className="mt-6 bg-primary-50 border border-primary-200 rounded-lg p-4">
                                            <h4 className="font-semibold text-primary text-sm mb-2">📅 77th Intake Schedule</h4>
                                            <p className="text-xs text-charcoal mb-3">Download the complete 77th Intake lecture schedule (Aug 2026 Exam).</p>
                                            <a
                                                href="/downloads/cfp-course-schedule.pdf"
                                                download
                                                className="inline-flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Download Schedule (PDF)
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
