'use client';

import { Target, TrendingUp, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Immediate Impact',
    description: 'Practical strategies you can apply in your practice right away—not theoretical concepts.',
    color: 'text-teal'
  },
  {
    icon: TrendingUp,
    title: 'Stay Ahead',
    description: 'Keep pace with evolving markets, regulations, and client expectations in Singapore\'s dynamic financial landscape.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from seasoned practitioners with decades of real-world experience, not just academic credentials.',
    color: 'text-purple-600'
  },
  {
    icon: Award,
    title: 'IBF-Approved',
    description: 'All courses meet IBF standards and award CPD hours. Many are eligible for IBF-STS funding support.',
    color: 'text-primary-600'
  }
];

export default function CPDWhyChooseUs() {
  return (
    <section className="py-16 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Our CPD Courses?
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We don't do theory for theory's sake. Our CPD courses are built for busy professionals who need practical, actionable insights they can use immediately.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

