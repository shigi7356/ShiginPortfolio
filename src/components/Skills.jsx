import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Database, Wrench, CheckCircle, Circle } from 'lucide-react';
import { SKILLS } from '../config/portfolio';

const ICON_MAP = { Monitor, Server, Database, Wrench };

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function SkillItem({ name, confirmed, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        background: confirmed
          ? 'rgba(34, 211, 238, 0.07)'
          : 'rgba(255, 255, 255, 0.02)',
        border: `1px solid ${confirmed ? 'rgba(34, 211, 238, 0.2)' : 'rgba(255,255,255,0.05)'}`,
        transition: 'all 0.3s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        background: confirmed
          ? 'rgba(34, 211, 238, 0.12)'
          : 'rgba(255,255,255,0.04)',
        y: -1,
      }}
    >
      {confirmed ? (
        <CheckCircle size={12} color="var(--cyan)" />
      ) : (
        <Circle size={12} color="var(--text-muted)" />
      )}
      <span style={{
        fontSize: '0.82rem',
        color: confirmed ? 'var(--text-primary)' : 'var(--text-muted)',
        fontWeight: confirmed ? 500 : 400,
        fontFamily: 'var(--font-body)',
      }}>
        {name}
      </span>
      {!confirmed && (
        <span style={{
          marginLeft: 'auto',
          fontSize: '0.6rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.05em',
          fontStyle: 'italic',
        }}>
          placeholder
        </span>
      )}
    </motion.div>
  );
}

function SkillCard({ group, index }) {
  const Icon = ICON_MAP[group.icon] || Monitor;

  return (
    <FadeIn delay={index * 0.1}>
      <div
        className="glass skill-card"
        style={{ padding: '1.75rem', height: '100%' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: '0.6rem',
            background: `${group.color}18`,
            border: `1px solid ${group.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 12px ${group.color}20`,
          }}>
            <Icon size={18} color={group.color} />
          </div>
          <div>
            <h3
              className="font-display"
              style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.1rem' }}
            >
              {group.category}
            </h3>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
              {group.items.filter(i => i.confirmed).length} confirmed · {group.items.filter(i => !i.confirmed).length} placeholder
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: `linear-gradient(to right, ${group.color}40, transparent)`,
          marginBottom: '1.25rem',
        }} />

        {/* Skills grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {group.items.map((item, i) => (
            <SkillItem key={item.name} {...item} index={i} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

// Constellation decoration
function ConstellationDots() {
  const dots = [
    { x: '10%', y: '20%' }, { x: '30%', y: '10%' }, { x: '50%', y: '25%' },
    { x: '70%', y: '8%' }, { x: '90%', y: '18%' }, { x: '20%', y: '80%' },
    { x: '60%', y: '90%' }, { x: '85%', y: '75%' },
  ];

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15 }}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2" fill="#22d3ee" />
      ))}
      {dots.slice(0, -1).map((d, i) => (
        <line
          key={`l-${i}`}
          x1={d.x} y1={d.y}
          x2={dots[i + 1].x} y2={dots[i + 1].y}
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      ))}
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <ConstellationDots />

      {/* Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-15%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        transform: 'translateY(-50%)',
      }} />

      <div className="section-container">
        {/* Section header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <FadeIn>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              Skills Constellation
            </div>
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
              My <span className="gradient-text">Tech Stack</span>
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
              Technologies I work with — confirmed skills are marked, placeholders need updating by the site owner.
            </p>
          </FadeIn>
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {SKILLS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Hint */}
        <FadeIn delay={0.4}>
          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle size={12} color="var(--cyan)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Confirmed skill</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Circle size={12} color="var(--text-muted)" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Placeholder — edit config/portfolio.js</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
