'use client';

import { Award } from 'lucide-react';

export default function SCFPTrainers() {
  const trainers = [
    {
      name: "Dr. Patricia Ng",
      title: "Program Director & Lead Faculty",
      credentials: ["CFP®", "CFA", "PhD in Finance"],
      experience: "Former Head of Private Banking, managing $2B+ in HNWI assets",
      bio: "Dr. Ng has advised Singapore's wealthiest families for over 20 years, specializing in multi-generational wealth planning and family office structures."
    },
    {
      name: "Richard Tan",
      title: "Family Business Advisory Specialist",
      credentials: ["CFP®", "CPA", "MBA"],
      experience: "20+ years in family business succession and governance",
      bio: "Richard has guided over 50 family enterprises through generational transitions, from $50M to $1B+ valuations."
    },
    {
      name: "Melissa Wong",
      title: "Estate & Trust Structures Expert",
      credentials: ["CFP®", "TEP", "LLM in Trust Law"],
      experience: "18+ years in sophisticated wealth structuring",
      bio: "Melissa specializes in cross-border estate planning and trust structures for ultra-high-net-worth individuals and families."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Expert Faculty
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              Learn from Practitioners
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Our faculty consists of seasoned HNWI advisors and family office professionals who bring real-world experience from managing billions in client assets.
            </p>
          </div>

          {/* Trainers Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-cool-gray rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-purple to-purple-700 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple mb-1">{trainer.name}</h3>
                  <p className="text-sm font-semibold text-gold mb-3">{trainer.title}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.credentials.map((credential, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-purple/10 text-purple px-3 py-1 rounded-full">
                        {credential}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-gray mb-3">{trainer.experience}</p>
                  <p className="text-sm text-charcoal leading-relaxed">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Highlights */}
          <div className="bg-gradient-to-br from-purple/5 to-purple/10 rounded-2xl p-10 border-2 border-purple/20">
            <h3 className="text-2xl font-bold text-purple mb-6 text-center">Why Our Faculty Stands Apart</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-purple mb-2">Active Practitioners</h4>
                  <p className="text-sm text-charcoal">All faculty members actively advise HNWI clients and manage significant wealth portfolios.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-purple mb-2">Real Case Studies</h4>
                  <p className="text-sm text-charcoal">Learn from actual (anonymized) family office and HNWI advisory engagements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-purple mb-2">Network Access</h4>
                  <p className="text-sm text-charcoal">Benefit from faculty connections in Singapore's HNWI and family office ecosystem.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-purple mb-2">Personalized Mentorship</h4>
                  <p className="text-sm text-charcoal">Small cohorts enable one-on-one guidance and career coaching throughout the program.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

