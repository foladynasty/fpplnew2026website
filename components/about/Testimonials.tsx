import { Quote, Star } from 'lucide-react';
import { getTestimonials, EndorsalTestimonial } from '@/lib/endorsal';
import Link from 'next/link';

// Wrapper component to make this a server component
export default async function Testimonials() {
  // Fetch testimonials from Endorsal API
  const allTestimonials = await getTestimonials();

  // Show first 6 testimonials, with a link to see all
  const displayedTestimonials = allTestimonials.slice(0, 6);

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
          {displayedTestimonials.length === 0 ? (
            <div className="text-center py-12 text-charcoal">
              <p>No testimonials available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial._id} testimonial={testimonial} />
              ))}
            </div>
          )}

          {/* Show More Button - Link to Wall of Love */}
          {allTestimonials.length > 6 && (
            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-block bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Read All {allTestimonials.length} Testimonials →
              </Link>
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

// Individual Testimonial Card
function TestimonialCard({ testimonial }: { testimonial: EndorsalTestimonial }) {
  const rating = testimonial.rating || 5;

  return (
    <div className="bg-cool-gray rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary/10">
        <Quote className="w-12 h-12 fill-current" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-gold fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-charcoal italic mb-4 leading-relaxed relative z-10 text-sm">
        "{testimonial.comments}"
      </p>

      {/* Author */}
      <div className="border-t border-gray-300 pt-4">
        <p className="font-bold text-primary">{testimonial.name}</p>
        {testimonial.company && (
          <p className="text-xs text-slate-gray">{testimonial.company}</p>
        )}
        {testimonial.position && (
          <p className="text-xs text-teal font-semibold mt-1">{testimonial.position}</p>
        )}
      </div>
    </div>
  );
}
