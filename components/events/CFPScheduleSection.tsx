'use client';

import { CourseEvent } from '@/lib/events-content';
import EventCard from './EventCard';
import { GraduationCap } from 'lucide-react';

interface CFPScheduleSectionProps {
  events: CourseEvent[];
}

export default function CFPScheduleSection({ events }: CFPScheduleSectionProps) {
  if (events.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary-600 p-3 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                CFP® Certification Schedule
              </h2>
              <p className="text-slate-gray">
                AFP<sup>CM</sup> → AWP<sup>CM</sup> → CFP® | Singapore's #1 CFP® Provider
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-primary mb-2">About CFP® Certification</h3>
            <p className="text-charcoal text-sm leading-relaxed mb-3">
              The CFP® certification is the global gold standard for financial planning professionals. Our three-stage pathway (AFP<sup>CM</sup> → AWP<sup>CM</sup> → CFP®) is recognized worldwide and has been trusted by over 20,000 professionals in Singapore.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>FPSB-Certified Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>26 Years of Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>IBF-STS Funding Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Flexible Learning Options</span>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center bg-cool-gray rounded-xl p-6">
            <p className="text-charcoal mb-3">
              <strong>Not sure which level to start?</strong> Take our quick assessment or speak with our advisors.
            </p>
            <a
              href="/cfp#enrollment"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About CFP® Pathway
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


