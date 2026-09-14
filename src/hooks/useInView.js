import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from '../lib/gsap';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: options.start || "top 85%",
      onEnter: () => setIsInView(true),
      once: options.once !== false, 
    });

    return () => {
      trigger.kill();
    };
  }, [options.start, options.once]);

  return { ref, isInView };
}
