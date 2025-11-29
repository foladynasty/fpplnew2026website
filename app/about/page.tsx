import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import OurTrainers from '@/components/about/OurTrainers';
import Testimonials from '@/components/about/Testimonials';
import Affiliations from '@/components/about/Affiliations';
import CTASection from '@/components/about/CTASection';

export const metadata = {
  title: 'About Us | Financial Perspectives',
  description: '26 years of excellence in financial education. Singapore\'s #1 CFP® provider with 20,000+ graduates. Learn about our mission, values, and expert trainers.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <OurTrainers />
      <Affiliations />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

