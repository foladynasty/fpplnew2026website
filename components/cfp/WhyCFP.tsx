'use client';

import { CheckCircle, Award, Globe, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';

export default function WhyCFP() {
  const scrollToPathway = () => {
    const element = document.getElementById('pathway');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              The Global Gold Standard
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why CFP® Certification?
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              CFP® certification is the most recognized and respected financial planning credential worldwide. It represents the highest standard of competence, ethics, and professionalism in the industry.
            </p>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-5">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Global Recognition
              </h3>
              <p className="text-charcoal leading-relaxed">
                CFP® certification is recognized in 27 territories worldwide. Open doors to international career opportunities and work with clients across borders.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-5">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Higher Earning Potential
              </h3>
              <p className="text-charcoal leading-relaxed">
                CFP® professionals earn significantly more than non-certified advisors. Studies show a 20-40% salary premium for certified planners.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Client Trust & Credibility
              </h3>
              <p className="text-charcoal leading-relaxed">
                Clients actively seek CFP® professionals. The designation signals competence, ethical standards, and commitment to their best interests.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Comprehensive Expertise
              </h3>
              <p className="text-charcoal leading-relaxed">
                Master all aspects of financial planning: insurance, investments, tax, retirement, and estate planning. Become the holistic advisor clients need.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Ethical Standards
              </h3>
              <p className="text-charcoal leading-relaxed">
                CFP® certification requires adherence to strict ethical standards and fiduciary duty. Build a practice based on integrity and client-first principles.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-5">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Career Flexibility
              </h3>
              <p className="text-charcoal leading-relaxed">
                Work in banks, insurance firms, advisory practices, or start your own financial planning business. CFP® certification opens multiple career paths.
              </p>
            </div>
          </div>

          {/* Why Study with Financial Perspectives */}
          <div className="bg-cool-gray rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Why Study with Financial Perspectives?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Singapore's CFP® Pioneer</h4>
                  <p className="text-charcoal text-sm">First FPSB-certified provider since 1999. We literally wrote the book on CFP® training in Singapore.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Expert Practitioners as Trainers</h4>
                  <p className="text-charcoal text-sm">Learn from CFP® professionals with 20+ years real-world experience in wealth management and financial planning.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Flexible Study Options</h4>
                  <p className="text-charcoal text-sm">Weekday, weekend, evening, and online options. Study at your pace with comprehensive materials and support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">IBF-STS Funding Support</h4>
                  <p className="text-charcoal text-sm">Up to 90% course fee support for eligible Singaporeans and PRs. Maximize your investment with available funding.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Proven Success Rate</h4>
                  <p className="text-charcoal text-sm">Our students consistently achieve above-average pass rates thanks to structured curriculum and exam preparation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Lifetime Career Support</h4>
                  <p className="text-charcoal text-sm">Join our 20,000+ alumni network. Access continuing education, industry updates, and career opportunities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={scrollToPathway}
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Explore the Complete Pathway
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

