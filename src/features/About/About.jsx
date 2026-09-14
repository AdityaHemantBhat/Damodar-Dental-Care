import { CLINIC_INTERIOR } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import ClipReveal from '../../components/ClipReveal/ClipReveal';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './About.module.css';
import AboutStats from './AboutStats';

export default function About({ hideDivider = false }) {
  return (
    <>
      <AboutStats />
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.imageCol}>
            <ClipReveal>
              <div className={styles.imageWrapper}>
                <img src={CLINIC_INTERIOR} alt="Clinic Interior" className={styles.doctorImg} />
                <div className={styles.cornerAccentTop}></div>
                <div className={styles.cornerAccentBottom}></div>
              </div>
            </ClipReveal>
          </div>
          
          <div className={styles.textCol}>
            <ScrollReveal>
              <h2 className={styles.headline}>Dentistry with Purpose</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className={styles.leadText}>
                We believe that oral healthcare should be transparent, gentle, and designed around the patient's long-term wellbeing.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className={styles.bodyText}>
                Rooted deeply in the Goan community, our clinic combines modern clinical techniques with an artisanal approach to dental wellness. We don't just treat teeth; we restore confidence and craft smiles that our patients are proud to share.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className={styles.credentials}>
                <span className={styles.chip}>BDS</span>
                <span className={styles.chip}>MDS (Orthodontics and Dentofacial Orthopaedics) AIIMS</span>
                <span className={styles.chip}>Member of Indian Orthodontic Society</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {!hideDivider && (
          <div className={styles.dividerWrapper}>
            <SvgDivider fill="var(--cream)" type="wave" />
          </div>
        )}
      </section>
    </>
  );
}
