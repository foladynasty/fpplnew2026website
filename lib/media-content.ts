// Media & Resources Content Library

export type MediaType = 'press' | 'news' | 'publication' | 'video' | 'podcast' | 'resource';
export type ResourceCategory = 'brochure' | 'guide' | 'whitepaper' | 'article' | 'infographic' | 'case-study';

export interface MediaItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  source?: string; // For press coverage
  author?: string;
  category?: string;
  thumbnail?: string;
  url?: string;
  downloadUrl?: string;
  featured?: boolean;
  tags: string[];
}

export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileType: 'PDF' | 'Video' | 'Link';
  fileSize?: string;
  thumbnail: string;
  downloadUrl?: string;
  viewUrl?: string;
  featured?: boolean;
  tags: string[];
}

// Press & Media Coverage
export const pressMedia: MediaItem[] = [
  {
    id: 'press-1',
    type: 'press',
    title: 'Financial Perspectives Named Singapore\'s Leading CFP® Education Provider',
    description: 'With over 20,000 professionals trained and 26 years of excellence, FP-EDU continues to set the standard for financial planning education in Singapore.',
    date: '2025-11-15',
    source: 'The Business Times',
    category: 'Industry Recognition',
    featured: true,
    tags: ['CFP®', 'Education', 'Award']
  },
  {
    id: 'press-2',
    type: 'press',
    title: 'Expert Trainer William Cai on Navigating Volatile Markets',
    description: 'FP-EDU\'s Master Fund Adviser program addresses critical market conditions as S&P 500 P/E ratio exceeds 29, warns veteran wealth manager.',
    date: '2025-10-20',
    source: 'The Straits Times',
    category: 'Expert Commentary',
    tags: ['MFA', 'Market Analysis', 'William Cai']
  },
  {
    id: 'press-3',
    type: 'press',
    title: 'SCFP-HNWI: New Certification Targets Ultra-Wealthy Advisory Market',
    description: 'Financial Perspectives launches groundbreaking SCFP-HNWI program to meet growing demand for specialized high-net-worth advisory expertise.',
    date: '2025-09-10',
    source: 'Channel News Asia',
    category: 'Program Launch',
    featured: true,
    tags: ['SCFP-HNWI', 'HNWI', 'New Program']
  },
  {
    id: 'press-4',
    type: 'press',
    title: 'IBF-STS Funding Boost: Financial Advisers Upskill Amid Market Changes',
    description: 'Enhanced IBF funding support drives surge in CPD course enrollment as advisers adapt to evolving client needs.',
    date: '2025-08-05',
    source: 'The Asian Wall Street Journal',
    category: 'Industry Trends',
    tags: ['IBF-STS', 'CPD', 'Funding']
  }
];

// News & Announcements
export const newsAnnouncements: MediaItem[] = [
  {
    id: 'news-1',
    type: 'news',
    title: 'SCFP-HNWI Preview Webinar Registration Now Open',
    description: 'Join us for an exclusive preview of Singapore\'s first specialized HNWI advisory certification. Limited spots available for February 2026 webinar.',
    date: '2025-12-01',
    category: 'Program Announcement',
    url: '/scfp-hnwi',
    featured: true,
    tags: ['SCFP-HNWI', 'Webinar', 'Q1 2026']
  },
  {
    id: 'news-2',
    type: 'news',
    title: 'Master Fund Adviser December Cohort Filling Fast',
    description: 'Only 4 seats remaining for our December 10-12 MFA program. Register now to secure IBF-STS funding and earn your designation.',
    date: '2025-11-28',
    category: 'Course Update',
    url: '/cpd/master-fund-advisor',
    tags: ['MFA', 'CPD', 'Filling Fast']
  },
  {
    id: 'news-3',
    type: 'news',
    title: 'CFP® Q1 2026 Intake: Early Bird Pricing Extended',
    description: 'Save 10% on full CFP® pathway registration. Extended deadline: February 28, 2026. Start your journey to global certification.',
    date: '2025-11-20',
    category: 'Special Offer',
    url: '/cfp#enrollment',
    featured: true,
    tags: ['CFP®', 'Discount', 'Early Bird']
  },
  {
    id: 'news-4',
    type: 'news',
    title: 'New Corporate Training Packages for 2026',
    description: 'Customized in-house training solutions now available for financial institutions. Build high-performing advisory teams with FP-EDU.',
    date: '2025-11-10',
    category: 'Corporate Solutions',
    tags: ['Corporate Training', '2026']
  },
  {
    id: 'news-5',
    type: 'news',
    title: 'Celebrating 26 Years of Excellence in Financial Education',
    description: 'From 1999 to 2025: Thank you to 20,000+ graduates who\'ve trusted us as Singapore\'s #1 CFP® provider.',
    date: '2025-10-01',
    category: 'Milestone',
    tags: ['Anniversary', '26 Years', 'Milestone']
  }
];

// Publications & Articles
export const publications: MediaItem[] = [
  {
    id: 'pub-1',
    type: 'publication',
    title: 'How To Be A Successful Investor',
    description: 'Bestselling book by William Cai, CFP®. Practical insights from 31+ years of wealth management experience.',
    date: '2024-01-01',
    author: 'William Cai, CFP®, ChFC®, CMFC®',
    category: 'Book',
    featured: true,
    tags: ['Investment', 'Book', 'William Cai']
  },
  {
    id: 'pub-2',
    type: 'publication',
    title: 'The CFP® Journey: A Complete Guide to Financial Planning Certification',
    description: 'Comprehensive guide covering AFP® → AWP® → CFP® pathway, eligibility, study strategies, and career outcomes.',
    date: '2025-09-01',
    author: 'Financial Perspectives Education Team',
    category: 'Guide',
    downloadUrl: '/resources/cfp-journey-guide.pdf',
    tags: ['CFP®', 'Guide', 'Career']
  },
  {
    id: 'pub-3',
    type: 'publication',
    title: 'Behavioral Finance in Practice: Managing Client Emotions During Market Volatility',
    description: 'White paper exploring behavioral biases and practical strategies for advisers navigating uncertain markets.',
    date: '2025-08-15',
    author: 'William Cai, CFP®',
    category: 'White Paper',
    downloadUrl: '/resources/behavioral-finance-whitepaper.pdf',
    tags: ['Behavioral Finance', 'Market Volatility', 'Research']
  },
  {
    id: 'pub-4',
    type: 'publication',
    title: 'HNWI Advisory Excellence: Best Practices for Family Business Professionals',
    description: 'Insights into serving ultra-high-net-worth families, from succession planning to multi-generational wealth transfer.',
    date: '2025-10-01',
    author: 'Financial Perspectives SCFP Team',
    category: 'Article',
    downloadUrl: '/resources/hnwi-best-practices.pdf',
    featured: true,
    tags: ['HNWI', 'Family Business', 'Best Practices']
  }
];

// Video Content
export const videos: MediaItem[] = [
  {
    id: 'video-1',
    type: 'video',
    title: 'What is CFP® Certification? Your Questions Answered',
    description: 'A comprehensive 10-minute overview of the CFP® pathway, benefits, and how to get started.',
    date: '2025-11-01',
    category: 'Educational',
    thumbnail: '/video-thumbnails/cfp-overview.jpg',
    url: 'https://youtube.com/watch?v=example',
    featured: true,
    tags: ['CFP®', 'Video', 'Overview']
  },
  {
    id: 'video-2',
    type: 'video',
    title: 'Meet Our Trainers: William Cai on Market Strategies',
    description: 'Veteran wealth manager William Cai shares insights on portfolio construction and behavioral finance.',
    date: '2025-10-15',
    category: 'Trainer Spotlight',
    thumbnail: '/video-thumbnails/william-cai.jpg',
    url: 'https://youtube.com/watch?v=example2',
    tags: ['William Cai', 'MFA', 'Interview']
  },
  {
    id: 'video-3',
    type: 'video',
    title: 'SCFP-HNWI Program Introduction',
    description: 'Discover Singapore\'s first specialized certification for high-net-worth advisory professionals.',
    date: '2025-09-20',
    category: 'Program Introduction',
    thumbnail: '/video-thumbnails/scfp-intro.jpg',
    url: 'https://youtube.com/watch?v=example3',
    featured: true,
    tags: ['SCFP-HNWI', 'Preview', 'Video']
  },
  {
    id: 'video-4',
    type: 'video',
    title: 'Student Success Stories: From CFP® to Career Growth',
    description: 'Hear from graduates about how CFP® certification transformed their careers and earnings.',
    date: '2025-08-10',
    category: 'Testimonials',
    thumbnail: '/video-thumbnails/success-stories.jpg',
    url: 'https://youtube.com/watch?v=example4',
    tags: ['Success Stories', 'CFP®', 'Career']
  }
];

// Downloadable Resources
export const downloadableResources: DownloadableResource[] = [
  {
    id: 'resource-1',
    title: 'CFP® Certification Program Brochure',
    description: 'Complete program details, curriculum breakdown, schedules, pricing, and IBF-STS funding information.',
    category: 'brochure',
    fileType: 'PDF',
    fileSize: '2.5 MB',
    thumbnail: '/resources/cfp-brochure-thumb.jpg',
    downloadUrl: '/downloads/cfp-brochure-2026.pdf',
    featured: true,
    tags: ['CFP®', 'Brochure', 'Program Details']
  },
  {
    id: 'resource-2',
    title: 'SCFP-HNWI Prospectus',
    description: 'Detailed prospectus for Singapore\'s premier HNWI advisory certification. Launch Q1 2026.',
    category: 'brochure',
    fileType: 'PDF',
    fileSize: '3.8 MB',
    thumbnail: '/resources/scfp-prospectus-thumb.jpg',
    downloadUrl: '/downloads/scfp-hnwi-prospectus.pdf',
    featured: true,
    tags: ['SCFP-HNWI', 'Prospectus', 'HNWI']
  },
  {
    id: 'resource-3',
    title: 'CPD Course Catalog 2025-2026',
    description: 'Complete catalog of all CPD courses: MFA, AUM Growth, ILP Masterclass, Estate Planning, and more.',
    category: 'guide',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    thumbnail: '/resources/cpd-catalog-thumb.jpg',
    downloadUrl: '/downloads/cpd-catalog-2025-2026.pdf',
    tags: ['CPD', 'Catalog', 'All Courses']
  },
  {
    id: 'resource-4',
    title: 'IBF-STS Funding Guide',
    description: 'Step-by-step guide to applying for IBF-STS funding. Maximize your course subsidies up to 70%.',
    category: 'guide',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    thumbnail: '/resources/ibf-guide-thumb.jpg',
    downloadUrl: '/downloads/ibf-sts-funding-guide.pdf',
    featured: true,
    tags: ['IBF-STS', 'Funding', 'Guide']
  },
  {
    id: 'resource-5',
    title: 'Corporate Training Solutions',
    description: 'Customized in-house training programs for financial institutions. Build high-performing teams.',
    category: 'brochure',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    thumbnail: '/resources/corporate-thumb.jpg',
    downloadUrl: '/downloads/corporate-training-brochure.pdf',
    tags: ['Corporate', 'Training', 'B2B']
  },
  {
    id: 'resource-6',
    title: 'Career Outcomes Report 2024',
    description: 'Data-driven insights on CFP® graduates\' career progression, salary growth, and job satisfaction.',
    category: 'whitepaper',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    thumbnail: '/resources/career-outcomes-thumb.jpg',
    downloadUrl: '/downloads/career-outcomes-2024.pdf',
    tags: ['Research', 'Career', 'Data']
  }
];

// Helper Functions
export function getMediaByType(type: MediaType): MediaItem[] {
  const allMedia = [...pressMedia, ...newsAnnouncements, ...publications, ...videos];
  return allMedia.filter(item => item.type === type);
}

export function getFeaturedMedia(): MediaItem[] {
  const allMedia = [...pressMedia, ...newsAnnouncements, ...publications, ...videos];
  return allMedia.filter(item => item.featured);
}

export function getFeaturedResources(): DownloadableResource[] {
  return downloadableResources.filter(resource => resource.featured);
}

export function getMediaByCategory(category: string): MediaItem[] {
  const allMedia = [...pressMedia, ...newsAnnouncements, ...publications, ...videos];
  return allMedia.filter(item => item.category === category);
}

export function formatMediaDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-SG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function getRecentMedia(limit: number = 6): MediaItem[] {
  const allMedia = [...pressMedia, ...newsAnnouncements, ...publications, ...videos];
  return allMedia
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

