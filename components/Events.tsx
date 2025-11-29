import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { getUpcomingEvents, formatEventDate, getStatusBadge } from '@/lib/events-content';
import Link from 'next/link';

export default function Events() {
  // Get the first 6 upcoming events
  const events = getUpcomingEvents(6);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Join Our Next Session
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out. Register early to secure your spot.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {events.map((event) => {
              const statusBadge = getStatusBadge(event.status);
              const eventDate = formatEventDate(event.startDate);
              
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary-300 group"
                >
                  {/* Badge */}
                  <div className={`${statusBadge.color} text-xs font-bold px-4 py-2 text-center border-b`}>
                    {statusBadge.text}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <p className="text-sm font-semibold text-gray-700">{eventDate}</p>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">{event.location} • {event.format}</p>
                    </div>

                    <Link
                      href={event.registerUrl || event.detailsUrl}
                      className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
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
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View Full Schedule
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


