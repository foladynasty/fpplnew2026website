'use client';

import { Calendar, Filter } from 'lucide-react';

interface EventsHeroProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function EventsHero({ activeFilter, onFilterChange }: EventsHeroProps) {
  const filters = [
    { id: 'all', label: 'All Events', count: 9 },
    { id: 'CFP', label: 'CFP Courses', count: 3 },
    { id: 'CPD', label: 'CPD Courses', count: 4 },
    { id: 'SCFP-HNWI', label: 'SCFP-HNWI', count: 2 }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-teal text-white py-20 lg:py-28 mt-28 lg:mt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-semibold">2025-2026 Course Schedule</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Upcoming Events & Course Calendar
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl">
            Plan ahead. Secure your spot. Transform your career.
          </p>

          <p className="text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
            Browse our complete schedule of CFP® certification courses, CPD programs, and upcoming SCFP-HNWI launch events. Early registration recommended for best availability and early bird pricing.
          </p>

          {/* Filter Tabs */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 inline-flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-white text-primary shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {filter.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? 'bg-primary/10 text-primary'
                    : 'bg-white/20'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Info */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span>Available Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Filling Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Waitlist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

