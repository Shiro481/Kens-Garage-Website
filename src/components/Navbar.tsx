import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/kenslogo.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Builds', href: '/builds', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled || isMobileMenuOpen ? styles.navScrolled : ''}`}>
        <div className={styles.inner}>
          <div className={styles.bar}>
            <Link to="/" onClick={handleLinkClick} className={styles.logo}>
              <img src={logo} alt="Ken's Garage" className={styles.logoImg} />
              <div className={styles.logoText}>
                <span className={styles.logoName}>KENS GARAGE</span>
                <span className={styles.logoSub}>DUMAGUETE · PHILIPPINES</span>
              </div>
            </Link>

            <div className={styles.desktopLinks}>
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link key={link.name} to={link.href} className={styles.navLink}>{link.name}</Link>
                ) : (
                  <a key={link.name} href={link.href} className={styles.navLink}>{link.name}</a>
                )
              )}
              <Link to="/quote" className={styles.quoteBtn}>Get a Quote</Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.hamburger}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.name} to={link.href} onClick={handleLinkClick} className={styles.mobileLink}>{link.name}</Link>
            ) : (
              <a key={link.name} href={link.href} onClick={handleLinkClick} className={styles.mobileLink}>{link.name}</a>
            )
          )}
          <Link to="/quote" onClick={handleLinkClick} className={styles.mobileCta}>
            Get a Free Quote
          </Link>
        </div>
        <div className={styles.mobileFooter}>
          <p className={styles.mobileFooterText}>KENS GARAGE · DUMAGUETE · PHILIPPINES</p>
        </div>
      </div>
    </>
  );
}