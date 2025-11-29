'use client';

import { mission, vision } from '@/lib/about-content';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-10 border-2 border-primary-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {mission.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {mission.content}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gold/10 to-yellow-50 rounded-2xl p-8 lg:p-10 border-2 border-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="bg-gold w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {vision.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {vision.content}
                </p>
              </div>
            </div>
          </div>

          {/* PEACE Badge */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-teal text-white px-8 py-4 rounded-full">
              <p className="text-lg font-bold">
                Professional Excellence in Advisory Competency & Ethics (PEACE)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

