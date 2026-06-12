import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiYoutube } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { patents, publications, talks } from '../data/portfolio';

export default function Research() {
  const { ref, inView } = useInView({ threshold: 0.04, triggerOnce: true });

  return (
    <section id="research" ref={ref} style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader
        badge="$ ls research/"
        title="Research & Innovation"
        subtitle="Patents, conference talks, and research at the intersection of production AI."
      />

      {/* Speaking Photo + Talks */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }} className="research-grid">
        {/* Speaking photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', minHeight: 240 }}
        >
          <img src="/sharan-speaking.png" alt="Sharan speaking at DevConf.IN 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(6,9,18,0.95))',
            padding: '2rem 1.5rem 1.25rem',
          }}>
            <div className="mono" style={{ color: '#38bdf8', fontSize: '0.72rem', marginBottom: '0.2rem' }}>DevConf.IN 2026, Pune</div>
            <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.4 }}>
              "Why Your RAG System Hallucinates"
            </p>
          </div>
        </motion.div>

        {/* Talks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {talks.map((talk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14, padding: '1.25rem',
              }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="mono" style={{ fontSize: '0.7rem', color: '#38bdf8', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', padding: '0.15rem 0.55rem', borderRadius: 4 }}>
                      {talk.event}
                    </span>
                    <span style={{
                      fontSize: '0.7rem', padding: '0.15rem 0.55rem', borderRadius: 4,
                      ...(talk.type === 'Delivered'
                        ? { color: '#4ade80', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }
                        : { color: '#fbbf24', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }),
                    }}>
                      {talk.type === 'Delivered' ? '✓ Delivered' : '⟳ Selected'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {talk.youtube && (
                      <a href={talk.youtube} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.3rem 0.7rem',
                          background: 'rgba(239,68,68,0.12)',
                          border: '1px solid rgba(239,68,68,0.35)',
                          borderRadius: 6, color: '#f87171',
                          textDecoration: 'none', fontSize: '0.72rem', fontWeight: 600,
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.22)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.12)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)'; }}
                      >
                        <FiYoutube size={13} /> Watch Talk
                      </a>
                    )}
                    {talk.link && (
                      <a href={talk.link} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.3rem 0.7rem',
                          background: 'rgba(56,189,248,0.08)',
                          border: '1px solid rgba(56,189,248,0.25)',
                          borderRadius: 6, color: '#7dd3fc',
                          textDecoration: 'none', fontSize: '0.72rem', fontWeight: 600,
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.18)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.08)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'; }}
                      >
                        <FiExternalLink size={12} /> Talk Details
                      </a>
                    )}
                  </div>
                </div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.4rem', lineHeight: 1.5 }}>{talk.title}</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.5rem' }}>{talk.location} · {talk.date}</p>
              <p style={{ fontSize: '0.78rem', color: '#38bdf8', fontStyle: 'italic' }}>{talk.result}</p>
              <div style={{ marginTop: '0.5rem' }}>
                <span className="mono" style={{ fontSize: '0.68rem', color: '#4ade80' }}>pip install {talk.library}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NeurIPS - subtle mention */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          background: 'rgba(129,140,248,0.04)',
          border: '1px solid rgba(129,140,248,0.12)',
          borderRadius: 14, padding: '1.5rem 2rem',
          marginBottom: '3rem',
          display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
        }}
      >
        <div style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: 'rgba(129,140,248,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem',
        }}>🔬</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '0.95rem' }}>Active Research — NeurIPS 2026</span>
            <span className="mono" style={{ fontSize: '0.68rem', color: '#818cf8', background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.2)', padding: '0.1rem 0.5rem', borderRadius: 4 }}>
              Under Review
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
            Two papers submitted on LLM behavioral evaluation under uncertainty (AmbiguityBench) and
            cross-provider reasoning mode analysis — grounding production agent design in rigorous empirical research.
          </p>
        </div>
      </motion.div>

      {/* Patents */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ color: '#fbbf24' }}>◆</span> Patents
        <span className="mono" style={{ fontSize: '0.7rem', color: '#fbbf24', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', padding: '0.15rem 0.55rem', borderRadius: 4 }}>
          9 filed
        </span>
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }} className="patents-grid">
        {patents.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-hover"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10, padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: 4,
                fontFamily: 'JetBrains Mono, monospace',
                ...(p.status.includes('Issued') ? { color: '#4ade80', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }
                  : p.status.includes('IDF') ? { color: '#38bdf8', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }
                  : { color: '#fbbf24', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }),
              }}>
                {p.status}
              </span>
              <span style={{ fontSize: '0.65rem', color: '#475569', flexShrink: 0 }}>{p.company}</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>{p.title}</p>
            {p.number && <p className="mono" style={{ fontSize: '0.65rem', color: '#334155', marginTop: '0.4rem' }}>{p.number}</p>}
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .research-grid { grid-template-columns: 1fr !important; }
          .patents-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .patents-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
