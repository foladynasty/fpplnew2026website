import { Sparkles, Award, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function SCFPHNWISection() {
  return (
    <section id="scfp-hnwi" className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge and Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-teal text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>NEW 2026 - LAUNCHING Q1</span>
            </div>
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Advanced Certification for Experienced Advisors
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-4">
              Specialist Certificate in Financial Planning
            </h2>
            <p className="text-2xl font-semibold text-primary mb-4">
              High-Net-Worth & Family-Owned Business Advisory
            </p>
            <p className="text-xl text-slate-gray">
              Elevate Your Practice. Serve Singapore's Wealthiest.
            </p>
          </div>

          {/* Body Content */}
          <div className="mb-12">
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              The next frontier in your advisory career. This advanced certification program is designed exclusively for experienced financial advisors ready to master the complexities of high-net-worth and family business advisory.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-10">
              Position yourself as the expert Singapore's most affluent clients actively seek. Master bespoke strategies, sophisticated wealth structures, and multi-generational planning that sets you apart in the premium advisory market.
            </p>

            {/* What You'll Achieve */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-purple/20">
              <h3 className="text-2xl font-bold text-purple mb-6 flex items-center">
                <Award className="w-7 h-7 text-gold mr-3" />
                What You'll Achieve:
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Advanced Expertise</h4>
                    <p className="text-charcoal">7 specialized modules (5 core + 1 elective of your choice)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Premium Positioning</h4>
                    <p className="text-charcoal">Serve ultra-high-net-worth individuals and family enterprises with confidence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Dual Certification</h4>
                    <p className="text-charcoal">Earn both SCFP-HNWI™ and IBF-Advanced (Level II) credentials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Competitive Edge</h4>
                    <p className="text-charcoal">Differentiate yourself in Singapore's competitive wealth advisory landscape</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Real-World Application</h4>
                    <p className="text-charcoal">Practical strategies for family succession, wealth structuring, and HNWI engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="bg-gradient-to-br from-purple to-purple-800 rounded-2xl p-8 text-white mb-10">
              <h3 className="text-2xl font-bold mb-4">Program Highlights</h3>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                From market segmentation and client acquisition to sophisticated product structuring and ethical advisory frameworks—this program covers the complete spectrum of HNWI and family business advisory.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                Choose your specialization path with electives in <strong>Gig Economy Planning</strong> or <strong>HNWI Retirement Strategies</strong>.
              </p>
            </div>

            {/* Program Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple/20">
                <h4 className="font-bold text-primary mb-2">Duration</h4>
                <p className="text-charcoal">12-15 months</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple/20">
                <h4 className="font-bold text-primary mb-2">Format</h4>
                <p className="text-charcoal">In-Person Masterclasses + E-Learning</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple/20">
                <h4 className="font-bold text-primary mb-2">Prerequisites</h4>
                <p className="text-charcoal">CFP® or equivalent experience with affluent clients</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/scfp-hnwi"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Discover SCFP-HNWI Program Details
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/scfp-hnwi#faqs"
              className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Register for Free Preview Webinar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

