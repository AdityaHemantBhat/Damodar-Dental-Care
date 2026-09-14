import { DOCTOR_PHOTO } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Doctor.module.css';

export default function DoctorProfile() {
  return (
    <section className={styles.doctorSection}>
      <div className={styles.doctorInner}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src={DOCTOR_PHOTO} alt="Dr. Damodar" className={styles.image} />
          </div>
        </div>
        <div className={styles.contentCol}>
          <div className={styles.contentInner}>
            <ScrollReveal>
              <h2 className={styles.headline}>Meet the Doctor</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className={styles.quoteBlock}>
                <p className={styles.quote}>
                  "Every patient deserves a smile they're proud of."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={styles.manifesto}>
                <p>
                  With a passion for aesthetic and restorative dentistry, Dr. Damodar has dedicated their career to changing how people experience dental care. By focusing on minimal intervention and maximum comfort, the clinic has become a sanctuary for those who previously feared the dentist chair.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className={styles.credentialsList}>
                <h4>Credentials & Associations</h4>
                <ul>
                  <li>Bachelor of Dental Surgery (BDS)</li>
                  <li>MDS (Orthodontics and Dentofacial Orthopaedics) AIIMS</li>
                  <li>Member of Indian Orthodontic Society</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
