import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Builds', href: '#builds' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen || isScrolled
            ? 'bg-black border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a
              href="#home"
              onClick={handleLinkClick}
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white flex items-center justify-center">
                <span className="text-black font-['Bebas_Neue'] text-base sm:text-xl">KG</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-['Bebas_Neue'] text-lg sm:text-2xl tracking-widest">
                  KENS GARAGE
                </span>
                <span className="text-neutral-400 text-[10px] sm:text-xs font-light tracking-widest hidden sm:block">
                  DUMAGUETE · PHILIPPINES
                </span>
              </div>
            </a>

            {/* Desktop Navigation — shown at lg (1024px+) */}
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
                className="btn-angular bg-white text-black px-6 py-2.5 font-['Bebas_Neue'] tracking-widest text-base hover:bg-neutral-200 transition-colors"
              >
                Get a Quote
              </a>
            </div>

            {/* Hamburger Button — shown below lg */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Fullscreen Menu — rendered outside nav to avoid z-index stacking issues */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black flex flex-col transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '0', paddingTop: '5rem' }}      // sits below the navbar height
      >
        {/* Scrollable inner wrapper in case viewport is short */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-6 px-8 py-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white text-3xl sm:text-4xl font-['Bebas_Neue'] tracking-widest hover:text-neutral-400 transition-colors w-full text-center border-b border-white/10 pb-6"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            onClick={handleLinkClick}
            className="mt-4 btn-angular bg-white text-black px-10 py-4 text-xl sm:text-2xl font-['Bebas_Neue'] tracking-widest hover:bg-neutral-200 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Footer in menu */}
        <div className="shrink-0 border-t border-white/10 py-6 text-center">
          <p className="text-neutral-500 text-xs tracking-widest font-['Bebas_Neue']">
            KENS GARAGE · DUMAGUETE · PHILIPPINES
          </p>
        </div>
      </div>
    </>
  );
}