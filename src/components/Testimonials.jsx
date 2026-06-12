import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLinkedin } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { testimonials } from '../data/portfolio';

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" ref={ref} style={{
      padding: '5rem 2rem',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader
          badge="$ cat recommendations.json"
          title="What Colleagues Say"
          subtitle="Recommendations from engineering leaders I've worked with."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="card-hover"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '1.75rem',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '1.25rem', right: '1.5rem',
                fontSize: '3rem', color: 'rgba(56,189,248,0.12)',
                fontFamily: 'serif', lineHeight: 1, userSelect: 'none',
              }}>
                "
              </div>

              <p style={{
                fontSize: '0.875rem', color: '#94a3b8',
                lineHeight: 1.8, marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '0.15rem' }}>{t.role}</div>
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(10,102,194,0.1)', border: '1px solid rgba(10,102,194,0.2)',
                    borderRadius: 8, color: '#0a66c2', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,102,194,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,102,194,0.1)'}
                >
                  <FiLinkedin size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
