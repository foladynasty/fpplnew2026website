'use client';

import { affiliation, association } from '@/lib/about-content';
import { Award, ExternalLink, Building2 } from 'lucide-react';

export default function Affiliations() {
  return (
    <section id="affiliations" className="py-20 bg-cool-gray scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">International Standards</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              International Affiliation & Associations
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Proud partners in global financial planning excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* FPSB */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                {affiliation.name}
              </h3>

              <div className="space-y-4 text-charcoal leading-relaxed mb-6">
                <p>{affiliation.description}</p>
                <p className="text-sm bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <strong className="text-blue-800">CFP® Marks:</strong> {affiliation.marks}
                </p>
                <p className="text-sm bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <strong className="text-green-800">Singapore:</strong> {affiliation.singapore}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-slate-gray">
                  <Award className="w-5 h-5 text-gold" />
                  <span>Global Standards in Financial Planning</span>
                </div>
              </div>
            </div>

            {/* FPAS */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal/30">
              <div className="bg-teal w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                {association.name}
              </h3>

              <div className="space-y-4 text-charcoal leading-relaxed mb-6">
                <p>{association.description}</p>
                <p className="text-sm">{association.role}</p>
              </div>

              <a
                href={association.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit FPAS Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Certification Marks */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-teal text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Recognized Certification Marks</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
              <span className="bg-white/20 px-6 py-2 rounded-full">CFP®</span>
              <span className="bg-white/20 px-6 py-2 rounded-full">CERTIFIED FINANCIAL PLANNER™</span>
              <span className="bg-white/20 px-6 py-2 rounded-full">Associate Wealth Planner</span>
              <span className="bg-white/20 px-6 py-2 rounded-full">Associate Financial Planner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

