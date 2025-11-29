'use client';

import { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import { faqData } from '@/lib/cfp-content';

export default function CFPFAQs() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category)))];

  // Filter FAQs
  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
              Got Questions?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about CFP® certification, enrollment, exams, and more.
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
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-cool-gray focus:border-primary focus:outline-none text-charcoal"
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
                    ? 'bg-primary text-white'
                    : 'bg-cool-gray text-charcoal hover:bg-primary/10'
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
                  className="bg-cool-gray rounded-xl overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="text-xs font-semibold text-teal mb-2">{faq.category}</div>
                      <h3 className="text-lg font-bold text-primary">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                        openFaq === faq.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  {openFaq === faq.id && (
                    <div className="px-6 py-6 border-t border-white bg-white">
                      <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-gray text-lg">No FAQs match your search. Try different keywords or browse all categories.</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">
              Still Have Questions?
            </h3>
            <p className="text-charcoal mb-6 max-w-2xl mx-auto">
              Our course advisors are here to help. Get personalized guidance on eligibility, funding, course selection, and your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6512345678"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat with Us
              </a>
              <a
                href="mailto:info@fp-edu.com"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

