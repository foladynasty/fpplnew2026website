import { Award, CheckCircle, Users, Lightbulb } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: "Singapore's CFP® Pioneer",
    description: "Since 1999, we've set the standard for financial education excellence in Singapore. As the pioneer CFP® training provider, we've helped shape the financial advisory profession and trained over 20,000 professionals across Asia.",
    stat: "26 Years of Excellence",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: CheckCircle,
    title: "Industry Approved & Trusted",
    description: "Our programs carry the weight of industry recognition. IBF-approved, FPSB-certified, and backed by decades of proven results — your certification matters in the market and opens doors to career advancement.",
    stat: "IBF + FPSB Accredited",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "Learn from the Best",
    description: "Our trainers aren't just educators — they're seasoned practitioners who bring real-world experience into every session. Learn from professionals who've navigated the challenges you'll face in today's dynamic financial services environment.",
    stat: "25+ Years Combined Experience",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Lightbulb,
    title: "Real-World Application",
    description: "Theory informs, but practice transforms. Our curriculum emphasizes hands-on skills, case studies, and real scenarios you'll encounter with actual clients. Graduate ready to excel from day one.",
    stat: "100s of Case Studies",
    color: "from-orange-500 to-red-600",
  },
];

export default function WhyFP() {
  return (
    <section id="why-fp" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Difference That Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you choose Financial Perspectives, you're choosing Singapore's most trusted partner in financial education excellence.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${pillar.color} p-6 flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full">
                    <p className="font-bold text-gray-900 text-lg">
                      {pillar.stat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


