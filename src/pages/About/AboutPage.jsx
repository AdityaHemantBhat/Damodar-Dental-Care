import SEOHead from '../../seo/SEOHead';
import { pageSEO } from '../../seo/seoConfig';
import { LocalBusinessSchema } from '../../seo/JsonLd';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import ClipReveal from '../../components/ClipReveal/ClipReveal';
import { CLINIC_INTERIOR, DOCTOR_PHOTO } from '../../assets/images';
import { CheckCircle2, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';

import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <main className={styles.pageWrapper}>
      <SEOHead {...pageSEO.about} />
      <LocalBusinessSchema />
      
      {/* 1. Heritage Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <ScrollReveal>
              <h1 className={styles.heroTitle}>Crafting Smiles, Changing Lives.</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={styles.heroSubtitle}>
                Damodar Dental Care was founded on a simple premise: clinical excellence should go hand-in-hand with an artisanal, patient-first approach.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.heroImageCol}>
            <ClipReveal>
              <div className={styles.heroImageWrapper}>
                <img src={CLINIC_INTERIOR} alt="Clinic Interior" className={styles.heroImage} />
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* 2. Doctor Story */}
      <section className={styles.storySection}>
        <div className={`container ${styles.storyGrid}`}>
          <ClipReveal>
            <div className={styles.doctorPhotoWrapper}>
              <img src={DOCTOR_PHOTO} alt="Dr. Damodar Bhat" className={styles.doctorPhoto} />
            </div>
          </ClipReveal>
          
          <div className={styles.storyContent}>
            <ScrollReveal>
              <h2 className={styles.storyHeadline}>Meet Dr. Damodar Bhat</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className={styles.storyText}>
                <p>
                  With a deep-rooted passion for dentofacial aesthetics and precise structural alignment, Dr. Damodar brings over 6 years of highly specialized experience to the heart of Goa.
                </p>
                <p>
                  Trained at some of the most prestigious institutions, his approach transcends traditional dentistry. He views every treatment as a unique piece of art—carefully tailored to the individual's facial structure, long-term health, and personal confidence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.credentialsList}>
                <div className={styles.credentialItem}>
                  <CheckCircle2 size={20} color="var(--sage)" />
                  <span>Bachelor of Dental Surgery (BDS)</span>
                </div>
                <div className={styles.credentialItem}>
                  <CheckCircle2 size={20} color="var(--sage)" />
                  <span>MDS (Orthodontics and Dentofacial Orthopaedics) AIIMS</span>
                </div>
                <div className={styles.credentialItem}>
                  <CheckCircle2 size={20} color="var(--sage)" />
                  <span>Member of Indian Orthodontic Society</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.pillarsHeader}>
            <ScrollReveal>
              <h2 className={styles.pillarsTitle}>Our Philosophy</h2>
            </ScrollReveal>
          </div>
          
          <div className={styles.pillarsGrid}>
            <ScrollReveal delay={0.1}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <ShieldCheck size={40} strokeWidth={1.5} />
                </div>
                <h3 className={styles.pillarTitle}>Uncompromising Precision</h3>
                <p className={styles.pillarDesc}>
                  We utilize state-of-the-art diagnostic tools and evidence-based techniques to ensure every diagnosis is perfectly accurate and every treatment is completely effective.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <Stethoscope size={40} strokeWidth={1.5} />
                </div>
                <h3 className={styles.pillarTitle}>Patient-First Comfort</h3>
                <p className={styles.pillarDesc}>
                  Dental anxiety is real. We've designed every aspect of our clinic and our bedside manner to be warm, empathetic, and entirely pain-free.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <Sparkles size={40} strokeWidth={1.5} />
                </div>
                <h3 className={styles.pillarTitle}>Artisanal Aesthetics</h3>
                <p className={styles.pillarDesc}>
                  A great smile looks like it was always there. Our restorations and orthodontic plans are meticulously crafted to blend perfectly with your natural features.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}
