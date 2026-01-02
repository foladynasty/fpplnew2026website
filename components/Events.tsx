import { Calendar, MapPin, ArrowRight, Clock, Award } from 'lucide-react';
import { getUpcomingEvents, WPEvent } from '@/lib/wordpress';
import { formatEventDate, getStatusBadge, CourseEvent } from '@/lib/events-content';
import Link from 'next/link';

// Helper to map WP Event to UI Event (same as events page)
function mapWPEventToUI(wpEvent: WPEvent): CourseEvent {
  const acf = wpEvent.acf || {};

  // Determine Category safely
  let category: 'CFP' | 'CPD' | 'SCFP-HNWI' | 'Webinar' = 'CFP';
  const terms = wpEvent._embedded?.['wp:term']?.flat() || [];
  const catTerm = terms.find((t: any) => t.taxonomy === 'event_category');

  if (catTerm) {
    if (catTerm.slug === 'cfp-courses-events') category = 'CFP';
    else if (catTerm.name.includes('CFP')) category = 'CFP';
    else if (catTerm.name.includes('CPD') || catTerm.slug.includes('cpd')) category = 'CPD';
    else if (catTerm.name.includes('SCFP') || catTerm.slug.includes('scfp')) category = 'SCFP-HNWI';
    else if (catTerm.name.includes('Webinar') || catTerm.slug.includes('webinar')) category = 'Webinar';
  }

  return {
    id: String(wpEvent.id),
    type: 'cfp-full',
    title: wpEvent.title.rendered,
    subtitle: category === 'CFP' ? 'CFP® Certification Program' :
      category === 'CPD' ? 'Continuing Professional Development' :
        category === 'SCFP-HNWI' ? 'HNWI Advisory Certification' : 'Professional Development',
    category: category,
    startDate: acf.start_date || acf.event_date || new Date().toISOString(),
    endDate: acf.end_date,
    time: acf.end_date ? 'Multiple Sessions' : '9:00 AM - 5:00 PM',
    duration: acf.end_date ? 'Multi-day Session' : '1 Day',
    location: acf.location || 'High Street Centre',
    format: 'In-Person',
    seatsTotal: 50,
    seatsAvailable: 50,
    status: 'available',
    price: 'Contact for Pricing',
    fundingAvailable: true,
    highlights: ['IBF-STS Funding Available', 'Expert Trainers', 'Comprehensive Materials'],
    detailsUrl: `/events/${wpEvent.slug}`,
    registerUrl: acf.registration_link || `https://wa.me/6581117890`,
    color: { primary: '#003B73', gradient: 'from-primary-600 to-primary-700', badge: 'bg-primary-600' }
  };
}

// Get featured events - balanced selection from each category
function getFeaturedEvents(allEvents: CourseEvent[]): CourseEvent[] {
  const cfpEvents = allEvents.filter(e => e.category === 'CFP').slice(0, 2);
  const cpdEvents = allEvents.filter(e => e.category === 'CPD').slice(0, 2);
  const scfpEvents = allEvents.filter(e => e.category === 'SCFP-HNWI' || e.category === 'Webinar').slice(0, 2);

  return [...cfpEvents, ...cpdEvents, ...scfpEvents];
}

// Category styling configuration
const categoryStyles: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  'CFP': {
    bg: 'bg-primary-50',
    text: 'text-primary-700',
    border: 'border-primary-200',
    gradient: 'from-primary-600 to-primary-700'
  },
  'CPD': {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    gradient: 'from-purple-500 to-pink-600'
  },
  'SCFP-HNWI': {
    bg: 'bg-gold/10',
    text: 'text-gold',
    border: 'border-gold/30',
    gradient: 'from-purple-600 to-purple-700'
  },
  'Webinar': {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    gradient: 'from-emerald-500 to-teal-600'
  }
};

export default async function Events() {
  // Fetch from WordPress
  const wpEvents = await getUpcomingEvents();

  // Map to UI format
  const allEvents = wpEvents.length > 0 ? wpEvents.map(mapWPEventToUI) : [];

  // Get balanced featured events (2 from each category)
  const featuredEvents = getFeaturedEvents(allEvents);

  if (featuredEvents.length === 0) {
    return null; // Don't show section if no WP events
  }

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Upcoming Courses & Events
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Join Our Next Session
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these featured courses. Register early to secure your spot and invest in your professional growth.
            </p>
          </div>

          {/* Featured Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredEvents.map((event) => {
              const statusBadge = getStatusBadge(event.status);
              const eventDate = formatEventDate(event.startDate);
              const style = categoryStyles[event.category] || categoryStyles['CFP'];

              return (
                <div
                  key={event.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
                >
                  {/* Category Color Bar */}
                  <div className={`h-2 bg-gradient-to-r ${style.gradient}`} />

                  {/* Status Badge */}
                  <div className={`${statusBadge.color} text-xs font-bold px-4 py-2.5 text-center border-b flex items-center justify-center gap-2`}>
                    <span>{statusBadge.text}</span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${style.bg} ${style.text} ${style.border} border text-xs font-bold px-3 py-1.5 rounded-full`}>
                        {event.category}
                      </span>
                      {event.cpdHours && (
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          {event.cpdHours.replace(' CPD Hours', ' hrs').replace(' Supplementary CPD Hours', ' hrs')}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: event.title }}
                    />

                    {event.subtitle && (
                      <p className="text-sm text-gray-500 mb-4">{event.subtitle}</p>
                    )}

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${style.bg}`}>
                          <Calendar className={`w-4 h-4 ${style.text}`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{eventDate}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${style.bg}`}>
                          <MapPin className={`w-4 h-4 ${style.text}`} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">{event.location}</p>
                          <p className="text-xs text-gray-500">{event.format}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${style.bg}`}>
                          <Clock className={`w-4 h-4 ${style.text}`} />
                        </div>
                        <p className="text-sm text-gray-700">{event.duration}</p>
                      </div>
                    </div>

                    {/* Funding Badge */}
                    {event.fundingAvailable && (
                      <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        IBF Funding Available
                      </p>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={event.registerUrl || event.detailsUrl}
                      target={event.registerUrl?.startsWith('http') ? '_blank' : undefined}
                      className={`block w-full text-center bg-gradient-to-r ${style.gradient} hover:opacity-90 text-white px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
                    >
                      {event.status === 'coming-soon' ? 'Register Interest' : event.category === 'CFP' ? 'Enroll Now' : 'Register Now'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="text-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              View Full Course Schedule
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Browse all upcoming courses, workshops, and certification programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
