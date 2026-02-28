import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const builds = [
  {
    id: 1,
    name: 'Monster Patrol Build',
    category: 'Lift Kits',
    image: 'https://images.unsplash.com/photo-1754409228550-d8240421a81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZ0ZWQlMjB0cnVjayUyMG9mZi1yb2FkfGVufDF8fHx8MTc3MjIwNTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    span: true
  },
  {
    id: 2,
    name: 'Rubicon Extreme',
    category: 'Wheels',
    image: 'https://images.unsplash.com/photo-1622665556257-2f2ce02beadb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWVwJTIwd3JhbmdsZXIlMjBtb2RpZmllZHxlbnwxfHx8fDE3NzIyMDU1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    span: false
  },
  {
    id: 3,
    name: 'Beast Mode Ranger',
    category: 'Engine',
    image: 'https://images.unsplash.com/photo-1711279207205-a362a655860d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw0eDQlMjBtb25zdGVyJTIwdHJ1Y2t8ZW58MXx8fHwxNzcyMjA1NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    span: false
  },
  {
    id: 4,
    name: 'LC76 Overlander',
    category: 'Lift Kits',
    image: 'https://images.unsplash.com/photo-1707339201380-72a1394dcf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwY3J1aXNlciUyMGN1c3RvbWl6ZWR8ZW58MXx8fHwxNzcyMjA1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    span: false
  },
  {
    id: 5,
    name: 'Ranger Raptor Custom',
    category: 'Wheels',
    image: 'https://images.unsplash.com/photo-1770096171604-2e6f19fc33c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JkJTIwcmFuZ2VyJTIwbW9kaWZpZWR8ZW58MXx8fHwxNzcyMjA1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    span: false
  },
  {
    id: 6,
    name: 'Hilux Trail Master',
    category: 'Engine',
    image: 'https://images.unsplash.com/photo-1759131384820-c710de76997c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWx1eCUyMG9mZi1yb2FkJTIwd2hlZWxzfGVufDF8fHx8MTc3MjIwNTU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    span: false
  }
];

const categories = ['All', 'Lift Kits', 'Wheels', 'Engine'];

export default function FeaturedBuilds() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredBuilds = activeFilter === 'All' 
    ? builds 
    : builds.filter(build => build.category === activeFilter);

  return (
    <div id="builds" className="bg-transparent py-16 lg:py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-widest mb-4">
            Featured Builds
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 font-['Bebas_Neue'] tracking-wider text-sm transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBuilds.map((build) => (
            <div
              key={build.id}
              className={`group relative h-80 overflow-hidden cursor-pointer ${
                build.span ? 'md:col-span-2' : ''
              }`}
            >
              <ImageWithFallback
                src={build.image}
                alt={build.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-white text-xs font-['Bebas_Neue'] tracking-widest mb-2 border-2 border-white px-3 py-1 w-fit">
                  {build.category}
                </span>
                <h3 className="text-2xl font-['Bebas_Neue'] text-white uppercase tracking-wider">
                  {build.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}