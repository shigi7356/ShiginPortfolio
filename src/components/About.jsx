import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Code2, Sparkles } from 'lucide-react';
import { PERSONAL } from '../config/portfolio';

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left — Text */}
          <div>
            <FadeIn delay={0}>
              <div className="section-label">About Me</div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                {PERSONAL.aboutHeading}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="glass"
                style={{ padding: '2rem', marginBottom: '2rem' }}
              >
                {PERSONAL.aboutText.split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.8,
                      marginBottom: i < 2 ? '1rem' : 0,
                      fontSize: '0.95rem',
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="btn-primary"
                  id="about-contact-btn"
                  style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}
                >
                  Get In Touch
                </a>
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  id="about-github-btn"
                  style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}
                >
                  View GitHub
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — Visual Panel */}
          <FadeIn delay={0.2} direction="left">
            <div style={{ position: 'relative' }}>
              {/* Main card */}
              <div
                className="glass-strong"
                style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
              >
                {/* Glowing orb inside card */}
                <div style={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '-2rem',
                  width: '12rem',
                  height: '12rem',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Avatar placeholder */}
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 24px rgba(34, 211, 238, 0.35)',
                }}>
                  <User size={28} color="#000" />
                </div>

                <div className="font-display" style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}>
                  {PERSONAL.name}
                </div>
                <div className="font-mono" style={{
                  fontSize: '0.75rem',
                  color: 'var(--cyan)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}>
                  {PERSONAL.title}
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, var(--cyan), transparent)',
                  marginBottom: '1.5rem',
                  opacity: 0.3,
                }} />

                {/* Quick facts */}
                {[
                  { icon: Code2, label: 'Specialty', value: 'Full Stack Development' },
                  { icon: Code2, label: 'Experience', value: 'ERP Application Development' },
                  { icon: Code2, label: 'Experience', value: 'Desktop ERP & Web ERP' },
                  { icon: Sparkles, label: 'Passion', value: 'Building Great Products' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.875rem',
                  }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '0.4rem',
                      background: 'rgba(34, 211, 238, 0.1)',
                      border: '1px solid rgba(34, 211, 238, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={14} color="var(--cyan)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
                        {label}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                right: '-1rem',
                width: '4rem',
                height: '4rem',
                borderRight: '2px solid var(--cyan)',
                borderBottom: '2px solid var(--cyan)',
                borderRadius: '0 0 0.5rem 0',
                opacity: 0.4,
              }} />
              <div style={{
                position: 'absolute',
                top: '-1rem',
                left: '-1rem',
                width: '4rem',
                height: '4rem',
                borderLeft: '2px solid var(--violet)',
                borderTop: '2px solid var(--violet)',
                borderRadius: '0.5rem 0 0 0',
                opacity: 0.4,
              }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
