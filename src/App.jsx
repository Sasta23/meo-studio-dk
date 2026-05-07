// ============================================================
// App.jsx — Root component
// Add/remove sections here. Keep it clean.
// ============================================================
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import PortfolioGrid   from './components/PortfolioGrid';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';

export default function App() {
  // Activates scroll-reveal animations for all `.reveal` elements
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Full-width cinematic divider */}
        <div className="divider" />

        <PortfolioGrid />

        <div className="divider" />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
