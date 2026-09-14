import React from 'react';
import { GALLERY_IMAGES } from '../../assets/images';
import GalleryItem from './GalleryItem';
import Noise from '../../components/Noise/Noise';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import SvgDivider from '../../components/SvgDivider/SvgDivider';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <Noise opacity={0.04} />
      
      <div className={`container ${styles.galleryInner}`}>
        <ScrollReveal>
          <h2 className={styles.headline}>Our Clinic</h2>
        </ScrollReveal>
        
        <div className={styles.grid}>
          {GALLERY_IMAGES.map((img, index) => (
            <GalleryItem key={index} src={img} index={index} />
          ))}
        </div>
      </div>
      
      <div className={styles.dividerWrapper}>
        <SvgDivider fill="var(--cream)" type="arch" />
      </div>
    </section>
  );
}
