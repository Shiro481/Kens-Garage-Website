import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Builds', href: '#builds' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen || isScrolled 
          ? 'bg-black/95 backdrop-blur-md py-3 border-b-2 border-white/20' 
          : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white flex items-center justify-center relative">
              <span className="text-black font-['Bebas_Neue'] text-xl">KG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-['Bebas_Neue'] text-2xl tracking-widest leading-none">
                KENS GARAGE
              </span>
              <span className="text-neutral-400 text-xs font-light tracking-widest">
                DUMAGUETE · PHILIPPINES 
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-neutral-300 transition-colors font-['Bebas_Neue'] tracking-wider text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="btn-angular bg-white text-black px-6 py-3 font-['Bebas_Neue'] tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[74px] bg-black z-40 flex flex-col items-center justify-center gap-8 pb-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-['Bebas_Neue'] tracking-widest hover:text-neutral-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-angular bg-white text-black px-8 py-4 text-xl font-['Bebas_Neue'] tracking-widest mt-4"
            >
              Get a Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}