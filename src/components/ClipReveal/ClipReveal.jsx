import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export default function ClipReveal({ children, className = "" }) {
  const el = useRef(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(node, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    gsap.fromTo(node,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={el} className={className} style={{ clipPath: "inset(100% 0 0 0)" }}>
      {children}
    </div>
  );
}
