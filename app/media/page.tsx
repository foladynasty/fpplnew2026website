'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaHero from '@/components/media/MediaHero';
import MediaCard from '@/components/media/MediaCard';
import ResourceCard from '@/components/media/ResourceCard';
import {
  pressMedia,
  newsAnnouncements,
  publications,
  videos,
  downloadableResources,
  getFeaturedMedia,
  getFeaturedResources
} from '@/lib/media-content';
import { Newspaper, Award, FileText, Video, Download, Bell } from 'lucide-react';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('all');

  const getSectionData = () => {
    switch (activeTab) {
      case 'press':
        return { media: pressMedia, showResources: false };
      case 'news':
        return { media: newsAnnouncements, showResources: false };
      case 'publications':
        return { media: publications, showResources: false };
      case 'videos':
        return { media: videos, showResources: false };
      case 'resources':
        return { media: [], showResources: true };
      default:
        return { media: getFeaturedMedia(), showResources: true };
    }
  };

  const { media, showResources } = getSectionData();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero with Tabs */}
      <MediaHero 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Featured Section - Only show when "all" is selected */}
      {activeTab === 'all' && (
        <section className="py-16 bg-cool-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Featured Content</h2>
                <p className="text-lg text-charcoal">
                  Our most popular resources and recent media coverage
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFeaturedMedia().map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Press & Media Coverage Section */}
      {(activeTab === 'all' || activeTab === 'press') && pressMedia.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">Press & Media Coverage</h2>
                  <p className="text-slate-gray">Featured in leading financial publications</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {(activeTab === 'all' ? pressMedia.slice(0, 4) : pressMedia).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>

              {activeTab === 'all' && pressMedia.length > 4 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setActiveTab('press')}
                    className="inline-block bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All Press Coverage
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* News & Announcements Section */}
      {(activeTab === 'all' || activeTab === 'news') && newsAnnouncements.length > 0 && (
        <section className="py-16 bg-cool-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-600 p-3 rounded-xl">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">News & Announcements</h2>
                  <p className="text-slate-gray">Latest updates from Financial Perspectives</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeTab === 'all' ? newsAnnouncements.slice(0, 6) : newsAnnouncements).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>

              {activeTab === 'all' && newsAnnouncements.length > 6 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setActiveTab('news')}
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All News
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Publications Section */}
      {(activeTab === 'all' || activeTab === 'publications') && publications.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-600 p-3 rounded-xl">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">Publications & Articles</h2>
                  <p className="text-slate-gray">Expert insights and research</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {(activeTab === 'all' ? publications.slice(0, 4) : publications).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>

              {activeTab === 'all' && publications.length > 4 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setActiveTab('publications')}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All Publications
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Videos Section */}
      {(activeTab === 'all' || activeTab === 'videos') && videos.length > 0 && (
        <section className="py-16 bg-cool-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-600 p-3 rounded-xl">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">Video Gallery</h2>
                  <p className="text-slate-gray">Watch our expert insights and program overviews</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeTab === 'all' ? videos.slice(0, 3) : videos).map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>

              {activeTab === 'all' && videos.length > 3 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setActiveTab('videos')}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All Videos
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Downloadable Resources Section */}
      {(activeTab === 'all' || activeTab === 'resources') && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal p-3 rounded-xl">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">Downloadable Resources</h2>
                  <p className="text-slate-gray">Brochures, guides, and course materials</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeTab === 'all' ? getFeaturedResources() : downloadableResources).map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>

              {activeTab === 'all' && downloadableResources.length > getFeaturedResources().length && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setActiveTab('resources')}
                    className="inline-block bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All Resources
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Media Kit & Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Media Kit */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Media Kit</h3>
                <p className="text-white/90 mb-6">
                  Access our official logos, brand guidelines, high-resolution images, and company information.
                </p>
                <a
                  href="/downloads/fp-media-kit.zip"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Media Kit
                </a>
              </div>

              {/* Press Contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Press Inquiries</h3>
                <p className="text-white/90 mb-6">
                  For media inquiries, interview requests, or press releases, contact our communications team.
                </p>
                <a
                  href="mailto:media@fp-edu.com"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  Contact Press Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

