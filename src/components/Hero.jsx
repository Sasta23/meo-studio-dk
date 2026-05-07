// ============================================================
// Hero — Full-screen cinematic intro section
// ============================================================
import { brand } from '../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      {/* Layered cinematic background */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgGrid}     aria-hidden="true" />
      <div className={styles.bgVignette} aria-hidden="true" />

      <div className={styles.content}>
        {/* Eyebrow label */}
        <p className={`${styles.eyebrow} ${styles.animDelay1}`}>
          Odense, Danmark · Premium Videoproduktion
        </p>

        {/* Main headline */}
        <h1 className={`${styles.title} ${styles.animDelay2}`}>
          <span className={styles.titleLine}>Meo</span>
          <em className={styles.titleEm}> Studio</em>
        </h1>

        {/* Subheadline */}
        <p className={`${styles.sub} ${styles.animDelay3}`}>
          {brand.tagline}
        </p>

        {/* CTA buttons */}
        <div className={`${styles.btns} ${styles.animDelay4}`}>
          <button
            className={styles.btnPrimary}
            onClick={() => scrollToSection('#portfolio')}
          >
            Se Portfolio
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollToSection('#contact')}
          >
            Kontakt Mig
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scrollIndicator} ${styles.animDelay5}`} aria-hidden="true">
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
