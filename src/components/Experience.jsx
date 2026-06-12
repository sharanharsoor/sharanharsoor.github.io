import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';

function JobCard({ job, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.12 }}
      className="card-hover"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${job.color}, transparent)`,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.2rem 0.75rem',
              background: `${job.color}18`,
              border: `1px solid ${job.color}35`,
              color: job.color,
              borderRadius: 6,
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              {job.company}
            </span>
            {i === 0 && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#4ade80', fontWeight: 600 }}>
                <span className="pulse-dot" />
                Current Role
              </span>
            )}
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.2rem' }}>{job.role}</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{job.team}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div className="mono" style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.15rem' }}>{job.period}</div>
          <div style={{ fontSize: '0.72rem', color: '#475569' }}>{job.location}</div>
        </div>
      </div>

      {/* Highlights */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
        {job.highlights.map((h, j) => (
          <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: job.color, marginTop: '0.35rem', flexShrink: 0, fontSize: '0.6rem' }}>◆</span>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.65 }}>{h}</span>
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {job.stack.map(t => (
          <span key={t} className="mono" style={{
            fontSize: '0.68rem', padding: '0.2rem 0.6rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 6, color: '#64748b',
          }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.03, triggerOnce: true });

  return (
    <section id="experience" ref={ref} style={{
      padding: '6rem 2rem',
      background: 'rgba(255,255,255,0.01)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader
          badge="$ git log"
          title="Work Experience"
          subtitle="From embedded systems to agentic AI — 12+ years of building things that matter."
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((job, i) => (
            <JobCard key={job.company} job={job} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
