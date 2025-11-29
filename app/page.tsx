import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import TrustBar from '@/components/TrustBar';
import CFPPathway from '@/components/CFPPathway';
import SCFPHNWISection from '@/components/SCFPHNWISection';
import CPDCourses from '@/components/CPDCourses';
import WhyFP from '@/components/WhyFP';
import CorporateTraining from '@/components/CorporateTraining';
import Testimonials from '@/components/Testimonials';
import Resources from '@/components/Resources';
import Events from '@/components/Events';
import Newsletter from '@/components/Newsletter';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <TrustBar />
      <CFPPathway />
      <SCFPHNWISection />
      <CPDCourses />
      <WhyFP />
      <CorporateTraining />
      <Testimonials />
      <Resources />
      <Events />
      <Newsletter />
      <FinalCTA />
      <Footer />
    </main>
  );
}


