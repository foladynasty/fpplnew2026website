'use client';

import { useState } from 'react';
import { ChevronDown, BookOpen, Clock, Award } from 'lucide-react';
import { scfpModules } from '@/lib/scfp-content';

export default function SCFPModules() {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  const coreModules = scfpModules.filter(m => m.type === 'core');
  const electiveModules = scfpModules.filter(m => m.type === 'elective');

  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Advanced Curriculum
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              What You'll Master
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Seven specialized modules covering the complete spectrum of HNWI and family business advisory. Five core modules plus one elective of your choice.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <BookOpen className="w-10 h-10 text-purple mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple mb-1">5 + 1</div>
              <div className="text-sm text-slate-gray">Core + Elective</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Clock className="w-10 h-10 text-purple mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple mb-1">148+</div>
              <div className="text-sm text-slate-gray">Contact Hours</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Award className="w-10 h-10 text-purple mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple mb-1">2</div>
              <div className="text-sm text-slate-gray">Certifications</div>
            </div>
          </div>

          {/* Core Modules Accordion */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple mb-6">Core Modules (Required)</h3>
            <div className="space-y-4">
              {coreModules.map((module, index) => (
                <div
                  key={module.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-purple/20 transition-all"
                >
                  {/* Module Header */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cool-gray/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-purple mb-1">
                          {module.title}
                        </h4>
                        <p className="text-sm text-slate-gray">{module.description}</p>
                      </div>
                      <div className="text-sm font-semibold text-gold px-3 py-1 bg-gold/10 rounded-full">
                        {module.duration}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-purple ml-4 transition-transform flex-shrink-0 ${openModule === module.id ? 'transform rotate-180' : ''
                        }`}
                    />
                  </button>

                  {/* Module Content */}
                  {openModule === module.id && (
                    <div className="px-6 py-6 border-t border-cool-gray bg-gradient-to-br from-cool-gray/30 to-white">
                      <h5 className="font-bold text-purple mb-4 text-lg">Topics Covered:</h5>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-charcoal">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Elective Modules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple mb-6">Elective Modules (Choose One)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {electiveModules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gold/40 hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 px-6 py-4 border-b border-gold/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gold bg-gold/20 px-3 py-1 rounded-full">
                        ELECTIVE
                      </span>
                      <span className="text-sm font-semibold text-purple">{module.duration}</span>
                    </div>
                    <h4 className="text-lg font-bold text-purple">
                      {module.title}
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="text-charcoal mb-4">{module.description}</p>
                    <div className="space-y-2">
                      {module.topics.slice(0, 3).map((topic, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-charcoal">{topic}</span>
                        </div>
                      ))}
                      {module.topics.length > 3 && (
                        <p className="text-sm text-slate-gray italic">+ {module.topics.length - 3} more topics</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* CTA */}
          <div className="text-center">
            <a
              href="#enrollment"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Check Eligibility Requirements
              <Award className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

