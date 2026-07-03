import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import OpenSource from './components/OpenSource';
import Writing from './components/Writing';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', color: '#e2e8f0' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <OpenSource />
        <Writing />
        <Testimonials />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
