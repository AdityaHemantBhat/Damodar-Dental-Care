import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from './faqData';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.faqInner}`}>
        <div className={styles.headerCol}>
          <ScrollReveal>
            <h2 className={styles.headline}>Common Questions</h2>
          </ScrollReveal>
        </div>

        <div className={styles.accordionCol}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.accordionItem}>
                <button 
                  className={styles.questionBtn} 
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <div className={styles.iconWrapper}>
                    <svg 
                      viewBox="0 0 24 24" 
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" className={styles.iconVLine} />
                      <line x1="5" y1="12" x2="19" y2="12" className={styles.iconHLine} />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className={styles.answerWrapper}
                    >
                      <p className={styles.answerText}>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
