import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { HERO_IMAGE } from '../../assets/images';
import { PHONE, WHATSAPP_LINK } from '../../lib/constants';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import HeroSvgMask from './HeroSvgMask';
import Button from '../../components/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const el = container.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.to(imageRef.current, {
      y: 40,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const headline = "Where Goa Smiles Best";
  const words = headline.split(' ');

  return (
    <section ref={container} className={styles.heroSection}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            {words.map((word, i) => (
              <span key={i} className={styles.wordMask}>
                <motion.span
                  className={styles.word}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.08), duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p 
            className={styles.subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafted smiles, rooted in Goa. Experience premium dental care with an artisanal approach in Margao.
          </motion.p>
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button as="a" href={`tel:${PHONE}`} variant="primary">
              Call for Consultation
            </Button>
            
            <Button as="a" href={WHATSAPP_LINK} variant="ghost" className={styles.whatsappBtn}>
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <motion.div
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className={styles.imageWrapper}
          >
            <div className={styles.svgClipMask}>
              <img ref={imageRef} src={HERO_IMAGE} alt="Clinic Interior" className={styles.image} />
            </div>
            
            {/* Decorative Outline */}
            <HeroSvgMask className={styles.decorativeOutline} />
          </motion.div>
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--bone)" type="wave" />
      </div>
    </section>
  );
}
