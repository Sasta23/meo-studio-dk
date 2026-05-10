// ============================================================
// TestimonialsSection — Premium client testimonials
// ============================================================
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Section Header */}
        <header className={styles.header}>
          <span className="section-eyebrow">
            Tillid skabt gennem content
          </span>

          <h2 className={styles.heading}>
            Hvad kunder <em>siger</em>
          </h2>
        </header>

        {/* Testimonials */}
        <div className={styles.grid}>

          {/* Card */}
          <article className={styles.card}>
            <div className={styles.stars}>
              ★★★★★
            </div>

            <p className={styles.quote}>
              “x”
            </p>

            <div className={styles.author}>
              — XX
            </div>

            <div className={styles.company}>
              X
            </div>
          </article>

          {/* Card */}
          <article className={styles.card}>
            <div className={styles.stars}>
              ★★★★★
            </div>

            <p className={styles.quote}>
              “x”
            </p>

            <div className={styles.author}>
              — X X
            </div>

            <div className={styles.company}>
              X
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}