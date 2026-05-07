// ============================================================
// VideoCard — Single portfolio card with hover effects
// Props:
//   video  → video object from content.js
//   onOpen → callback(video) called when card is clicked
// ============================================================
import { categoryColors } from '../data/content';
import styles from './VideoCard.module.css';

// SVG play icon
function PlayIcon() {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="white" aria-hidden="true">
      <path d="M0 0.5L14 8.5L0 16.5V0.5Z" />
    </svg>
  );
}

export default function VideoCard({ video, onOpen }) {
  const accentColor = categoryColors[video.category] ?? 'var(--color-gold)';

  return (
    <article
      className={`${styles.card} ${styles[video.aspect ?? 'wide']}`}
      onClick={() => onOpen(video)}
      role="button"
      tabIndex={0}
      aria-label={`Afspil video: ${video.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(video); }}
    >
      {/* Thumbnail */}
      <div className={styles.imgWrap}>
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className={styles.img}
        />
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Duration badge (top-right) */}
      <span className={styles.duration}>{video.duration}</span>

      {/* Centred play button */}
      <div className={styles.play} aria-hidden="true">
        <PlayIcon />
      </div>

      {/* Bottom info */}
      <div className={styles.info}>
        <p className={styles.category} style={{ color: accentColor }}>
          {video.category === 'social'     && 'Sociale Medier'}
          {video.category === 'cinematic'  && 'Cinematic'}
          {video.category === 'realestate' && 'Fast Ejendom'}
          {video.category === 'product'    && 'Produkt'}
        </p>
        <h3 className={styles.title}>{video.title}</h3>
      </div>
    </article>
  );
}
