import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', as = 'button', href, to, onClick, className = '', ...rest }) {
  if (to) {
    return (
      <Link to={to} className={`${styles.btn} ${styles[variant]} ${className}`} {...rest}>
        {children}
      </Link>
    );
  }

  const Component = as === 'a' ? 'a' : 'button';
  const props = as === 'a' ? { href, ...rest } : { onClick, ...rest };

  return (
    <Component 
      className={`${styles.btn} ${styles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
}
