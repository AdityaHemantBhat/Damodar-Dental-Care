import SEOHead from '../../seo/SEOHead';
import { SERVICE_IMPLANTS } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesPage.module.css';

export default function DentalImplants() {
  return (
    <main className={styles.pageWrapper}>
      <SEOHead 
        title="Dental Implants | Damodar Dental Care" 
        description="Permanent, natural-looking replacements for missing teeth in Margao, Goa."
      />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <ScrollReveal>
              <h1 className={styles.title}>
                Dental Implants
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className={styles.subtitle}>
                Permanent, natural-looking replacements for missing teeth.
              </p>
              <p className={styles.paragraph}>
                Dental implants are the gold standard for tooth replacement. They look, feel, and function just like your natural teeth. An implant acts as an artificial tooth root, providing a sturdy foundation for a custom crown.
              </p>
              <p className={styles.paragraph}>
                Our implantology approach ensures precise placement, minimal discomfort, and long-lasting results. Say goodbye to the inconvenience of dentures and restore your ability to eat, speak, and smile with absolute confidence.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <div className={styles.imageWrapper}>
              <img 
                src={SERVICE_IMPLANTS} 
                alt="Dental Implants" 
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
