'use client';

import { ArrowRight, Phone, Mail, MessageCircle, Shield, Award, Users } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left: Ready to Start */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Transformation?
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Join 20,000+ professionals who've elevated their careers with CFP® certification. Your journey to becoming a globally recognized financial planner starts here.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">Global gold standard certification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">Up to 90% IBF funding available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">Expert trainers with 25+ years experience</span>
                </li>
              </ul>
              <a
                href="#enrollment"
                className="inline-flex items-center justify-center w-full bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Right: Need Guidance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-teal rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Need Guidance First?
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Not sure which level to start at? Have questions about funding or eligibility? Our course advisors are here to help you make the right decision for your career.
              </p>
              <div className="space-y-4 mb-8">
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
                    <a href="mailto:info@fp-edu.com" className="font-bold text-lg hover:text-gold transition-colors">info@fp-edu.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <MessageCircle className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-sm opacity-80">Live Chat</div>
                    <div className="font-bold text-lg">Mon-Fri, 9am-6pm</div>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center justify-center w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200">
                <Phone className="mr-2 w-5 h-5" />
                Schedule a Free Consultation
              </button>
            </div>
          </div>

          {/* Trust Elements Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">IBF-Approved</span>
                </div>
                <p className="text-xs text-white/70">Recognized by Institute of Banking & Finance</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">FPSB Certified</span>
                </div>
                <p className="text-xs text-white/70">Official CFP® certification partner</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">26 Years Legacy</span>
                </div>
                <p className="text-xs text-white/70">Singapore's #1 CFP® provider since 1999</p>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="text-6xl text-gold/30 mb-4">"</div>
            <p className="text-xl text-white/90 italic mb-4 leading-relaxed">
              The CFP® certification through Financial Perspectives was the best career decision I ever made. The practical training, expert instructors, and comprehensive support gave me the confidence to serve high-net-worth clients and grow my practice significantly.
            </p>
            <div className="font-bold text-white">— Sarah Lim, CFP®</div>
            <div className="text-sm text-white/70">Private Wealth Manager</div>
          </div>
        </div>
      </div>
    </section>
  );
}

