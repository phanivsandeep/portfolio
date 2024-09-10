import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import CertificationsAchievements from './components/CertificationsAchievements';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('summary');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {activeSection === 'summary' && <Summary />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'certifications' && <CertificationsAchievements />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
