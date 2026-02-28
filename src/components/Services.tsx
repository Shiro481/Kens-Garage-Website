import React from 'react';
import { Mountain, CircleDot, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import liftKitImage from '../assets/03d0de79a5b67930144f967b5d0d8e672b7be0b6.png';
import wheelsImage from '../assets/c2ff1eae2e44da03bea6809937e7c2c09c49bf7b.png';
import engineImage from '../assets/4515eec2e5039f6fef8ec15580c14efdf3f2f648.png';
import styles from './Services.module.css';

const services = [
  {
    number: '01', icon: Mountain,
    title: 'Lift Kits & Suspension',
    description: 'Elevate your ride with professional lift installations tailored to your needs.',
    features: ['Body lifts & suspension lifts', 'Coilovers & leaf springs', 'Heavy-duty shocks', 'Complete alignment service'],
    image: liftKitImage,
  },
  {
    number: '02', icon: CircleDot,
    title: 'Wheels & Tires',
    description: 'Outfit your beast with the perfect rubber and rims for any terrain.',
    features: ['All-terrain & mud-terrain tires', 'Beadlock wheels', 'Custom fitment solutions', 'Fender flares & trimming'],
    image: wheelsImage,
  },
  {
    number: '03', icon: Zap,
    title: 'Engine Upgrades & Tuning',
    description: 'Unleash maximum power and performance from your engine.',
    features: ['ECU remapping & tuning', 'Cold air intake systems', 'Performance exhaust', 'Turbo & supercharger installs'],
    image: engineImage,
  },
];

export default function Services() {
  return (
    <div id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>OUR SERVICES</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            From basic upgrades to complete overhauls, we transform your 4WD into the ultimate off-road machine.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={service.image} alt={service.title} className={styles.img} style={{ objectPosition: 'center 40%' }} />
                <div className={styles.gradient} />
                <div className={styles.ghostNum}>{service.number}</div>
              </div>
              <div className={styles.content}>
                <service.icon className={styles.icon} />
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.desc}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.arrow}>▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#quote" className={styles.link}>
                  Get a Quote <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link to="/services" className={styles.ctaBtn}>
            SEE ALL SERVICES <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
