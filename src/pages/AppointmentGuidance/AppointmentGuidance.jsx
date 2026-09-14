import SEOHead from '../../seo/SEOHead';
import { PHONE, WHATSAPP_LINK } from '../../lib/constants';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import { CalendarCheck, CreditCard, Clock, PhoneCall, AlertCircle, Sparkles, Stethoscope, MessageCircle } from 'lucide-react';
import styles from './AppointmentGuidance.module.css';

export default function AppointmentGuidance() {
  const seo = {
    title: "Appointment Guidance | Damodar Dental Care",
    description: "Learn how to book an appointment, what to expect on your first visit, and our payment and cancellation policies.",
    canonical: "https://damodardental.co.in/appointment-guidance"
  };

  return (
    <>
      <SEOHead {...seo} />
      
      {/* 1. Hero & Booking Section */}
      <section className={styles.heroSection}>
        <div className={styles.breadcrumbWrapper}>
          <Breadcrumbs paths={[{ name: 'Appointment Guidance', link: null }]} />
        </div>
        
        <div className={`container ${styles.heroInner}`}>
          <ScrollReveal>
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Patient Guide</span>
            </div>
            <h1 className={styles.heroTitle}>Your Journey to a Perfect Smile Starts Here.</h1>
          </ScrollReveal>
          
          <div className={styles.heroContentGrid}>
            <ScrollReveal delay={0.1}>
              <p className={styles.heroDesc}>
                We operate primarily by appointment to ensure you receive our undivided attention with zero waiting time. Choose your preferred way to book below.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.bookingActions}>
                <Button as="a" href={`tel:${PHONE}`} variant="primary" className={styles.largeBtn}>
                  <PhoneCall size={20} />
                  Call to Book
                </Button>
                <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" variant="outline" className={styles.largeBtn}>
                  <MessageCircle size={20} />
                  WhatsApp Us
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className={styles.dividerTop}>
          <SvgDivider fill="var(--offwhite)" type="wave" />
        </div>
      </section>

      {/* 2. The First Visit (Split Layout) */}
      <section className={styles.visitSection}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.splitLeft}>
            <ScrollReveal>
              <h2 className={styles.splitTitle}>What to expect on your first visit</h2>
              <p className={styles.splitDesc}>
                We believe in total transparency. Your first consultation is all about understanding your needs, assessing your oral health, and building a personalized roadmap.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.splitRight}>
            <div className={styles.timeline}>
              <ScrollReveal delay={0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}><Clock size={24} /></div>
                  <div className={styles.timelineContent}>
                    <h3>1. Arrival & Intake</h3>
                    <p>Arrive 10 minutes early. We'll guide you through a quick, digital medical history form in our relaxing lounge.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}><Stethoscope size={24} /></div>
                  <div className={styles.timelineContent}>
                    <h3>2. Clinical Examination</h3>
                    <p>A comprehensive, pain-free assessment of your teeth, gums, and bite. We may take digital X-rays if needed.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}><CalendarCheck size={24} /></div>
                  <div className={styles.timelineContent}>
                    <h3>3. Treatment Plan</h3>
                    <p>Dr. Damodar will discuss your options, timeline, and exact cost estimates before any treatment begins.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        <div className={styles.dividerBottom}>
          <SvgDivider fill="var(--ink)" type="wave" />
        </div>
      </section>

      {/* 3. Policies & Payment (Bento Box) */}
      <section className={styles.policySection}>
        <div className={`container ${styles.policyInner}`}>
          <ScrollReveal>
            <h2 className={styles.policyHeader}>Policies & Payment</h2>
          </ScrollReveal>

          <div className={styles.bentoGrid}>
            <ScrollReveal delay={0.1} className={styles.bentoItem1}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}><CreditCard size={28} /></div>
                <h3 className={styles.bentoTitle}>Accepted Methods</h3>
                <p className={styles.bentoDesc}>
                  We accept all major UPI applications including Google Pay, PhonePe, and Paytm, as well as Cash. 
                  <br/><br/>
                  <em>Note: We do not accept Credit/Debit cards at this time. All major treatments are provided with a written estimate beforehand.</em>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className={styles.bentoItem2}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}><AlertCircle size={28} /></div>
                <h3 className={styles.bentoTitle}>Cancellations</h3>
                <p className={styles.bentoDesc}>
                  We block out dedicated, private time exclusively for you. If you need to cancel or reschedule, we kindly request a minimum of 24 hours notice.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className={styles.bentoItem3}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}><Clock size={28} /></div>
                <h3 className={styles.bentoTitle}>Working Hours</h3>
                <div className={styles.hoursTable}>
                  <div className={styles.hoursRow}><span>Mon – Sat</span><span>9:30 AM – 7:00 PM</span></div>
                  <div className={styles.hoursRow}><span>Sunday</span><span>By Appointment</span></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
