// ============================================================
// PortfolioGrid — Masonry-style portfolio with category filter
// ============================================================
import { useState } from 'react';
import { videos, categories } from '../data/content';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import styles from './PortfolioGrid.module.css';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  // Filter videos by category
  const filtered =
    activeCategory === 'all'
      ? videos
      : videos.filter(
          (v) =>
            v.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">

        {/* Section header */}
        <header className={`${styles.header} reveal`}>
          <span className="section-eyebrow">Udvalgte Arbejder</span>

          <h2 className={styles.heading}>
            Mit <em className={styles.headingEm}>Portfolio</em>
          </h2>
        </header>

        {/* Category filter buttons */}
        <div
          className={`${styles.filters} reveal`}
          role="group"
          aria-label="Filtrer portfolio"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${
                activeCategory === cat.id
                  ? styles.filterActive
                  : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((video, index) => (
              <div
                key={video.id}
                className={styles.gridItem}
                style={{
                  transitionDelay: `${(index % 6) * 80}ms`,
                }}
              >
                <VideoCard
                  video={video}
                  onOpen={setActiveVideo}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            Ingen videoer i denne kategori endnu.
          </p>
        )}
      </div>

      {/* Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}