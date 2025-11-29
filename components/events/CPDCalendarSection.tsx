'use client';

import { CourseEvent } from '@/lib/events-content';
import EventCard from './EventCard';
import { TrendingUp } from 'lucide-react';

interface CPDCalendarSectionProps {
  events: CourseEvent[];
}

export default function CPDCalendarSection({ events }: CPDCalendarSectionProps) {
  if (events.length === 0) return null;

  return (
    <section className="py-16 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal p-3 rounded-xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                CPD Course Calendar
              </h2>
              <p className="text-slate-gray">
                Continuing Professional Development | Stay Sharp, Stay Relevant
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-white border-2 border-teal/20 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-primary mb-2">About Our CPD Courses</h3>
            <p className="text-charcoal text-sm leading-relaxed mb-3">
              Practical, focused training designed for immediate impact. All courses are IBF-approved with CPD hours awarded. Perfect for practicing professionals who refuse to stand still.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-teal">✓</span>
                <span>100% IBF-Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">✓</span>
                <span>Practical Application</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">✓</span>
                <span>Expert Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal">✓</span>
                <span>Funding Support Available</span>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center bg-white rounded-xl p-6">
            <p className="text-charcoal mb-3">
              <strong>Can't find the course you need?</strong> We offer custom corporate training solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cpd"
                className="inline-block bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore All CPD Courses
              </a>
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border-2 border-teal text-teal hover:bg-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

