import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Button from '../../components/Button/Button';
import styles from './PatientGuideCTA.module.css';

export default function PatientGuideCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.inner}`}>
        <ScrollReveal>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Info size={32} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>New to Damodar Dental Care?</h2>
              <p className={styles.desc}>
                Read our comprehensive Patient Guide to learn how to book, what to expect on your first visit, and our clinic policies.
              </p>
            </div>
            <div className={styles.action}>
              <Button as={Link} to="/appointment-guidance" variant="primary">
                Read Patient Guide <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
