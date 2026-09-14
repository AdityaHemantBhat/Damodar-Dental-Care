import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "Personalized Care" },
  { value: "New", label: "Modern Facility" }
];

export default function AboutStats() {
  const container = useRef(null);
  const { ref, isInView } = useInView({ start: "top 80%" });

  useEffect(() => {
    if (!isInView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lines = container.current.querySelectorAll(`.${styles.statLine}`);
    const numbers = container.current.querySelectorAll(`.${styles.statValue}`);

    gsap.fromTo(lines, 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", transformOrigin: "left center" }
    );
    
    gsap.fromTo(numbers, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.5)" }
    );
  }, [isInView]);

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.statsInner}`} ref={ref}>
        <div className={styles.statsGrid} ref={container}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              {i > 0 && <div className={styles.statLine}></div>}
              <div className={styles.statContent}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
