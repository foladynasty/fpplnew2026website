import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CPDHero from '@/components/cpd/CPDHero';
import CPDCoursesGrid from '@/components/cpd/CPDCoursesGrid';
import CPDWhyChooseUs from '@/components/cpd/CPDWhyChooseUs';
import CPDFinalCTA from '@/components/cpd/CPDFinalCTA';

export const metadata = {
  title: 'CPD Courses | Financial Perspectives',
  description: 'Stay sharp, stay relevant, stay ahead. Practical CPD training designed for immediate impact. All courses are IBF-approved with CPD hours awarded.',
};

export default function CPDPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CPDHero />
      <CPDWhyChooseUs />
      <CPDCoursesGrid />
      <CPDFinalCTA />
      <Footer />
    </main>
  );
}

