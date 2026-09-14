import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { gsap } from '../../lib/gsap';
import { TOOTH_3D } from '../../assets/images';
import { PHONE, WHATSAPP_LINK } from '../../lib/constants';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import Button from '../../components/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const container = useRef(null);
  const toothRef = useRef(null);
  const textLeftRef = useRef(null);
  const textCenterRef = useRef(null);
  const bgWrapperRef = useRef(null);

  const charsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 641px)", () => {
        // Desktop Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=250%", // Sped up the animation slightly
            scrub: 1, // Reduced lag for a faster feel
            pin: true,
          }
        });

        tl.to(toothRef.current, { scale: 0.7, rotation: 15, xPercent: 50, ease: "power2.inOut", duration: 1 }, 0);
        tl.to(textCenterRef.current, { opacity: 0, y: -50, ease: "power2.inOut", duration: 0.5 }, 0);
        tl.fromTo(textLeftRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, ease: "power2.inOut", duration: 0.3 }, 0.2);
        
        // Typewriter effect synced to scroll (fast)
        tl.fromTo(charsRef.current, { opacity: 0 }, { opacity: 1, stagger: 0.01, duration: 0.05, ease: "none" }, 0.3);
      });

      mm.add("(max-width: 640px)", () => {
        // Mobile Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=200%", // Sped up for mobile
            scrub: 1,
            pin: true,
          }
        });

        tl.to(toothRef.current, { scale: 0.8, rotation: 10, yPercent: -50, ease: "power2.inOut", duration: 1 }, 0);
        tl.to(textCenterRef.current, { opacity: 0, y: -50, ease: "power2.inOut", duration: 0.5 }, 0);
        tl.fromTo(textLeftRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.inOut", duration: 0.3 }, 0.2);
        
        // Typewriter effect synced to scroll (fast)
        tl.fromTo(charsRef.current, { opacity: 0 }, { opacity: 1, stagger: 0.01, duration: 0.05, ease: "none" }, 0.3);
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const headline = "Where Goa Smiles Best";
  const words = headline.split(' ');
  const secondaryHeadline = "Damodar Dental Care".split('');

  return (
    <section ref={container} className={styles.heroSection}>
      <div ref={bgWrapperRef} className={styles.heroInner}>
        
        {/* The Giant 3D Tooth */}
        <div className={styles.toothWrapper}>
          <img ref={toothRef} src={TOOTH_3D} alt="Premium 3D Tooth" className={styles.toothImage} />
        </div>

        {/* Initial Center Text */}
        <div ref={textCenterRef} className={styles.textCenter}>
          <h1 className={styles.headlineCenter}>
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
            className={styles.subtextCenter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Scroll to discover the art of modern dentistry.
          </motion.p>
        </div>

        {/* Secondary Left Text (appears after scrolling) */}
        <div ref={textLeftRef} className={styles.textLeft}>
          <h2 className={styles.headlineLeft}>
            {secondaryHeadline.map((char, i) => (
              <span key={i} ref={el => charsRef.current[i] = el}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <p className={styles.subtextLeft}>
            Crafted smiles, rooted in Goa. Experience ultra-premium dental care with an artisanal approach in Margao.
          </p>
          <div className={styles.ctaGroup}>
            <Button as="a" href={`tel:${PHONE}`} variant="primary">
              Call for Consultation
            </Button>
            <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" variant="outline" className={styles.whatsappBtn}>
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--bone)" type="wave" />
      </div>
    </section>
  );
}
