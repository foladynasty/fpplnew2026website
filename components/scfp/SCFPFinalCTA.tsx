'use client';

import { ArrowRight, Calendar, Mail, Phone, Award, Users, Sparkles } from 'lucide-react';

export default function SCFPFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left: Register Interest */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Register for Q1 2026 Launch
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Be among the first cohort of Singapore's SCFP-HNWI certified specialists. Limited to 25-30 participants for personalized attention and elite peer networking.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">Dual certification credentials</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">Access to elite advisor network</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">Early bird pricing for inaugural cohort</span>
                </li>
              </ul>
              <a
                href="mailto:scfp@fp-edu.com?subject=SCFP-HNWI Registration Interest"
                className="inline-flex items-center justify-center w-full bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
              >
                Register Your Interest
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Right: Attend Preview Webinar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-teal rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Attend Free Preview Webinar
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Join our exclusive program preview to meet the faculty, explore the curriculum in detail, and understand how SCFP-HNWI can elevate your practice.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-white/90">
                  <Calendar className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-sm opacity-80">Upcoming Webinar</div>
                    <div className="font-bold text-lg">Q4 2025 (Date TBA)</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Phone className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-sm opacity-80">Call us at</div>
                    <a href="tel:+6512345678" className="font-bold text-lg hover:text-gold transition-colors">+65 1234 5678</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Mail className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-sm opacity-80">Email us at</div>
                    <a href="mailto:scfp@fp-edu.com" className="font-bold text-lg hover:text-gold transition-colors">scfp@fp-edu.com</a>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center justify-center w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200">
                <Calendar className="mr-2 w-5 h-5" />
                Register for Preview Webinar
              </button>
            </div>
          </div>

          {/* Trust Elements Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-12">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">IBF-Advanced Level II</span>
                </div>
                <p className="text-xs text-white/70">Recognized professional certification</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">NEW 2026 Launch</span>
                </div>
                <p className="text-xs text-white/70">Be part of inaugural cohort</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">Limited Seats</span>
                </div>
                <p className="text-xs text-white/70">25-30 participants per cohort</p>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-6xl text-gold/30 mb-4">"</div>
            <p className="text-xl text-white/90 italic mb-4 leading-relaxed">
              The HNWI advisory space is evolving rapidly. Advisors who invest in specialized expertise today will be the trusted partners to Singapore's wealthiest families tomorrow. This certification will set you apart.
            </p>
            <div className="font-bold text-white">— Dr. Patricia Ng</div>
            <div className="text-sm text-white/70">SCFP-HNWI Program Director</div>
          </div>
        </div>
      </div>
    </section>
  );
}

