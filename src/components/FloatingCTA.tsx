import React, { useState, useEffect } from 'react';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href="#quote" className={`${styles.btn} ${isVisible ? styles.btnVisible : ''}`}>
      Get a Quote
    </a>
  );
}