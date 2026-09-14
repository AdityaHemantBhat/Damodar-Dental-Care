import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', as = 'button', href, onClick, className = '' }) {
  const Component = as === 'a' ? 'a' : 'button';
  const props = as === 'a' ? { href } : { onClick };

  return (
    <Component 
      className={`${styles.btn} ${styles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
}
