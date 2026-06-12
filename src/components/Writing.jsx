import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import SectionHeader from './SectionHeader';
import { writing } from '../data/portfolio';

const STATS = [
  { v: '30+', l: 'Articles' },
  { v: '26K+', l: 'Total Reads' },
  { v: '50K+', l: 'Total Views' },
  { v: '7.2K', l: 'Top Article' },
];

export default function Writing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="writing" ref={ref} style={{ padding: '6rem 2rem', maxWidth: 860, margin: '0 auto' }}>
      <SectionHeader
        badge="$ cat articles.md"
        title="Technical Writing"
        subtitle="Sharing what I build — RAG systems, agentic AI, LLM observability, and production ML."
      />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
          marginBottom: '2.5rem',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 14, padding: '1.5rem',
        }}
        className="writing-stats"
      >
        {STATS.map(s => (
          <div key={s.l} style={{ textAlign: 'center' }}>
            <div className="g-text" style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '0.3rem' }}>{s.l}</div>
          </div>
        ))}
      </motion.div>

      {/* Article list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
        {writing.map((a, i) => (
          <motion.a
            key={i}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="card-hover"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10, textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
              <span style={{ color: '#38bdf8', fontSize: '0.7rem' }}>◆</span>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>{a.title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, marginLeft: '1rem' }}>
              <span className="mono" style={{ fontSize: '0.72rem', color: '#38bdf8', display: 'none' }} className="article-reads">{a.reads}</span>
              <FiArrowRight size={14} style={{ color: '#334155', transition: 'color 0.2s' }} />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <a
          href="https://medium.com/@sharanharsoor"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.8rem 1.75rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, color: '#94a3b8', textDecoration: 'none',
            fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <SiMedium size={17} /> Read all articles on Medium <FiArrowRight size={14} />
        </a>
      </motion.div>

      <style>{`
        @media (min-width: 640px) { .article-reads { display: block !important; } }
        @media (max-width: 500px) { .writing-stats { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
