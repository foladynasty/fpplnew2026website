'use client';

import { Award, Linkedin, ArrowRight } from 'lucide-react';
import { trainersData } from '@/lib/cfp-content';
import { useState } from 'react';

export default function TrainersGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedTrainers = showAll ? trainersData : trainersData.slice(0, 3);

  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Expert Instructors
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Learn from the Best
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Our trainers aren't just educators—they're seasoned CFP® professionals with decades of real-world experience in wealth management, financial planning, and advisory services.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-gold mb-2">25+</div>
              <div className="text-sm text-slate-gray">Years Combined Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-slate-gray">CFP® Certified</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <div className="text-sm text-slate-gray">Students Trained</div>
            </div>
          </div>

          {/* Trainers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedTrainers.map((trainer, index) => {
              const isFeatured = index < 3;
              return (
                <div
                  key={trainer.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${isFeatured ? 'border-2 border-gold' : 'border-2 border-gray-200'
                    }`}
                >
                  {isFeatured && (
                    <div className="bg-gold text-white text-xs font-bold px-4 py-2 text-center flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" />
                      FEATURED TRAINER
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-teal transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-sm text-gold font-semibold mb-3 leading-tight">{trainer.title}</p>

                    <p className="text-xs text-slate-gray uppercase tracking-wide mb-4 border-t border-gray-200 pt-3">
                      {trainer.experience}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.credentials.map((credential, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full">
                      View Profile
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {trainersData.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200"
              >
                {showAll ? 'Show Less' : 'Meet the Full Team'}
              </button>
            </div>
          )}

          {/* Why Our Trainers Matter */}
          <div className="mt-16 bg-white rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Why Our Trainers Make the Difference
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Practitioner Experience</h4>
                  <p className="text-sm text-charcoal">All our trainers have held senior positions in wealth management, private banking, or financial advisory—they've lived what they teach.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Real-World Case Studies</h4>
                  <p className="text-sm text-charcoal">Learn through actual client scenarios and market situations our trainers have navigated in their careers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Industry Connections</h4>
                  <p className="text-sm text-charcoal">Benefit from your trainers' extensive networks and insights into career opportunities and industry trends.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Mentorship Approach</h4>
                  <p className="text-sm text-charcoal">More than instructors, our trainers serve as mentors who guide your professional development beyond the classroom.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

