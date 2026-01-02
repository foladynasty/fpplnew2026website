import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';
import { getUpcomingEvents } from '@/lib/wordpress';

export const metadata = {
  title: 'ILP Sales Masterclass | Financial Perspectives',
  description: 'From product mechanics to suitability assessment to objection handling—master every aspect of ILP advisory with confidence and compliance.',
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

export default async function ILPCoursePage() {
  const course = getCourseBySlug('ilp-sales-masterclass');

  if (!course) {
    notFound();
  }

  // Fetch ALL upcoming events from WordPress (no category filter)
  const wpEvents = await getUpcomingEvents();

  // Filter for ILP-specific events
  const ilpEvents = wpEvents.filter(event => {
    const title = event.title.rendered.toLowerCase();
    return title.includes('ilp') ||
      title.includes('investment-linked') ||
      title.includes('investment linked');
  });

  // Only show WordPress events (no fallback to static dates)
  const upcomingDates = ilpEvents.length > 0
    ? ilpEvents.map(formatEventDate)
    : undefined;

  const courseWithDynamicDates = {
    ...course,
    upcomingDates
  };

  return <CoursePageTemplate course={courseWithDynamicDates} />;
}
