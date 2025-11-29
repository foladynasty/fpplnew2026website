'use client';

import { MapPin, Train, Bus, Car, Navigation } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-16 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">How to Get Here</h2>
            <p className="text-lg text-charcoal">
              Located in the heart of Singapore's business district
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
              <div className="bg-gradient-to-br from-primary-600 to-teal p-4 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-bold">Our Location</h3>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.793466814827!2d103.84862931475394!3d1.2914497990632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a142024d73%3A0x6b5e720a87800702!2sHigh%20Street%20Centre!5e0!3m2!1sen!2ssg!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Financial Perspectives Location"
                ></iframe>
              </div>

              <div className="p-4 bg-white">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1+North+Bridge+Road+High+Street+Centre+Singapore+179094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              {/* MRT */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                    <Train className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary mb-3">Nearest MRT Station</h3>
                    <div className="space-y-2 text-charcoal">
                      <div className="flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
                        <span><strong>Clarke Quay MRT</strong> – 6 mins walk</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
                        <span><strong>City Hall MRT</strong> – 6 mins walk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bus */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <Bus className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary mb-3">Nearest Bus Stop</h3>
                    <div className="space-y-2 text-charcoal">
                      <div className="flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
                        <span>Bus <strong>190, 2, 12, 33, 147</strong></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
                        <span>Walking <strong>1 min</strong> from bus stop <strong>B04229</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary mb-3">Nearest Car Park</h3>
                    <div className="text-charcoal">
                      <p className="mb-2">
                        <strong>High Street Centre</strong>
                      </p>
                      <p className="text-sm text-slate-gray">
                        1 North Bridge Road<br />
                        Singapore 179094
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tip */}
              <div className="bg-gradient-to-br from-gold/10 to-primary-100 border-2 border-gold/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Getting Here is Easy!</h4>
                    <p className="text-sm text-charcoal">
                      High Street Centre is centrally located and easily accessible via public transport. We're just a short walk from both Clarke Quay and City Hall MRT stations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

