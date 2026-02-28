import React from 'react';
import { Phone, Clock, Mail, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: MapPin, title: 'Address', content: 'Kens Trading\nDumaguete City, Negros Oriental\nPhilippines' },
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
          <iframe
            className={styles.mapIframe}
            title="Ken's Garage Location"
            src="https://maps.google.com/maps?q=9.3326439,123.2939557&t=&z=17&ie=UTF8&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}