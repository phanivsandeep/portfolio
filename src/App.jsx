import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import CertificationsAchievements from './components/CertificationsAchievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CursorTrail from './components/CursorTrail.jsx';
import Education from './components/Education.jsx';
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-DK4VLPVF3M');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='min-h-screen relative bg-[#0a0a0a]'>
      <CursorTrail />
      <div className='fixed top-0 left-0 w-full h-full z-0'>
        <div className='starfield'>
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className='star'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
            />
          ))}
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#121212]/80 to-[#121212]/95' />
      </div>

      <div className='relative z-10'>
        <Navbar />
        <main className='container mx-auto px-4'>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <CertificationsAchievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
