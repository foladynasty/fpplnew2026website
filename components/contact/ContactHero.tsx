'use client';

import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-teal text-white py-20 lg:py-28 mt-28 lg:mt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">We're Here to Help</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in Touch with Singapore's #1 CFP® Education Provider
          </p>

          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you have questions about our programs, need course guidance, or want to discuss corporate training solutions, our team is ready to assist you.
          </p>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="tel:+6581117890"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-200 group"
            >
              <Phone className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">Call Us</div>
              <div className="text-sm text-white/80">+65 8111 7890</div>
            </a>
            
            <a
              href="mailto:enquiries@fp-edu.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-200 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">Email Us</div>
              <div className="text-sm text-white/80">enquiries@fp-edu.com</div>
            </a>
            
            <a
              href="https://wa.me/6581117890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-200 group"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-white/80">Chat with us</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

