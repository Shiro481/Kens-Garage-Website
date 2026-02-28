import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import styles from './FeaturedBuilds.module.css';

const builds = [
  { id: 1, name: 'Monster Patrol Build', category: 'Lift Kits', image: 'https://images.unsplash.com/photo-1754409228550-d8240421a81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZ0ZWQlMjB0cnVjayUyMG9mZi1yb2FkfGVufDF8fHx8MTc3MjIwNTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080', span: true },
  { id: 2, name: 'Rubicon Extreme', category: 'Wheels', image: 'https://images.unsplash.com/photo-1622665556257-2f2ce02beadb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWVwJTIwd3JhbmdsZXIlMjBtb2RpZmllZHxlbnwxfHx8fDE3NzIyMDU1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080', span: false },
  { id: 3, name: 'Beast Mode Ranger', category: 'Engine', image: 'https://images.unsplash.com/photo-1711279207205-a362a655860d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw0eDQlMjBtb25zdGVyJTIwdHJ1Y2t8ZW58MXx8fHwxNzcyMjA1NTczfDA&ixlib=rb-4.1.0&q=80&w=1080', span: false },
  { id: 4, name: 'LC76 Overlander', category: 'Lift Kits', image: 'https://images.unsplash.com/photo-1707339201380-72a1394dcf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwY3J1aXNlciUyMGN1c3RvbWl6ZWR8ZW58MXx8fHwxNzcyMjA1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080', span: false },
  { id: 5, name: 'Ranger Raptor Custom', category: 'Wheels', image: 'https://images.unsplash.com/photo-1770096171604-2e6f19fc33c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JkJTIwcmFuZ2VyJTIwbW9kaWZpZWR8ZW58MXx8fHwxNzcyMjA1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080', span: false },
  { id: 6, name: 'Hilux Trail Master', category: 'Engine', image: 'https://images.unsplash.com/photo-1759131384820-c710de76997c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWx1eCUyMG9mZi1yb2FkJTIwd2hlZWxzfGVufDF8fHx8MTc3MjIwNTU3NHww&ixlib=rb-4.1.0&q=80&w=1080', span: false },
];

const categories = ['All', 'Lift Kits', 'Wheels', 'Engine'];

export default function FeaturedBuilds() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredBuilds = activeFilter === 'All' ? builds : builds.filter(b => b.category === activeFilter);

  return (
    <div id="builds" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Builds</h2>
          <div className={styles.divider} />
          <div className={styles.filters}>
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

        <div className={styles.grid}>
          {filteredBuilds.map((build) => (
            <div key={build.id} className={`${styles.buildItem} ${build.span ? styles.buildItemSpan : ''}`}>
              <ImageWithFallback src={build.image} alt={build.name} className={styles.buildImg} />
              <div className={styles.buildOverlay} />
              <div className={styles.buildContent}>
                <span className={styles.buildCategory}>{build.category}</span>
                <h3 className={styles.buildName}>{build.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}