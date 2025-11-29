'use client';

import { CheckCircle, ArrowRight, Clock, BookOpen, Award } from 'lucide-react';
import { useState } from 'react';

export default function CFPPathwayDetailed() {
  const [selectedLevel, setSelectedLevel] = useState<'afp' | 'awp' | 'cfp'>('afp');

  const pathwayData = {
    afp: {
      title: 'AFP®',
      fullName: 'Associate Financial Planner',
      duration: '3-6 months',
      modules: 2,
      description: 'Foundation level certification for aspiring financial planners. Master the fundamentals of financial planning and begin your professional journey.',
      requirements: [
        'Minimum diploma or degree in any discipline',
        'FPAS student membership',
        'Pass FPAS Rules & Regulations exam'
      ],
      topics: [
        'Financial Planning Process & Ethics',
        'Insurance & Risk Management Basics',
        'Investment Fundamentals',
        'Introduction to Retirement Planning'
      ],
      outcomes: [
        'Understand financial planning principles',
        'Perform basic needs analysis',
        'Recommend suitable financial products',
        'Comply with regulatory requirements'
      ]
    },
    awp: {
      title: 'AWP®',
      fullName: 'Associate Wealth Planner',
      duration: '6-9 months',
      modules: 3,
      description: 'Intermediate level specializing in wealth planning strategies. Develop expertise in investment planning and portfolio management.',
      requirements: [
        'Completed AFP® certification',
        'FPAS membership in good standing',
        'Minimum 1 year relevant work experience (recommended)'
      ],
      topics: [
        'Advanced Investment Planning',
        'Portfolio Management & Asset Allocation',
        'Tax Planning Strategies',
        'Estate Planning Fundamentals',
        'Wealth Accumulation Strategies'
      ],
      outcomes: [
        'Design comprehensive investment portfolios',
        'Provide tax-efficient planning strategies',
        'Advise on wealth accumulation and preservation',
        'Serve affluent clients with confidence'
      ]
    },
    cfp: {
      title: 'CFP®',
      fullName: 'Certified Financial Planner',
      duration: '9-12 months',
      modules: 6,
      description: 'The global gold standard in financial planning. Master comprehensive financial planning across all disciplines and serve clients at the highest level.',
      requirements: [
        'Completed AFP® and AWP® certifications',
        'Bachelor\'s degree (or equivalent)',
        '3 years of full-time relevant work experience',
        'FPAS professional membership'
      ],
      topics: [
        'Comprehensive Financial Planning',
        'Advanced Tax & Estate Planning',
        'Retirement & CPF Optimization',
        'Risk Management & Insurance Strategies',
        'Investment Planning & Portfolio Construction',
        'Ethics, Professional Standards & Practice Management'
      ],
      outcomes: [
        'Create comprehensive financial plans',
        'Serve high-net-worth clients',
        'Practice as independent financial planner',
        'Command premium advisory fees',
        'Global career opportunities'
      ]
    }
  };

  const current = pathwayData[selectedLevel];

  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Your Progressive Journey
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              The CFP® Certification Pathway
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              A structured, progressive pathway from foundation to professional. Each level builds upon the previous, ensuring comprehensive mastery of financial planning.
            </p>
          </div>

          {/* Pathway Timeline - Visual */}
          <div className="mb-16">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-gold"></div>
                
                {/* Journey Steps */}
                <div className="grid grid-cols-3 gap-8 relative">
                  {/* AFP */}
                  <button
                    onClick={() => setSelectedLevel('afp')}
                    className="text-center group"
                  >
                    <div className="relative inline-block mb-6">
                      <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-xl relative z-10 transition-all ${
                        selectedLevel === 'afp' 
                          ? 'bg-gradient-to-br from-primary to-primary-700 ring-4 ring-primary/30' 
                          : 'bg-gradient-to-br from-primary/60 to-primary-600'
                      }`}>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">1</div>
                          <div className="text-xs text-white/90 font-semibold">LEVEL</div>
                        </div>
                      </div>
                      <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-primary">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    </div>
                    <div className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all ${
                      selectedLevel === 'afp' 
                        ? 'border-primary/40 shadow-primary/20' 
                        : 'border-primary/20 group-hover:border-primary/30'
                    }`}>
                      <h4 className="text-xl font-bold text-primary mb-2">AFP®</h4>
                      <p className="text-sm font-semibold text-charcoal mb-2">Foundation Level</p>
                      <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                        <p className="text-sm font-bold text-primary">3-6 months</p>
                      </div>
                    </div>
                  </button>

                  {/* AWP */}
                  <button
                    onClick={() => setSelectedLevel('awp')}
                    className="text-center group"
                  >
                    <div className="relative inline-block mb-6">
                      <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-xl relative z-10 transition-all ${
                        selectedLevel === 'awp' 
                          ? 'bg-gradient-to-br from-primary to-primary-700 ring-4 ring-primary/30' 
                          : 'bg-gradient-to-br from-primary/60 to-primary-600'
                      }`}>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">2</div>
                          <div className="text-xs text-white/90 font-semibold">LEVEL</div>
                        </div>
                      </div>
                      <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-gold">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    </div>
                    <div className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all ${
                      selectedLevel === 'awp' 
                        ? 'border-primary/40 shadow-primary/20' 
                        : 'border-primary/20 group-hover:border-primary/30'
                    }`}>
                      <h4 className="text-xl font-bold text-primary mb-2">AWP®</h4>
                      <p className="text-sm font-semibold text-charcoal mb-2">Wealth Specialist</p>
                      <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                        <p className="text-sm font-bold text-primary">6-9 months</p>
                      </div>
                    </div>
                  </button>

                  {/* CFP */}
                  <button
                    onClick={() => setSelectedLevel('cfp')}
                    className="text-center group"
                  >
                    <div className="relative inline-block mb-6">
                      <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl relative z-10 transition-all ${
                        selectedLevel === 'cfp' 
                          ? 'bg-gradient-to-br from-gold to-gold-700 ring-4 ring-gold/30' 
                          : 'bg-gradient-to-br from-gold/60 to-gold-600'
                      }`}>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">3</div>
                          <div className="text-xs text-white/90 font-semibold">GOAL</div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                        <Award className="w-6 h-6 text-gold" />
                      </div>
                    </div>
                    <div className={`rounded-xl p-6 shadow-lg border-2 transition-all ${
                      selectedLevel === 'cfp' 
                        ? 'bg-gradient-to-br from-gold/10 to-gold/5 border-gold/40' 
                        : 'bg-white border-gold/20 group-hover:border-gold/30'
                    }`}>
                      <h4 className="text-xl font-bold text-gold mb-2">CFP®</h4>
                      <p className="text-sm font-semibold text-charcoal mb-2">Gold Standard</p>
                      <div className="inline-block bg-gold/20 px-4 py-2 rounded-full">
                        <p className="text-sm font-bold text-gold">9-12 months</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Selector */}
            <div className="md:hidden flex gap-3 mb-8">
              <button
                onClick={() => setSelectedLevel('afp')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
                  selectedLevel === 'afp' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-primary border-2 border-primary/20'
                }`}
              >
                AFP®
              </button>
              <button
                onClick={() => setSelectedLevel('awp')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
                  selectedLevel === 'awp' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-primary border-2 border-primary/20'
                }`}
              >
                AWP®
              </button>
              <button
                onClick={() => setSelectedLevel('cfp')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
                  selectedLevel === 'cfp' 
                    ? 'bg-gold text-white' 
                    : 'bg-white text-gold border-2 border-gold/20'
                }`}
              >
                CFP®
              </button>
            </div>
          </div>

          {/* Detailed Information Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {current.title} - {current.fullName}
                </h3>
                <p className="text-lg text-slate-gray">{current.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-cool-gray rounded-lg p-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-slate-gray">Duration</div>
                  <div className="text-lg font-bold text-primary">{current.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-cool-gray rounded-lg p-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-slate-gray">Modules</div>
                  <div className="text-lg font-bold text-primary">{current.modules} Core Modules</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-cool-gray rounded-lg p-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-slate-gray">Certification</div>
                  <div className="text-lg font-bold text-primary">{current.title}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Requirements */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">Entry Requirements</h4>
                <ul className="space-y-3">
                  {current.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">Key Topics Covered</h4>
                <ul className="space-y-3">
                  {current.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-cool-gray">
              <h4 className="text-xl font-bold text-primary mb-4">What You'll Achieve</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {current.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#enrollment"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Check Your Eligibility
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

