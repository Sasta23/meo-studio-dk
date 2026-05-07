// ============================================================
// VideoModal — Lightbox overlay with YouTube embed
// Props:
//   video    → video object or null (null = closed)
//   onClose  → callback to close the modal
// ============================================================
import { useEffect } from 'react';
import { categoryColors } from '../data/content';
import styles from './VideoModal.module.css';

export default function VideoModal({ video, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!video) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  const accentColor = categoryColors[video.category] ?? 'var(--color-gold)';

  const categoryLabel = {
    social:     'Sociale Medier',
    cinematic:  'Cinematic',
    realestate: 'Fast Ejendom',
    product:    'Produkt',
  }[video.category] ?? video.category;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${video.title}`}
    >
      <div
        className={styles.inner}
        onClick={(e) => e.stopPropagation()}
      >
        {/* YouTube iframe */}
        <div className={styles.videoWrap}>
          <iframe
            src={`${video.videoUrl}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Meta bar below video */}
        <div className={styles.meta}>
          <div className={styles.metaLeft}>
            <p className={styles.metaCategory} style={{ color: accentColor }}>
              {categoryLabel}
            </p>
            <h2 className={styles.metaTitle}>{video.title}</h2>
            {video.description && (
              <p className={styles.metaDesc}>{video.description}</p>
            )}
          </div>

          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Luk video"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
