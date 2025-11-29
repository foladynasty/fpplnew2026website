'use client';

import { GraduationCap, Briefcase, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { targetAudience, enrollmentProcess } from '@/lib/scfp-content';

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
              Who Should Apply?
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              This advanced certification is designed for experienced financial professionals ready to specialize in high-net-worth advisory.
            </p>
          </div>

          {/* Target Audience Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-gradient-to-br from-purple/5 to-purple/10 rounded-xl p-8 border-2 border-purple/20">
                <h3 className="text-2xl font-bold text-purple mb-4">{audience.title}</h3>
                <p className="text-charcoal mb-6">{audience.description}</p>
                <div className="space-y-3">
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
          <div className="bg-cool-gray rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-purple mb-6 text-center">Minimum Prerequisites</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-purple mb-2">Qualification</h4>
                <p className="text-charcoal text-sm">CFP® certification or equivalent professional designation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-purple mb-2">Experience</h4>
                <p className="text-charcoal text-sm">Minimum 3-5 years advising affluent or high-net-worth clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-purple mb-2">Commitment</h4>
                <p className="text-charcoal text-sm">12-15 months part-time study while maintaining practice</p>
              </div>
            </div>
          </div>

          {/* Enrollment Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-purple mb-8 text-center">Your Enrollment Journey</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrollmentProcess.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-6 border-2 border-purple/10 hover:border-purple/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple to-purple-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h4 className="font-bold text-purple">{step.title}</h4>
                  </div>
                  <p className="text-sm text-charcoal">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-6 border-l-4 border-gold mb-8">
            <p className="font-semibold text-purple mb-2">⚠️ Limited Seats Available</p>
            <p className="text-charcoal text-sm">
              To maintain program quality and enable personalized attention, we limit each cohort to 25-30 participants. Early registration is strongly encouraged for the inaugural Q1 2026 intake.
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

