import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Star, AlertCircle } from 'lucide-react';
import { JOURNEY } from '../config/portfolio';

const TYPE_CONFIG = {
  education: { icon: GraduationCap, color: '#818cf8', label: 'Education' },
  experience: { icon: Briefcase, color: '#22d3ee', label: 'Experience' },
  milestone: { icon: Star, color: '#34d399', label: 'Milestone' },
};

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  const config = TYPE_CONFIG[item.type] || TYPE_CONFIG.milestone;
  const Icon = config.icon;

  return (
    <FadeIn delay={index * 0.15}>
      <div style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
        {/* Timeline dot and line */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          <div style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: `${config.color}18`,
            border: `2px solid ${config.color}50`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 16px ${config.color}30`,
            zIndex: 1,
          }}>
            <Icon size={16} color={config.color} />
          </div>
          {index < JOURNEY.length - 1 && (
            <div style={{
              width: '1px',
              flex: 1,
              minHeight: '2rem',
              background: `linear-gradient(to bottom, ${config.color}40, transparent)`,
              marginTop: '0.5rem',
            }} />
          )}
        </div>

        {/* Content */}
        <div
          className="glass"
          style={{
            padding: '1.5rem',
            marginBottom: '1.5rem',
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Color accent */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '3px',
            background: `linear-gradient(to bottom, ${config.color}, transparent)`,
            borderRadius: '0 0 0 1rem',
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{
                  padding: '0.15rem 0.6rem',
                  background: `${config.color}15`,
                  border: `1px solid ${config.color}30`,
                  borderRadius: '0.25rem',
                  fontSize: '0.65rem',
                  color: config.color,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {config.label}
                </span>
                {item.placeholder && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={10} color="#fb923c" />
                    <span style={{ fontSize: '0.6rem', color: '#fb923c', fontFamily: 'var(--font-mono)' }}>placeholder</span>
                  </span>
                )}
              </div>
              <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                {item.organization}
              </div>
            </div>
            <span className="font-mono" style={{
              fontSize: '0.8rem',
              color: config.color,
              fontWeight: 600,
              padding: '0.25rem 0.75rem',
              background: `${config.color}10`,
              borderRadius: '0.375rem',
              flexShrink: 0,
            }}>
              {item.year}
            </span>
          </div>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            marginTop: '0.75rem',
          }}>
            {item.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section-padding" style={{ position: 'relative' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="section-label">Development Journey</div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              My <span className="gradient-text">Story</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}>
              Key milestones, experiences and education that shaped my development journey. Update these in <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '0.85rem' }}>config/portfolio.js</code>.
            </p>

            {/* Legend */}
            <div className="glass" style={{ padding: '1rem 1.25rem', display: 'inline-flex', flexDirection: 'column', gap: '0.5rem' }}>
              {Object.entries(TYPE_CONFIG).map(([key, val]) => {
                const Icon = val.icon;
                return (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Icon size={12} color={val.color} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      {val.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Timeline */}
          <div style={{ paddingTop: '0.5rem' }}>
            {JOURNEY.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
