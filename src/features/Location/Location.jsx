import { MapPin, MessageCircle } from 'lucide-react';
import { ADDRESS, MAPS_EMBED, MAPS_LINK, PHONE, WHATSAPP_LINK } from '../../lib/constants';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Button from '../../components/Button/Button';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section className={styles.locationSection}>
      <div className={`container ${styles.locationInner}`}>
        <div className={styles.infoCol}>
          <ScrollReveal>
            <h2 className={styles.headline}>Visit Us</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className={styles.addressBlock}>
              <MapPin size={24} className={styles.icon} />
              <p className={styles.addressText}>{ADDRESS}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className={styles.hoursBlock}>
              <h4 className={styles.hoursTitle}>Working Hours</h4>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span className={styles.day}>Mon – Sat</span>
                  <span className={styles.time}>9:30 AM – 7:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.day}>Sunday</span>
                  <span className={styles.time}>By Appointment Only</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className={styles.contactBlock}>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone:</span> 
                <a href={`tel:${PHONE}`}>{PHONE}</a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className={styles.actions}>
              <Button as="a" href={MAPS_LINK} target="_blank" rel="noreferrer" variant="primary">
                Get Directions
              </Button>
              <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" variant="outline">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.mapCol}>
          <ScrollReveal delay={0.2} className={styles.mapReveal}>
            <div className={styles.mapWrapper}>
              <iframe 
                src={MAPS_EMBED} 
                className={styles.mapIframe}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Damodar Dental Care Location on Google Maps"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--ink)" type="wave" />
      </div>
    </section>
  );
}
