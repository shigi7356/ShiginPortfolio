import { motion } from 'framer-motion';
import { GitFork, Globe, Share2, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL } from '../config/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { icon: GitFork, href: PERSONAL.github, label: 'GitHub', id: 'footer-github' },
    { icon: Globe, href: PERSONAL.linkedin, label: 'LinkedIn', id: 'footer-linkedin' },
    { icon: Share2, href: PERSONAL.twitter, label: 'Twitter', id: 'footer-twitter' },
  ];

  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '3rem 0 2rem',
      overflow: 'hidden',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'radial-gradient(ellipse, rgba(34, 211, 238, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}>
          {/* Left — Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem',
            }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.75rem',
                color: '#000',
              }}>
                {PERSONAL.initials}
              </div>
              <span className="font-display" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                {PERSONAL.name}
              </span>
            </div>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              flexWrap: 'wrap',
            }}>
              Designed & Built with
              <Heart size={12} color="#f87171" fill="#f87171" />
              by {PERSONAL.name} · {year}
            </p>
          </div>

          {/* Center — Nav links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Home', 'About', 'Skills', 'Projects', 'Journey', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right — Social + Back to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {socials.map(({ icon: Icon, href, label, id }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                id={id}
                aria-label={label}
                whileHover={{ y: -3, color: 'var(--cyan)' }}
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <Icon size={15} />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              id="footer-back-to-top"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '0.5rem',
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cyan)',
                cursor: 'pointer',
              }}
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            © {year} {PERSONAL.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
