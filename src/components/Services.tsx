import React from 'react';
import { Mountain, CircleDot, Zap, ArrowRight } from 'lucide-react';
import liftKitImage from '../assets/03d0de79a5b67930144f967b5d0d8e672b7be0b6.png';
import wheelsImage from '../assets/c2ff1eae2e44da03bea6809937e7c2c09c49bf7b.png';
import engineImage from '../assets/4515eec2e5039f6fef8ec15580c14efdf3f2f648.png';

const services = [
  {
    number: '01',
    icon: Mountain,
    title: 'Lift Kits & Suspension',
    description: 'Elevate your ride with professional lift installations tailored to your needs.',
    features: [
      'Body lifts & suspension lifts',
      'Coilovers & leaf springs',
      'Heavy-duty shocks',
      'Complete alignment service'
    ],
    image: liftKitImage
  },
  {
    number: '02',
    icon: CircleDot,
    title: 'Wheels & Tires',
    description: 'Outfit your beast with the perfect rubber and rims for any terrain.',
    features: [
      'All-terrain & mud-terrain tires',
      'Beadlock wheels',
      'Custom fitment solutions',
      'Fender flares & trimming'
    ],
    image: wheelsImage
  },
  {
    number: '03',
    icon: Zap,
    title: 'Engine Upgrades & Tuning',
    description: 'Unleash maximum power and performance from your engine.',
    features: [
      'ECU remapping & tuning',
      'Cold air intake systems',
      'Performance exhaust',
      'Turbo & supercharger installs'
    ],
    image: engineImage
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-transparent py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-widest mb-4">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From basic upgrades to complete overhauls, we transform your 4WD into the ultimate off-road machine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transform-gpu"
            >
              {/* Image Section - Hide watermark */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110"
                  style={{
                    objectPosition: 'center 40%',
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent" />
                
                {/* Ghost number */}
                <div className="absolute top-4 right-4 text-[100px] font-['Bebas_Neue'] text-white/10 leading-none pointer-events-none">
                  {service.number}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 -mt-px bg-neutral-900">
                {/* Icon */}
                <service.icon className="w-12 h-12 text-white mb-4" />

                {/* Title */}
                <h3 className="text-2xl font-['Bebas_Neue'] text-white uppercase mb-3 tracking-widest">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-white mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-white font-['Bebas_Neue'] tracking-wider hover:gap-3 transition-all duration-300 group/link"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
