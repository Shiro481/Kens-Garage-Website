import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Award, ShieldCheck } from 'lucide-react';
import whyKensBg from '../assets/whykens-bg.jpg';
import styles from './WhyKens.module.css';

const features = [
  { icon: Heart, title: 'Family-Owned Since 2005', description: 'Three generations of automotive passion and expertise. We treat every vehicle like our own.' },
  { icon: Award, title: 'Purpose-Built Customization', description: 'No cookie-cutter builds here. Every project is custom-tailored to match your exact needs and terrain.' },
  { icon: ShieldCheck, title: 'Workmanship Guarantee', description: 'All work is backed by our comprehensive warranty. Quality you can trust, built to last.' },
];

export default function WhyKens() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <div className={styles.imageInner}>
              <ImageWithFallback
                src={whyKensBg}
                alt="Ken's Garage Workshop"
                className={styles.img}
                style={{ objectPosition: 'center 40%' }}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.accentCorner} />
            </div>
          </div>

          <div>
            <h2 className={styles.sectionTitle}>THE KENS<br />DIFFERENCE</h2>
            <div className={styles.featureList}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.iconBox}>
                    <feature.icon className={styles.featureIcon} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}