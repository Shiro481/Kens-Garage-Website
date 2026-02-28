import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Award, ShieldCheck } from 'lucide-react';
import whyKensBg from '../assets/whykens-bg.jpg';

const features = [
  {
    icon: Heart,
    title: 'Family-Owned Since 2005',
    description: 'Three generations of automotive passion and expertise. We treat every vehicle like our own.'
  },
  {
    icon: Award,
    title: 'Purpose-Built Customization',
    description: 'No cookie-cutter builds here. Every project is custom-tailored to match your exact needs and terrain.'
  },
  {
    icon: ShieldCheck,
    title: 'Workmanship Guarantee',
    description: 'All work is backed by our comprehensive warranty. Quality you can trust, built to last.'
  }
];

export default function WhyKens() {
  return (
    <div className="bg-neutral-900 py-16 lg:py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden group">
              <ImageWithFallback
                src={whyKensBg}
                alt="Ken's Garage Workshop"
                className="w-full h-[500px] object-cover grayscale brightness-75 contrast-125 transition-all duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center 40%' }}
              />
              {/* Overlay for watermark cover */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-gradient-to-tl from-neutral-900 via-neutral-900/80 to-transparent" />
              {/* Accent corner */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-white hidden md:block z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-widest mb-12">
              THE KENS<br />DIFFERENCE
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-6 -ml-6 border-l-4 border-transparent transition-all duration-300 hover:translate-x-4 hover:border-white hover:bg-[#000000] hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:border-y hover:border-r hover:border-y-white/5 hover:border-r-white/5 cursor-pointer rounded-r-xl relative z-10"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-['Bebas_Neue'] tracking-wider text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}