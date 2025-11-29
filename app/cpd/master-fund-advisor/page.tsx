import { getCourseBySlug } from '@/lib/cpd-content';
import CoursePageTemplate from '@/components/cpd/CoursePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Master Fund Adviser Course | Financial Perspectives',
  description: 'Master the strategies to help clients navigate volatile markets, manage behavioral biases, and build resilient portfolios designed for today\'s challenging environment.',
};

export default function MFACoursePage() {
  const course = getCourseBySlug('master-fund-advisor');
  
  if (!course) {
    notFound();
  }

  return <CoursePageTemplate course={course} />;
}

