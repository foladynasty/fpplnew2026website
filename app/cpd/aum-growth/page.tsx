import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';
import { getUpcomingEvents } from '@/lib/wordpress';

export const metadata = {
  title: 'AUM Growth Strategies Course | Financial Perspectives',
  description: 'Master client acquisition, retention tactics, and wallet share growth strategies that top performers use to scale their practice. Real frameworks. Measurable results.',
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

export default async function AUMCoursePage() {
  const course = getCourseBySlug('aum-growth');

  if (!course) {
    notFound();
  }

  // Fetch ALL upcoming events from WordPress (no category filter)
  const wpEvents = await getUpcomingEvents();

  // Filter for AUM-specific events
  const aumEvents = wpEvents.filter(event => {
    const title = event.title.rendered.toLowerCase();
    return title.includes('aum') ||
      title.includes('assets under management') ||
      title.includes('aum growth');
  });

  // Only show WordPress events (no fallback to static dates)
  const upcomingDates = aumEvents.length > 0
    ? aumEvents.map(formatEventDate)
    : undefined;

  const courseWithDynamicDates = {
    ...course,
    upcomingDates
  };

  return <CoursePageTemplate course={courseWithDynamicDates} />;
}
