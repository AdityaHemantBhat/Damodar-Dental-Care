import { motion as m } from 'framer-motion';
import { LOGO } from '../../assets/images';
import styles from './PageTransition.module.css';

// SVG 2: Covers the screen when leaving the old page
const exitVariants = {
  initial: { d: "M 0 100 Q 50 100 100 100 L 100 100 Q 50 100 0 100 Z" },
  animate: { d: "M 0 100 Q 50 100 100 100 L 100 100 Q 50 100 0 100 Z" },
  exit: { 
    d: [
      "M 0 100 Q 50 100 100 100 L 100 100 Q 50 100 0 100 Z",
      "M 0 0 Q 50 -50 100 0 L 100 100 Q 50 100 0 100 Z",
      "M 0 0 Q 50 0 100 0 L 100 100 Q 50 100 0 100 Z"
    ],
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], times: [0, 0.5, 1] }
  }
};

const logoExitVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 0, scale: 0.8 },
  exit: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.4, ease: "easeOut" } }
};

// SVG 1: Uncovers the screen when entering the new page
const enterVariants = {
  initial: { d: "M 0 0 Q 50 0 100 0 L 100 100 Q 50 100 0 100 Z" },
  animate: { 
    d: [
      "M 0 0 Q 50 0 100 0 L 100 100 Q 50 100 0 100 Z",
      "M 0 0 Q 50 0 100 0 L 100 0 Q 50 -50 0 0 Z",
      "M 0 0 Q 50 0 100 0 L 100 0 Q 50 0 0 0 Z"
    ],
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], times: [0, 0.5, 1], delay: 0.1 }
  },
  exit: { d: "M 0 0 Q 50 0 100 0 L 100 0 Q 50 0 0 0 Z" }
};

const logoEnterVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 0, scale: 0.8, transition: { duration: 0.4, delay: 0.1, ease: "easeIn" } },
  exit: { opacity: 0, scale: 0.8 }
};

export default function PageTransition({ children }) {
  return (
    <>
      {/* Overlay 1: Entering the new page (Uncovering) */}
      <div className={styles.svgOverlay}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.svg}>
          <m.path
            variants={enterVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            fill="var(--sage)"
          />
        </svg>
        <m.div 
          className={styles.logoWrapper}
          variants={logoEnterVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img src={LOGO} alt="Damodar Dental Care" className={styles.logo} />
        </m.div>
      </div>

      {/* Overlay 2: Exiting the old page (Covering) */}
      <div className={styles.svgOverlay}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.svg}>
          <m.path
            variants={exitVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            fill="var(--sage)"
          />
        </svg>
        <m.div 
          className={styles.logoWrapper}
          variants={logoExitVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img src={LOGO} alt="Damodar Dental Care" className={styles.logo} />
        </m.div>
      </div>

      {children}
    </>
  );
}
