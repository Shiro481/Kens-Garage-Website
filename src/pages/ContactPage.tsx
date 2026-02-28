import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.pageInner}
      >
        {/* ── Hero ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className={styles.heroTitle}>Contact Us</h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroSubtitle}>
                Have questions? Want to visit our shop? Get in touch with us today.
              </p>
            </motion.div>
          </div>
        </div>

        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}
