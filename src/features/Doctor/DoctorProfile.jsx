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

            <ScrollReveal delay={0.25}>
              <div className={styles.highlightBox}>
                <div className={styles.highlightHeader}>
                  <svg className={styles.highlightIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  <span className={styles.highlightTitle}>Proudly AIIMS-Trained</span>
                </div>
                <p className={styles.highlightText}>
                  Dr. Damodar Bhat is the first orthodontist from Goa to complete an MDS in Orthodontics & Dentofacial Orthopaedics from AIIMS Bhubaneswar.
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
