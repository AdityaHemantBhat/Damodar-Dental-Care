import SEOHead from '../../seo/SEOHead';
import { SERVICE_GENERAL } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesPage.module.css';

export default function GeneralDentistry() {
  return (
    <main className={styles.pageWrapper}>
      <SEOHead 
        title="General Dentistry | Damodar Dental Care" 
        description="Comprehensive check-ups, cleaning, and preventative care in Margao, Goa."
      />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <ScrollReveal>
              <h1 className={styles.title}>
                General Dentistry
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className={styles.subtitle}>
                Comprehensive check-ups, cleaning, and preventative care to keep your smile healthy and vibrant.
              </p>
              <p className={styles.paragraph}>
                At Damodar Dental Care, we believe that routine maintenance is the foundation of lifelong oral health. Our general dentistry services include comprehensive oral exams, professional cleanings, digital X-rays, and preventative treatments like sealants and fluoride.
              </p>
              <p className={styles.paragraph}>
                By detecting and treating minor issues early, we prevent them from becoming major, costly problems down the road. We take the time to educate you on the best home-care practices tailored to your unique smile.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <div className={styles.imageWrapper}>
              <img 
                src={SERVICE_GENERAL} 
                alt="General Dentistry" 
                className={styles.image} 
              />
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
