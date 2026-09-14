import SEOHead from '../../seo/SEOHead';
import { SERVICE_COSMETIC, ANATOMY_COSMETIC } from '../../assets/images';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import InteractiveShowcase from '../../components/InteractiveShowcase/InteractiveShowcase';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './ServicesPage.module.css';

export default function CosmeticDentistry() {
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumbs paths={[{ name: 'Services', link: null }, { name: 'Cosmetic Dentistry', link: null }]} />
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

      <div className={`container ${styles.inner}`}>
        <ScrollReveal>
          <InteractiveShowcase 
            image={ANATOMY_COSMETIC} 
            title="Aesthetic Enhancements"
            hotspots={[
              { id: 1, x: 50, y: 35, align: 'alignCenter', title: "Professional Whitening", description: "Deep stain removal for a gleaming, bright white surface." },
              { id: 2, x: 25, y: 70, align: 'alignLeft', title: "Porcelain Veneers", description: "Ultra-thin, custom-made shells that cover the front surface of teeth." },
              { id: 3, x: 75, y: 15, align: 'alignRight', title: "Gum Contouring", description: "Reshaping the gum line for perfect symmetry and proportion." }
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
