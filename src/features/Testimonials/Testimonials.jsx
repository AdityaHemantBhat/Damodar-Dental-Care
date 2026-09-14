import { Star } from 'lucide-react';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: "Rahul S.", quote: "The most painless dental experience I've ever had. Highly recommend Dr. Damodar." },
  { name: "Priya M.", quote: "They completely transformed my smile. The clinic feels like a premium spa." },
  { name: "Amit K.", quote: "Very professional team. They took the time to explain every step of the implant procedure." },
  { name: "Sarah L.", quote: "I used to fear dentists, but the calming environment here changed everything for me." },
  { name: "John D.", quote: "Exceptional service and spotless clinic. Best in South Goa." },
];

export default function Testimonials() {
  // Duplicate array for infinite scroll effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <h2 className={styles.headline}>Patient Stories</h2>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {marqueeItems.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--sage)" color="var(--sage)" />
                ))}
              </div>
              <p className={styles.quote}>"{item.quote}"</p>
              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--offwhite)" type="wave" />
      </div>
    </section>
  );
}
