import SEOHead from '../../seo/SEOHead';
import { SERVICE_ORTHO } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesPage.module.css';

export default function Orthodontics() {
  return (
    <main className={styles.pageWrapper}>
      <SEOHead 
        title="Orthodontics & Braces | Damodar Dental Care" 
        description="Straightening teeth and aligning jaws for optimal function and aesthetics in Margao, Goa."
      />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <ScrollReveal>
              <h1 className={styles.title}>
                Orthodontics
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className={styles.subtitle}>
                Straightening teeth and aligning jaws for optimal function and aesthetics.
              </p>
              <p className={styles.paragraph}>
                Orthodontics is about much more than just a straight smile—it's about proper bite function, jaw alignment, and long-term oral health. Misaligned teeth can lead to accelerated wear and difficulty maintaining hygiene.
              </p>
              <p className={styles.paragraph}>
                We offer modern orthodontic solutions, from traditional high-quality braces to subtle clear aligner systems. Our customized treatment plans are designed to guide your teeth into their ideal positions gently and effectively.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <div className={styles.imageWrapper}>
              <img 
                src={SERVICE_ORTHO} 
                alt="Orthodontics" 
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
