'use client';

import { CourseEvent, formatEventDate, getStatusBadge } from '@/lib/events-content';
import { Calendar, Clock, MapPin, Award, Users, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface EventCardProps {
  event: CourseEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const statusBadge = getStatusBadge(event.status);
  const eventDate = formatEventDate(event.startDate);
  const endEventDate = event.endDate ? formatEventDate(event.endDate) : null;

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-${event.category === 'CFP' ? 'primary' : event.category === 'CPD' ? 'teal' : 'purple'}/20 group`}>
      {/* Header with Category Badge */}
      <div className={`bg-gradient-to-r ${event.color.gradient} p-4`}>
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-sm">
            {event.category}
          </span>
          <span className={`${statusBadge.color} px-3 py-1 rounded-full text-xs font-semibold border`}>
            {statusBadge.text}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-teal transition-colors">
          {event.title}
        </h3>
        {event.subtitle && (
          <p className="text-sm text-slate-gray mb-4">{event.subtitle}</p>
        )}

        {/* Event Details Grid */}
        <div className="space-y-3 mb-5">
          {/* Date */}
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <span className="font-semibold text-charcoal">
                {eventDate}
                {endEventDate && ` - ${endEventDate}`}
              </span>
            </div>
          </div>

          {/* Time */}
          {event.time && (
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal">{event.time}</span>
            </div>
          )}

          {/* Location & Format */}
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span className="text-sm text-charcoal">
              {event.location} • {event.format}
            </span>
          </div>

          {/* Duration & CPD Hours */}
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span className="text-sm text-charcoal">
              {event.duration}
              {event.cpdHours && ` • ${event.cpdHours}`}
            </span>
          </div>

          {/* Seats (if available) */}
          {event.seatsTotal && (
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal">
                {event.seatsAvailable} of {event.seatsTotal} seats available
              </span>
            </div>
          )}

          {/* Pricing */}
          <div className="flex items-start gap-2">
            <DollarSign className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <span className="text-charcoal">{event.price}</span>
              {event.earlyBirdPrice && (
                <span className="block text-green-600 font-semibold">
                  {event.earlyBirdPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Highlights */}
        {event.highlights.length > 0 && (
          <div className="bg-cool-gray rounded-lg p-4 mb-5">
            <p className="text-xs font-semibold text-primary mb-2">Key Highlights:</p>
            <ul className="space-y-1">
              {event.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-charcoal">
                  <span className="text-teal mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Funding Badge */}
        {event.fundingAvailable && (
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
              💰 IBF Funding Available
            </span>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-2">
          <Link
            href={event.registerUrl || event.detailsUrl}
            className={`flex items-center justify-center gap-2 bg-gradient-to-r ${event.color.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200`}
          >
            {event.status === 'coming-soon' ? 'Register Interest' : 'Register Now'}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={event.detailsUrl}
            className="text-center text-teal hover:text-teal-700 text-sm font-semibold"
          >
            View Course Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

