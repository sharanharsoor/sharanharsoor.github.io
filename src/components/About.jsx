import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';

const CAT_STYLES = {
  "Agentic AI & LLMs":       { header: '#38bdf8', bg: 'rgba(56,189,248,0.06)',  border: 'rgba(56,189,248,0.15)',  tag: 'rgba(56,189,248,0.1)',  tagBorder: 'rgba(56,189,248,0.25)',  tagColor: '#7dd3fc' },
  "ML / Deep Learning":      { header: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.15)', tag: 'rgba(129,140,248,0.1)', tagBorder: 'rgba(129,140,248,0.25)', tagColor: '#a5b4fc' },
  "Security AI":             { header: '#f87171', bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.15)', tag: 'rgba(248,113,113,0.1)', tagBorder: 'rgba(248,113,113,0.25)', tagColor: '#fca5a5' },
  "Vector & Retrieval":      { header: '#34d399', bg: 'rgba(52,211,153,0.06)',  border: 'rgba(52,211,153,0.15)',  tag: 'rgba(52,211,153,0.1)',  tagBorder: 'rgba(52,211,153,0.25)',  tagColor: '#6ee7b7' },
  "Data Engineering & ETL":  { header: '#fbbf24', bg: 'rgba(251,191,36,0.06)',  border: 'rgba(251,191,36,0.15)',  tag: 'rgba(251,191,36,0.1)',  tagBorder: 'rgba(251,191,36,0.25)',  tagColor: '#fcd34d' },
  "MLOps & Infra":           { header: '#22d3ee', bg: 'rgba(34,211,238,0.06)',  border: 'rgba(34,211,238,0.15)',  tag: 'rgba(34,211,238,0.1)',  tagBorder: 'rgba(34,211,238,0.25)',  tagColor: '#67e8f9' },
  "Cloud":                   { header: '#60a5fa', bg: 'rgba(96,165,250,0.06)',  border: 'rgba(96,165,250,0.15)',  tag: 'rgba(96,165,250,0.1)',  tagBorder: 'rgba(96,165,250,0.25)',  tagColor: '#93c5fd' },
  "Languages":               { header: '#f472b6', bg: 'rgba(244,114,182,0.06)', border: 'rgba(244,114,182,0.15)', tag: 'rgba(244,114,182,0.1)', tagBorder: 'rgba(244,114,182,0.25)', tagColor: '#f9a8d4' },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="about" ref={ref} style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader
        badge="$ cat skills.json"
        title="Skills & Technologies"
        subtitle="The full stack of technologies I work with to build production AI systems."
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.25rem',
      }} className="skills-grid">
        {Object.entries(skills).map(([cat, items], i) => {
          const s = CAT_STYLES[cat] || CAT_STYLES["Languages"];
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-hover"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                borderRadius: 14,
                padding: '1.4rem',
              }}
            >
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: s.header, marginBottom: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {cat}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {items.map(item => (
                  <span key={item} className="mono" style={{
                    fontSize: '0.68rem',
                    padding: '0.22rem 0.6rem',
                    background: s.tag,
                    border: `1px solid ${s.tagBorder}`,
                    borderRadius: 999,
                    color: s.tagColor,
                    whiteSpace: 'nowrap',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <style>{`
        @media (max-width: 700px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
