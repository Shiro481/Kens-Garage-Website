import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import logo from '../assets/kenslogo.jpg';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Featured Builds', href: '#builds' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Get a Quote', href: '#quote' },
    { name: 'Contact', href: '#contact' },
  ];
  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <img src={logo} alt="Ken's Garage" className={styles.logoImg} />
              <div className={styles.logoText}>
                <span className={styles.logoName}>KENS GARAGE</span>
                <span className={styles.logoSub}>4WD Specialists</span>
              </div>
            </div>
            <p className={styles.brandDesc}>The Philippines' premier 4WD customization shop. Building legendary off-road machines since 2005.</p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Facebook className={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Instagram className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.name}><a href={link.href} className={styles.footerLink}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Business Hours</h3>
            {businessHours.map((s, i) => (
              <div key={i} className={styles.hoursRow}>
                <span className={styles.hoursDay}>{s.day}</span>
                <span className={styles.hoursTime}>{s.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>© 2026 <span className={styles.copyrightBrand}>KENS GARAGE</span>. All rights reserved.</p>
          <p className={styles.tagline}>Built Tough. <span className={styles.taglineHighlight}>Built Right.</span></p>
        </div>
      </div>
    </footer>
  );
}