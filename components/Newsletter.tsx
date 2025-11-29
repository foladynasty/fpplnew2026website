'use client';

import { useState } from 'react';
import { Mail, CheckCircle, BookOpen, Bell, TrendingUp, Award } from 'lucide-react';

export default function Newsletter() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    interest: 'General Information',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-primary-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Expert Insights Delivered
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of financial professionals who trust us for industry insights and career development tips.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start space-x-3 text-white">
              <BookOpen className="w-6 h-6 flex-shrink-0 mt-1" />
              <p>Free financial planning resources and tools</p>
            </div>
            <div className="flex items-start space-x-3 text-white">
              <Bell className="w-6 h-6 flex-shrink-0 mt-1" />
              <p>Course updates and early-bird enrollment opportunities</p>
            </div>
            <div className="flex items-start space-x-3 text-white">
              <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" />
              <p>Industry insights from expert trainers</p>
            </div>
            <div className="flex items-start space-x-3 text-white">
              <Award className="w-6 h-6 flex-shrink-0 mt-1" />
              <p>Career development strategies and success tips</p>
            </div>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                  I'm interested in:
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option>CFP® Certification</option>
                  <option>SCFP-HNWI Advanced Certification</option>
                  <option>CPD Courses</option>
                  <option>Corporate Training</option>
                  <option>General Information</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Subscribe Now
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-2xl p-12 shadow-2xl text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for subscribing!</h3>
              <p className="text-gray-600">
                Check your inbox for a welcome message and your first resource.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


