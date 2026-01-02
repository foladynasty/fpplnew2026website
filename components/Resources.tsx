import { ArrowRight, Newspaper, Video, FileText, Mic } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getWPMediaItems } from '@/lib/media-wordpress';

// Map media types to icons and colors
const typeStyles: Record<string, { icon: typeof Newspaper; color: string }> = {
  'news': { icon: Newspaper, color: 'from-blue-500 to-cyan-600' },
  'press': { icon: Newspaper, color: 'from-purple-500 to-pink-600' },
  'video': { icon: Video, color: 'from-red-500 to-orange-600' },
  'publication': { icon: FileText, color: 'from-green-500 to-emerald-600' },
  'podcast': { icon: Mic, color: 'from-indigo-500 to-purple-600' },
  'resource': { icon: FileText, color: 'from-teal-500 to-cyan-600' },
};

export default async function Resources() {
  // Fetch media items from WordPress
  const allMedia = await getWPMediaItems();

  // Get up to 3 featured items
  const featuredMedia = allMedia.slice(0, 3);

  // If no media items, don't show the section
  if (featuredMedia.length === 0) {
    return null;
  }

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Stay Ahead with Expert Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free resources to keep you current in the evolving world of financial planning and wealth management.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredMedia.map((item) => {
              const style = typeStyles[item.type] || typeStyles['news'];
              const IconComponent = style.icon;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image or Icon Header */}
                  {item.thumbnail ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${style.color}`}>
                        {item.category || item.type.toUpperCase()}
                      </div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-r ${style.color} p-6 flex items-center justify-center`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {!item.thumbnail && (
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                        {item.category || item.type.toUpperCase()}
                      </p>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <Link
                      href={item.url || '#'}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="text-center">
            <Link
              href="/media"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Visit Resource Center
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
