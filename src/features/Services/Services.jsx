import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './Services.module.css';

import { 
  SERVICE_GENERAL, 
  SERVICE_COSMETIC, 
  SERVICE_IMPLANTS, 
  SERVICE_ORTHO, 
  SERVICE_ROOT_CANAL 
} from '../../assets/images';

const servicesData = [
  { id: 1, name: "General Dentistry", description: "Comprehensive check-ups, cleaning, and preventative care.", iconType: "tooth", slug: "/services/general-dentistry", image: SERVICE_GENERAL, size: "large" },
  { id: 2, name: "Cosmetic Dentistry", description: "Custom veneers, whitening, and aesthetics.", iconType: "sparkle", slug: "/services/cosmetic-dentistry", image: SERVICE_COSMETIC, size: "small" },
  { id: 3, name: "Dental Implants", description: "Permanent, natural-looking replacements.", iconType: "implant", slug: "/services/dental-implants", image: SERVICE_IMPLANTS, size: "small" },
  { id: 4, name: "Orthodontics", description: "Straightening teeth and aligning jaws.", iconType: "braces", slug: "/services/orthodontics", image: SERVICE_ORTHO, size: "wide" },
  { id: 5, name: "Root Canal Treatment", description: "Painless procedures to save teeth.", iconType: "root", slug: "/services/root-canal-treatment", image: SERVICE_ROOT_CANAL, size: "small" }
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={`container ${styles.servicesInner}`}>
        <div className={styles.header}>
          <ScrollReveal>
            <h2 className={styles.headline}>What We Do</h2>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={0.1 * index} 
              className={`${styles.gridItem} ${styles[`size-${service.size}`] || styles['size-small']}`}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--ink)" type="wave" />
      </div>
    </section>
  );
}
