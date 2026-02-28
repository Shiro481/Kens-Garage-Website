import React from 'react';
import { motion } from 'motion/react';
import heroBg from '../assets/hero-bg.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div id="home" className={styles.hero}>
      <div className={styles.bgWrap}>
        <img src={heroBg} alt="Ken's Garage - Custom FJ Cruiser" className={styles.bgImg} />
        <div className={styles.overlay1} />
        <div className={styles.overlay2} />
        <div className={styles.overlay3} />
        <div className={styles.overlay4} />
      </div>

      <div className={styles.content}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className={styles.badge}>
            <span className={styles.badgeSpan}>FAMILY OWNED &amp; OPERATED SINCE 2005</span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineBlock}>BUILD YOUR</span>
            <span className={styles.headlineBlock}>BEAST.</span>
          </h1>

          <p className={styles.subheadline}>
            Premier 4WD customization &amp; performance specialists in the Philippines.
          </p>

          <div className={styles.ctaRow}>
            <a href="#quote" className={styles.ctaPrimary}>Get a Free Quote</a>
            <a href="#builds" className={styles.ctaSecondary}>View Our Builds</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 1, delay: 1.2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className={styles.scrollIndicator}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </div>
  );
}