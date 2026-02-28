import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import styles from './QuotePage.module.css';

export default function QuotePage() {
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
              <h1 className={styles.heroTitle}>Get a Quote</h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroSubtitle}>
                Ready to transform your 4WD? Fill out the form below and our team will get back to you within 24 hours with a detailed quote.
              </p>
            </motion.div>
          </div>
        </div>

        <QuoteForm />
      </motion.div>
      <Footer />
    </div>
  );
}
