'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, BookOpen, HeadphonesIcon, CheckCircle, Clock, Video, FileText, Users, ArrowRight, GraduationCap, Laptop } from 'lucide-react';

type TabType = 'options' | 'schedule' | 'materials';

const scheduleData = [
  {
    module: "Module 1A",
    title: "Foundations in Financial Planning",
    sessions: [
      { id: 1, date: "Fri, Oct 3, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 2, date: "Fri, Oct 3, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 3, date: "Fri, Oct 10, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 4, date: "Fri, Oct 10, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 5, date: "Fri, Oct 17, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 6, date: "Fri, Oct 17, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 7, date: "Fri, Oct 24, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 8, date: "Fri, Oct 24, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 9, date: "Sat, Nov 1, 2025", time: "9:30am - 1:30pm (4)" },
    ],
    exam: "Wed, 12 November 2025",
    examTime: "2:00PM-5:00PM (3.0 HRS)",
    duration: "35 HRS (Inclusive of Assessment)"
  },
  {
    module: "Module 2A",
    title: "Risk Management & Insurance Planning",
    sessions: [
      { id: 1, date: "Tues, 21 Oct 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 2, date: "Tues, 21 Oct 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 3, date: "Tues, 28 Oct 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 4, date: "Tues, 28 Oct 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 5, date: "Tues, 4 Nov 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 6, date: "Tues, 4 Nov 2025", time: "2:00pm - 5:30pm (3.5)" },
    ],
    exam: "Fri, 14 November 2025",
    examTime: "2:00PM-5:00PM (3.0 HRS)",
    duration: "24 HRS (Inclusive of Assessment)"
  },
  {
    module: "Module 3A",
    title: "Tax Planning & Estate Planning",
    sessions: [
      { id: 1, date: "Wed, Oct 22, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 2, date: "Wed, Oct 22, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 3, date: "Wed, Oct 29, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 4, date: "Wed, Oct 29, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 5, date: "Wed, Nov 5, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 6, date: "Wed, Nov 5, 2025", time: "2:00pm - 5:30pm (3.5)" },
    ],
    exam: "Wed, 19 November 2025",
    examTime: "2:00PM-5:00PM (3.0 HRS)",
    duration: "24 HRS (Inclusive of Assessment)"
  },
  {
    module: "Module 4A",
    title: "Investment Planning",
    sessions: [
      { id: 1, date: "Thurs, Oct 23, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 2, date: "Thurs, Oct 23, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 3, date: "Thurs, Oct 30, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 4, date: "Thurs, Oct 30, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 5, date: "Thurs, Nov 6, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 6, date: "Thurs, Nov 6, 2025", time: "2:00pm - 5:30pm (3.5)" },
    ],
    exam: "Fri, 21 November 2025",
    examTime: "2:00PM-5:00PM (3.0 HRS)",
    duration: "24 HRS (Inclusive of Assessment)"
  },
  {
    module: "Module 5A",
    title: "Retirement Planning",
    sessions: [
      { id: 1, date: "Mon, Oct 27, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 2, date: "Mon, Oct 27, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 3, date: "Mon, Nov 3, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 4, date: "Mon, Nov 3, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 5, date: "Mon, Nov 10, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 6, date: "Mon, Nov 10, 2025", time: "2:00pm - 5:30pm (3.5)" },
    ],
    exam: "Wed, 26 November 2025",
    examTime: "2:00PM-5:00PM (3.0 HRS)",
    duration: "24 HRS (Inclusive of Assessment)"
  },
  {
    module: "Module 6A",
    title: "Financial Plan Construction & Professional Responsibilities",
    sessions: [
      { id: 1, date: "Fri, Oct 31, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 2, date: "Fri, Oct 31, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 3, date: "Fri, Nov 7, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 4, date: "Fri, Nov 7, 2025", time: "2:00pm - 5:30pm (3.5)" },
      { id: 5, date: "Thurs, Nov 13, 2025", time: "9:30am - 1:00pm (3.5)" },
      { id: 6, date: "Thurs, Nov 13, 2025", time: "2:00pm - 5:30pm (3.5)" },
    ],
    exam: "Onsite Exam: Fri, 28 November 2025",
    examTime: "2:00PM-5:30PM (3.5 HRS)",
    duration: "24 HRS (Inclusive of Assessment)"
  }
];

// Inner component that uses useSearchParams
function StudyOptionsTabsContent() {
  const [activeTab, setActiveTab] = useState<TabType>('options');
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const tab = searchParams.get('tab');
      if (tab === 'schedule' || tab === 'materials' || tab === 'options') {
        setActiveTab(tab);
      }
    } catch (error) {
      // Handle build-time rendering
      console.log('Search params not available during build');
    }
  }, [searchParams]);

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
            <p className="text-xl text-slate-gray max-w-4xl mx-auto leading-relaxed">
              Financial Perspectives is committed to helping our students better prepare for the CFP® certification examinations. Our team of lecturers are committed to helping you pass on your first exam attempt. To cater to different learning needs, we offer two different study options.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button
              onClick={() => setActiveTab('options')}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-bold text-lg transition-all ${activeTab === 'options'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-cool-gray text-charcoal hover:bg-primary/10'
                }`}
            >
              <GraduationCap className="w-6 h-6" />
              <span>Study Options</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-bold text-lg transition-all ${activeTab === 'schedule'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-cool-gray text-charcoal hover:bg-primary/10'
                }`}
            >
              <Calendar className="w-6 h-6" />
              <span>Course Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-bold text-lg transition-all ${activeTab === 'materials'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-cool-gray text-charcoal hover:bg-primary/10'
                }`}
            >
              <BookOpen className="w-6 h-6" />
              <span>Materials & Support</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-cool-gray rounded-2xl p-8 md:p-10 min-h-[500px]">

            {/* Study Options Tab */}
            {activeTab === 'options' && (
              <div className="animate-fade-in space-y-8">
                {/* Classroom Option */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-primary">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Classroom Option</h3>
                  </div>

                  <p className="text-lg text-charcoal mb-6 font-medium">
                    For candidates who prefer a structured learning process by attending a series of classroom tutorials for each module.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Conducted by FP's dedicated and experienced lecturers</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Reinforced with slides, notes, and quiz questions</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Supplementary interactive e-learning & "reverse classroom" videos</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Practice exam & review of solutions</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Personal help and direct access to mentoring</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Online Study Materials*:</h4>
                      <ul className="space-y-2 text-charcoal">
                        <li>1. Over 20 hours of Classroom Tutorial Sessions per module</li>
                        <li>2. Tutorial Slides</li>
                        <li>3. Over 50 hours of supplementary content (videos, webinars, practice papers, etc.) on LMS</li>
                      </ul>
                      <div className="mt-6 bg-gold/10 p-4 rounded-lg border border-gold/20">
                        <p className="text-sm text-charcoal">
                          <strong>NOTE:</strong> Candidates are eligible for MAS Enhanced Training Support (IBF-STS) Subsidy of 80% of Course Fee. Can register as company-sponsored or self-sponsored.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-gray italic">
                    *Online materials are accessible for the registered intake only. Course e-guides available for 2 years.
                  </p>
                </div>

                {/* Self-Study Option */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-slate-gray">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-slate-gray/10 rounded-lg flex items-center justify-center">
                      <Laptop className="w-6 h-6 text-slate-gray" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Self-Study / Distant Learning Option</h3>
                  </div>

                  <p className="text-lg text-charcoal mb-6 font-medium">
                    For candidates who prefer to study independently without attending classroom tutorials.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Ideal For:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-slate-gray flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Working professionals with tight schedules</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-slate-gray flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Individuals unable to commit to fixed lectures</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-slate-gray flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">Candidates temporarily based overseas</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Online Study Materials*:</h4>
                      <p className="text-charcoal mb-4">
                        Over 50 hours worth of supplementary content (revision videos, online practice papers, interactive e-learning course ware, etc) hosted on our Learning Management System.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <p className="text-sm text-red-800">
                          <strong>NOTE:</strong> This option DOES NOT QUALIFY for IBF-STS Funding support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div className="animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">77th Intake Lecture Schedule</h3>
                    <p className="text-lg text-slate-gray font-semibold">(November 2025 Exam)</p>
                  </div>
                  <div className="mt-4 md:mt-0 bg-white px-4 py-2 rounded-lg shadow-sm border border-primary/10">
                    <span className="text-sm font-bold text-primary">Applicable for 50% IBF-STS Funding*</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {scheduleData.map((module, idx) => (
                    <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-all">
                      <div className="bg-primary p-4">
                        <div className="text-gold font-bold text-sm uppercase mb-1">{module.module}</div>
                        <h4 className="text-white font-bold text-lg leading-tight">{module.title}</h4>
                      </div>

                      <div className="p-4">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm mb-4">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2 text-slate-gray font-semibold w-12">No.</th>
                                <th className="text-left py-2 text-slate-gray font-semibold">Date</th>
                                <th className="text-right py-2 text-slate-gray font-semibold">Time</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {module.sessions.map((session) => (
                                <tr key={session.id}>
                                  <td className="py-2 text-charcoal">{session.id}</td>
                                  <td className="py-2 text-charcoal font-medium">{session.date}</td>
                                  <td className="py-2 text-right text-slate-gray text-xs">{session.time}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-cool-gray rounded-lg p-3 border border-gray-200">
                          <div className="flex items-start mb-2">
                            <div className="font-bold text-primary text-xs uppercase w-16 flex-shrink-0 mt-0.5">Exam:</div>
                            <div className="text-sm text-charcoal">
                              <div className="font-bold">{module.exam}</div>
                              <div className="text-slate-gray text-xs">{module.examTime}</div>
                            </div>
                          </div>
                          <div className="flex items-center pt-2 border-t border-gray-200">
                            <div className="font-bold text-primary text-xs uppercase w-16 flex-shrink-0">Duration:</div>
                            <div className="text-xs font-bold text-charcoal">{module.duration}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center text-sm text-slate-gray italic">
                  * All dates are correct at the time of printing. FP reserves the right to make changes to the dates listed.
                </div>
              </div>
            )}

            {/* Materials & Support Tab */}
            {activeTab === 'materials' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-primary mb-6">About Our Study Materials</h3>
                <p className="text-lg text-charcoal mb-8 leading-relaxed">
                  We provide comprehensive resources to ensure you are fully prepared for your examinations.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Tutorial Slide Pack */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-teal" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">1) Tutorial Slide Pack</h4>
                    <p className="text-charcoal text-sm leading-relaxed">
                      Provided for candidates who sign up for the Classroom-Tutorial Option to be used in the tutorial sessions.
                    </p>
                  </div>

                  {/* Exam Preparation Class */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">2) Exam Preparation Class</h4>
                    <p className="text-charcoal text-sm leading-relaxed">
                      Intensive coaching in key syllabus areas and guidance on handling exam questions. Trainers engage candidates in discussions of practice questions and work out solutions systematically, providing invaluable insights.
                    </p>
                  </div>

                  {/* E-Learning Content */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">3) Additional E-Learning & Practice</h4>
                    <p className="text-charcoal text-sm leading-relaxed mb-3">
                      Access to our LMS portal containing interactive content, video lessons, exam revision breakdowns, calculator workshops, and practice exam simulations.
                    </p>
                    <p className="text-charcoal text-sm leading-relaxed">
                      Practice exams help identify weak areas and are essential for passing. Passing the exam is mandatory for IBF-STS funding eligibility.
                    </p>
                  </div>

                  {/* Student Support */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <HeadphonesIcon className="w-6 h-6 text-teal" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">4) Student Support</h4>
                    <p className="text-charcoal text-sm leading-relaxed">
                      FP provides excellent student support. Candidates can email queries to <a href="mailto:support@fp-edu.com" className="text-primary font-bold hover:underline">support@fp-edu.com</a> and our lecturers will provide detailed answers. We are committed to helping you pass on your first attempt!
                    </p>
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

// Wrapper component with Suspense boundary
export default function StudyOptionsTabs() {
  return (
    <Suspense fallback={<div className="py-20 bg-white text-center">Loading...</div>}>
      <StudyOptionsTabsContent />
    </Suspense>
  );
}
