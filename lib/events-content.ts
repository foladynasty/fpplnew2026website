// Events & Course Schedule Content Library

export type EventType = 'cfp-afp' | 'cfp-awp' | 'cfp-full' | 'cpd-mfa' | 'cpd-aum' | 'cpd-ilp' | 'cpd-help' | 'scfp' | 'webinar';
export type EventStatus = 'available' | 'filling-fast' | 'waitlist' | 'coming-soon' | 'full';

export interface CourseEvent {
  id: string;
  type: EventType;
  title: string;
  subtitle?: string;
  category: 'CFP' | 'CPD' | 'SCFP-HNWI' | 'Webinar';
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD for multi-day courses
  time?: string;
  duration: string;
  location: string;
  format: 'In-Person' | 'Online' | 'Hybrid';
  cpdHours?: string;
  seatsTotal?: number;
  seatsAvailable?: number;
  status: EventStatus;
  price?: string;
  earlyBirdPrice?: string;
  earlyBirdDeadline?: string;
  fundingAvailable?: boolean;
  highlights: string[];
  detailsUrl: string;
  registerUrl?: string;
  color: {
    primary: string;
    gradient: string;
    badge: string;
  };
}

export const upcomingEvents: CourseEvent[] = [
  // CFP COURSES
  {
    id: 'cfp-afp-jan-2026',
    type: 'cfp-afp',
    title: 'AFP® - Associate Financial Planner',
    subtitle: 'Foundation Level',
    category: 'CFP',
    startDate: '2026-01-15',
    endDate: '2026-04-15',
    time: 'Weekday Evenings: 7:00 PM - 10:00 PM',
    duration: '3-6 months',
    location: 'High Street Centre',
    format: 'In-Person',
    seatsTotal: 30,
    seatsAvailable: 8,
    status: 'filling-fast',
    price: 'Contact for pricing',
    fundingAvailable: true,
    highlights: [
      'Entry-level CFP® certification',
      'Evening classes for working professionals',
      'IBF-STS funding available',
      'Comprehensive study materials included'
    ],
    detailsUrl: '/cfp#pathway',
    registerUrl: '/cfp#enrollment',
    color: {
      primary: '#003B73',
      gradient: 'from-primary-600 to-primary-700',
      badge: 'bg-primary-600'
    }
  },
  {
    id: 'cfp-awp-feb-2026',
    type: 'cfp-awp',
    title: 'AWP® - Associate Wealth Planner',
    subtitle: 'Advanced Level',
    category: 'CFP',
    startDate: '2026-02-20',
    endDate: '2026-08-20',
    time: 'Weekend Classes: Saturdays 9:00 AM - 5:00 PM',
    duration: '6-9 months',
    location: 'High Street Centre',
    format: 'In-Person',
    seatsTotal: 25,
    seatsAvailable: 15,
    status: 'available',
    price: 'Contact for pricing',
    fundingAvailable: true,
    highlights: [
      'Intermediate wealth planning certification',
      'Weekend format for flexibility',
      'IBF-STS funding available',
      'Expert trainers with real-world experience'
    ],
    detailsUrl: '/cfp#pathway',
    registerUrl: '/cfp#enrollment',
    color: {
      primary: '#003B73',
      gradient: 'from-primary-600 to-primary-700',
      badge: 'bg-primary-600'
    }
  },
  {
    id: 'cfp-full-mar-2026',
    type: 'cfp-full',
    title: 'CFP® - Certified Financial Planner',
    subtitle: 'Professional Certification',
    category: 'CFP',
    startDate: '2026-03-10',
    endDate: '2026-12-15',
    time: 'Flexible: Weekday Evenings + Weekend Options',
    duration: '12-18 months (full pathway)',
    location: 'High Street Centre',
    format: 'Hybrid',
    seatsTotal: 40,
    seatsAvailable: 28,
    status: 'available',
    price: 'Contact for pricing',
    earlyBirdPrice: 'Early Bird: Save 10%',
    earlyBirdDeadline: '2026-02-28',
    fundingAvailable: true,
    highlights: [
      'Global gold standard certification',
      'Complete AFP® → AWP® → CFP® pathway',
      'Hybrid learning options',
      'Early bird discount available',
      'IBF-STS funding up to 70%'
    ],
    detailsUrl: '/cfp',
    registerUrl: '/cfp#enrollment',
    color: {
      primary: '#003B73',
      gradient: 'from-primary-600 to-primary-700',
      badge: 'bg-primary-600'
    }
  },

  // CPD COURSES
  {
    id: 'cpd-mfa-dec-2025',
    type: 'cpd-mfa',
    title: 'Master Fund Adviser (MFA)',
    category: 'CPD',
    startDate: '2025-12-10',
    endDate: '2025-12-12',
    time: '9:30 AM - 5:30 PM',
    duration: '2 days (14 hours)',
    location: 'High Street Centre',
    format: 'In-Person',
    cpdHours: '14 Supplementary CPD Hours',
    seatsTotal: 20,
    seatsAvailable: 4,
    status: 'filling-fast',
    price: 'Contact for pricing',
    fundingAvailable: true,
    highlights: [
      'Earn MFA designation',
      'Navigate volatile markets confidently',
      'Behavioral finance + macro analysis',
      'IBF-STS funding: Up to 70% subsidy'
    ],
    detailsUrl: '/cpd/master-fund-advisor',
    registerUrl: 'https://wa.me/6581117890',
    color: {
      primary: '#6B4C9A',
      gradient: 'from-purple-500 to-pink-600',
      badge: 'bg-purple-600'
    }
  },
  {
    id: 'cpd-aum-jan-2026',
    type: 'cpd-aum',
    title: 'Strategies to Supercharge AUM Growth',
    category: 'CPD',
    startDate: '2026-01-15',
    time: '9:00 AM - 5:00 PM',
    duration: '1-2 days',
    location: 'High Street Centre',
    format: 'In-Person',
    cpdHours: '8 CPD Hours',
    seatsTotal: 30,
    seatsAvailable: 20,
    status: 'available',
    price: 'Contact for pricing',
    fundingAvailable: true,
    highlights: [
      'Client acquisition strategies',
      'Wallet share growth tactics',
      'Referral generation systems',
      'IBF-FTS approved'
    ],
    detailsUrl: '/cpd/aum-growth',
    registerUrl: '/cpd/aum-growth#register',
    color: {
      primary: '#10B981',
      gradient: 'from-green-500 to-emerald-600',
      badge: 'bg-green-600'
    }
  },
  {
    id: 'cpd-ilp-feb-2026',
    type: 'cpd-ilp',
    title: 'ILP Sales Masterclass',
    category: 'CPD',
    startDate: '2026-02-28',
    time: '9:00 AM - 5:00 PM',
    duration: '1-2 days',
    location: 'High Street Centre',
    format: 'In-Person',
    cpdHours: '6 CPD Hours',
    seatsTotal: 25,
    seatsAvailable: 25,
    status: 'available',
    price: 'Contact for pricing',
    earlyBirdPrice: 'Early Bird Discount Available',
    earlyBirdDeadline: '2026-02-15',
    fundingAvailable: true,
    highlights: [
      'ILP product mechanics mastery',
      'Compliant suitability assessment',
      'Objection handling techniques',
      'IBF-FTS approved'
    ],
    detailsUrl: '/cpd/ilp-sales-masterclass',
    registerUrl: '/cpd/ilp-sales-masterclass#register',
    color: {
      primary: '#0891B2',
      gradient: 'from-blue-500 to-cyan-600',
      badge: 'bg-cyan-600'
    }
  },
  {
    id: 'cpd-help-mar-2026',
    type: 'cpd-help',
    title: 'Estate & Legacy Planning (HELP)',
    category: 'CPD',
    startDate: '2026-03-20',
    endDate: '2026-03-21',
    time: '9:00 AM - 5:00 PM',
    duration: 'Workshop Format',
    location: 'High Street Centre',
    format: 'In-Person',
    cpdHours: '10 CPD Hours',
    seatsTotal: 20,
    seatsAvailable: 18,
    status: 'available',
    price: 'Contact for pricing',
    fundingAvailable: false,
    highlights: [
      'Comprehensive estate planning',
      'Trust structures & succession',
      'Multi-generational wealth transfer',
      'Case study-based learning'
    ],
    detailsUrl: '/cpd/estate-legacy-planning',
    registerUrl: '/cpd/estate-legacy-planning#register',
    color: {
      primary: '#DC2626',
      gradient: 'from-orange-500 to-red-600',
      badge: 'bg-red-600'
    }
  },

  // SCFP-HNWI
  {
    id: 'scfp-preview-webinar',
    type: 'webinar',
    title: 'SCFP-HNWI Program Preview Webinar',
    subtitle: 'Free Information Session',
    category: 'Webinar',
    startDate: '2026-02-15',
    time: '2:00 PM - 3:30 PM',
    duration: '90 minutes',
    location: 'Online (Zoom)',
    format: 'Online',
    seatsTotal: 100,
    seatsAvailable: 85,
    status: 'available',
    price: 'Free',
    highlights: [
      'Learn about the SCFP-HNWI program',
      'Meet the program director',
      'Q&A session',
      'Early registration benefits'
    ],
    detailsUrl: '/scfp-hnwi',
    registerUrl: '/scfp-hnwi#register',
    color: {
      primary: '#6B4C9A',
      gradient: 'from-purple-600 to-purple-700',
      badge: 'bg-purple-600'
    }
  },
  {
    id: 'scfp-launch-2026',
    type: 'scfp',
    title: 'SCFP-HNWI Certification Program',
    subtitle: 'Master HNWI Advisory',
    category: 'SCFP-HNWI',
    startDate: '2026-04-01',
    endDate: '2026-09-30',
    time: 'Details TBA',
    duration: '6 months',
    location: 'High Street Centre',
    format: 'Hybrid',
    status: 'coming-soon',
    price: 'Contact for pricing',
    fundingAvailable: false,
    highlights: [
      'NEW 2026 Launch',
      'Advanced HNWI advisory certification',
      'Family business strategies',
      'Limited cohort size',
      'Register interest now'
    ],
    detailsUrl: '/scfp-hnwi',
    registerUrl: '/scfp-hnwi#register',
    color: {
      primary: '#6B4C9A',
      gradient: 'from-purple-600 to-purple-700',
      badge: 'bg-purple-600'
    }
  }
];

// Helper functions
export function getEventsByCategory(category: string): CourseEvent[] {
  return upcomingEvents.filter(event => event.category === category);
}

export function getEventsByType(type: EventType): CourseEvent[] {
  return upcomingEvents.filter(event => event.type === type);
}

export function getEventsByDateRange(startDate: string, endDate: string): CourseEvent[] {
  return upcomingEvents.filter(event =>
    event.startDate >= startDate && event.startDate <= endDate
  );
}

export function getUpcomingEvents(limit?: number): CourseEvent[] {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = upcomingEvents
    .filter(event => event.startDate >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-SG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function getStatusBadge(status: EventStatus): { text: string; color: string } {
  const badges = {
    'available': { text: '✓ Available Seats', color: 'bg-green-100 text-green-800 border-green-200' },
    'filling-fast': { text: '🔥 Filling Fast', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    'waitlist': { text: '📋 Waitlist Only', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    'coming-soon': { text: '🔜 Coming Soon', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    'full': { text: '❌ Full', color: 'bg-red-100 text-red-800 border-red-200' }
  };
  return badges[status];
}

