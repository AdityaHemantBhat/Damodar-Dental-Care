import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import styles from './Gallery.module.css';

// Pre-defined clip paths to give varying organic shapes to the images
const clipPaths = [
  'polygon(0 0, 100% 5%, 95% 100%, 5% 95%)', // Slight tilt
  'polygon(5% 0, 95% 5%, 100% 95%, 0 100%)', // Opposite tilt
  'ellipse(50% 50% at 50% 50%)', // Oval/pill like if combined with border radius
  'polygon(0 10%, 100% 0, 90% 100%, 10% 90%)',
  'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Normal rectangle (we'll apply border-radius via CSS)
  'polygon(5% 5%, 95% 0, 100% 100%, 0 95%)',
];

export default function GalleryItem({ src, index }) {
  const container = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    const el = container.current;
    const imgEl = image.current;
    if (!el || !imgEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Staggered reveal: clip-path inset from bottom, image scales down
    gsap.fromTo(el,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(imgEl,
      { scale: 0.92 },
      {
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className={styles.itemWrapper}>
      <div 
        ref={container} 
        className={styles.imageContainer} 
        style={{ clipPath: 'inset(100% 0 0 0)' }}
      >
        <img ref={image} src={src} alt="Clinic view" className={styles.image} />
      </div>
    </div>
  );
}
