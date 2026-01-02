import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';
import { getUpcomingEvents } from '@/lib/wordpress';

export const metadata = {
  title: 'Master Fund Adviser Course | Financial Perspectives',
  description: 'Master the strategies to help clients navigate volatile markets, manage behavioral biases, and build resilient portfolios designed for today\'s challenging environment.',
};

// Format WordPress event to match the upcomingDates structure
function formatEventDate(event: any) {
  const startDate = event.acf?.start_date || event.acf?.event_date;
  const endDate = event.acf?.end_date;
  const location = event.acf?.location || 'High Street Centre';

  // Format date string from WordPress
  let formattedDate = '';
  if (startDate) {
    const start = new Date(startDate);
    formattedDate = start.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    if (endDate) {
      const end = new Date(endDate);
      // Check if same month
      if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
        formattedDate = `${start.getDate()} & ${end.getDate()} ${start.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}`;
      } else {
        formattedDate += ` - ${end.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`;
      }
    }
  }

  return {
    date: formattedDate || 'TBC',
    time: '9:30 AM – 5:30 PM',
    location: location,
    status: 'Available'
  };
}

export default async function MFACoursePage() {
  const course = getCourseBySlug('master-fund-advisor');

  if (!course) {
    notFound();
  }

  // Fetch ALL upcoming events from WordPress (no category filter)
  // Then filter by title to find MFA-specific events
  const wpEvents = await getUpcomingEvents();

  // Filter for MFA-specific events (check title contains 'MFA' or 'Master Fund')
  const mfaEvents = wpEvents.filter(event => {
    const title = event.title.rendered.toLowerCase();
    return title.includes('mfa') ||
      title.includes('master fund') ||
      title.includes('fund adviser') ||
      title.includes('fund advisor');
  });

  // If we have WordPress events, use them; otherwise show nothing (no fallback to static)
  const upcomingDates = mfaEvents.length > 0
    ? mfaEvents.map(formatEventDate)
    : undefined;

  // Override course upcomingDates with WordPress data
  const courseWithDynamicDates = {
    ...course,
    upcomingDates
  };

  return <CoursePageTemplate course={courseWithDynamicDates} />;
}
