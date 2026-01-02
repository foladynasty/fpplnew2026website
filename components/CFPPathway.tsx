import { CheckCircle, Download, ArrowRight } from 'lucide-react';

export default function CFPPathway() {
  return (
    <section id="cfp-pathway" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Singapore's CFP® Pioneer Since 1999
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              The CFP® Certification Pathway
            </h2>
            <p className="text-xl text-slate-gray">
              From Foundation to Professional. Your Journey to the Gold Standard.
            </p>
          </div>

          {/* Body Content */}
          <div className="mb-12">
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              Achieve the globally recognized CFP® certification through Singapore's most established training partner. Navigate the <strong>AFP<sup>CM</sup>, AWP<sup>CM</sup>, and CFP®</strong> levels with expert guidance, comprehensive materials, and unwavering support from trainers who understand the certification journey inside and out.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-10">
              Whether you're starting fresh or advancing your existing practice, we'll guide you every step with expert trainers, comprehensive materials, and unmatched support.
            </p>

            {/* Why Choose Section */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-10 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Why Choose Financial Perspectives:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">CFP®-Certified Trainers</h4>
                    <p className="text-charcoal">Learn from industry veterans and leaders who hold the CFP® certification themselves</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Time-Tested Study Materials</h4>
                    <p className="text-charcoal">Comprehensive in-house materials specially developed to complement FPAS guidebooks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Extensive Exam Preparation</h4>
                    <p className="text-charcoal">2,000+ online practice questions through our Learning Management System (LMS)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Flexible Learning Options</h4>
                    <p className="text-charcoal">Interactive e-learning courseware supporting reverse classroom and self-paced study</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Personal Mentoring</h4>
                    <p className="text-charcoal">One-on-one coaching and guidance with experienced lecturers throughout your journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Exclusive Alumni Network</h4>
                    <p className="text-charcoal">Join regular alumni meetings and stay informed on industry developments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Journey - Horizontal Flow */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-primary mb-10 text-center">The Journey:</h3>

              {/* Desktop Horizontal Timeline */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-gold"></div>

                  {/* Journey Steps */}
                  <div className="grid grid-cols-3 gap-8 relative">
                    {/* Step 1: AFPCM */}
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center shadow-xl relative z-10">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">1</div>
                            <div className="text-xs text-white/90 font-semibold">STEP</div>
                          </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-primary">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <h4 className="text-xl font-bold text-primary mb-2">AFP<sup>CM</sup></h4>
                        <p className="text-sm font-semibold text-charcoal mb-2">Foundation Level</p>
                        <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                          <p className="text-sm font-bold text-primary">3-6 months</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: AWPCM */}
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center shadow-xl relative z-10">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">2</div>
                            <div className="text-xs text-white/90 font-semibold">STEP</div>
                          </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-gold">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all">
                        <h4 className="text-xl font-bold text-primary mb-2">AWP<sup>CM</sup></h4>
                        <p className="text-sm font-semibold text-charcoal mb-2">Wealth Planning Specialist</p>
                        <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                          <p className="text-sm font-bold text-primary">6-9 months</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: CFP - Gold Standard */}
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold-700 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-4 ring-gold/30">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">3</div>
                            <div className="text-xs text-white/90 font-semibold">GOAL</div>
                          </div>
                        </div>
                        {/* Star Icon */}
                        <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                          <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl p-6 shadow-lg border-2 border-gold/40 hover:border-gold/60 transition-all">
                        <h4 className="text-xl font-bold text-gold mb-2">CFP®</h4>
                        <p className="text-sm font-semibold text-charcoal mb-2">Global Gold Standard</p>
                        <div className="inline-block bg-gold/20 px-4 py-2 rounded-full">
                          <p className="text-sm font-bold text-gold">12-18 months</p>
                        </div>
                        <p className="text-xs text-slate-gray mt-3">Complete Pathway</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Vertical Timeline */}
              <div className="md:hidden space-y-6">
                <div className="relative pl-8 border-l-4 border-primary/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                  <div className="pb-8">
                    <h4 className="text-xl font-bold text-primary mb-2">AFP<sup>CM</sup> → Foundation Level</h4>
                    <p className="text-slate-gray">3-6 months</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-4 border-primary/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                  <div className="pb-8">
                    <h4 className="text-xl font-bold text-primary mb-2">AWP<sup>CM</sup> → Wealth Planning Specialist</h4>
                    <p className="text-slate-gray">6-9 months</p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">CFP® → Global Gold Standard</h4>
                    <p className="text-slate-gray">12-18 months complete pathway</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cfp"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Explore the Complete CFP® Pathway
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/cfp#investment"
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CFP® Program Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


