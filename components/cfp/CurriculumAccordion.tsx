'use client';

import { useState } from 'react';
import { ChevronDown, BookOpen, Clock, Target } from 'lucide-react';
import { curriculumModules } from '@/lib/cfp-content';

export default function CurriculumAccordion() {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Comprehensive Curriculum
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              What You'll Master
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Six comprehensive modules covering every aspect of financial planning. From insurance to investments, tax to estate planning—master it all.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-slate-gray">Core Modules</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">255+</div>
              <div className="text-sm text-slate-gray">Contact Hours</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Target className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-slate-gray">Comprehensive Coverage</div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-4 mb-12">
            {curriculumModules.map((module, index) => (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all"
              >
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cool-gray/50 transition-colors"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-slate-gray">{module.description}</p>
                    </div>
                    <div className="text-sm font-semibold text-gold px-3 py-1 bg-gold/10 rounded-full">
                      {module.duration}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-primary ml-4 transition-transform flex-shrink-0 ${
                      openModule === module.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Module Content */}
                {openModule === module.id && (
                  <div className="px-6 py-6 border-t border-cool-gray bg-gradient-to-br from-cool-gray/30 to-white">
                    <h4 className="font-bold text-primary mb-4 text-lg">Topics Covered:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-charcoal">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Exam Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Examination Format</h3>
            <p className="text-charcoal mb-6 leading-relaxed">
              Each module concludes with a comprehensive examination testing your understanding and application of financial planning concepts. Exams combine multiple-choice questions with case study analysis to ensure you can apply knowledge in real-world scenarios.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cool-gray rounded-lg p-4">
                <div className="font-bold text-primary mb-2">Format</div>
                <div className="text-sm text-charcoal">Multiple choice + case studies</div>
              </div>
              <div className="bg-cool-gray rounded-lg p-4">
                <div className="font-bold text-primary mb-2">Duration</div>
                <div className="text-sm text-charcoal">2-3 hours per module</div>
              </div>
              <div className="bg-cool-gray rounded-lg p-4">
                <div className="font-bold text-primary mb-2">Support</div>
                <div className="text-sm text-charcoal">Practice exams & revision classes</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#investment"
              download
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Download Detailed Curriculum PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

