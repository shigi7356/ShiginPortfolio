import { useState } from 'react';
import './index.css';
import CursorLight from './components/CursorLight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';

export default function App() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', position: 'relative' }}>
      {/* Ambient cursor lighting */}
      <CursorLight />

      {/* Navigation */}
      <Navbar onProfileClick={() => setProfileOpen(true)} />

      {/* Main content */}
      <main>
        <Hero onProfileClick={() => setProfileOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
