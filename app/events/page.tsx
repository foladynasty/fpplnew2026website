'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsHero from '@/components/events/EventsHero';
import CFPScheduleSection from '@/components/events/CFPScheduleSection';
import CPDCalendarSection from '@/components/events/CPDCalendarSection';
import SCFPSection from '@/components/events/SCFPSection';
import { upcomingEvents, getEventsByCategory } from '@/lib/events-content';
import { Calendar, Bell } from 'lucide-react';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter events based on active filter
  const getFilteredEvents = () => {
    if (activeFilter === 'all') {
      return {
        cfp: getEventsByCategory('CFP'),
        cpd: getEventsByCategory('CPD'),
        scfp: [...getEventsByCategory('SCFP-HNWI'), ...getEventsByCategory('Webinar')]
      };
    } else if (activeFilter === 'CFP') {
      return {
        cfp: getEventsByCategory('CFP'),
        cpd: [],
        scfp: []
      };
    } else if (activeFilter === 'CPD') {
      return {
        cfp: [],
        cpd: getEventsByCategory('CPD'),
        scfp: []
      };
    } else if (activeFilter === 'SCFP-HNWI') {
      return {
        cfp: [],
        cpd: [],
        scfp: [...getEventsByCategory('SCFP-HNWI'), ...getEventsByCategory('Webinar')]
      };
    }
    return { cfp: [], cpd: [], scfp: [] };
  };

  const filteredEvents = getFilteredEvents();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero with Filters */}
      <EventsHero 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Quick Actions Bar */}
      <section className="bg-white border-b border-border-gray py-6 sticky top-32 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-charcoal">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold">
                Showing {upcomingEvents.length} Upcoming Events
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 bg-cool-gray hover:bg-gray-200 text-charcoal px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <Bell className="w-4 h-4" />
                Get Notifications
              </a>
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CFP Schedule Section */}
      {filteredEvents.cfp.length > 0 && (
        <CFPScheduleSection events={filteredEvents.cfp} />
      )}

      {/* CPD Calendar Section */}
      {filteredEvents.cpd.length > 0 && (
        <CPDCalendarSection events={filteredEvents.cpd} />
      )}

      {/* SCFP Section */}
      {filteredEvents.scfp.length > 0 && (
        <SCFPSection events={filteredEvents.scfp} />
      )}

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-br from-primary-600 to-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Bell className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Never Miss a Course</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get notified about new course dates, early bird offers, and exclusive events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-white/70 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cool-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">How do I register?</h3>
                <p className="text-charcoal text-sm mb-3">
                  Click "Register Now" on any course card or contact us directly via WhatsApp for immediate assistance.
                </p>
                <a href="https://wa.me/6581117890" className="text-teal text-sm font-semibold hover:underline">
                  Contact Us →
                </a>
              </div>
              <div className="bg-cool-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Is funding available?</h3>
                <p className="text-charcoal text-sm mb-3">
                  Yes! Many courses qualify for IBF-STS funding with up to 70% subsidy. Check individual course details.
                </p>
                <a href="/cfp#investment" className="text-teal text-sm font-semibold hover:underline">
                  Learn About Funding →
                </a>
              </div>
              <div className="bg-cool-gray rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Can I switch dates?</h3>
                <p className="text-charcoal text-sm mb-3">
                  We offer flexible options. Contact our team to discuss date changes or alternative schedules.
                </p>
                <a href="https://wa.me/6581117890" className="text-teal text-sm font-semibold hover:underline">
                  Get Help →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

