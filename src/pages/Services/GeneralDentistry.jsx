import SEOHead from '../../seo/SEOHead';
import { SERVICE_GENERAL, ANATOMY_GENERAL } from '../../assets/images';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import InteractiveShowcase from '../../components/InteractiveShowcase/InteractiveShowcase';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './ServicesPage.module.css';

export default function GeneralDentistry() {
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumbs paths={[{ name: 'Services', link: null }, { name: 'General Dentistry', link: null }]} />
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

      <div className={`container ${styles.inner}`}>
        <ScrollReveal>
          <InteractiveShowcase 
            image={ANATOMY_GENERAL} 
            title="General Care Focus Areas"
            hotspots={[
              { id: 1, x: 20, y: 30, align: 'alignLeft', title: "Cavity Prevention", description: "Deep cleaning and sealing of the molar grooves to prevent decay." },
              { id: 2, x: 50, y: 75, align: 'alignCenter', title: "Periodontal Health", description: "Thorough cleaning below the gumline to prevent and treat gum disease." },
              { id: 3, x: 50, y: 25, align: 'alignCenter', title: "Plaque Removal", description: "Gentle, professional polishing to remove stubborn plaque and tartar." }
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
