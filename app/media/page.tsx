// Server Component Wrapper for Media Page
// Fetches from WordPress API and passes to client component

import { getResources } from '@/lib/wordpress';
import { wpResourceToMediaItem, wpResourceToDownloadable } from '@/lib/media-wordpress';
import MediaPageClient from './MediaPageClient';

// Map tab IDs to WordPress category slugs
const categorySlugMap: Record<string, string | undefined> = {
  'press': 'press-and-coverage',
  'news': 'news-and-announcement',
  'publications': 'publications',
  'videos': 'videos',
  'resources': 'downloadable-resources',
};

export default async function MediaPage() {
  // Fetch all resources from WordPress
  const [pressResources, newsResources, publicationResources, videoResources, downloadResources] = await Promise.all([
    getResources('press-and-coverage', 20),
    getResources('news-and-announcement', 20),
    getResources('publications', 20),
    getResources('videos', 20),
    getResources('downloadable-resources', 20),
  ]);

  // Transform WordPress resources to MediaItem format
  // Only WordPress content is used - no static fallback
  const pressMedia = pressResources.map(wpResourceToMediaItem);
  const newsAnnouncements = newsResources.map(wpResourceToMediaItem);
  const publications = publicationResources.map(wpResourceToMediaItem);
  const videos = videoResources.map(wpResourceToMediaItem);
  const downloadableResources = downloadResources.map(wpResourceToDownloadable);

  return (
    <MediaPageClient
      pressMedia={pressMedia}
      newsAnnouncements={newsAnnouncements}
      publications={publications}
      videos={videos}
      downloadableResources={downloadableResources}
    />
  );
}
