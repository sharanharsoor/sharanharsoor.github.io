import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiPackage } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { openSource } from '../data/portfolio';

export default function OpenSource() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="opensource" ref={ref} style={{
      padding: '6rem 2rem',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader
          badge="$ pip install"
          title="Open Source"
          subtitle="Production-grade AI libraries I've built and shipped — adopted by startups globally."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }} className="os-grid">
          {openSource.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="card-hover"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(56,189,248,0.12)',
                borderRadius: 16,
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <h3 className="mono" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.3rem' }}>{pkg.name}</h3>
                  <code style={{
                    fontSize: '0.72rem', color: '#4ade80',
                    background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.15)',
                    padding: '0.2rem 0.6rem', borderRadius: 4, display: 'inline-block', fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    {pkg.pip}
                  </code>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={pkg.github} target="_blank" rel="noopener noreferrer"
                    style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#64748b', transition: 'all 0.2s', textDecoration: 'none' }}
                    title="GitHub"
                    onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <FiGithub size={15} />
                  </a>
                  <a href={pkg.pypi} target="_blank" rel="noopener noreferrer"
                    style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#64748b', transition: 'all 0.2s', textDecoration: 'none' }}
                    title="PyPI"
                    onMouseEnter={e => { e.currentTarget.style.color = '#4ade80'; e.currentTarget.style.borderColor = 'rgba(74,222,128,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <FiPackage size={15} />
                  </a>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>{pkg.description}</p>

              {/* Highlight */}
              <div style={{
                background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.15)',
                borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1.25rem',
              }}>
                <p style={{ fontSize: '0.8rem', color: '#7dd3fc', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: '#38bdf8' }}>→ </span>
                  {pkg.highlight}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {pkg.tags.map(t => (
                  <span key={t} className="mono" style={{
                    fontSize: '0.68rem', padding: '0.2rem 0.6rem',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 999, color: '#64748b',
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ color: '#475569', fontSize: '0.875rem', marginBottom: '1rem' }}>
            More open-source contributions in progress
          </p>
          <a href="https://github.com/sharanharsoor" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.7rem 1.5rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <FiGithub size={16} /> View GitHub Profile <FiExternalLink size={13} />
          </a>
        </motion.div>
      </div>
      <style>{`@media (max-width: 640px) { .os-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
