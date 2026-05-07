// ============================================================
// Navbar — Fixed top navigation with scroll state
// ============================================================
import { useState, useEffect } from 'react';
import { brand, navLinks } from '../data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a
        href="#"
        className={styles.logo}
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        {brand.name.split(' ')[0]}
        <span className={styles.logoDot}> </span>
        {brand.name.split(' ')[1]}
      </a>

      <nav className={styles.links}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.link}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.cta}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Book et møde
        </a>
      </nav>
    </header>
  );
}
