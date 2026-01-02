'use client';

import { DollarSign, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function SCFPInvestment() {
  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Program Investment
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              Course Fees & Funding
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Premium education for elite advisors. Contact us for detailed pricing and IBF funding information.
            </p>
          </div>



          {/* Contact for Fees & Funding - Replaces Pricing Table */}
          <div className="bg-gradient-to-br from-purple to-purple-800 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Invest in Your Professional Growth</h3>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Unlock exclusive pricing and funding opportunities for the inaugural cohort. Contact our dedicated program advisors to receive the full fee structure and personalized IBF funding consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/6581117890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </a>
                <a
                  href="mailto:info@fp-edu.com"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
                >
                  Request Fee Schedule
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <p className="mt-6 text-sm text-purple-200">
                *Advisors available Mon-Fri, 9am - 6pm SGT
              </p>
            </div>
          </div>

          {/* Funding Information */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-purple/10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple mb-2">Funding Support</h3>
                <p className="text-charcoal leading-relaxed text-sm">
                  This Program has been accredited under the Skills Framework for Financial Services and is eligible for funding under the IBF Standards Training Scheme (IBF-STS), subject to all eligibility criteria being met.
                </p>
                <div className="mt-4 bg-purple/5 p-4 rounded-lg">
                  <p className="text-charcoal text-sm leading-relaxed mb-4">
                    Participants are advised to assess the suitability of the course and its relevance to his/her business activities or job roles.
                  </p>
                  <p className="text-charcoal text-sm leading-relaxed mb-4">
                    The IBF-STS is available to eligible entities and individuals based on the prevalent funding eligibility, quantum and caps. IBF-STS provides up to 70% course fee subsidy support for direct training costs subject to a cap of S$3,000 per candidate per course subject to all eligibility criteria being met.
                  </p>
                  <a href="https://www.ibf.org.sg" target="_blank" rel="noopener noreferrer" className="text-purple font-bold hover:underline text-sm inline-flex items-center">
                    Find out more on www.ibf.org.sg
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-gold">
            <h3 className="text-2xl font-bold text-purple mb-6 text-center">What's Included in Your Investment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">All module materials</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">In-person masterclasses with expert faculty</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">E-learning platform access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Real-world case studies and materials</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Dual certification upon completion</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Access to elite advisor network</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Lifetime alumni community membership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-purple mb-6">
              Ready to elevate your practice?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#enrollment"
                className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/brochures/scfp-full-program.pdf"
                download
                className="inline-flex items-center justify-center border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
