import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Estate & Legacy Planning Course | Financial Perspectives',
  description: 'Master the full spectrum of estate planning—from wills and trusts to philanthropy and legacy preservation. Serve your wealthy clients at the highest level.',
};

export default function HELPCoursePage() {
  const course = getCourseBySlug('estate-legacy-planning');
  
  if (!course) {
    notFound();
  }

  return <CoursePageTemplate course={course} />;
}

