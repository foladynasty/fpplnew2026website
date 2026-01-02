import { Star, Quote, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { getTestimonials, EndorsalTestimonial } from '@/lib/endorsal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Wall of Love | Financial Perspectives',
    description: 'Read what thousands of financial professionals say about their experience with Financial Perspectives. Real testimonials from CFP®, AWP, and AFP graduates.',
};

// Stats to display
const stats = [
    { icon: Users, value: "20,000+", label: "Graduates" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Award, value: "26 Years", label: "Of Excellence" },
    { icon: TrendingUp, value: "#1", label: "CFP® Provider" },
];

export default async function TestimonialsPage() {
    // Fetch all testimonials from Endorsal
    const testimonials = await getTestimonials();

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-teal text-white py-20 lg:py-28 mt-28 lg:mt-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
                </div>

                {/* Floating Hearts Animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <Heart
                            key={i}
                            className={`absolute text-white/10 animate-pulse`}
                            style={{
                                left: `${10 + i * 15}%`,
                                top: `${20 + (i % 3) * 20}%`,
                                width: `${30 + (i % 3) * 20}px`,
                                height: `${30 + (i % 3) * 20}px`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                            fill="currentColor"
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-red-300" fill="currentColor" />
                            <span className="text-sm font-semibold">Wall of Love</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            Trusted by <span className="text-gold">20,000+</span> Professionals
                        </h1>

                        <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                            Real stories from real people. Discover how Financial Perspectives has transformed careers across Singapore's financial industry.
                        </p>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-gold" />
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-white/80">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Wall */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {testimonials.length === 0 ? (
                            <div className="text-center py-20">
                                <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">No testimonials available at the moment.</p>
                                <p className="text-gray-400 text-sm mt-2">Check back soon!</p>
                            </div>
                        ) : (
                            /* Masonry Grid using CSS Columns */
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                {testimonials.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={testimonial._id}
                                        testimonial={testimonial}
                                        index={index}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-600 to-teal text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful financial professionals who transformed their careers with us.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/cfp"
                            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl"
                        >
                            Explore CFP® Program
                        </a>
                        <a
                            href="https://wa.me/6581117890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/30 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
                        >
                            Talk to Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Individual Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: EndorsalTestimonial; index: number }) {
    const rating = testimonial.rating || 5;
    const avatarUrl = testimonial.avatar?.url;

    // Alternate card colors for visual variety
    const cardStyles = [
        'bg-white border-gray-100 hover:border-primary-200',
        'bg-primary-50/50 border-primary-100 hover:border-primary-300',
        'bg-teal/5 border-teal/20 hover:border-teal/40',
        'bg-gold/5 border-gold/20 hover:border-gold/40',
        'bg-purple-50/50 border-purple-100 hover:border-purple-300',
    ];
    const cardStyle = cardStyles[index % cardStyles.length];

    return (
        <div
            className={`break-inside-avoid mb-6 rounded-2xl border-2 p-6 shadow-sm hover:shadow-xl transition-all duration-500 group ${cardStyle}`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-primary-200 mb-4 group-hover:text-primary-400 transition-colors" />

            {/* Star Rating */}
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
                            }`}
                    />
                ))}
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.comments}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-teal flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                )}
                <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    {testimonial.position && (
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                    )}
                    {testimonial.company && (
                        <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
