'use client';

import { ArrowRight, Award } from 'lucide-react';

export default function CPDHero() {
  return (
    <section className="relative bg-gradient-to-br from-teal via-teal/90 to-primary-600 text-white py-20 lg:py-28 mt-28 lg:mt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5" />
            <span className="text-sm font-semibold">IBF-Approved Professional Development</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            CPD Courses
          </h1>

          {/* Subheadline */}
          <p className="text-2xl lg:text-3xl font-semibold mb-4 text-white/90">
            Stay Sharp. Stay Relevant. Stay Ahead.
          </p>

          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Practical, focused training designed for immediate impact. All courses are IBF-approved with CPD hours awarded. Perfect for practicing professionals who refuse to stand still.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#courses"
              className="inline-flex items-center justify-center bg-white text-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              Explore All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-teal transition-all duration-200 w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-sm text-white/80">Active Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">IBF-Approved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">Practical</div>
              <div className="text-sm text-white/80">Real-World Focus</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">Expert</div>
              <div className="text-sm text-white/80">Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

