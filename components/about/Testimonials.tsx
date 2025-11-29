'use client';

import { testimonials } from '@/lib/about-content';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.filter(t => t.featured);

  return (
    <section id="testimonials" className="py-20 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-semibold">Student Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Real experiences from professionals who've transformed their careers with us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-cool-gray rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="w-12 h-12 fill-current" />
                </div>

                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                )}

                {/* Content */}
                <p className="text-charcoal italic mb-4 leading-relaxed relative z-10 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-xs text-slate-gray">{testimonial.title}</p>
                  )}
                  <p className="text-xs text-teal font-semibold mt-1">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && testimonials.length > displayedTestimonials.length && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-block bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Read More Testimonials
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-teal/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Join 20,000+ Successful Graduates
            </h3>
            <p className="text-charcoal mb-6 max-w-2xl mx-auto">
              Start your journey to professional excellence with Singapore's most trusted CFP® education provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="inline-block bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Course Schedule
              </a>
              <a
                href="/contact"
                className="inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

