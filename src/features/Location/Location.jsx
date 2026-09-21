import { MapPin, MessageCircle } from 'lucide-react';
import { ADDRESS, MAPS_EMBED, MAPS_LINK, PHONE, WHATSAPP_LINK } from '../../lib/constants';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Button from '../../components/Button/Button';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './Location.module.css';

const LOCATIONS = [
  {
    id: 'goa',
    title: 'Goa Clinic (Main Branch)',
    address: ADDRESS,
    phone: PHONE,
    whatsappLink: WHATSAPP_LINK,
    mapsLink: MAPS_LINK,
    mapsEmbed: MAPS_EMBED,
    hours: [
      { day: 'Mon – Sat', time: '9:30 AM – 7:00 PM' },
      { day: 'Sunday', time: 'By Appointment Only' }
    ]
  },
  {
    id: 'pune',
    title: 'Kamat Dental Care (Pune Branch)',
    address: 'Off No 301, Kapil Klassic Building, Main Road, Baner, Near Hill View Residency, Baner, above Bank of Maharashtra - Pune- Baner Branch, Pune, Maharashtra 411069',
    phone: '+91 77670 00272',
    whatsappLink: `https://wa.me/917767000272?text=Hello, I'd like to enquire about dental services at Kamat Dental Care.`,
    mapsLink: 'https://maps.app.goo.gl/AcPNHAyVfFVEUPBz5',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.355606782552!2d73.7906313!3d18.5580523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becf09022047%3A0x8aa93bff8dd73fe0!2sKamat%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    hours: [
      { day: 'Mon – Fri', time: '9:30 AM – 1:30 PM, 5:00 PM – 8:00 PM' },
      { day: 'Saturday', time: '9:30 AM – 1:30 PM' },
      { day: 'Sunday', time: 'Closed' }
    ]
  }
];

export default function Location() {
  return (
    <section className={styles.locationSection}>
      <div className={`container`}>
        <ScrollReveal>
          <div className={styles.headerArea}>
            <h2 className={styles.mainHeadline}>Our Locations</h2>
            <p className={styles.subtitle}>Find a Damodar Dental Care clinic near you.</p>
          </div>
        </ScrollReveal>

        <div className={styles.locationsList}>
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className={styles.locationInner}>
              <div className={styles.infoCol}>
                <ScrollReveal delay={0.1}>
                  <h3 className={styles.headline}>{loc.title}</h3>
                </ScrollReveal>
                
                <ScrollReveal delay={0.15}>
                  <div className={styles.addressBlock}>
                    <MapPin size={24} className={styles.icon} />
                    <p className={styles.addressText}>{loc.address}</p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <div className={styles.hoursBlock}>
                    <h4 className={styles.hoursTitle}>Working Hours</h4>
                    <div className={styles.hoursTable}>
                      {loc.hours.map((hourSet, i) => (
                        <div key={i} className={styles.hoursRow}>
                          <span className={styles.day}>{hourSet.day}</span>
                          <span className={styles.time}>{hourSet.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className={styles.contactBlock}>
                    <p className={styles.contactItem}>
                      <span className={styles.contactLabel}>Phone:</span> 
                      <a href={`tel:${loc.phone}`}>{loc.phone}</a>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className={styles.actions}>
                    <Button as="a" href={loc.mapsLink} target="_blank" rel="noreferrer" variant="primary">
                      Get Directions
                    </Button>
                    <Button as="a" href={loc.whatsappLink} target="_blank" rel="noreferrer" variant="outline">
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
                      src={loc.mapsEmbed} 
                      className={styles.mapIframe}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Damodar Dental Care Location - ${loc.title}`}
                    ></iframe>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--ink)" type="wave" />
      </div>
    </section>
  );
}
