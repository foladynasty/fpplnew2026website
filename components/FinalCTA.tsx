import { Phone, Mail, Calendar, BookOpen } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Guidance?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Speak with our course advisor to find the right program for your career goals and experience level. We're here to help you succeed.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">+65 8111 7890</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">info@fp-edu.com</span>
                </div>
              </div>

              <a
                href="https://wa.me/6581117890?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:shadow-lg"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Call
              </a>
            </div>

            {/* Right Column */}
            <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start?
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Explore our complete course catalog and take the first step toward your professional goals today.
              </p>

              <a
                href="#programs"
                className="inline-flex items-center justify-center w-full bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:shadow-lg"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


