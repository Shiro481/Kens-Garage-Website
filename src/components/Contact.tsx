import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: MapPin, title: 'Address', content: 'Unit 5, Industrial Park, Quezon City, Metro Manila, Philippines' },
  { icon: Phone, title: 'Phone', content: '+63 917 123 4567' },
  { icon: Clock, title: 'Business Hours', content: 'Mon-Sat: 8AM - 6PM\nSunday: Closed' },
  { icon: Mail, title: 'Email', content: 'info@kensgarage.ph' },
];

export default function Contact() {
  return (
    <div id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Visit Our Shop</h2>
          <div className={styles.divider} />
        </div>
        <div className={styles.grid}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.card}>
              <info.icon className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{info.title}</h3>
              <p className={styles.cardContent}>{info.content}</p>
            </div>
          ))}
        </div>
        <div className={styles.mapBox}>
          <div className={styles.mapInner}>
            <MapPin className={styles.mapIcon} />
            <p className={styles.mapText}>Google Maps Location</p>
            <p className={styles.mapSub}>Unit 5, Industrial Park, Quezon City</p>
          </div>
        </div>
      </div>
    </div>
  );
}