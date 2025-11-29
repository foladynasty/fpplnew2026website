'use client';

import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import { stats } from '@/lib/about-content';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-gold text-white py-20 lg:py-28 mt-28 lg:mt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-semibold">Centre for PEACE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Financial Perspectives
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-6 max-w-4xl">
            Centre for Professional Excellence in Advisory Competency & Ethics
          </p>

          <p className="text-lg text-white/80 mb-10 max-w-4xl leading-relaxed">
            Since 1999, we've been Singapore's premier provider of CFP® certification education and professional development programs for financial services professionals. With 26 years of excellence and over 20,000 graduates, we continue to set the standard for financial planning education in Asia.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm lg:text-base text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

