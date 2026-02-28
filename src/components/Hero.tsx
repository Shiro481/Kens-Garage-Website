import React from 'react';
import { motion } from 'motion/react';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <div id="home" className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ken's Garage - Custom FJ Cruiser"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Heavy dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        {/* Watermark cover — bottom-right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-gradient-to-tl from-black via-black/90 to-transparent" />
      </div>

      {/* Content — vertically centered with navbar clearance */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block border border-white/40 px-4 py-2 mb-8">
            <span className="text-white/80 text-xs font-['Bebas_Neue'] tracking-[0.2em]">
              FAMILY OWNED & OPERATED SINCE 2005
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Bebas_Neue'] tracking-wider mb-6">
            <span className="block text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              BUILD YOUR
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              BEAST.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Premier 4WD customization & performance specialists in the Philippines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="btn-angular bg-white text-black px-8 py-4 text-lg font-['Bebas_Neue'] tracking-widest hover:bg-neutral-200 transition-colors inline-block text-center"
            >
              Get a Free Quote
            </a>
            <a
              href="#builds"
              className="btn-angular border border-white/40 text-white px-8 py-4 text-lg font-['Bebas_Neue'] tracking-widest hover:bg-white hover:text-black transition-colors inline-block text-center"
            >
              View Our Builds
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </div>
  );
}