import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'ILP Sales Masterclass | Financial Perspectives',
  description: 'From product mechanics to suitability assessment to objection handling—master every aspect of ILP advisory with confidence and compliance.',
};

export default function ILPCoursePage() {
  const course = getCourseBySlug('ilp-sales-masterclass');
  
  if (!course) {
    notFound();
  }

  return <CoursePageTemplate course={course} />;
}

