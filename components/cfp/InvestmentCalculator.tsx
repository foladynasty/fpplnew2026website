'use client';

import { DollarSign, TrendingDown, Calculator, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { pricingData } from '@/lib/cfp-content';

export default function InvestmentCalculator() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Course Fees & Funding
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Quality education at an accessible investment. With IBF-STS funding, you could pay as little as 10% of the course fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingData.map((tier, index) => (
              <div
                key={tier.level}
                className={`rounded-2xl p-8 border-2 transition-all hover:shadow-2xl hover:-translate-y-1 ${
                  tier.level === 'CFP®'
                    ? 'bg-gradient-to-br from-gold/10 to-gold/5 border-gold/40 ring-2 ring-gold/20'
                    : 'bg-white border-primary/20'
                }`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  {tier.level === 'CFP®' && (
                    <div className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      GOLD STANDARD
                    </div>
                  )}
                  <h3 className={`text-3xl font-bold mb-2 ${
                    tier.level === 'CFP®' ? 'text-gold' : 'text-primary'
                  }`}>
                    {tier.level}
                  </h3>
                  <p className="text-slate-gray text-sm">{tier.duration}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6 pb-6 border-b border-cool-gray">
                  <div className="mb-4">
                    <div className="text-sm text-slate-gray mb-1">Full Price</div>
                    <div className="text-2xl font-bold text-charcoal line-through opacity-60">
                      {tier.price}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal/10 to-teal/5 rounded-lg p-4 mb-2">
                    <div className="text-xs font-semibold text-teal mb-1">WITH {tier.ibfFunding} IBF FUNDING</div>
                    <div className="text-4xl font-bold text-teal">{tier.netPrice}</div>
                    <div className="text-xs text-slate-gray mt-1">for eligible candidates</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal">{tier.modules} comprehensive modules</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal">All study materials included</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal">Online & in-person options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal">Practice exams & support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal">Flexible payment plans</span>
                  </li>
                </ul>

                {/* CTA */}
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  tier.level === 'CFP®'
                    ? 'bg-gold hover:bg-gold-600 text-white'
                    : 'bg-primary hover:bg-primary-700 text-white'
                }`}>
                  Enroll in {tier.level}
                </button>
              </div>
            ))}
          </div>

          {/* Bundle Discount */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Complete Pathway Bundle</h3>
                <p className="text-charcoal mb-4 leading-relaxed">
                  Commit to the full AFP® → AWP® → CFP® pathway and save 15% on total fees. Plus, enjoy priority enrollment and dedicated career advisory support.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <span className="text-sm text-slate-gray">Bundle Price: </span>
                    <span className="text-2xl font-bold text-primary">$14,365</span>
                    <span className="text-sm text-slate-gray ml-2">(save $2,435)</span>
                  </div>
                  <div className="h-8 w-px bg-primary/20 hidden sm:block"></div>
                  <div>
                    <span className="text-sm text-slate-gray">With 90% Funding: </span>
                    <span className="text-2xl font-bold text-gold">$1,437</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IBF-STS Funding Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Funding Info */}
            <div className="bg-cool-gray rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">IBF-STS Funding</h3>
              </div>
              <p className="text-charcoal mb-4 leading-relaxed">
                The IBF Standards Training Scheme (IBF-STS) provides course fee support for Singapore Citizens and PRs working in the financial services sector.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal"><strong>Up to 90%</strong> course fee support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal"><strong>70%</strong> for non-SME sponsored individuals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal"><strong>50%</strong> self-sponsored individuals</span>
                </li>
              </ul>
            </div>

            {/* Payment Plans */}
            <div className="bg-cool-gray rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Payment Options</h3>
              </div>
              <p className="text-charcoal mb-4 leading-relaxed">
                We offer flexible payment plans to make your investment manageable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal"><strong>Pay by module:</strong> Spread costs across modules</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal"><strong>Installments:</strong> Monthly payment plans available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal"><strong>Corporate sponsorship:</strong> Employer payment arrangements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ROI Section */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-primary/10 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Your Return on Investment</h3>
            <p className="text-center text-charcoal mb-8 max-w-3xl mx-auto">
              CFP® certification is an investment in your future. Studies show CFP® professionals earn 20-40% more than non-certified advisors and command premium advisory fees.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-cool-gray rounded-xl">
                <div className="text-3xl font-bold text-gold mb-2">20-40%</div>
                <div className="text-sm text-charcoal">Higher earning potential</div>
              </div>
              <div className="text-center p-6 bg-cool-gray rounded-xl">
                <div className="text-3xl font-bold text-gold mb-2">$10K+</div>
                <div className="text-sm text-charcoal">Average annual income increase</div>
              </div>
              <div className="text-center p-6 bg-cool-gray rounded-xl">
                <div className="text-3xl font-bold text-gold mb-2">&lt;2 Years</div>
                <div className="text-sm text-charcoal">Typical payback period</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-gray mb-6">
              Need help calculating your investment or checking funding eligibility?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6512345678"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Speak with Advisor
              </a>
              <a
                href="#faqs"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                View FAQs
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

