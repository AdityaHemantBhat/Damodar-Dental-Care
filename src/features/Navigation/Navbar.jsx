import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AlignRight, X } from 'lucide-react';
import { CLINIC_NAME } from '../../lib/constants';
import { LOGO } from '../../assets/images';
import styles from './Navbar.module.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.navWave} ${isScrolled ? styles.showWave : ''}`}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,0 L1440,0 L1440,25 C1190,25 1090,75 720,75 C350,75 250,25 0,25 Z" fill="var(--cream)" />
          </svg>
        </div>
        <div className={`container ${styles.navInner}`}>
          <NavLink to="/" className={styles.logo}>
            <img src={LOGO} alt="Logo" className={styles.logoImg} />
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoText}>{CLINIC_NAME}</span>
              <span className={styles.tagline}>- Healthy Smile. Healthy Life -</span>
            </div>
          </NavLink>

          <nav className={styles.desktopNav}>
            {links.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.path} className={styles.megaMenuContainer}>
                    <span className={styles.navLink} style={{ cursor: 'pointer' }}>
                      {link.name}
                      <svg className={styles.underline} viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 0, 100 5" />
                      </svg>
                    </span>
                    <div className={styles.megaMenu}>
                      <div className={styles.megaMenuGrid}>
                        <Link to="/services/general-dentistry" className={styles.megaMenuItem}>
                          <h4>General Dentistry</h4>
                          <p>Check-ups, cleaning, preventative care</p>
                        </Link>
                        <Link to="/services/cosmetic-dentistry" className={styles.megaMenuItem}>
                          <h4>Cosmetic Dentistry</h4>
                          <p>Veneers, whitening, aesthetics</p>
                        </Link>
                        <Link to="/services/dental-implants" className={styles.megaMenuItem}>
                          <h4>Dental Implants</h4>
                          <p>Permanent replacements</p>
                        </Link>
                        <Link to="/services/orthodontics" className={styles.megaMenuItem}>
                          <h4>Orthodontics</h4>
                          <p>Straightening and aligning</p>
                        </Link>
                        <Link to="/services/root-canal-treatment" className={styles.megaMenuItem}>
                          <h4>Root Canal Treatment</h4>
                          <p>Save infected teeth</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {link.name}
                  <svg className={styles.underline} viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 0, 100 5" />
                  </svg>
                </NavLink>
              );
            })}
          </nav>

          <button 
            className={styles.menuBtn} 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <AlignRight size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ clipPath: 'circle(0% at 100% 0)' }}
            animate={{ clipPath: 'circle(150% at 100% 0)' }}
            exit={{ clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <img src={LOGO} alt="" className={styles.mobileWatermark} />
            
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            
            <div className={styles.mobileLinks}>
              {links.map((link, i) => {
                const num = `0${i + 1}`;
                
                if (link.name === 'Services') {
                  return (
                    <motion.div
                      key="mobile-services"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      className={styles.mobileServicesContainer}
                    >
                      <div className={styles.mobileLinkWrapper}>
                        <span className={styles.mobileLinkNum}>{num}</span>
                        <span className={styles.mobileLinkTitle}>Services</span>
                      </div>
                      <div className={styles.mobileSubLinks}>
                        <NavLink to="/services/general-dentistry" className={styles.mobileSubLink} onClick={() => setIsOpen(false)}>General Dentistry</NavLink>
                        <NavLink to="/services/cosmetic-dentistry" className={styles.mobileSubLink} onClick={() => setIsOpen(false)}>Cosmetic Dentistry</NavLink>
                        <NavLink to="/services/dental-implants" className={styles.mobileSubLink} onClick={() => setIsOpen(false)}>Dental Implants</NavLink>
                        <NavLink to="/services/orthodontics" className={styles.mobileSubLink} onClick={() => setIsOpen(false)}>Orthodontics</NavLink>
                        <NavLink to="/services/root-canal-treatment" className={styles.mobileSubLink} onClick={() => setIsOpen(false)}>Root Canal</NavLink>
                      </div>
                    </motion.div>
                  );
                }
                
                return (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  >
                    <NavLink 
                      to={link.path} 
                      className={styles.mobileLinkWrapper}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={styles.mobileLinkNum}>{num}</span>
                      <span className={styles.mobileLink}>{link.name}</span>
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className={styles.mobileFooter}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <span className={styles.mobileFooterText}>Damodar Dental Care — Goa</span>
              <span className={styles.mobileFooterText}>
                Need an appointment? <a href="tel:+917387962652">+91 7387962652</a>
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
