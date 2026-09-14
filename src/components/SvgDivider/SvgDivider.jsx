import styles from './SvgDivider.module.css';

export default function SvgDivider({ fill = "var(--cream)", className = "", type = "wave" }) {
  // A gentle tooth/smile inspired wave
  const wavePath = "M0 25 C 250 25, 350 75, 720 75 C 1090 75, 1190 25, 1440 25 L 1440 100 L 0 100 Z";
  
  // Arch cutout shape
  const archPath = "M0,100 L1440,100 L1440,50 C1080,50 1080,0 720,0 C360,0 360,50 0,50 L0,100 Z";

  const path = type === "arch" ? archPath : wavePath;

  return (
    <div className={`${styles.divider} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
