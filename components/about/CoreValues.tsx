'use client';

import { coreValues } from '@/lib/about-content';

export default function CoreValues() {
  return (
    <section id="values" className="py-20 bg-cool-gray scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The principles that define who we are and how we serve
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-teal transition-colors">
                  {value.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              These values guide every decision we make and every interaction we have with our students, partners, and the community we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

