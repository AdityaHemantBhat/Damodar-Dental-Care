import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export default function ScrollReveal({ children, y = 40, delay = 0, duration = 0.8, className = "" }) {
  const el = useRef(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(node, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(node, 
      { opacity: 0, y }, 
      {
        opacity: 1, 
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [y, delay, duration]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
