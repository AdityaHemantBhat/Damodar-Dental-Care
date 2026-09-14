import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { WHATSAPP_LINK, PHONE } from '../../lib/constants';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The Hero section is pinned for 200vh - 250vh.
      // We only want the Floating CTA to appear AFTER the user has fully scrolled past the Hero section.
      if (window.scrollY > window.innerHeight * 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.container}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`${styles.pill} ${styles.whatsapp}`}>
            <MessageCircle size={20} />
            <span className={styles.label}>WhatsApp Us</span>
          </a>
          <a href={`tel:${PHONE}`} className={`${styles.pill} ${styles.call}`}>
            <Phone size={20} />
            <span className={styles.label}>Call Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
