import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import styles from './InteractiveShowcase.module.css';

export default function InteractiveShowcase({ image, hotspots, title = "Treatment Showcase" }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.instruction}>Tap the glowing dots to explore</p>
      </div>
      
      <div className={styles.imageContainer}>
        <img src={image} alt="Anatomical Showcase" className={styles.bgImage} />
        
        {hotspots.map((spot, index) => (
          <motion.div 
            key={spot.id}
            className={styles.hotspotContainer}
            style={{ 
              left: `${spot.x}%`, 
              top: `${spot.y}%`,
              zIndex: activeHotspot === spot.id ? 100 : 10
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.5 }}
          >
            <button 
              className={`${styles.dot} ${activeHotspot === spot.id ? styles.active : ''}`}
              onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
              aria-label={`Explore ${spot.title}`}
            >
              <Plus size={16} className={styles.icon} />
              <div className={styles.pulseRing}></div>
            </button>
            
            <AnimatePresence>
              {activeHotspot === spot.id && (
                <motion.div 
                  className={`${styles.tooltip} ${styles[spot.align || 'alignCenter']}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <button 
                    className={styles.closeBtn} 
                    onClick={() => setActiveHotspot(null)}
                    aria-label="Close"
                  >
                    <X size={14} />
                  </button>
                  <h4 className={styles.tooltipTitle}>{spot.title}</h4>
                  <p className={styles.tooltipDesc}>{spot.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
