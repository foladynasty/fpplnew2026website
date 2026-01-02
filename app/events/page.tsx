import Link from 'next/link';
import { Calendar, Clock, MapPin, Award, Users, DollarSign, ArrowRight, Bell, Sparkles, TrendingUp, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getUpcomingEvents as getStaticEvents, formatEventDate, getStatusBadge, CourseEvent, getEventsByCategory } from '@/lib/events-content';
import { getUpcomingEvents } from '@/lib/wordpress';

export const metadata = {
  title: 'Financial Perspectives | Upcoming Events & Course Calendar',
  description: 'Plan ahead. Secure your spot. Browse our complete schedule of CFP® certification courses, CPD programs, and upcoming SCFP-HNWI launch events.',
};

// Helper to map WP Event to UI Event
function mapWPEventToUI(wpEvent: any): CourseEvent {
  const acf = wpEvent.acf || {};

  // Determine Category safely
  let category: 'CFP' | 'CPD' | 'SCFP-HNWI' | 'Webinar' = 'CFP';
  const terms = wpEvent._embedded?.['wp:term']?.flat() || [];
  const catTerm = terms.find((t: any) => t.taxonomy === 'event_category');

  // Debug log to see what WP is returning
  if (terms.length > 0) console.log('Event Terms:', JSON.stringify(terms, null, 2));

  if (catTerm) {
    // Exact slug match (User provided)
    if (catTerm.slug === 'cfp-courses-events') category = 'CFP';
    // Fallback fuzzy matching
    else if (catTerm.name.includes('CFP')) category = 'CFP';
    else if (catTerm.name.includes('CPD') || catTerm.slug.includes('cpd')) category = 'CPD';
    else if (catTerm.name.includes('SCFP') || catTerm.slug.includes('scfp')) category = 'SCFP-HNWI';
    else if (catTerm.name.includes('Webinar') || catTerm.slug.includes('webinar')) category = 'Webinar';
  }

  return {
    id: String(wpEvent.id),
    type: 'cfp-full', // Default type, styling handled by category logic
    title: wpEvent.title.rendered,
    subtitle: category === 'CFP' ? 'CFP® Certification Program' :
      category === 'CPD' ? 'Continuing Professional Development' :
        category === 'SCFP-HNWI' ? 'HNWI Advisory Certification' : 'Professional Development',
    category: category,
    startDate: acf.start_date || acf.event_date || new Date().toISOString(),
    endDate: acf.end_date,
    time: acf.end_date ? 'Multiple Sessions' : '9:00 AM - 5:00 PM', // Show "Multiple Sessions" for multi-day events
    duration: acf.end_date ? 'Multi-day Session' : '1 Day',
    location: acf.location || 'High Street Centre',
    format: 'In-Person',
    seatsTotal: 50,
    seatsAvailable: 50, // Default open
    status: 'available',
    price: 'Contact for Pricing',
    fundingAvailable: true,
    highlights: ['IBF-STS Funding Available', 'Expert Trainers', 'Comprehensive Materials'],
    detailsUrl: `/events/${wpEvent.slug}`, // Always link to internal detail page
    registerUrl: acf.registration_link || `https://wa.me/6581117890`, // External registration or WhatsApp
    color: { primary: '#003B73', gradient: 'from-primary-600 to-primary-700', badge: 'bg-primary-600' }
  };
}

export default async function EventsPage({
  searchParams
}: {
  searchParams: Promise<{ filter?: string }>
}) {
  const params = await searchParams;
  const activeFilter = params?.filter || 'all';

  // Fetch from WordPress
  const wpEvents = await getUpcomingEvents();

  // Map to UI or fallback to static if empty/error
  const allEvents = wpEvents.length > 0
    ? wpEvents.map(mapWPEventToUI)
    : []; // If WP is empty, show empty state instead of static fallback to avoid confusion

  // Filter for Sections
  const cfpEvents = allEvents.filter(e => e.category === 'CFP');
  const cpdEvents = allEvents.filter(e => e.category === 'CPD');
  const scfpEvents = allEvents.filter(e => e.category === 'SCFP-HNWI' || e.category === 'Webinar');

  // Determine which sections to show based on filter
  const showCFP = activeFilter === 'all' || activeFilter === 'cfp';
  const showCPD = activeFilter === 'all' || activeFilter === 'cpd';
  const showSCFP = activeFilter === 'all' || activeFilter === 'scfp';

  const EventCard = ({ event }: { event: CourseEvent }) => {
    const statusBadge = getStatusBadge(event.status);
    const eventDate = formatEventDate(event.startDate);

    // Determine gradient based on category or type (simplified logic mirroring the design)
    let headerGradient = 'from-primary-600 to-primary-700'; // Default Blue (CFP)
    let headerHoverColor = 'group-hover:text-teal'; // Default Hover

    if (event.category === 'CPD') {
      headerGradient = 'from-purple-500 to-pink-600'; // Generic CPD Gradient
      // Add specific logic if we map 'type' from WP later
    } else if (event.category === 'SCFP-HNWI' || event.category === 'Webinar') {
      headerGradient = 'from-purple-600 to-purple-700';
    }

    return (
      <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary/20 group h-full flex flex-col`}>
        <div className={`bg-gradient-to-r ${headerGradient} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm">{event.category === 'Webinar' ? 'Webinar' : event.category}</span>
            <span className={`${statusBadge.color} px-3 py-1 rounded-full text-xs font-semibold border`}>
              {statusBadge.text}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className={`text-xl font-bold text-primary mb-2 ${headerHoverColor} transition-colors`} dangerouslySetInnerHTML={{ __html: event.title }} />
          <p className="text-sm text-slate-gray mb-4">{event.subtitle}</p>

          <div className="space-y-3 mb-5 flex-grow">
            {/* Date */}
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <span className="font-semibold text-charcoal">
                  {eventDate}{event.endDate ? ` - ${formatEventDate(event.endDate)}` : ''}
                </span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal">{event.time}</span>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal">{event.location} • {event.format}</span>
            </div>

            {/* Duration / CPD Hours */}
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal">{event.duration || event.cpdHours}</span>
            </div>

            {/* Seats */}
            {event.seatsTotal && (
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal">{event.seatsAvailable} of {event.seatsTotal} seats available</span>
              </div>
            )}

            {/* Pricing */}
            <div className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <span className="text-charcoal">{event.price}</span>
                {event.earlyBirdPrice && <span className="block text-green-600 font-semibold">{event.earlyBirdPrice}</span>}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-cool-gray rounded-lg p-4 mb-5">
            <p className="text-xs font-semibold text-primary mb-2">Key Highlights:</p>
            <ul className="space-y-1">
              {event.highlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-charcoal">
                  <span className="text-teal mt-0.5">•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Funding Tag */}
          {event.fundingAvailable && (
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">💰 IBF Funding Available</span>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 mt-auto">
            <Link
              href={event.registerUrl || '#'}
              target={event.registerUrl?.startsWith('http') ? '_blank' : undefined}
              className={`flex items-center justify-center gap-2 bg-gradient-to-r ${headerGradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200`}
            >
              {event.status === 'coming-soon' ? 'Register Interest' : 'Register Now'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={event.detailsUrl || '#'} className="text-center text-teal hover:text-teal-700 text-sm font-semibold">
              {event.endDate ? 'See Full Schedule →' : 'View Course Details →'}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-teal text-white py-20 lg:py-28 mt-28 lg:mt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-semibold">2025-2026 Course Schedule</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Upcoming Events & Course Calendar</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl">Plan ahead. Secure your spot. Transform your career.</p>
            <p className="text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
              Browse our complete schedule of CFP® certification courses, CPD programs, and upcoming SCFP-HNWI launch events. Early registration recommended for best availability and early bird pricing.
            </p>

            {/* Filter Tabs - Click to filter events */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 inline-flex flex-wrap gap-2">
              <a
                href="/events"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${activeFilter === 'all' ? 'bg-white text-primary shadow-lg' : 'text-white hover:bg-white/20 bg-white/10'}`}
              >
                All Events<span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeFilter === 'all' ? 'bg-primary/10 text-primary' : 'bg-white/20'}`}>{allEvents.length}</span>
              </a>
              <a
                href="/events?filter=cfp"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${activeFilter === 'cfp' ? 'bg-white text-primary shadow-lg' : 'text-white hover:bg-white/20 bg-white/10'}`}
              >
                CFP Courses<span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeFilter === 'cfp' ? 'bg-primary/10 text-primary' : 'bg-white/20'}`}>{cfpEvents.length}</span>
              </a>
              <a
                href="/events?filter=cpd"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${activeFilter === 'cpd' ? 'bg-white text-primary shadow-lg' : 'text-white hover:bg-white/20 bg-white/10'}`}
              >
                CPD Courses<span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeFilter === 'cpd' ? 'bg-primary/10 text-primary' : 'bg-white/20'}`}>{cpdEvents.length}</span>
              </a>
              <a
                href="/events?filter=scfp"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${activeFilter === 'scfp' ? 'bg-white text-primary shadow-lg' : 'text-white hover:bg-white/20 bg-white/10'}`}
              >
                SCFP-HNWI<span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeFilter === 'scfp' ? 'bg-primary/10 text-primary' : 'bg-white/20'}`}>{scfpEvents.length}</span>
              </a>
            </div>

            {/* Legend */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-400 rounded-full"></span><span>Available Seats</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-400 rounded-full"></span><span>Filling Fast</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full"></span><span>Coming Soon</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full"></span><span>Waitlist</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Status */}
      <section id="all-events" className="bg-white border-b border-border-gray py-6 sticky top-32 z-40 shadow-sm scroll-mt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-charcoal">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold">
                Showing {activeFilter === 'cfp' ? cfpEvents.length : activeFilter === 'cpd' ? cpdEvents.length : activeFilter === 'scfp' ? scfpEvents.length : allEvents.length}
                {activeFilter === 'cfp' ? ' CFP Courses' : activeFilter === 'cpd' ? ' CPD Courses' : activeFilter === 'scfp' ? ' SCFP-HNWI Events' : ' Upcoming Events'}
              </span>
            </div>
            <div className="flex gap-3">
              <a href="#newsletter" className="inline-flex items-center gap-2 bg-cool-gray hover:bg-gray-200 text-charcoal px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Bell className="w-4 h-4" />
                Get Notifications
              </a>
              <a href="https://wa.me/6581117890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CFP Section */}
      {showCFP && (
        <section id="cfp-section" className="py-16 bg-white scroll-mt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-600 p-3 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary">CFP® Certification Schedule</h2>
                    <p className="text-slate-gray">AFP<sup className="">CM</sup> → AWP<sup className="">CM</sup> → CFP® | Singapore&apos;s #1 CFP® Provider</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gold to-amber-500 text-white px-5 py-3 rounded-xl shadow-lg">
                  <p className="text-xs font-medium opacity-90">Current Intake</p>
                  <p className="text-lg font-bold">77th Intake — Aug 2026 Exam</p>
                </div>
              </div>

              <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-primary mb-2">About CFP® Certification</h3>
                <p className="text-charcoal text-sm leading-relaxed mb-3">
                  The CFP® certification is the global gold standard for financial planning professionals. Our three-stage pathway (AFP<sup className="">CM</sup> → AWP<sup className="">CM</sup> → CFP®) is recognized worldwide and has been trusted by over 20,000 professionals in Singapore.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>FPSB-Certified Partner</span></div>
                  <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>26 Years of Excellence</span></div>
                  <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>IBF-STS Funding Available</span></div>
                  <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>Flexible Learning Options</span></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cfpEvents.length > 0 ? (
                  cfpEvents.map(event => <EventCard key={event.id} event={event} />)
                ) : (
                  <div className="col-span-full py-12 text-center text-slate-gray bg-gray-50 rounded-lg">
                    <p>No upcoming CFP courses currently scheduled.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 text-center bg-cool-gray rounded-xl p-6">
                <p className="text-charcoal mb-4"><strong>Not sure which level to start?</strong> Take our quick assessment or speak with our advisors.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/cfp#enrollment" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Learn More About CFP® Pathway
                  </a>
                  <a
                    href="/downloads/cfp-course-schedule.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download 77th Intake Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CPD Section */}
      {showCPD && (
        <section id="cpd-section" className="py-16 bg-cool-gray scroll-mt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal p-3 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">CPD Course Calendar</h2>
                  <p className="text-slate-gray">Continuing Professional Development | Stay Sharp, Stay Relevant</p>
                </div>
              </div>

              <div className="bg-white border-2 border-teal/20 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-primary mb-2">About Our CPD Courses</h3>
                <p className="text-charcoal text-sm leading-relaxed mb-3">
                  Practical, focused training designed for immediate impact. All courses are IBF-approved with CPD hours awarded. Perfect for practicing professionals who refuse to stand still.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2"><span className="text-teal">✓</span><span>100% IBF-Approved</span></div>
                  <div className="flex items-center gap-2"><span className="text-teal">✓</span><span>Practical Application</span></div>
                  <div className="flex items-center gap-2"><span className="text-teal">✓</span><span>Expert Trainers</span></div>
                  <div className="flex items-center gap-2"><span className="text-teal">✓</span><span>Funding Support Available</span></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {cpdEvents.length > 0 ? (
                  cpdEvents.map(event => <EventCard key={event.id} event={event} />)
                ) : (
                  <div className="col-span-full py-12 text-center text-slate-gray bg-gray-50 rounded-lg">
                    <p>No upcoming CPD courses currently scheduled.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 text-center bg-white rounded-xl p-6">
                <p className="text-charcoal mb-3"><strong>Can't find the course you need?</strong> We offer custom corporate training solutions.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/cpd" className="inline-block bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Explore All CPD Courses</a>
                  <a href="https://wa.me/6581117890" target="_blank" rel="noopener noreferrer" className="inline-block bg-white border-2 border-teal text-teal hover:bg-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SCFP-HNWI Section */}
      {showSCFP && (
        <section id="scfp-section" className="py-16 bg-gradient-to-br from-purple-50 to-purple-100 scroll-mt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">SCFP-HNWI Program<span className="ml-3 text-sm bg-purple-600 text-white px-3 py-1 rounded-full">NEW 2026</span></h2>
                  <p className="text-slate-gray">Master HNWI Advisory | Launching Q1 2026</p>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-8 mb-8 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-purple-600 text-xl mb-3">The Future of HNWI Advisory Excellence</h3>
                    <p className="text-charcoal leading-relaxed mb-4">
                      Singapore's first specialized certification for High-Net-Worth Individual advisory. Master family office strategies, multi-generational wealth planning, and sophisticated investment solutions for ultra-wealthy clients.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2"><span className="text-purple-600 mt-1">✓</span><span>Advanced HNWI advisory certification</span></div>
                      <div className="flex items-start gap-2"><span className="text-purple-600 mt-1">✓</span><span>Family office strategies</span></div>
                      <div className="flex items-start gap-2"><span className="text-purple-600 mt-1">✓</span><span>Multi-generational wealth planning</span></div>
                      <div className="flex items-start gap-2"><span className="text-purple-600 mt-1">✓</span><span>Limited cohort size</span></div>
                      <div className="flex items-start gap-2"><span className="text-purple-600 mt-1">✓</span><span>Hybrid learning format</span></div>
                      <div className="flex items-start gap-2"><span className="text-purple-600 mt-1">✓</span><span>6-month intensive program</span></div>
                    </div>
                  </div>
                  <div className="lg:w-64 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-lg p-6 flex flex-col justify-center items-center text-center">
                    <Sparkles className="w-12 h-12 mb-3" />
                    <h4 className="font-bold text-lg mb-2">Launch Q1 2026</h4>
                    <p className="text-sm text-white/90 mb-4">Be among the first to register</p>
                    <a href="/scfp-hnwi" className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {scfpEvents.length > 0 ? (
                  scfpEvents.map(event => <EventCard key={event.id} event={event} />)
                ) : (
                  <div className="col-span-full py-12 text-center text-slate-gray bg-white/50 rounded-lg">
                    <p>No upcoming SCFP-HNWI sessions currently scheduled.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 border-2 border-purple-200">
                <h3 className="font-bold text-purple-600 mb-4 text-center">Early Registration Benefits</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-2xl">🎯</span></div>
                    <h4 className="font-semibold text-charcoal mb-1">Priority Access</h4>
                    <p className="text-slate-gray text-xs">Secure your spot in the inaugural cohort</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-2xl">💰</span></div>
                    <h4 className="font-semibold text-charcoal mb-1">Special Pricing</h4>
                    <p className="text-slate-gray text-xs">Exclusive launch pricing for early registrants</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-2xl">👥</span></div>
                    <h4 className="font-semibold text-charcoal mb-1">Exclusive Network</h4>
                    <p className="text-slate-gray text-xs">Join Singapore's elite HNWI advisors</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section id="newsletter" className="py-16 bg-gradient-to-br from-primary-600 to-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Bell className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Never Miss a Course</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get notified about new course dates, early bird offers, and exclusive events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
              <button type="submit" className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-lg font-bold transition-colors">Subscribe</button>
            </form>
            <p className="text-sm text-white/70 mt-4">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cool-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">How do I register?</h3>
                <p className="text-charcoal text-sm mb-3">Click "Register Now" on any course card or contact us directly via WhatsApp for immediate assistance.</p>
                <a href="https://wa.me/6581117890" className="text-teal text-sm font-semibold hover:underline">Contact Us →</a>
              </div>
              <div className="bg-cool-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Is funding available?</h3>
                <p className="text-charcoal text-sm mb-3">Yes! Many courses qualify for IBF-STS funding with up to 70% subsidy. Check individual course details.</p>
                <a href="/cfp#investment" className="text-teal text-sm font-semibold hover:underline">Learn About Funding →</a>
              </div>
              <div className="bg-cool-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Can I switch dates?</h3>
                <p className="text-charcoal text-sm mb-3">We offer flexible options. Contact our team to discuss date changes or alternative schedules.</p>
                <a href="https://wa.me/6581117890" className="text-teal text-sm font-semibold hover:underline">Get Help →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
