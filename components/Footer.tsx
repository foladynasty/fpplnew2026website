import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Image
              src="/FP logo.png"
              alt="Financial Perspectives"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-4">
              Financial Perspectives is Singapore's premier financial education provider. Since 1999, we've pioneered excellence in CFP® certification and professional development for financial advisors.
            </p>
            <p className="text-xs text-gray-400 italic mb-4">
              Centre for Professional Excellence in Advisory Competency and Ethics
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#linkedin" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#facebook" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#instagram" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#youtube" className="hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="/about#team" className="hover:text-primary-400 transition-colors">Our Team</a></li>
              <li><a href="/about#accreditations" className="hover:text-primary-400 transition-colors">Accreditations & Recognition</a></li>
              <li><a href="/about#why" className="hover:text-primary-400 transition-colors">Why Choose Us</a></li>
              <li><a href="/contact" className="hover:text-primary-400 transition-colors">Corporate Training</a></li>
              <li><a href="/testimonials" className="hover:text-primary-400 transition-colors">Success Stories</a></li>
              <li><a href="/contact" className="hover:text-primary-400 transition-colors">Career Opportunities</a></li>
              <li><a href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Programs</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-semibold mb-2">CFP® Certification Pathway</p>
                <ul className="space-y-1 ml-4">
                  <li><a href="/cfp#afp" className="hover:text-primary-400 transition-colors">AFP<sup>CM</sup> - Associate Financial Planner</a></li>
                  <li><a href="/cfp#awp" className="hover:text-primary-400 transition-colors">AWP<sup>CM</sup> - Associate Wealth Planner</a></li>
                  <li><a href="/cfp" className="hover:text-primary-400 transition-colors">CFP® - Certified Financial Planner</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Advanced Certification</p>
                <ul className="space-y-1 ml-4">
                  <li><a href="/scfp-hnwi" className="hover:text-primary-400 transition-colors">SCFP-HNWI (NEW 2026)</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">CPD Courses</p>
                <ul className="space-y-1 ml-4">
                  <li><a href="/cpd/aum-growth" className="hover:text-primary-400 transition-colors">AUM Growth Strategies</a></li>
                  <li><a href="/cpd/ilp-sales-masterclass" className="hover:text-primary-400 transition-colors">ILP Sales Masterclass</a></li>
                  <li><a href="/cpd/master-fund-advisor" className="hover:text-primary-400 transition-colors">Master Fund Advisor</a></li>
                  <li><a href="/cpd/estate-legacy-planning" className="hover:text-primary-400 transition-colors">Estate & Legacy Planning (HELP)</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/media" className="hover:text-primary-400 transition-colors">Blog & Insights</a></li>
              <li><a href="/media" className="hover:text-primary-400 transition-colors">Resource Library</a></li>
              <li><a href="/media" className="hover:text-primary-400 transition-colors">Download Brochures</a></li>
              <li><a href="/cfp#faqs" className="hover:text-primary-400 transition-colors">FAQs</a></li>
              <li><a href="/cfp#funding" className="hover:text-primary-400 transition-colors">IBF-STS Funding Guide</a></li>
              <li><a href="https://lms.fp-edu.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Student Portal (Login)</a></li>
              <li><a href="/media" className="hover:text-primary-400 transition-colors">Career Resources</a></li>
              <li><a href="/media" className="hover:text-primary-400 transition-colors">Industry Updates</a></li>
              <li><a href="/events" className="hover:text-primary-400 transition-colors">Course Calendar</a></li>
              <li><a href="/events" className="hover:text-primary-400 transition-colors">Webinars & Events</a></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white mb-2">Financial Perspectives Pte Ltd</p>
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-primary-400" />
                  <div>
                    <p>1 North Bridge Road</p>
                    <p>High Street Centre</p>
                    <p>#03-07/08</p>
                    <p>Singapore 179094</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a href="tel:+6581117890" className="hover:text-primary-400 transition-colors">+65 8111 7890</a>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span>info@fp-edu.com</span>
                </div>
                <div className="flex items-center space-x-2 ml-6">
                  <span>enquiry@fp-edu.com</span>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 flex-shrink-0 mt-1 text-primary-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Operating Hours:</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 Financial Perspectives Pte Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}



