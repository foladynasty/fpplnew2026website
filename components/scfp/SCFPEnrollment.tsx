'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import { targetAudience } from '@/lib/scfp-content';

export default function SCFPEnrollment() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Exclusive Program
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              Who Should Enrol?
            </h2>
            <p className="text-xl text-slate-gray max-w-4xl mx-auto leading-relaxed">
              This Program is suitable for licensed representatives working as Financial Planners, Insurance Agents and Bancassurance Specialists seeking highly rewarding career opportunities in the HNWIs and Family-Owned Business segment. Learners will differentiate themselves amongst competitors as a specialist certified professional in the Financial Services industry. Existing practitioners looking to advance their career opportunities will find the Program a significant boost to their career breakthrough.
            </p>
          </div>

          {/* Target Audience Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-gradient-to-br from-purple/5 to-purple/10 rounded-xl p-8 border-2 border-purple/20 hover:shadow-lg transition-all h-full flex flex-col">
                <h3 className="text-2xl font-bold text-purple mb-4">{audience.title}</h3>
                <p className="text-charcoal mb-6 flex-grow">{audience.description}</p>
                <div className="space-y-3 mt-auto">
                  {audience.criteria.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prerequisites Section */}




          {/* Important Notice */}
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-6 border-l-4 border-gold mb-8">
            <p className="font-semibold text-purple mb-2">⚠️ Limited Seats Available</p>
            <p className="text-charcoal text-sm">
              To maintain program quality and enable personalized attention, we limit each cohort to 15 participants. Early registration is strongly encouraged for the inaugural Q1 2026 intake.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#investment"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View Program Investment
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

