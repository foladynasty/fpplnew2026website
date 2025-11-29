'use client';

import { useState } from 'react';
import { Calendar, BookOpen, HeadphonesIcon, CheckCircle, Clock, Video, FileText, Users, ArrowRight } from 'lucide-react';
import { studyMaterials } from '@/lib/cfp-content';

type TabType = 'schedule' | 'materials' | 'support';

export default function StudyOptionsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('schedule');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Flexible Learning
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Study Options & Support
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Learn your way with flexible schedules, comprehensive materials, and unmatched support throughout your CFP® journey.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-bold text-lg transition-all ${
                activeTab === 'schedule'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-cool-gray text-charcoal hover:bg-primary/10'
              }`}
            >
              <Calendar className="w-6 h-6" />
              <span>Course Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-bold text-lg transition-all ${
                activeTab === 'materials'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-cool-gray text-charcoal hover:bg-primary/10'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              <span>Study Materials</span>
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-bold text-lg transition-all ${
                activeTab === 'support'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-cool-gray text-charcoal hover:bg-primary/10'
              }`}
            >
              <HeadphonesIcon className="w-6 h-6" />
              <span>Support & Funding</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-cool-gray rounded-2xl p-8 md:p-10 min-h-[500px]">
            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-primary mb-6">Course Schedules</h3>
                <p className="text-lg text-charcoal mb-8 leading-relaxed">
                  Choose from multiple study formats designed to fit your lifestyle and career commitments. All options lead to the same certification.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Weekday Classes */}
                  <div className="bg-white rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary">Weekday Classes</h4>
                    </div>
                    <p className="text-charcoal mb-4">Perfect for full-time students or those with flexible work schedules.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Monday to Friday, 9am - 5pm</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Intensive format, complete faster</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">In-person at training center</span>
                      </li>
                    </ul>
                    <div className="inline-block bg-teal/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-teal">Most Intensive</span>
                    </div>
                  </div>

                  {/* Weekend Classes */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gold/40 hover:border-gold/60 transition-all ring-2 ring-gold/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gold">Weekend Classes</h4>
                      </div>
                      <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">POPULAR</span>
                    </div>
                    <p className="text-charcoal mb-4">Ideal for working professionals balancing career and studies.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Saturdays or Sundays, 9am - 5pm</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Don't disrupt your weekday work</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">In-person at training center</span>
                      </li>
                    </ul>
                    <div className="inline-block bg-teal/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-teal">Most Popular</span>
                    </div>
                  </div>

                  {/* Evening Classes */}
                  <div className="bg-white rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary">Evening Classes</h4>
                    </div>
                    <p className="text-charcoal mb-4">Study after work without sacrificing your weekends.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Weekday evenings, 7pm - 10pm</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Keep your weekends free</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">In-person or online options</span>
                      </li>
                    </ul>
                    <div className="inline-block bg-teal/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-teal">Most Flexible</span>
                    </div>
                  </div>

                  {/* Online/Hybrid */}
                  <div className="bg-white rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary">Online/Hybrid</h4>
                    </div>
                    <p className="text-charcoal mb-4">Maximum flexibility with live online sessions and recorded lectures.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Live virtual classes + recordings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Study from anywhere</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        <span className="text-sm text-charcoal">Optional in-person workshops</span>
                      </li>
                    </ul>
                    <div className="inline-block bg-teal/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-teal">Remote Friendly</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="text-charcoal font-semibold mb-2">📅 Next Intake Starting Soon!</p>
                  <p className="text-sm text-slate-gray">New cohorts begin every quarter. Contact us for exact dates and availability for your preferred schedule.</p>
                </div>
              </div>
            )}

            {/* Materials Tab */}
            {activeTab === 'materials' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-primary mb-6">Comprehensive Study Materials</h3>
                <p className="text-lg text-charcoal mb-8 leading-relaxed">
                  Everything you need to succeed, from printed textbooks to online resources. We've invested in quality materials that enhance your learning experience.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-gold" />
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {studyMaterials.materials.map((material, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-gold" />
                      Learning Support
                    </h4>
                    <ul className="space-y-3">
                      {studyMaterials.support.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-teal" />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Printed Materials</h5>
                    <p className="text-sm text-charcoal">Comprehensive textbooks and workbooks for each module</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="w-8 h-8 text-teal" />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Digital Access</h5>
                    <p className="text-sm text-charcoal">24/7 access to video lectures and online resources</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-teal" />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Practice Exams</h5>
                    <p className="text-sm text-charcoal">Extensive question banks and mock examinations</p>
                  </div>
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === 'support' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-primary mb-6">Support & Funding</h3>
                <p className="text-lg text-charcoal mb-8 leading-relaxed">
                  Maximize your investment with IBF-STS funding support and MAS Enhanced schemes. We'll guide you through the application process.
                </p>

                {/* IBF-STS Funding */}
                <div className="bg-white rounded-xl p-8 mb-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">90%</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">IBF Standards Training Scheme (IBF-STS)</h4>
                      <p className="text-charcoal">
                        Singapore Citizens and PRs working in financial institutions may qualify for up to 90% course fee support.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-primary mb-3">Eligibility:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-charcoal">Singapore Citizen or PR</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-charcoal">Employed in financial services sector</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-charcoal">Employer is IBF member</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-primary mb-3">Funding Coverage:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-charcoal">Up to 90% of course fees</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-charcoal">Covers all 6 CFP® modules</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                          <span className="text-sm text-charcoal">We handle application support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* MAS Enhanced Support */}
                <div className="bg-white rounded-xl p-8 mb-6">
                  <h4 className="text-2xl font-bold text-primary mb-4">MAS Enhanced Support</h4>
                  <p className="text-charcoal mb-4">
                    Additional support available for financial advisors undertaking professional certification. Speak with our course advisors to check your eligibility and maximize available funding.
                  </p>
                  <div className="bg-cool-gray rounded-lg p-4">
                    <p className="text-sm text-charcoal">
                      <strong>Note:</strong> Funding is subject to approval and eligibility criteria. Terms and conditions apply. We recommend applying early to ensure smooth processing.
                    </p>
                  </div>
                </div>

                {/* Student Benefits */}
                <div className="bg-white rounded-xl p-8">
                  <h4 className="text-xl font-bold text-primary mb-4">Student Membership Benefits</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal text-sm">Access to FPAS events and networking</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal text-sm">Industry resources and publications</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal text-sm">Career development support</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal text-sm">Continuing education opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="#investment"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Calculate Your Investment
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

