// ============================================================
// ContactSection — Professional contact section
// ============================================================
import { useState } from 'react';
import { contact } from '../data/content';
import styles from './ContactSection.module.css';

import { FaInstagram, FaTiktok } from "react-icons/fa";

// Simple inline SVG icons
const icons = {
  person: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),

  mail: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 8l10 6 10-6"/>
    </svg>
  ),

  phone: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 9.81 19.79 19.79 0 011.07 1.19 2 2 0 013.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),

  location: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ============================================================
  // REAL EMAIL SUBMIT WITH RESEND + VERCEL API
  // ============================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Kunne ikke sende besked');
      }

      setSent(true);

      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSent(false);
      }, 5000);

    } catch (err) {
      console.error(err);
      alert('Noget gik galt. Prøv igen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Background glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>

          {/* LEFT SIDE */}
          <div className={`${styles.info} reveal`}>
            <span className="section-eyebrow">
              Klar til næste projekt?
            </span>

            <h2 className={styles.headline}>
              Lad os løfte
              <br />
              dit brand med{' '}
              <em className={styles.headlineEm}>
              <br />
                stærkt content
              </em>
            </h2>

            {/* CONTACT DETAILS */}
            <ul className={styles.details}>

              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  {icons.person}
                </span>

                <span>{contact.name}</span>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  {icons.mail}
                </span>

                <a
                  href={`mailto:${contact.email}`}
                  className={styles.detailLink}
                >
                  {contact.email}
                </a>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  {icons.phone}
                </span>

                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className={styles.detailLink}
                >
                  {contact.phone}
                </a>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>
                  {icons.location}
                </span>

                <span>{contact.location}</span>
              </li>

            </ul>

            {/* SOCIALS */}
            <div className={styles.socials}>
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={s.label}
                >
                  {s.icon === 'instagram' && <FaInstagram />}
                  {s.icon === 'tiktok' && <FaTiktok />}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div
            className={`${styles.formWrap} reveal`}
            style={{ transitionDelay: '150ms' }}
          >

            {sent ? (
              <div
                className={styles.successMsg}
                role="status"
              >
                ✓ Tak for din besked — jeg vender tilbage inden for 24 timer.
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
              >

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="name"
                  >
                    Navn
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Dit fulde navn"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="din@email.dk"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="message"
                  >
                    Besked
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Fortæl mig om dit projekt..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading
                    ? 'Sender...'
                    : 'Send Besked →'}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}