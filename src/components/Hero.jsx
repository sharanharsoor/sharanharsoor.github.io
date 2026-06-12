import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiMedium, SiKaggle } from 'react-icons/si';
import { personal } from '../data/portfolio';

function ParticleField() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.4 + 0.1,
      c: ['#38bdf8','#818cf8','#c084fc','#34d399'][Math.floor(Math.random()*4)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i+1).forEach(b => {
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.strokeStyle = '#38bdf8';
          ctx.globalAlpha = (1 - d/120) * 0.06;
          ctx.lineWidth = 0.5;
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }));
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} />;
}

const stat = (v, l) => ({ value: v, label: l });
const STATS = [
  stat('12+', 'Years Experience'),
  stat('9', 'Patents Filed'),
  stat('26K+', 'Medium Reads'),
  stat('30+', 'Articles Written'),
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '7rem 0 4rem',
    }}>
      <ParticleField />

      {/* Background glows */}
      <div style={{ position:'absolute', top:'15%', left:'5%', width:500, height:500, background:'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'5%', width:500, height:500, background:'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 2rem', width:'100%', position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'4rem', alignItems:'center' }} className="hero-grid">

          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
              style={{ marginBottom:'1rem' }}
            >
              <span className="mono" style={{ color:'#38bdf8', fontSize:'0.8rem', letterSpacing:'0.15em', textTransform:'uppercase' }}>
                Principal ML Engineer @ Red Hat
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
              style={{ fontSize:'clamp(2.8rem, 5vw, 4.5rem)', fontWeight:800, lineHeight:1.1, marginBottom:'1rem', letterSpacing:'-0.02em' }}
            >
              <span style={{ color:'#f1f5f9' }}>Sharan </span>
              <span className="g-text">Harsoor</span>
            </motion.h1>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
              style={{ fontSize:'clamp(1.1rem, 2vw, 1.4rem)', fontWeight:600, marginBottom:'1.5rem', minHeight:'2.2rem', display:'flex', alignItems:'center' }}
            >
              <TypeAnimation
                sequence={personal.titles.flatMap(t => [t, 2200])}
                speed={55}
                repeat={Infinity}
                wrapper="span"
                className="g-text"
              />
            </motion.div>

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
              style={{ fontSize:'1.05rem', lineHeight:1.8, color:'#94a3b8', marginBottom:'2.5rem', maxWidth:560 }}
            >
              Building AI systems that ship to production. Inventor on{' '}
              <strong style={{ color:'#38bdf8' }}>9 patents</strong>,{' '}
              international conference speaker, and creator of open-source AI libraries
              used by startups globally.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.5 }}
              style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1rem', marginBottom:'2.5rem', maxWidth:520 }}
              className="stats-grid"
            >
              {STATS.map(s => (
                <div key={s.label} style={{
                  textAlign:'center', padding:'1rem 0.5rem',
                  background:'rgba(255,255,255,0.03)',
                  border:'1px solid rgba(255,255,255,0.07)',
                  borderRadius:'12px',
                }}>
                  <div className="g-text" style={{ fontSize:'1.6rem', fontWeight:800, lineHeight:1 }}>{s.value}</div>
                  <div style={{ fontSize:'0.65rem', color:'#475569', marginTop:'0.3rem', lineHeight:1.3 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.6 }}
              style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'2.5rem' }}
            >
              <a href="#contact" style={{
                padding:'0.8rem 2rem', background:'linear-gradient(135deg, #38bdf8, #818cf8)',
                color:'#fff', borderRadius:'8px', fontWeight:600, fontSize:'0.95rem',
                textDecoration:'none', transition:'opacity 0.2s', boxShadow:'0 4px 20px rgba(56,189,248,0.25)',
              }}
                onMouseEnter={e=>e.target.style.opacity='0.9'}
                onMouseLeave={e=>e.target.style.opacity='1'}
              >
                Get in Touch
              </a>
              <a href="#experience" style={{
                padding:'0.8rem 2rem',
                background:'rgba(255,255,255,0.05)',
                border:'1px solid rgba(255,255,255,0.12)',
                color:'#e2e8f0', borderRadius:'8px', fontWeight:600, fontSize:'0.95rem',
                textDecoration:'none', transition:'all 0.2s',
              }}
                onMouseEnter={e=>{ e.target.style.background='rgba(255,255,255,0.08)'; e.target.style.borderColor='rgba(255,255,255,0.2)'; }}
                onMouseLeave={e=>{ e.target.style.background='rgba(255,255,255,0.05)'; e.target.style.borderColor='rgba(255,255,255,0.12)'; }}
              >
                View My Work →
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6, delay:0.8 }}
              style={{ display:'flex', gap:'1.25rem', alignItems:'center' }}
            >
          {[
            { Icon: FiGithub, href: personal.links.github, label: 'GitHub' },
            { Icon: FiLinkedin, href: personal.links.linkedin, label: 'LinkedIn' },
            { Icon: SiMedium, href: personal.links.medium, label: 'Medium' },
            { Icon: SiKaggle, href: personal.links.kaggle, label: 'Kaggle Master' },
            { Icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ color:'#475569', fontSize:'1.25rem', transition:'color 0.2s', display:'flex' }}
                  onMouseEnter={e=>e.currentTarget.style.color='#38bdf8'}
                  onMouseLeave={e=>e.currentTarget.style.color='#475569'}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity:0, scale:0.9, x:30 }}
            animate={{ opacity:1, scale:1, x:0 }}
            transition={{ duration:0.8, delay:0.3 }}
            style={{ position:'relative', flexShrink:0 }}
            className="hero-photo-col"
          >
            {/* Glow ring */}
            <div style={{
              position:'absolute', inset:-2,
              borderRadius:'50%',
              background:'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)',
              filter:'blur(20px)', opacity:0.4, zIndex:0,
            }} />
            <div style={{
              position:'relative', zIndex:1,
              width:300, height:300,
              borderRadius:'50%',
              overflow:'hidden',
              border:'3px solid rgba(56,189,248,0.3)',
              boxShadow:'0 0 60px rgba(56,189,248,0.15), 0 0 120px rgba(129,140,248,0.1)',
            }}>
              <img
                src="/sharan-headshot.png"
                alt="Sharan Harsoor"
                style={{ width:'100%', height:'100%', objectFit:'cover' }}
              />
            </div>

            {/* Floating badge - Speaker */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position:'absolute', bottom:-20, left:-30, zIndex:2,
                background:'rgba(11,17,32,0.95)',
                border:'1px solid rgba(56,189,248,0.3)',
                borderRadius:'10px', padding:'0.6rem 1rem',
                display:'flex', alignItems:'center', gap:'0.5rem',
                backdropFilter:'blur(10px)',
                boxShadow:'0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span style={{ fontSize:'1.2rem' }}>🎤</span>
              <div>
                <div style={{ fontSize:'0.7rem', color:'#38bdf8', fontWeight:600, fontFamily:'JetBrains Mono, monospace' }}>Conference Speaker</div>
                <div style={{ fontSize:'0.6rem', color:'#64748b' }}>International Tech Conferences</div>
              </div>
            </motion.div>

            {/* Floating badge - Inventor */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position:'absolute', top:-10, right:-40, zIndex:2,
                background:'rgba(11,17,32,0.95)',
                border:'1px solid rgba(192,132,252,0.3)',
                borderRadius:'10px', padding:'0.6rem 1rem',
                display:'flex', alignItems:'center', gap:'0.5rem',
                backdropFilter:'blur(10px)',
                boxShadow:'0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span style={{ fontSize:'1.2rem' }}>💡</span>
              <div>
                <div style={{ fontSize:'0.7rem', color:'#c084fc', fontWeight:600, fontFamily:'JetBrains Mono, monospace' }}>AI Inventor</div>
                <div style={{ fontSize:'0.6rem', color:'#64748b' }}>Patents & Research</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
