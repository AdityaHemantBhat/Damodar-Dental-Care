import SEOHead from '../../seo/SEOHead';
import { SERVICE_ORTHO, ANATOMY_ORTHO } from '../../assets/images';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import InteractiveShowcase from '../../components/InteractiveShowcase/InteractiveShowcase';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './ServicesPage.module.css';

export default function Orthodontics() {
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumbs paths={[{ name: 'Services', link: null }, { name: 'Orthodontics', link: null }]} />
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

      <div className={`container ${styles.inner}`}>
        <ScrollReveal>
          <InteractiveShowcase 
            image={ANATOMY_ORTHO} 
            title="Orthodontic Alignment"
            hotspots={[
              { id: 1, x: 50, y: 35, align: 'alignCenter', title: "Virtually Invisible Correction", description: "Clear, custom-fitted trays that gradually shift your teeth into the perfect position." },
              { id: 2, x: 75, y: 50, align: 'alignRight', title: "Precision Spacing", description: "Targeted, gentle pressure to close gaps and align your bite perfectly." }
            ]}
          />
        </ScrollReveal>
      </div>

      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--ink)" type="wave" />
      </div>
    </main>
  );
}
