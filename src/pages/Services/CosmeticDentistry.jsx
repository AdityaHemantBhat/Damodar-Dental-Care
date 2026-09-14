import SEOHead from '../../seo/SEOHead';
import { SERVICE_COSMETIC } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesPage.module.css';

export default function CosmeticDentistry() {
  return (
    <main className={styles.pageWrapper}>
      <SEOHead 
        title="Cosmetic Dentistry | Damodar Dental Care" 
        description="Custom veneers, whitening, and aesthetics to craft your perfect smile in Margao, Goa."
      />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <ScrollReveal>
              <h1 className={styles.title}>
                Cosmetic Dentistry
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className={styles.subtitle}>
                Custom veneers, professional whitening, and comprehensive smile design.
              </p>
              <p className={styles.paragraph}>
                Your smile is your greatest asset. Our cosmetic dentistry services are focused on improving the aesthetic appearance of your teeth and gums, blending artistry with advanced clinical techniques.
              </p>
              <p className={styles.paragraph}>
                Whether you're looking for a quick brightness boost with professional teeth whitening or a complete smile makeover with custom porcelain veneers, we design a treatment plan that aligns perfectly with your facial aesthetics and personal goals.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <div className={styles.imageWrapper}>
              <img 
                src={SERVICE_COSMETIC} 
                alt="Cosmetic Dentistry" 
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
