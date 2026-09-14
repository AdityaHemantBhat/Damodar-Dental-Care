import SEOHead from '../../seo/SEOHead';
import { SERVICE_ROOT_CANAL, ANATOMY_ROOT_CANAL } from '../../assets/images';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import InteractiveShowcase from '../../components/InteractiveShowcase/InteractiveShowcase';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './ServicesPage.module.css';

export default function RootCanal() {
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumbs paths={[{ name: 'Services', link: null }, { name: 'Root Canal Treatment', link: null }]} />
      <SEOHead 
        title="Root Canal Treatment | Damodar Dental Care" 
        description="Painless endodontic procedures to save and restore infected teeth in Margao, Goa."
      />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <ScrollReveal>
              <h1 className={styles.title}>
                Root Canal Treatment
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className={styles.subtitle}>
                Painless endodontic procedures to save and restore infected teeth.
              </p>
              <p className={styles.paragraph}>
                When the inner pulp of a tooth becomes infected or inflamed, a root canal is the most effective way to eliminate pain and save the natural tooth. Despite its reputation, modern root canal therapy is highly routine and often no more uncomfortable than getting a filling.
              </p>
              <p className={styles.paragraph}>
                As a specialist in Endodontics, Dr. Damodar utilizes advanced techniques and anesthetics to ensure a completely painless experience. We carefully remove the infection, seal the tooth, and protect it with a crown, restoring its full strength and function.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <div className={styles.imageWrapper}>
              <img 
                src={SERVICE_ROOT_CANAL} 
                alt="Root Canal Treatment" 
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
            image={ANATOMY_ROOT_CANAL} 
            title="Inside a Root Canal"
            hotspots={[
              { id: 1, x: 50, y: 40, align: 'alignCenter', title: "Infected Tissue Removal", description: "Carefully removing the damaged nerve and pulp from inside the tooth." },
              { id: 2, x: 50, y: 70, align: 'alignCenter', title: "Thorough Disinfection", description: "Cleaning and shaping the root canals to prepare for a sterile filling." },
              { id: 3, x: 50, y: 15, align: 'alignCenter', title: "Final Protective Crown", description: "Sealing the tooth with a custom crown to restore full strength and function." }
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
