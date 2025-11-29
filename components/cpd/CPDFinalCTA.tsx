'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CPDFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Advance Your Professional Development?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Don't let your skills stagnate. Join Singapore's top financial professionals in continuous learning and development.
          </p>

          {/* Split CTA */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Primary CTA */}
            <div className="bg-white rounded-xl p-8 text-left">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Enroll in a Course
              </h3>
              <p className="text-charcoal mb-6">
                Browse our course offerings and secure your spot in an upcoming session.
              </p>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:shadow-lg w-full"
              >
                View All Courses
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Secondary CTA */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-3">
                Have Questions?
              </h3>
              <p className="text-white/90 mb-6">
                Not sure which course is right for you? Let's discuss your professional development needs.
              </p>
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:shadow-lg w-full"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-white/80">IBF-Approved</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">26</div>
                <div className="text-white/80">Years Excellence</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">20,000+</div>
                <div className="text-white/80">Professionals Trained</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">Funding</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

