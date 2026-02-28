import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Award, Target, Heart, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './AboutPage.module.css';
import whyKensBg from '../assets/whykens-bg.jpg';

const milestones = [
  { year: '2005', title: 'Founded', description: 'Ken opens his first garage in Quezon City' },
  { year: '2010', title: '500th Build', description: 'Reached half-thousand custom builds milestone' },
  { year: '2015', title: 'Expansion', description: 'Moved to larger facility to meet demand' },
  { year: '2020', title: '1000+ Builds', description: 'Celebrated over 1000 completed projects' },
  { year: '2024', title: 'Industry Leader', description: "Recognized as Philippines' premier 4WD specialist" },
];

const team = [
  { name: 'Ken Rodriguez', role: 'Founder & Master Technician', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', bio: '25+ years of automotive expertise' },
  { name: 'Maria Rodriguez', role: 'Business Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', bio: 'Keeping operations running smoothly since day one' },
  { name: 'Carlos Santos', role: 'Lead Fabricator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', bio: 'Custom fabrication specialist with 15 years experience' },
  { name: 'Josh Mercado', role: 'Senior Mechanic', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', bio: 'Engine performance and tuning expert' },
];

const values = [
  { icon: Award, title: 'Quality First', description: 'We never compromise on quality. Every build meets our exacting standards.' },
  { icon: Users, title: 'Family Business', description: 'Built on family values, we treat every customer like part of our ohana.' },
  { icon: Target, title: 'Precision Work', description: 'Attention to detail in every modification, installation, and custom build.' },
  { icon: Heart, title: 'Passion Driven', description: 'We love what we do, and it shows in every project we complete.' },
];

export default function AboutPage() {
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
              <h1 className={styles.heroTitle}>About Ken's Garage</h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroSubtitle}>
                Since 2005, we've been transforming 4WD vehicles into legendary off-road machines. Built on passion, precision, and family values.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Story ── */}
        <div className={styles.story}>
          <div className={styles.storyInner}>
            <div className={styles.storyGrid}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className={styles.storyTitle}>The Ken's Story</h2>
                <div className={styles.storyText}>
                  <p>What started as a small one-bay garage in Quezon City has grown into the Philippines' most trusted 4WD customization shop. Ken Rodriguez opened his doors in 2005 with a simple mission: build vehicles that can handle anything the Philippine terrain throws at them.</p>
                  <p>With over two decades of experience and thousands of successful builds, Ken's Garage has become synonymous with quality, reliability, and innovation in the 4WD community. We're not just mechanics — we're enthusiasts who live and breathe off-road culture.</p>
                  <p>Today, we're proud to be a family-run business serving families. Every vehicle that leaves our shop carries our reputation, and we take that responsibility seriously.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.storyImageWrap}>
                <ImageWithFallback
                  src={whyKensBg}
                  alt="Ken's Garage Workshop"
                  className={styles.storyImg}
                  style={{ objectPosition: 'center 40%' }}
                />
                <div className={styles.storyAccent} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className={styles.timeline}>
          <div className={styles.timelineInner}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Journey</h2>
              <div className={styles.sectionDivider} />
            </motion.div>
            <div className={styles.timelineWrap}>
              <div className={styles.timelineLine} />
              <div className={styles.timelineList}>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${styles.timelineItem} ${index % 2 === 1 ? styles.timelineItemReverse : ''}`}
                  >
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineYear}>{milestone.year}</div>
                      <div className={styles.timelineMilestone}>{milestone.title}</div>
                      <div className={styles.timelineDesc}>{milestone.description}</div>
                    </div>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineSpacer} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Team ── */}
        <div className={styles.team}>
          <div className={styles.teamInner}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Meet the Team</h2>
              <div className={styles.sectionDivider} />
            </motion.div>
            <div className={styles.teamGrid}>
              {team.map((member, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className={styles.teamCard}>
                  <div className={styles.teamImgWrap}>
                    <ImageWithFallback src={member.image} alt={member.name} className={styles.teamImg} />
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <div className={styles.teamRole}>{member.role}</div>
                  <p className={styles.teamBio}>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Values ── */}
        <div className={styles.values}>
          <div className={styles.valuesInner}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Values</h2>
              <div className={styles.sectionDivider} />
            </motion.div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className={styles.valueCard}>
                  <value.icon className={styles.valueIcon} />
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Shop Info ── */}
        <div className={styles.shopInfo}>
          <div className={styles.shopInner}>
            <div className={styles.shopGrid}>
              <div className={styles.shopCard}>
                <MapPin className={styles.shopIcon} />
                <h3 className={styles.shopCardTitle}>Location</h3>
                <p className={styles.shopCardText}>Unit 5, Industrial Park<br />Quezon City, Metro Manila<br />Philippines</p>
              </div>
              <div className={styles.shopCard}>
                <Clock className={styles.shopIcon} />
                <h3 className={styles.shopCardTitle}>Hours</h3>
                <p className={styles.shopCardText}>Monday - Saturday<br />8:00 AM - 6:00 PM<br />Sunday: Closed</p>
              </div>
              <div className={styles.shopCard}>
                <Award className={styles.shopIcon} />
                <h3 className={styles.shopCardTitle}>Experience</h3>
                <p className={styles.shopCardText}>20+ Years in Business<br />1000+ Builds Completed<br />100% Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
