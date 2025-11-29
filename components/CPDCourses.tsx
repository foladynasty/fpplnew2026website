import { TrendingUp, Shield, Target, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    slug: 'aum-growth',
    icon: TrendingUp,
    title: "Supercharge Your AUM Growth",
    challenge: "Every wealth manager wants more assets under management. Few know the proven strategies that actually work.",
    solution: "Master client acquisition, retention tactics, and wallet share growth strategies that top performers use to scale their practice. Real frameworks. Measurable results.",
    perfectFor: "Wealth Managers, Relationship Managers, Financial Advisors",
    details: "1-2 Days | In-Person Workshop | 8 CPD Hours | IBF-FTS Approved",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    slug: 'ilp-sales-masterclass',
    icon: Shield,
    title: "ILP Sales Masterclass",
    challenge: "Investment-linked policies are complex. Selling them compliantly while meeting client needs requires expertise.",
    solution: "From product mechanics to suitability assessment to objection handling—master every aspect of ILP advisory with confidence and compliance.",
    perfectFor: "Insurance Advisors, Financial Consultants, Bank RMs",
    details: "1-2 Days | In-Person Workshop | 6 CPD Hours | IBF-FTS Approved",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    slug: 'master-fund-advisor',
    icon: Target,
    title: "Master Fund Advisor",
    challenge: "Clients trust you with fund recommendations. Are you equipped with the analysis frameworks and due diligence skills they deserve?",
    solution: "Become the fund expert your clients need. Master fund evaluation, portfolio construction, and risk-adjusted performance analysis to deliver confident recommendations.",
    perfectFor: "Financial Advisors, Investment Consultants, Wealth Managers",
    details: "Multi-Day Certification | 14 CPD Hours | Master Fund Adviser Designation",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    slug: 'estate-legacy-planning',
    icon: Heart,
    title: "Holistic Estate & Legacy Planning (HELP)",
    challenge: "High-net-worth clients need sophisticated estate planning. Can you guide them through trusts, succession, and multi-generational wealth transfer?",
    solution: "Master the full spectrum of estate planning—from wills and trusts to philanthropy and legacy preservation. Serve your wealthy clients at the highest level.",
    perfectFor: "Advisors Serving HNWIs, Family Offices, Aging Clients",
    details: "Workshop Format | 10 CPD Hours | Case Study-Based Learning",
    color: "from-orange-500 to-red-600",
  },
];

export default function CPDCourses() {
  return (
    <section id="cpd-courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
              Continuing Professional Development
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              CPD Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay Sharp. Stay Relevant. Stay Ahead.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Practical, focused training designed for immediate impact. All courses are IBF-approved with CPD hours awarded. Perfect for practicing professionals who refuse to stand still.
            </p>
          </div>

          {/* Courses Grid - 2 Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border-gray hover:border-teal/40 group"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${course.color} p-6 flex items-center justify-center`}>
                  <course.icon className="w-16 h-16 text-white" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-teal transition-colors">
                    {course.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div>
                      <p className="font-semibold text-primary text-sm mb-1">The Challenge:</p>
                      <p className="text-charcoal text-sm leading-relaxed">{course.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm mb-1">The Solution:</p>
                      <p className="text-charcoal text-sm leading-relaxed">{course.solution}</p>
                    </div>
                  </div>

                  <div className="bg-cool-gray rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-primary mb-1">Perfect For:</p>
                    <p className="text-charcoal text-sm">{course.perfectFor}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-slate-gray font-medium">{course.details}</p>
                  </div>

                  <Link
                    href={`/cpd/${course.slug}`}
                    className="block text-center bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                  >
                    Learn More & Register
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center">
            <Link
              href="/cpd"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View All CPD Courses & Upcoming Dates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

