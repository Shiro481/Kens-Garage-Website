import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Ken's team transformed my Patrol into an absolute beast. The lift kit installation was flawless and the handling is even better than stock. These guys know their craft!",
    name: 'Miguel Santos',
    vehicle: 'Nissan Patrol - 6" Lift Kit',
    rating: 5
  },
  {
    id: 2,
    text: "Best decision ever bringing my Ranger here. The engine tune gave me 40+ extra horses and the custom exhaust sounds incredible. Professional work from start to finish.",
    name: 'Carlos Reyes',
    vehicle: 'Ford Ranger - ECU Tune & Exhaust',
    rating: 5
  },
  {
    id: 3,
    text: "I've been to many shops in Manila but Ken's Garage is on another level. They took time to understand my needs and delivered beyond expectations. The 35-inch tires fit perfectly!",
    name: 'Jennifer Cruz',
    vehicle: 'Jeep Wrangler - Wheels & Tires',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div id="reviews" className="bg-transparent py-16 lg:py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-widest mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border border-white/20 p-8 pt-16 transition-all duration-300 hover:border-t-4 hover:border-t-white hover:-translate-y-1 group relative"
            >
              {/* Quotation mark */}
              <div className="absolute top-8 left-8 text-white text-[60px] font-['Georgia',serif] leading-none opacity-20 select-none">
                "
              </div>

              {/* Review text */}
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              {/* Customer info */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-['Bebas_Neue'] tracking-wider text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.vehicle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}