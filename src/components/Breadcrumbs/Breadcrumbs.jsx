import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ paths = [] }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <div className="container">
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link to="/" className={styles.link} aria-label="Home">
              <Home size={14} className={styles.icon} />
            </Link>
          </li>
          {paths.map((path, idx) => {
            const isLast = idx === paths.length - 1;
            return (
              <li key={idx} className={styles.item} aria-current={isLast ? "page" : undefined}>
                <ChevronRight size={14} className={styles.separator} />
                {path.link && !isLast ? (
                  <Link to={path.link} className={styles.link}>{path.name}</Link>
                ) : (
                  <span className={isLast ? styles.current : styles.text}>{path.name}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
