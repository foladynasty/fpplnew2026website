import Link from 'next/link';
import { getUpcomingEvents } from '@/lib/wordpress';

export default async function EventsList() {
    const events = await getUpcomingEvents();

    if (events.length === 0) {
        return (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-500">No upcoming events found.</p>
                <p className="text-sm text-gray-400 mt-2">Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
                const imageUrl = event._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const eventDate = event.acf?.event_date ? new Date(event.acf.event_date) : new Date(event.date);

                return (
                    <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                        <div className="h-48 bg-gray-200 relative">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={event.title.rendered}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-indigo-50 flex items-center justify-center text-indigo-200">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                            )}

                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 shadow-sm">
                                {eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: event.title.rendered }} />

                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                {eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                            </div>

                            {/* Using dangerouslySetInnerHTML for content from WP, be careful with XSS if not trusted source */}
                            <div className="text-gray-600 mb-6 flex-grow line-clamp-3 text-sm" dangerouslySetInnerHTML={{ __html: event.content.rendered }} />

                            {event.acf?.registration_link ? (
                                <Link
                                    href={event.acf.registration_link}
                                    target="_blank"
                                    className="block w-full text-center bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Register Now
                                </Link>
                            ) : (
                                <button disabled className="block w-full text-center bg-gray-100 text-gray-400 font-medium py-2.5 rounded-lg cursor-not-allowed">
                                    Details Coming Soon
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
