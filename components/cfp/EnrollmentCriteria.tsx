'use client';

import { CheckCircle, GraduationCap, Briefcase, FileText, UserCheck, Calendar, ArrowRight } from 'lucide-react';
import { enrollmentSteps } from '@/lib/cfp-content';

export default function EnrollmentCriteria() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Start Your Journey
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Who Can Enroll?
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Whether you're starting fresh or advancing your career, we have a pathway for you. Here's what you need to know about eligibility and enrollment.
            </p>
          </div>

          {/* Eligibility Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* AFP Criteria */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/20">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">AFP® Level</h3>
              <p className="text-slate-gray mb-6">Foundation entry point for aspiring financial planners.</p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Academic</div>
                    <div className="text-sm text-charcoal">Diploma or Degree in any discipline</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">FPAS Exam</div>
                    <div className="text-sm text-charcoal">Pass Rules & Regulations exam</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Membership</div>
                    <div className="text-sm text-charcoal">FPAS student member</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AWP Criteria */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/20">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">AWP® Level</h3>
              <p className="text-slate-gray mb-6">Intermediate specialization in wealth planning.</p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Prerequisites</div>
                    <div className="text-sm text-charcoal">Completed AFP® certification</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Experience</div>
                    <div className="text-sm text-charcoal">1 year relevant work (recommended)</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Membership</div>
                    <div className="text-sm text-charcoal">FPAS member in good standing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CFP Criteria */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl p-8 border-2 border-gold/40">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gold mb-4">CFP® Level</h3>
              <p className="text-slate-gray mb-6">The global gold standard certification.</p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Prerequisites</div>
                    <div className="text-sm text-charcoal">AFP® and AWP® completed</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Academic</div>
                    <div className="text-sm text-charcoal">Bachelor's degree or equivalent</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary text-sm">Experience</div>
                    <div className="text-sm text-charcoal">3 years full-time relevant work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FPAS Membership Info */}
          <div className="bg-cool-gray rounded-2xl p-8 mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  FPAS Exam & Student Membership
                </h3>
                <p className="text-charcoal leading-relaxed">
                  Before starting your CFP® journey, you must pass the Financial Planning Association of Singapore (FPAS) exam and become a student member. This exam covers the Rules and Regulations governing financial planning in Singapore.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">What's Covered:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-charcoal">Financial planning regulations in Singapore</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-charcoal">Professional conduct and ethics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-charcoal">Client confidentiality requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Membership Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-charcoal">Access to industry resources and updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-charcoal">Networking with financial planning professionals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-charcoal">Eligibility for CFP® certification pathway</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enrollment Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Your Enrollment Journey
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrollmentSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h4 className="font-bold text-primary">{step.title}</h4>
                  </div>
                  <p className="text-sm text-charcoal">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#study-options"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View Course Schedule
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

