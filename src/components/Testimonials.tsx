import React from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  { id: 1, text: "Ken's team transformed my Patrol into an absolute beast. The lift kit installation was flawless and the handling is even better than stock. These guys know their craft!", name: 'Miguel Santos', vehicle: 'Nissan Patrol - 6\" Lift Kit', rating: 5 },
  { id: 2, text: 'Best decision ever bringing my Ranger here. The engine tune gave me 40+ extra horses and the custom exhaust sounds incredible. Professional work from start to finish.', name: 'Carlos Reyes', vehicle: 'Ford Ranger - ECU Tune & Exhaust', rating: 5 },
  { id: 3, text: "I've been to many shops in Manila but Ken's Garage is on another level. They took time to understand my needs and delivered beyond expectations. The 35-inch tires fit perfectly!", name: 'Jennifer Cruz', vehicle: 'Jeep Wrangler - Wheels & Tires', rating: 5 },
];

export default function Testimonials() {
  return (
    <div id="reviews" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <div className={styles.divider} />
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.stars}>
                {[...Array(t.rating)].map((_, i) => <Star key={i} className={styles.star} />)}
              </div>
              <div className={styles.customerInfo}>
                <div className={styles.customerName}>{t.name}</div>
                <div className={styles.customerVehicle}>{t.vehicle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}