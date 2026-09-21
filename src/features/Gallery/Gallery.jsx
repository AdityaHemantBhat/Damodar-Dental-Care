import React, { useRef, useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../../assets/images';
import GalleryItem from './GalleryItem';
import Noise from '../../components/Noise/Noise';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';

export default function Gallery() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.gallerySection}>
      <Noise opacity={0.04} />
      
      <div className={`container ${styles.galleryInner}`}>
        <ScrollReveal>
          <div className={styles.headerArea}>
            <h2 className={styles.headline}>Our Clinic</h2>
          </div>
        </ScrollReveal>
        
        <div className={styles.sliderContainer}>
          <button 
            onClick={() => scroll('left')} 
            className={`${styles.navButton} ${styles.navLeft} ${!canScrollLeft ? styles.disabled : ''}`}
            disabled={!canScrollLeft}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            className={styles.slider} 
            ref={sliderRef}
            onScroll={checkScroll}
          >
            {GALLERY_IMAGES.map((img, index) => (
              <div className={styles.slideItem} key={index}>
                <GalleryItem src={img} index={index} />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')} 
            className={`${styles.navButton} ${styles.navRight} ${!canScrollRight ? styles.disabled : ''}`}
            disabled={!canScrollRight}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--cream)" type="arch" />
      </div>
    </section>
  );
}
