'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact Information */}
              <ContactInfo />

              {/* Right: Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <ContactMap />

      <Footer />
    </main>
  );
}

