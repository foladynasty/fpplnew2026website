import { Building2, Clock, DollarSign, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function CorporateTraining() {
  return (
    <section id="corporate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
              Corporate Solutions
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Elevate Your Team's Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Customized Training Programs for Financial Institutions
            </p>
          </div>

          {/* Body Content */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Partner with Singapore's premier financial education provider to transform your advisory team. With 26 years of experience training over 20,000 professionals, we understand what it takes to build high-performing teams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Our corporate programs are tailored to your organization's specific goals, delivered on your schedule, and designed for measurable results. Whether you're onboarding new advisors, upskilling your team, or pursuing specialized certifications, we have the expertise and flexibility to support your objectives.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border-2 border-primary-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Curriculum</h3>
                    <p className="text-gray-700">
                      Aligned with your business objectives, company products, and organizational culture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Delivery</h3>
                    <p className="text-gray-700">
                      Choose onsite at your premises, online delivery, hybrid models, or weekend/evening options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Measurable Results</h3>
                    <p className="text-gray-700">
                      Pre and post-training assessments, certification tracking, compliance assurance, and enhanced team capability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white mb-10">
              <h3 className="text-2xl font-bold mb-6 text-primary-100">What We Offer:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>Customized CFP® pathways for in-house cohorts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>HNWI advisory training and specialist certifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>Product-specific certifications and compliance training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>New advisor onboarding programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>Annual CPD hour fulfillment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>Bespoke workshops addressing specific skill gaps</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#corporate-contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Request Corporate Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

