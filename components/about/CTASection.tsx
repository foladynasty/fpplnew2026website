'use client';

import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join Singapore's #1 CFP® education provider and transform your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Explore Programs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Explore Programs</h3>
              <p className="text-white/80 mb-4 text-sm">
                Browse our CFP®, SCFP-HNWI, and CPD course offerings
              </p>
              <a
                href="/cfp"
                className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-semibold"
              >
                View Programs
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-3">View Schedule</h3>
              <p className="text-white/80 mb-4 text-sm">
                Check upcoming course dates and register early
              </p>
              <a
                href="/events"
                className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-semibold"
              >
                Course Calendar
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">Get in Touch</h3>
              <p className="text-white/80 mb-4 text-sm">
                Have questions? Our team is here to help
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-semibold"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+6581117890"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+65 8111 7890</span>
            </a>
            <a
              href="mailto:enquiries@fp-edu.com"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>enquiries@fp-edu.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

