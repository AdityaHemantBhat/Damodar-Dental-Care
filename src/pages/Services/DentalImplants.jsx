import SEOHead from '../../seo/SEOHead';
import { SERVICE_IMPLANTS, ANATOMY_IMPLANT } from '../../assets/images';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import InteractiveShowcase from '../../components/InteractiveShowcase/InteractiveShowcase';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './ServicesPage.module.css';

export default function DentalImplants() {
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumbs paths={[{ name: 'Services', link: null }, { name: 'Dental Implants', link: null }]} />
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

      <div className={`container ${styles.inner}`}>
        <ScrollReveal>
          <InteractiveShowcase 
            image={ANATOMY_IMPLANT} 
            title="Implant Anatomy"
            hotspots={[
              { id: 1, x: 50, y: 25, align: 'alignCenter', title: "Custom Ceramic Crown", description: "Expertly color-matched to seamlessly blend with your natural teeth." },
              { id: 2, x: 50, y: 45, align: 'alignCenter', title: "Secure Connector", description: "A precision-milled abutment that permanently locks the crown to the implant." },
              { id: 3, x: 50, y: 75, align: 'alignCenter', title: "Titanium Post", description: "Biocompatible titanium that fuses naturally with your jawbone for lifelong stability." }
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
