import React from 'react';
import { Heart, Users, Shield, MapPin, Clock } from 'lucide-react';
import styles from './TrustBar.module.css';

const trustSignals = [
  { icon: Heart, text: 'Family Owned', subtext: 'Est. 2005' },
  { icon: Users, text: 'Expert Technicians', subtext: 'Certified Team' },
  { icon: Shield, text: 'Warranty Backed', subtext: 'Quality Guaranteed' },
  { icon: MapPin, text: 'Proudly Filipino', subtext: 'Local Expertise' },
  { icon: Clock, text: 'Fast Turnaround', subtext: 'On-Time Delivery' },
];

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {trustSignals.map((signal, index) => (
            <div key={index} className={styles.item}>
              <signal.icon className={styles.icon} />
              <div className={styles.label}>{signal.text}</div>
              <div className={styles.sublabel}>{signal.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}