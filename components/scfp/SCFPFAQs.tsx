'use client';

import { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import { scfpFAQs } from '@/lib/scfp-content';

export default function SCFPFAQs() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const categories = ['All', ...Array.from(new Set(scfpFAQs.map(faq => faq.category)))];

  const filteredFaqs = scfpFAQs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Your Questions Answered
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about the SCFP-HNWI program, eligibility, and certification.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-gray" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-cool-gray bg-white focus:border-purple focus:outline-none text-charcoal"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-purple text-white'
                    : 'bg-white text-charcoal hover:bg-purple/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQs */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4 mb-12">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-purple/20 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cool-gray/30 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="text-xs font-semibold text-teal mb-2">{faq.category}</div>
                      <h3 className="text-lg font-bold text-purple">{faq.question}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-purple flex-shrink-0 transition-transform ${
                        openFaq === faq.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === faq.id && (
                    <div className="px-6 py-6 border-t border-cool-gray bg-cool-gray/20">
                      <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-slate-gray text-lg">No FAQs match your search. Try different keywords.</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-purple/5 to-purple/10 rounded-2xl p-8 border-2 border-purple/20 text-center">
            <MessageCircle className="w-12 h-12 text-purple mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple mb-3">Still Have Questions?</h3>
            <p className="text-charcoal mb-6 max-w-2xl mx-auto">
              Our program advisors are here to help. Get personalized information about the SCFP-HNWI program, eligibility, and how it can advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6512345678"
                className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Schedule a Call
              </a>
              <a
                href="mailto:scfp@fp-edu.com"
                className="inline-flex items-center justify-center border-2 border-purple text-purple hover:bg-purple hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

