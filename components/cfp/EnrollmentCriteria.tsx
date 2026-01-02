'use client';

import { CheckCircle, GraduationCap, Briefcase, FileText, UserCheck, Calendar, ArrowRight, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function EnrollmentCriteria() {
  const [openSection, setOpenSection] = useState<string | null>('new-students');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Start Your Journey
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Enrollment Criteria & Procedures
            </h2>
            <p className="text-xl text-slate-gray leading-relaxed">
              Everything you need to know to apply for the CFP® Certification Education Program.
            </p>
          </div>

          {/* Enrollment Criteria Section */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-gold" />
              Enrollment Criteria
            </h3>
            <p className="text-lg text-charcoal mb-6">
              Applicants who wish to apply for the CFP® Certification Education Program must fulfill the following criteria:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5 mr-4" />
                <div>
                  <span className="font-bold text-primary block mb-1">Academic Qualification</span>
                  <span className="text-charcoal">GCE 'A' Level Certificate (i.e. 2 'A's and 2 'O's), or Diploma</span>
                </div>
              </li>
              <li className="flex items-center justify-center text-slate-gray font-bold text-sm uppercase tracking-widest">
                — OR —
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <Briefcase className="w-6 h-6 text-gold flex-shrink-0 mt-0.5 mr-4" />
                <div>
                  <span className="font-bold text-primary block mb-1">Work Experience</span>
                  <span className="text-charcoal">Minimum 3 years of working experience in any profession</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Enrollment Procedures Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Enrollment Procedures</h3>

            {/* Important Notes */}
            <div className="bg-cool-gray rounded-xl p-6 mb-8 border-l-4 border-gold">
              <h4 className="font-bold text-primary mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-gold" />
                Important Notes
              </h4>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>To meet the "Education" requirement, candidates must register with a FPAS Approved Education Provider (EP) to enrol for the program under Classroom Tutorial, or Self-study/Distance Learning option, before attempting the examination.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Candidates must register via FP who will process the course, exam and funding registration on your behalf.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fees include course fee paid to FP and exam fee paid to FPAS; FP is acting as a collection agent on behalf of FPAS in exam registration.</span>
                </li>
              </ul>
            </div>

            {/* Module Fees Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8">
              <div className="bg-primary p-4 text-white font-bold text-lg">
                Module Fees
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-primary w-1/3">Module</th>
                      <th className="p-4 font-bold text-primary">Fees Payable to FPAS (Including GST)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-semibold text-charcoal">Module 1</td>
                      <td className="p-4 text-charcoal">
                        $321 including GST <span className="text-sm text-slate-gray block mt-1">(applies to New Student registration. Subsequent M1 exam fee (upon retake) is $192.60)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-semibold text-charcoal">Module 2 - 5</td>
                      <td className="p-4 text-charcoal">$192.60 including GST</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-semibold text-charcoal">Module 6</td>
                      <td className="p-4 text-charcoal">$299.60 including GST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-primary/5 p-4 text-sm text-primary font-medium border-t border-primary/10">
                Under the MAS Enhanced Training Support for IBF-STS Programs (i.e. CFP), exam fees will also enjoy IBF-STS Funding support.
              </div>
            </div>

            {/* Student Type Toggles */}
            <div className="space-y-4">
              {/* New Students */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('new-students')}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-xl font-bold text-primary">New Students</span>
                  {openSection === 'new-students' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-gray" />
                  )}
                </button>
                {openSection === 'new-students' && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 animate-fade-in">
                    <p className="mb-4 text-charcoal">
                      If this is your first time signing up for the CFP® Certification Education Program, please fill up the <a href="https://fp-edu.com/course-information/cfp-course-registration/" target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">CFP® Course Registration Form</a> and submit the following documents online:
                    </p>
                    <ol className="list-decimal pl-5 space-y-3 text-charcoal">
                      <li>
                        <strong>Local Students:</strong> NRIC or Passport identification<br />
                        <strong>Foreign Students:</strong> Employment Pass or Student Pass
                      </li>
                      <li>Business card or Staff pass (if available)</li>
                      <li>Student metric card/ entry confirmation letter (for Tertiary Students)</li>
                      <li>Certificate of highest academic level attained (i.e. Degree/ Diploma)</li>
                      <li>Exemption Letter issued by FPAS for module(s) granted exemption (if applicable)</li>
                      <li>
                        All our study materials will be available online via the LMS (e-learning portal). You do not need to come to our office. Course fee payment can be made online via PayNow UEN (199604795C) or via cheque mailed to our office. Please refer to the enrolment terms and conditions found in the course registration acknowledgement email we sent to you. Your course registration is only confirmed upon receipt of payment.
                      </li>
                    </ol>
                  </div>
                )}
              </div>

              {/* Existing FP Students */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('existing-students')}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-xl font-bold text-primary">Existing FP Students</span>
                  {openSection === 'existing-students' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-gray" />
                  )}
                </button>
                {openSection === 'existing-students' && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 animate-fade-in">
                    <p className="mb-4 text-charcoal">
                      For existing students, please submit the <a href="https://fp-edu.com/course-information/cfp-course-registration/" target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">CFP® Course Registration Form</a> online with the respective course fees.
                    </p>
                    <p className="text-charcoal">
                      Take note that we no longer provide the PassAssure Option. All our study materials will be available online via the LMS (e-learning portal). You do not need to come to our office. Course fee payment can be made online via PayNow UEN (199604795C) or via cheque mailed to our office. Please refer to the enrolment terms and conditions found in the course registration acknowledgement email we sent to you. Your course registration is only confirmed upon receipt of payment.
                    </p>
                  </div>
                )}
              </div>

              {/* Foreign Students */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('foreign-students')}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-xl font-bold text-primary">Foreign Students</span>
                  {openSection === 'foreign-students' ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-gray" />
                  )}
                </button>
                {openSection === 'foreign-students' && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 animate-fade-in">
                    <ul className="list-disc pl-5 space-y-3 text-charcoal">
                      <li>
                        Foreign students who holds a valid Singapore Employment Pass or Student Pass may refer to procedures under <strong>"New Students"</strong> above.
                      </li>
                      <li>
                        Foreign students who are not residing in Singapore are required to submit your supporting documents to FP for enrolment review before acceptance into the program. Please email supporting documents for enrolment review to us.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#study-options"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View Course Schedule
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
