import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './SectionHeader';
import { education } from '../data/portfolio';

const colors = ['#c084fc', '#38bdf8', '#34d399'];

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" ref={ref} style={{ padding: '5rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
      <SectionHeader badge="$ cat education.json" title="Education" subtitle="" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="edu-grid">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-hover"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14, padding: '1.5rem',
              borderTop: `3px solid ${colors[i]}`,
            }}
          >
            <div className="mono" style={{ fontSize: '0.72rem', color: colors[i], marginBottom: '0.4rem' }}>{e.period}</div>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.3rem', lineHeight: 1.4 }}>{e.degree}</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>{e.school}</p>
            {e.gpa && (
              <div className="mono" style={{ fontSize: '0.72rem', color: '#4ade80', marginBottom: '0.5rem' }}>
                GPA: {e.gpa}
              </div>
            )}
            <p style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.5 }}>{e.highlight}</p>
          </motion.div>
        ))}
      </div>
      <style>{`@media (max-width: 700px) { .edu-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
