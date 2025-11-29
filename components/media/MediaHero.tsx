'use client';

import { Newspaper, Video, FileText, Award } from 'lucide-react';

interface MediaHeroProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MediaHero({ activeTab, onTabChange }: MediaHeroProps) {
  const tabs = [
    { id: 'all', label: 'All Media', icon: Newspaper },
    { id: 'press', label: 'Press & Coverage', icon: Award },
    { id: 'news', label: 'News & Announcements', icon: Newspaper },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'resources', label: 'Resources', icon: FileText }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gold via-gold/90 to-primary-600 text-white py-20 lg:py-28 mt-28 lg:mt-32">
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
            <Newspaper className="w-5 h-5" />
            <span className="text-sm font-semibold">Media & Resources Center</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Media & Resources
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-4 max-w-3xl">
            26 Years of Thought Leadership in Financial Education
          </p>

          <p className="text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
            Explore our press coverage, latest news, expert publications, video content, and downloadable resources. Stay informed with Singapore's #1 CFP® education provider.
          </p>

          {/* Tab Navigation */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 inline-flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-primary shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">26</div>
              <div className="text-sm text-white/80">Years Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">20K+</div>
              <div className="text-sm text-white/80">Graduates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">#1</div>
              <div className="text-sm text-white/80">CFP® Provider</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">FPSB</div>
              <div className="text-sm text-white/80">Certified Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

