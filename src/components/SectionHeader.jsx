import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionHeader({ badge, title, subtitle }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '3.5rem', textAlign: 'center' }}
    >
      <span className="mono" style={{
        color: '#38bdf8', fontSize: '0.75rem', letterSpacing: '0.18em',
        textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem',
      }}>
        {badge}
      </span>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800,
        color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: '0.75rem',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
