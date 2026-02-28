import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Unit 5, Industrial Park, Quezon City, Metro Manila, Philippines'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+63 917 123 4567'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Sat: 8AM - 6PM\nSunday: Closed'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@kensgarage.ph'
  }
];

export default function Contact() {
  return (
    <div id="contact" className="bg-transparent py-16 lg:py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-widest mb-4">
            Visit Our Shop
          </h2>
          <div className="w-24 h-1 bg-white mx-auto" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-black border border-white/20 p-6 text-center hover:border-white transition-colors"
            >
              <info.icon className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-['Bebas_Neue'] tracking-wider mb-2 uppercase text-sm">
                {info.title}
              </h3>
              <p className="text-gray-400 text-sm whitespace-pre-line">
                {info.content}
              </p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-black border border-white/20 h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-white mx-auto mb-4 opacity-30" />
            <p className="text-gray-500 text-lg">
              Google Maps Location
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Unit 5, Industrial Park, Quezon City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}