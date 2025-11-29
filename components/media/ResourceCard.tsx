'use client';

import { DownloadableResource } from '@/lib/media-content';
import { Download, FileText, Video, ExternalLink, Star } from 'lucide-react';

interface ResourceCardProps {
  resource: DownloadableResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.fileType) {
      case 'PDF':
        return FileText;
      case 'Video':
        return Video;
      default:
        return ExternalLink;
    }
  };

  const Icon = getIcon();

  const getCategoryColor = () => {
    switch (resource.category) {
      case 'brochure':
        return 'bg-blue-100 text-blue-800';
      case 'guide':
        return 'bg-green-100 text-green-800';
      case 'whitepaper':
        return 'bg-purple-100 text-purple-800';
      case 'article':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${resource.featured ? 'border-gold' : 'border-gray-100'} group relative`}>
      {/* Featured Badge */}
      {resource.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gold text-white p-2 rounded-full">
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
      )}

      {/* Thumbnail or Icon Background */}
      <div className="bg-gradient-to-br from-primary-600 to-teal p-8 flex items-center justify-center">
        <Icon className="w-16 h-16 text-white" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`${getCategoryColor()} px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
            {resource.category}
          </span>
          <span className="text-xs text-slate-gray">
            {resource.fileType} {resource.fileSize && `• ${resource.fileSize}`}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-teal transition-colors line-clamp-2">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal mb-4 line-clamp-3">
          {resource.description}
        </p>

        {/* Tags */}
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-cool-gray text-charcoal px-2 py-1 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Download Button */}
        <a
          href={resource.downloadUrl || resource.viewUrl || '#'}
          download={resource.downloadUrl ? true : undefined}
          target={resource.viewUrl ? '_blank' : undefined}
          rel={resource.viewUrl ? 'noopener noreferrer' : undefined}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-teal text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 w-full"
        >
          {resource.downloadUrl ? (
            <>
              <Download className="w-5 h-5" />
              Download {resource.fileType}
            </>
          ) : (
            <>
              <ExternalLink className="w-5 h-5" />
              View Resource
            </>
          )}
        </a>
      </div>
    </div>
  );
}

