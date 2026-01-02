'use client';

import { CourseEvent } from '@/lib/events-content';
import EventCard from './EventCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SCFPSectionProps {
  events: CourseEvent[];
}

export default function SCFPSection({ events }: SCFPSectionProps) {
  if (events.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-600 p-3 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                SCFP-HNWI Program
                <span className="ml-3 text-sm bg-purple-600 text-white px-3 py-1 rounded-full">NEW 2026</span>
              </h2>
              <p className="text-slate-gray">
                Master HNWI Advisory | Launching Q1 2026
              </p>
            </div>
          </div>

          {/* Premium Info Box */}
          <div className="bg-white border-2 border-purple-200 rounded-xl p-8 mb-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-purple-600 text-xl mb-3">
                  The Future of HNWI Advisory Excellence
                </h3>
                <p className="text-charcoal leading-relaxed mb-4">
                  Singapore's first specialized certification for High-Net-Worth Individual advisory. Master family business strategies, multi-generational wealth planning, and sophisticated investment solutions for ultra-wealthy clients.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Advanced HNWI advisory certification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Family business strategies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Multi-generational wealth planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Limited cohort size</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Hybrid learning format</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>6-month intensive program</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-64 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-lg p-6 flex flex-col justify-center items-center text-center">
                <Sparkles className="w-12 h-12 mb-3" />
                <h4 className="font-bold text-lg mb-2">Launch Q1 2026</h4>
                <p className="text-sm text-white/90 mb-4">Be among the first to register</p>
                <a
                  href="/scfp-hnwi"
                  className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Early Registration Benefits */}
          <div className="mt-8 bg-white rounded-xl p-6 border-2 border-purple-200">
            <h3 className="font-bold text-purple-600 mb-4 text-center">Early Registration Benefits</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-1">Priority Access</h4>
                <p className="text-slate-gray text-xs">Secure your spot in the inaugural cohort</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-1">Special Pricing</h4>
                <p className="text-slate-gray text-xs">Exclusive launch pricing for early registrants</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-1">Exclusive Network</h4>
                <p className="text-slate-gray text-xs">Join Singapore's elite HNWI advisors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

