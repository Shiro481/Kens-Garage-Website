import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Featured Builds', href: '#builds' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Get a Quote', href: '#quote' },
    { name: 'Contact', href: '#contact' }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <footer className="bg-black border-t border-white/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-black font-['Bebas_Neue'] text-xl">KG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-['Bebas_Neue'] text-xl tracking-widest leading-none">
                  KENS GARAGE
                </span>
                <span className="text-neutral-400 text-xs font-light tracking-wider">
                  4WD Specialists
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              The Philippines' premier 4WD customization shop. Building legendary off-road machines since 2005.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-900 border border-white/20 flex items-center justify-center hover:bg-white hover:border-white transition-colors group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-900 border border-white/20 flex items-center justify-center hover:bg-white hover:border-white transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-['Bebas_Neue'] text-xl uppercase mb-6 tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Business Hours */}
          <div>
            <h3 className="text-white font-['Bebas_Neue'] text-xl uppercase mb-6 tracking-widest">
              Business Hours
            </h3>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-400">{schedule.day}</span>
                  <span className="text-white font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">
              © 2026 <span className="text-white font-['Bebas_Neue'] tracking-wider">KENS GARAGE</span>. All rights reserved.
            </p>
            <p className="text-gray-500 font-['Bebas_Neue'] uppercase tracking-widest">
              Built Tough. <span className="text-white">Built Right.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}