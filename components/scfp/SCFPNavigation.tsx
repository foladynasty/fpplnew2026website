'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'modules', label: 'Modules' },
  { id: 'enrollment', label: 'Who Should Apply' },
  { id: 'investment', label: 'Investment' },
  { id: 'trainers', label: 'Faculty' },
  { id: 'faqs', label: 'FAQs' },
];

export default function SCFPNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);

      const sections = navigationItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === item.id
                      ? 'text-purple bg-purple/5'
                      : 'text-charcoal hover:text-purple hover:bg-cool-gray'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Register Interest CTA */}
            <button
              onClick={handleRegisterClick}
              className="bg-purple hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-200 hover:shadow-lg"
            >
              Register Interest
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-purple font-bold text-lg">SCFP-HNWI</span>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleRegisterClick}
                className="bg-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
              >
                Register
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-purple p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-cool-gray">
              <div className="py-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-purple bg-purple/5'
                        : 'text-charcoal hover:bg-cool-gray'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Fixed Bottom CTA for Mobile */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-purple shadow-lg transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <button
            onClick={handleRegisterClick}
            className="w-full bg-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold text-base transition-all duration-200 hover:shadow-xl"
          >
            Register Interest - Limited Seats
          </button>
        </div>
      </div>
    </>
  );
}

