import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { WHATSAPP_LINK, PHONE } from '../../lib/constants';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const progress = useScrollProgress();
  const isVisible = progress > 0.05; // Show after small scroll

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
