import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitFork, Globe, Send, CheckCircle, AlertTriangle, Share2 } from 'lucide-react';
import { PERSONAL } from '../config/portfolio';

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

const SOCIAL_LINKS = [
  {
    id: 'github',
    icon: GitFork,
    label: 'GitHub',
    href: PERSONAL.github,
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.1)',
  },
  {
    id: 'linkedin',
    icon: Globe,
    label: 'LinkedIn',
    href: PERSONAL.linkedin,
    color: '#0ea5e9',
    bg: 'rgba(14, 165, 233, 0.05)',
    border: 'rgba(14, 165, 233, 0.2)',
  },
  {
    id: 'twitter',
    icon: Share2,
    label: 'Twitter / X',
    href: PERSONAL.twitter,
    color: '#818cf8',
    bg: 'rgba(129, 140, 248, 0.05)',
    border: 'rgba(129, 140, 248, 0.2)',
  },
];

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message too short';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'submitting' | 'no-backend' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e2 => ({ ...e2, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // ── No backend configured — show informative message ──
    setStatus('no-backend');
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(34, 211, 238, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <FadeIn>
            <div className="section-label" style={{ justifyContent: 'center' }}>Contact Portal</div>
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
              Let's Build Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              color: 'var(--text-secondary)',
              maxWidth: '540px',
              margin: '0 auto',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}>
              Have an idea, a project, or just want to connect? Reach out — let's create something great together.
            </p>
          </FadeIn>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — Social / Email */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Connect With Me
              </h3>
            </FadeIn>

            {/* Email card */}
            <FadeIn delay={0.2}>
              <a
                href={`mailto:${PERSONAL.email}`}
                id="contact-email-link"
                style={{ textDecoration: 'none', display: 'block', marginBottom: '1rem' }}
              >
                <motion.div
                  className="glass"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                  whileHover={{ x: 4, boxShadow: '0 0 20px rgba(34, 211, 238, 0.12)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Mail size={18} color="var(--cyan)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: '0.15rem' }}>
                      Email
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--cyan)', fontWeight: 500 }}>
                      {PERSONAL.email}
                    </div>
                  </div>
                </motion.div>
              </a>
            </FadeIn>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SOCIAL_LINKS.map((s, i) => (
                <FadeIn key={s.id} delay={0.3 + i * 0.1}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`contact-${s.id}-link`}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <motion.div
                      className="glass"
                      style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', borderColor: s.border }}
                      whileHover={{ x: 4, background: s.bg, boxShadow: `0 0 20px ${s.color}15` }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        borderRadius: '0.5rem',
                        background: s.bg,
                        border: `1px solid ${s.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <s.icon size={18} color={s.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: '0.15rem' }}>
                          {s.label}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                          {s.href.replace('https://', '')}
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <FadeIn delay={0.2}>
            <div className="glass-strong" style={{ padding: '2rem' }}>
              <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Send a Message
              </h3>

              {status === 'no-backend' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(251, 146, 60, 0.08)',
                    border: '1px solid rgba(251, 146, 60, 0.3)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <AlertTriangle size={18} color="#fb923c" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#fb923c', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      No submission service configured
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                      Connect a backend or email service (e.g. Formspree, EmailJS) to activate this form. Until then, please contact via email directly.
                    </div>
                  </div>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(52, 211, 153, 0.08)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <CheckCircle size={18} color="#34d399" />
                  <div style={{ color: '#34d399', fontWeight: 600, fontSize: '0.9rem' }}>
                    Message sent successfully!
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <p style={{ color: '#f87171', fontSize: '0.7rem', marginTop: '0.3rem' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && <p style={{ color: '#f87171', fontSize: '0.7rem', marginTop: '0.3rem' }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                  {errors.message && <p style={{ color: '#f87171', fontSize: '0.7rem', marginTop: '0.3rem' }}>{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  id="contact-submit-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
