import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { CLINIC_NAME, EMAIL, INSTAGRAM, FACEBOOK } from '../../lib/constants';
import { LOGO } from '../../assets/images';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerSection}>
      {/* Decorative background watermark */}
      <div className={styles.watermark}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 22s-4-2-4-8c0-3.31 2-5 4-5s4 1.69 4 5c0 6-4 8-4 8z" />
          <path d="M8 9V6a4 4 0 0 1 8 0v3" />
          <path d="M12 2v2" />
        </svg>
      </div>

      <div className={`container ${styles.footerInner}`}>
        <div className={styles.grid}>
          
          <div className={styles.col}>
            <Link to="/" className={styles.logo}>
              <img src={LOGO} alt={CLINIC_NAME} className={styles.logoImg} />
            </Link>
            <p className={styles.blurb}>
              Premium dental care in Margao, Goa. We combine artisanal approaches with modern clinical techniques to craft smiles you'll be proud to share.
            </p>
            <div className={styles.socials}>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.links}>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>Margao, South Goa</li>
              <li>Working: Mon - Sat (9:30am - 7pm)</li>
              <li>Sunday: By Appointment Only</li>
            </ul>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            {CLINIC_NAME} © {currentYear}
          </p>
          <p className={styles.credit}>
            Designed with care in Goa
          </p>
        </div>
      </div>
    </footer>
  );
}
