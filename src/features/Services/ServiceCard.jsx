import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, ShieldPlus, Smile, HeartPulse } from 'lucide-react';
import styles from './Services.module.css';

const lucideIcons = {
  tooth: ShieldCheck,
  sparkle: Sparkles,
  implant: ShieldPlus,
  braces: Smile,
  root: HeartPulse
};

export default function ServiceCard({ service }) {
  const IconComponent = lucideIcons[service.iconType] || ShieldCheck;

  return (
    <Link to={service.slug} className={styles.card}>
      {/* Background Image */}
      {service.image && (
        <img src={service.image} alt={service.name} className={styles.cardImage} />
      )}
      
      {/* Dark Gradient Overlay */}
      <div className={styles.cardOverlay}></div>

      {/* Content */}
      <div className={styles.cardInner}>
        <div className={styles.iconWrapper}>
          <IconComponent className={styles.icon} strokeWidth={1.5} />
        </div>
        <h3 className={styles.cardTitle}>{service.name}</h3>
        <p className={styles.cardDesc}>{service.description}</p>
      </div>
    </Link>
  );
}
