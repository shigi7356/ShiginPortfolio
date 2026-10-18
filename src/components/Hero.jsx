import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Layers } from 'lucide-react';
import { PERSONAL } from '../config/portfolio';

// Lazy-load the heavy 3D scene
const PlanetScene = lazy(() => import('./three/PlanetScene'));

// WebGL support check
function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// CSS star fallback
function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.5 + Math.random() * 2,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0.5,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Typing animation for tagline
function TypedText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: 'var(--cyan)',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          animation: 'pulse-glow 1s ease-in-out infinite',
        }} />
      )}
    </span>
  );
}

export default function Hero() {
  const [hasWebGL] = useState(() => typeof window !== 'undefined' ? supportsWebGL() : false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouse, { passive: true });
    return () => el?.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section no-webgl-bg"
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      {/* 3D Canvas or fallback stars */}
      <div className="hero-canvas-wrapper">
        {hasWebGL ? (
          <Suspense fallback={<StarField />}>
            <PlanetScene />
          </Suspense>
        ) : (
          <StarField />
        )}
      </div>

      {/* Nebula overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(34, 211, 238, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 40% 60% at 20% 60%, rgba(129, 140, 248, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div
        className="hero-content section-container"
        style={{
          width: '100%',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -4}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-label"
            style={{ marginBottom: '1.5rem' }}
          >
            Full Stack Developer
          </motion.div>

          {/* Main name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            <span className="gradient-text">SHIGIN</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>T.P</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ width: '3rem', height: '1px', background: 'var(--cyan)' }} />
            <span
              className="font-mono"
              style={{
                color: 'var(--cyan)',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              minHeight: '2em',
              fontFamily: 'var(--font-body)',
            }}
          >
            <TypedText text={PERSONAL.tagline} delay={1.2} />
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}
          >
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="hero-explore-btn"
            >
              <Rocket size={18} />
              Explore My Universe
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="hero-projects-btn"
            >
              <Layers size={18} />
              View Projects
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}
          >
            {[
              { value: 'Full', label: 'Stack' },
              { value: '∞', label: 'Passion' },
              { value: '∀', label: 'Problems Solved' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display" style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--cyan)',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        aria-label="Scroll to next section"
      >
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-dot" />
        </div>
        <ChevronDown size={16} color="var(--cyan)" style={{ opacity: 0.6 }} />
      </motion.button>
    </section>
  );
}
