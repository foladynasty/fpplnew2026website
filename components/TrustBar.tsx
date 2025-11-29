'use client';

import { Award, Users, Calendar, Trophy, CheckCircle } from 'lucide-react';

const trustItems = [
  { icon: CheckCircle, text: "IBF-Approved Programs" },
  { icon: Award, text: "FPSB Certified Partner" },
  { icon: Calendar, text: "26 Years of Excellence" },
  { icon: Users, text: "20,000+ Professionals Trained" },
  { icon: Trophy, text: "Singapore's #1 CFP® Provider" },
];

export default function TrustBar() {
  return (
    <section className="bg-cool-gray border-y border-border-gray py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-charcoal">
              <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="font-medium text-sm lg:text-base whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

