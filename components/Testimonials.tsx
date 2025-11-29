import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The CFP® pathway at Financial Perspectives gave me more than just a certification — it gave me confidence and credibility. The comprehensive curriculum and expert instructors prepared me to handle complex client situations with professionalism. Today, I'm managing portfolios and serving clients I never thought possible when I started.",
    name: "Michael Chen",
    credentials: "CFP® Professional",
    role: "Senior Wealth Manager",
    company: "[Financial Institution]",
  },
  {
    id: 2,
    content: "As a career changer entering financial services, I was nervous about the transition. Financial Perspectives didn't just teach me financial planning — they mentored me through the entire journey. The practical focus, supportive environment, and real-world case studies made all the difference. Best career decision I ever made.",
    name: "Sarah Lim",
    credentials: "AWP®",
    role: "Wealth Advisor",
    company: "[Advisory Firm]",
  },
  {
    id: 3,
    content: "The SCFP-HNWI advanced certification took my advisory practice to a completely new level. I'm now confidently serving ultra-high-net-worth clients and family offices, thanks to the advanced strategies, frameworks, and specialized knowledge I gained. This certification differentiated me in a competitive market.",
    name: "David Tan",
    credentials: "CFP® Professional",
    role: "Private Banker",
    company: "[Private Bank]",
  },
];

const stats = [
  { value: "20,000+", label: "Graduates" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "26 Years", label: "Legacy" },
  { value: "#1", label: "CFP® Provider in Singapore" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Singapore's Financial Professionals
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Don't just take our word for it — hear from thousands who've transformed their careers through Financial Perspectives.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-white/40 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.credentials}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-sm lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


