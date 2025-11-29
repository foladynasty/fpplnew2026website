'use client';

import { MapPin, Clock, Mail, MessageCircle, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-lg text-charcoal">
          We're here to answer your questions and help you start your professional development journey.
        </p>
      </div>

      {/* Address */}
      <div className="bg-cool-gray rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-primary mb-2">Address</h3>
            <p className="text-charcoal leading-relaxed">
              1 North Bridge Road<br />
              High Street Centre<br />
              #03-07/08<br />
              Singapore 179094
            </p>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="bg-cool-gray rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-gold p-3 rounded-lg flex-shrink-0">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-primary mb-2">Opening Hours</h3>
            <div className="space-y-2 text-charcoal">
              <div className="flex justify-between">
                <span className="font-semibold">Mondays - Fridays:</span>
                <span>9:30 AM – 6:00 PM</span>
              </div>
              <div className="text-sm text-slate-gray">
                Closed on Saturdays, Sundays & Public Holidays
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Contacts */}
      <div className="bg-cool-gray rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-teal p-3 rounded-lg flex-shrink-0">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-primary mb-3">Email</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-semibold text-charcoal mb-1">General Enquiries:</div>
                <a href="mailto:enquiries@fp-edu.com" className="text-teal hover:text-teal-700 font-medium">
                  enquiries@fp-edu.com
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal mb-1">Student Support:</div>
                <a href="mailto:support@fp-edu.com" className="text-teal hover:text-teal-700 font-medium">
                  support@fp-edu.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Contacts */}
      <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-teal/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-primary mb-3">Chat on WhatsApp</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-semibold text-charcoal mb-1">General Enquiries:</div>
                <a 
                  href="https://wa.me/6581117890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  +65 8111 7890
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal mb-1">Student Support:</div>
                <a 
                  href="https://wa.me/6582001122" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  +65 8200 1122
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Networks */}
      <div className="bg-cool-gray rounded-xl p-6">
        <h3 className="font-bold text-primary mb-4">Connect With Us</h3>
        <div className="flex gap-3">
          <a 
            href="https://facebook.com/fpedusinagpore" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-blue-600 hover:text-white text-blue-600 p-3 rounded-lg transition-all duration-200 group"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/company/financial-perspectives" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-blue-700 hover:text-white text-blue-700 p-3 rounded-lg transition-all duration-200 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://youtube.com/@financialperspectives" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-red-600 hover:text-white text-red-600 p-3 rounded-lg transition-all duration-200 group"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/fpedusignagpore" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-pink-600 hover:text-white text-pink-600 p-3 rounded-lg transition-all duration-200 group"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

