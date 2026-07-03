import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={ref} style={{
      padding: '6rem 2rem',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader
          badge="Live Product"
          title="Projects"
          subtitle="Production systems I've built and shipped outside of work."
        />

        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card-hover"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(56,189,248,0.15)',
              borderRadius: 18,
              padding: '2rem 2rem 1.75rem',
              marginBottom: '1.5rem',
            }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>{project.name}</h3>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                    padding: '0.2rem 0.65rem', borderRadius: 999,
                    background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)',
                    color: '#4ade80', textTransform: 'uppercase',
                  }}>Live</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#7dd3fc', margin: 0, fontStyle: 'italic' }}>{project.tagline}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <FiGithub size={13} /> GitHub
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: 8, color: '#38bdf8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.18)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.1)'; }}
                >
                  <FiExternalLink size={13} /> Visit Site
                </a>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.75, margin: '1rem 0' }}>
              {project.description}
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {project.stats.map(stat => (
                <span key={stat} style={{
                  fontSize: '0.75rem', fontWeight: 600,
                  padding: '0.3rem 0.75rem', borderRadius: 999,
                  background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.18)',
                  color: '#7dd3fc',
                }}>{stat}</span>
              ))}
            </div>

            {/* Highlight */}
            <div style={{
              background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.12)',
              borderRadius: 10, padding: '0.75rem 1rem', marginBottom: '1.25rem',
            }}>
              <p style={{ fontSize: '0.82rem', color: '#7dd3fc', margin: 0, lineHeight: 1.6 }}>
                <span style={{ fontWeight: 700, color: '#38bdf8' }}>→ </span>
                {project.highlight}
              </p>
            </div>

            {/* Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.stack.map(t => (
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
    </section>
  );
}
