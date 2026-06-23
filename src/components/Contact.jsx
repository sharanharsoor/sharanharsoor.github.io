import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { SiMedium, SiKaggle } from 'react-icons/si';
import { personal } from '../data/portfolio';

const LINKS = [
  { Icon: FiLinkedin, label: 'linkedin.com/in/sharan-harsoor', href: personal.links.linkedin, color: '#0a66c2', name: 'LinkedIn' },
  { Icon: FiGithub, label: 'github.com/sharanharsoor', href: personal.links.github, color: '#e2e8f0', name: 'GitHub' },
  { Icon: SiMedium, label: 'medium.com/@sharanharsoor', href: personal.links.medium, color: '#00ab6c', name: 'Medium' },
  { Icon: SiKaggle, label: 'Kaggle Master', href: personal.links.kaggle, color: '#20beff', name: 'Kaggle' },
  { Icon: FiMail, label: 'sharanharsoor@gmail.com', href: `mailto:${personal.email}`, color: '#ea4335', name: 'Email' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" ref={ref} style={{
      padding: '6rem 2rem 4rem',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mono" style={{ color: '#38bdf8', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            $ ./connect.sh
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Let's build something
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.8, marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}>
            Always happy to connect — whether it's a technical discussion, a collaboration,
            a speaking opportunity, or just exchanging ideas on where AI is heading.
          </p>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}
          className="contact-grid"
        >
          {LINKS.map(({ Icon, label, href, color, name }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                padding: '1rem 1.25rem',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 12, textDecoration: 'none',
                textAlign: 'left', transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${color}30`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: 'rgba(255,255,255,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.1rem' }}>{name}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{label}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <a
            href="/resume.html"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.8rem 2rem',
              background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))',
              border: '1px solid rgba(56,189,248,0.3)',
              borderRadius: 8, color: '#38bdf8', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(129,140,248,0.25))'}
            onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))'}
          >
            <FiMail size={16} /> Request Resume
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#334155', fontSize: '0.82rem' }}>
            <FiMapPin size={13} />
            <span>Bengaluru, India · Contributing and collaborating globally</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center' }}>
        <p className="mono" style={{ color: '#1e293b', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} Sharan Harsoor · Bengaluru, India
        </p>
      </div>

      <style>{`@media (max-width: 500px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
