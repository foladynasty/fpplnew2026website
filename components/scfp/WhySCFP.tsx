'use client';

import { Users, TrendingUp, Award, Building, Lightbulb, UsersRound, CheckCircle, ArrowRight } from 'lucide-react';
import { whySCFPBenefits, programDifferentiators } from '@/lib/scfp-content';

export default function WhySCFP() {
  const scrollToModules = () => {
    const element = document.getElementById('modules');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'users': Users,
      'trending-up': TrendingUp,
      'award': Award,
      'building': Building,
      'lightbulb': Lightbulb,
      'users-round': UsersRound
    };
    const IconComponent = icons[iconName] || Award;
    return <IconComponent className="w-7 h-7 text-white" />;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              The Next Frontier in Wealth Advisory
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              Why SCFP-HNWI?
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Position yourself as Singapore's go-to specialist for ultra-high-net-worth individuals, family offices, and multi-generational wealth planning.
            </p>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whySCFPBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple/5 to-purple/10 rounded-xl p-8 border border-purple/20 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-purple rounded-lg flex items-center justify-center mb-5">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-bold text-purple mb-3">
                  {benefit.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Program Differentiators */}
          <div className="bg-gradient-to-br from-purple to-purple-800 rounded-2xl p-10 mb-12 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What Makes This Program Different
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {programDifferentiators.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/95">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience Teaser */}
          <div className="bg-cool-gray rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-purple mb-4 text-center">
              Designed for Elite Advisors
            </h3>
            <p className="text-lg text-charcoal text-center mb-6 leading-relaxed max-w-3xl mx-auto">
              This advanced certification is exclusively for experienced financial professionals ready to master the complexities of high-net-worth and family business advisory. If you're a CFP® professional, private banker, or wealth manager serving affluent clients, this program will elevate your practice to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple">CFP® Professionals</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple">Private Bankers</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple">Wealth Managers</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple">Family Office Advisors</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={scrollToModules}
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Explore the Curriculum
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

