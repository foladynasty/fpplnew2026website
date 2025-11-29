'use client';

import { ArrowRight, Download, Award, Users, TrendingUp } from 'lucide-react';

export default function CFPHero() {
  const scrollToOverview = () => {
    const element = document.getElementById('overview');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold text-white">Singapore's #1 CFP® Certification Provider Since 1999</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Journey to CFP® Certification
            <span className="block mt-2 text-gold">Starts Here</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 20,000+ professionals who've transformed their careers with the globally recognized gold standard in financial planning
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToOverview}
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
            >
              Start Your CFP® Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="#investment"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Program Guide
            </a>
          </div>

          {/* Key Value Props - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Globally Recognized</h3>
              <p className="text-white/80 text-sm">
                FPSB-accredited certification opens doors worldwide
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-white/80 text-sm">
                26 years training Singapore's top financial professionals
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
              <p className="text-white/80 text-sm">
                Higher earning potential and premium advisory roles
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold">26 Years</div>
              <div className="text-sm text-white/80">Of Excellence</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-gold">20,000+</div>
              <div className="text-sm text-white/80">Graduates</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-gold">#1</div>
              <div className="text-sm text-white/80">CFP® Provider in SG</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-gold">90%</div>
              <div className="text-sm text-white/80">IBF Funding Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

