// ============================================================
// Footer — Minimal cinematic footer
// ============================================================
import { brand, contact } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.logo}>
          {brand.name.split(' ')[0]}
          <span className={styles.logoDot} aria-hidden="true" />
          {brand.name.split(' ')[1]}
        </p>

        <p className={styles.copy}>
          © {year} {contact.name} · {contact.location}
        </p>
      </div>
    </footer>
  );
}
