import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, GitFork, AlertCircle, Tag } from 'lucide-react';
import { PROJECTS } from '../config/portfolio';

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <FadeIn delay={index * 0.15}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
          height: '100%',
        }}
      >
        <div
          className="glass project-card"
          style={{
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            borderColor: project.placeholder ? 'rgba(255,255,255,0.06)' : `${project.color}30`,
          }}
        >
          {/* Glowing border overlay on hover */}
          <div className="card-glow" style={{
            background: `linear-gradient(135deg, ${project.color}20, transparent)`,
            boxShadow: `0 0 40px ${project.color}25, inset 0 0 40px ${project.color}08`,
          }} />

          {/* Top accent bar */}
          <div style={{
            height: '3px',
            background: `linear-gradient(to right, ${project.color}, transparent)`,
          }} />

          {/* Preview placeholder */}
          <div style={{
            height: '180px',
            background: `linear-gradient(135deg, ${project.color}12 0%, rgba(6, 20, 40, 0.8) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(circle at 2px 2px, ${project.color}15 1px, transparent 0)`,
              backgroundSize: '28px 28px',
            }} />
            {/* Preview orb */}
            <div style={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${project.color}60 0%, ${project.color}20 70%, transparent 100%)`,
              boxShadow: `0 0 40px ${project.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}>
              <span className="font-display" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', opacity: 0.8 }}>
                {project.id}
              </span>
            </div>

            {/* Placeholder notice */}
            {project.placeholder && (
              <div style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.6rem',
                background: 'rgba(251, 146, 60, 0.1)',
                border: '1px solid rgba(251, 146, 60, 0.3)',
                borderRadius: '0.375rem',
                zIndex: 2,
              }}>
                <AlertCircle size={10} color="#fb923c" />
                <span style={{ fontSize: '0.6rem', color: '#fb923c', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                  SAMPLE
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <h3
                className="font-display"
                style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <Tag size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}>
              {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  id={`project-${project.id}-live`}
                  style={{ flex: 1, justifyContent: 'center', padding: '0.625rem 1rem', fontSize: '0.8rem' }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  title="No live URL configured yet"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 1rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    cursor: 'not-allowed',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </button>
              )}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  id={`project-${project.id}-github`}
                  style={{ flex: 1, justifyContent: 'center', padding: '0.625rem 1rem', fontSize: '0.8rem' }}
                >
                  <GitFork size={14} />
                  GitHub
                </a>
              ) : (
                <button
                  disabled
                  title="No GitHub URL configured yet"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 1rem',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    cursor: 'not-allowed',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                  }}
                >
                  <GitFork size={14} />
                  GitHub
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      {/* Background accents */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <FadeIn>
            <div className="section-label" style={{ justifyContent: 'center' }}>My Universe</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}>
              A showcase of my work — replace the sample cards in <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '0.85rem' }}>config/portfolio.js</code> with your real projects.
            </p>
          </FadeIn>
        </div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
