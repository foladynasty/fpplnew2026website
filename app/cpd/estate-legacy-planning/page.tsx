import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';
import { getUpcomingEvents } from '@/lib/wordpress';

export const metadata = {
  title: 'Estate & Legacy Planning Course | Financial Perspectives',
  description: 'Master the full spectrum of estate planning—from wills and trusts to philanthropy and legacy preservation. Serve your wealthy clients at the highest level.',
};

// Format WordPress event to match the upcomingDates structure
function formatEventDate(event: any) {
  const startDate = event.acf?.start_date || event.acf?.event_date;
  const endDate = event.acf?.end_date;
  const location = event.acf?.location || 'High Street Centre';

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

export default async function HELPCoursePage() {
  const course = getCourseBySlug('estate-legacy-planning');

  if (!course) {
    notFound();
  }

  // Fetch ALL upcoming events from WordPress (no category filter)
  const wpEvents = await getUpcomingEvents();

  // Filter for HELP/Estate-specific events
  const helpEvents = wpEvents.filter(event => {
    const title = event.title.rendered.toLowerCase();
    return title.includes('help') ||
      title.includes('estate') ||
      title.includes('legacy planning');
  });

  // Only show WordPress events (no fallback to static dates)
  const upcomingDates = helpEvents.length > 0
    ? helpEvents.map(formatEventDate)
    : undefined;

  const courseWithDynamicDates = {
    ...course,
    upcomingDates
  };

  return <CoursePageTemplate course={courseWithDynamicDates} />;
}
