import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'AUM Growth Strategies Course | Financial Perspectives',
  description: 'Master client acquisition, retention tactics, and wallet share growth strategies that top performers use to scale their practice. Real frameworks. Measurable results.',
};

export default function AUMCoursePage() {
  const course = getCourseBySlug('aum-growth');
  
  if (!course) {
    notFound();
  }

  return <CoursePageTemplate course={course} />;
}

