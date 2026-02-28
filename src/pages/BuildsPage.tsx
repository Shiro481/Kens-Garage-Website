import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './BuildsPage.module.css';

const categories = ['All', 'Lift Kits', 'Wheels & Tires', 'Engine Builds', 'Full Custom'];

const builds = [
  { id: 1, name: '2022 Toyota Hilux', category: 'Lift Kits', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', specs: ['3" Lift Kit', 'Old Man Emu Suspension', '33" BFG KO2 Tires', 'ARB Bull Bar'], description: 'Complete suspension overhaul with lift kit, new shocks, and all-terrain tires for improved off-road capability.', span: true },
  { id: 2, name: '2021 Ford Ranger Raptor', category: 'Full Custom', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', specs: ['Custom Fabrication', 'LED Light Bar', 'Snorkel Install', 'Roof Rack System'], description: 'Full expedition build with custom parts and professional-grade accessories.' },
  { id: 3, name: '2020 Jeep Wrangler', category: 'Wheels & Tires', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', specs: ['35" Mud Terrain Tires', 'Beadlock Wheels', 'Fender Trimming', 'Regear'], description: 'Aggressive tire and wheel setup with proper gearing for optimal performance.' },
  { id: 4, name: '2019 Mitsubishi Montero', category: 'Engine Builds', image: 'https://images.unsplash.com/photo-1552519507-ac14d6d595ea?w=800', specs: ['ECU Remap', 'Performance Exhaust', 'Cold Air Intake', 'Turbo Upgrade'], description: 'Complete engine performance package for increased power and torque.', span: true },
  { id: 5, name: '2023 Toyota Land Cruiser', category: 'Full Custom', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', specs: ['Full Armor Package', '4" Suspension Lift', 'Dual Battery System', 'Winch Install'], description: 'Ultimate expedition vehicle with every upgrade for serious off-roading.' },
  { id: 6, name: '2021 Isuzu D-Max', category: 'Lift Kits', image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800', specs: ['2.5" Lift', 'Bilstein Shocks', '32" AT Tires', 'Load Level Kit'], description: 'Balanced lift setup maintaining daily drivability with enhanced capability.' },
  { id: 7, name: '2020 Nissan Navara', category: 'Wheels & Tires', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800', specs: ['Method Race Wheels', 'Nitto Ridge Grappler', 'TPMS Install', 'Wheel Spacers'], description: 'Stylish wheel and tire combination with modern monitoring technology.' },
  { id: 8, name: '2022 Chevrolet Colorado', category: 'Engine Builds', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800', specs: ['Stage 2 Tune', 'Cat-Back Exhaust', 'Intake Upgrade', 'Throttle Controller'], description: 'Comprehensive power upgrade package with proven reliability.', span: true },
  { id: 9, name: '2021 Suzuki Jimny', category: 'Full Custom', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', specs: ['Mini Overlander Build', 'Custom Bumpers', 'Lifted Suspension', 'Roof Tent'], description: 'Compact but capable - complete transformation for the ultimate adventure vehicle.' },
];

export default function BuildsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredBuilds = activeFilter === 'All'
    ? builds
    : builds.filter(build => build.category === activeFilter);

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
              <h1 className={styles.heroTitle}>Our Builds</h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroSubtitle}>
                Explore our portfolio of custom 4WD builds. Each project represents our commitment to quality, performance, and attention to detail.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className={styles.filterBar}>
          <div className={styles.filterInner}>
            <div className={styles.filterRow}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Gallery ── */}
        <div className={styles.gallery}>
          <div className={styles.galleryInner}>
            <div className={styles.grid}>
              {filteredBuilds.map((build) => (
                <motion.div
                  key={build.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`${styles.buildCard} ${build.span ? styles.buildCardSpan : ''}`}
                >
                  <ImageWithFallback src={build.image} alt={build.name} className={styles.buildImg} />
                  <div className={styles.buildOverlay} />
                  <div className={styles.buildContent}>
                    <span className={styles.buildCategory}>{build.category}</span>
                    <h3 className={styles.buildName}>{build.name}</h3>
                    <p className={styles.buildDesc}>{build.description}</p>
                    <div className={styles.buildSpecs}>
                      {build.specs.map((spec, idx) => (
                        <div key={idx} className={styles.specItem}>
                          <span className={styles.specArrow}>▸</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Want Something Like This?</h2>
            <p className={styles.ctaSubtitle}>
              Every build starts with a conversation. Let's discuss your vision and make it reality.
            </p>
            <Link to="/#quote" className={styles.ctaBtn}>Start Your Build</Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
