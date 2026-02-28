import React from 'react';
import { Heart, Users, Shield, MapPin, Clock } from 'lucide-react';

const trustSignals = [
  { icon: Heart, text: 'Family Owned', subtext: 'Est. 2005' },
  { icon: Users, text: 'Expert Technicians', subtext: 'Certified Team' },
  { icon: Shield, text: 'Warranty Backed', subtext: 'Quality Guaranteed' },
  { icon: MapPin, text: 'Proudly Filipino', subtext: 'Local Expertise' },
  { icon: Clock, text: 'Fast Turnaround', subtext: 'On-Time Delivery' },
];

export default function TrustBar() {
  return (
    <div className="bg-neutral-900 border-t border-b border-white/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <signal.icon className="w-8 h-8 text-white mb-3" />
              <div className="text-white font-['Bebas_Neue'] tracking-wider text-sm">
                {signal.text}
              </div>
              <div className="text-gray-500 text-xs">
                {signal.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}