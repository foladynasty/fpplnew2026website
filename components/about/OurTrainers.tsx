'use client';

import { trainers } from '@/lib/about-content';
import { GraduationCap, ArrowRight, Award } from 'lucide-react';

export default function OurTrainers() {
  return (
    <section id="trainers" className="py-20 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-semibold">Expert Faculty</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Trainers
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Learn from seasoned practitioners with decades of real-world experience
            </p>
          </div>

          {/* Trainers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                  trainer.featured ? 'border-gold' : 'border-gray-200'
                } group`}
              >
                {/* Featured Badge */}
                {trainer.featured && (
                  <div className="bg-gold text-white text-xs font-bold px-4 py-2 text-center flex items-center justify-center gap-2">
                    <Award className="w-4 h-4" />
                    FEATURED TRAINER
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-teal transition-colors">
                    {trainer.name}
                  </h3>

                  {/* Credentials */}
                  <p className="text-sm text-gold font-semibold mb-3">
                    {trainer.credentials}
                  </p>

                  {/* Role */}
                  <p className="text-xs text-slate-gray uppercase tracking-wide mb-4 border-t border-gray-200 pt-3">
                    {trainer.role}
                  </p>

                  {/* Specialization Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <a
                    href={trainer.profileUrl || '#'}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full"
                  >
                    View Profile
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-primary-50 to-teal/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Learn from the Best in the Industry
            </h3>
            <p className="text-charcoal mb-6 max-w-2xl mx-auto">
              Our trainers bring decades of practical experience and are committed to your success. They don't just teach theory—they share real-world insights that make a difference.
            </p>
            <a
              href="/cfp"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Explore Our Programs
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

