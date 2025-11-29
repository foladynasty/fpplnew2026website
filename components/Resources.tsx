import { BookOpen, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const resources = [
  {
    id: 1,
    category: "INDUSTRY INSIGHTS",
    icon: TrendingUp,
    title: "5 Trends Shaping HNWI Advisory in 2026",
    excerpt: "From ESG considerations to digital wealth platforms, discover the key trends that will define high-net-worth advisory in the year ahead. Learn how to position your practice for success in an evolving market.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    category: "CAREER DEVELOPMENT",
    icon: BookOpen,
    title: "Why Now Is the Best Time to Pursue CFP® Certification",
    excerpt: "Market demand for qualified financial planners has never been higher. With regulatory changes, aging population demographics, and increasing wealth complexity, here's why 2026 could be your breakthrough year.",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    category: "FUNDING GUIDE",
    icon: DollarSign,
    title: "Understanding IBF-STS Funding for Your Professional Development",
    excerpt: "Maximize your training budget with our comprehensive guide to IBF-STS funding. Learn what's covered, eligibility requirements, application process, and how to make the most of available support for your certification journey.",
    color: "from-green-500 to-emerald-600",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Stay Ahead with Expert Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free resources to keep you current in the evolving world of financial planning and wealth management.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${resource.color} p-6 flex items-center justify-center`}>
                  <resource.icon className="w-12 h-12 text-white" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                    {resource.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {resource.excerpt}
                  </p>
                  <a
                    href={`#resource-${resource.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center">
            <a
              href="#resource-center"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Visit Resource Center
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


