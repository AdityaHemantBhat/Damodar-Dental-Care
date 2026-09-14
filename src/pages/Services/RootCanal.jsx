import SEOHead from '../../seo/SEOHead';
import { SERVICE_ROOT_CANAL } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './ServicesPage.module.css';

export default function RootCanal() {
  return (
    <main className={styles.pageWrapper}>
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
    </main>
  );
}
