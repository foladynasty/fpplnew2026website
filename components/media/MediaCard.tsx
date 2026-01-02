'use client';

import { MediaItem, formatMediaDate } from '@/lib/media-content';
import { ExternalLink, Calendar, User, Building2, Play, FileText, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface MediaCardProps {
  item: MediaItem;
}

export default function MediaCard({ item }: MediaCardProps) {
  const getIcon = () => {
    switch (item.type) {
      case 'press':
        return Building2;
      case 'video':
        return Play;
      case 'publication':
        return FileText;
      case 'news':
        return FileText;
      default:
        return FileText;
    }
  };

  const Icon = getIcon();
  const formattedDate = formatMediaDate(item.date);

  const getBadgeColor = () => {
    switch (item.type) {
      case 'press':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'video':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'publication':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'news':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${item.featured ? 'border-gold' : 'border-gray-100'} group`}>
      {/* Featured Badge */}
      {item.featured && (
        <div className="bg-gold text-white text-xs font-bold px-4 py-2 text-center">
          ⭐ FEATURED
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Type Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`${getBadgeColor()} px-3 py-1 rounded-full text-xs font-semibold border`}>
            {item.type.toUpperCase()}
          </span>
          <Icon className="w-5 h-5 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-teal transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Meta Information */}
        <div className="space-y-2 mb-4 text-xs text-slate-gray">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          {item.source && (
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>{item.source}</span>
            </div>
          )}

          {item.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{item.author}</span>
            </div>
          )}

          {item.category && (
            <div className="inline-block bg-cool-gray px-2 py-1 rounded text-xs">
              {item.category}
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-teal/10 text-teal px-2 py-1 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex gap-2">
          {item.downloadUrl && (
            <a
              href={item.downloadUrl}
              download
              className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          )}
          {item.url && (
            <Link
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex-1 flex items-center justify-center gap-2 bg-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              {item.type === 'video' ? 'Watch' : 'Read More'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

