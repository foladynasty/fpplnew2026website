import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CFPNavigation from '@/components/cfp/CFPNavigation';
import CFPHero from '@/components/cfp/CFPHero';
import WhyCFP from '@/components/cfp/WhyCFP';
import CFPPathwayDetailed from '@/components/cfp/CFPPathwayDetailed';
import CurriculumAccordion from '@/components/cfp/CurriculumAccordion';
import EnrollmentCriteria from '@/components/cfp/EnrollmentCriteria';
import StudyOptionsTabs from '@/components/cfp/StudyOptionsTabs';
import TrainersGrid from '@/components/cfp/TrainersGrid';
import InvestmentCalculator from '@/components/cfp/InvestmentCalculator';
import CFPFAQs from '@/components/cfp/CFPFAQs';
import CFPValue from '@/components/cfp/CFPValue';
import FinalCTASection from '@/components/cfp/FinalCTASection';

export const metadata = {
  title: 'CFP® Certification Program | Financial Perspectives',
  description: 'Start your journey to CFP® certification with Singapore\'s #1 provider. Join 20,000+ professionals who\'ve transformed their careers through our proven pathway.',
};

export default function CFPPage() {
  return (
    <main className="bg-white">
      <Header />

      {/* Sticky Navigation - appears on scroll */}
      <CFPNavigation />

      {/* Hero Section */}
      <CFPHero />

      {/* Section 1: Overview - Why CFP® */}
      <section id="overview" className="scroll-mt-20">
        <WhyCFP />
      </section>

      {/* Section 1.5: Value & Benefits */}
      <section id="value" className="scroll-mt-20">
        <CFPValue />
      </section>

      {/* Section 2: Pathway - AFP → AWP → CFP */}
      <section id="pathway" className="scroll-mt-20">
        <CFPPathwayDetailed />
      </section>

      {/* Section 3: Curriculum - What You'll Master */}
      <section id="curriculum" className="scroll-mt-20">
        <CurriculumAccordion />
      </section>

      {/* Section 4: Enrollment - Who Can Join */}
      <section id="enrollment" className="scroll-mt-20">
        <EnrollmentCriteria />
      </section>

      {/* Section 5: Study Options - Schedule, Materials, Support */}
      <section id="study-options" className="scroll-mt-20">
        <StudyOptionsTabs />
      </section>

      {/* Section 6: Trainers - Learn from the Best */}
      <section id="trainers" className="scroll-mt-20">
        <TrainersGrid />
      </section>

      {/* Section 7: Investment - Fees & Funding */}
      <section id="investment" className="scroll-mt-20">
        <InvestmentCalculator />
      </section>

      {/* Section 8: FAQs */}
      <section id="faqs" className="scroll-mt-20">
        <CFPFAQs />
      </section>

      {/* Final Conversion Section */}
      <FinalCTASection />

      <Footer />
    </main>
  );
}

