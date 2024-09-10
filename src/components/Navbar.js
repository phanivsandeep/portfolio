import React, { useState } from 'react';
import { Download, Phone, Mail, Linkedin, Github, Menu, X } from 'lucide-react';

const Navbar = ({ setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={() => setActiveSection('summary')} className="text-2xl font-bold">Phani Visweswara Sandeep Chodavarapu</div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => setActiveSection('projects')} className="hover:text-gray-300 text-xl">Projects</button>
          <button onClick={() => setActiveSection('experience')} className="hover:text-gray-300 text-xl">Experience</button>
          <button onClick={() => setActiveSection('skills')} className="hover:text-gray-300 text-xl">Skills</button>
          <button onClick={() => setActiveSection('education')} className="hover:text-gray-300 text-xl">Education</button>
          <button onClick={() => setActiveSection('certifications')} className="hover:text-gray-300 text-xl">Certifications & Achievements</button>
        </div>
        <div className="hidden md:flex space-x-4">
        <div className="relative group">
            <a href="/resume.pdf" download className="hover:text-gray-300" data-tooltip-target="tooltip-animation">
              <Download size={40} />
            </a>
            {/* Tooltip */}
            <div id="tooltip-animation" role="tooltip" className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity bg-blue-700 text-white text-sm rounded-lg p-2.5 shadow-lg">
              Download Resume
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <a href="tel:+7166120738" className="hover:text-gray-300">
            <Phone size={40} />
          </a>
          <a href="mailto:phanivis@buffalo.edu" className="hover:text-gray-300">
            <Mail size={40} />
          </a>
          <a href="https://linkedin.com/in/phanivsandeep" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Linkedin size={40} />
          </a>
          <a href="https://github.com/phanivsandeep" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Github size={40} />
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-90 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-8 space-y-8 text-center">
          <button onClick={() => { setActiveSection('projects'); setMenuOpen(false); }} className="hover:text-gray-300 text-2xl">Projects</button>
          <button onClick={() => { setActiveSection('experience'); setMenuOpen(false); }} className="hover:text-gray-300 text-2xl">Experience</button>
          <button onClick={() => { setActiveSection('skills'); setMenuOpen(false); }} className="hover:text-gray-300 text-2xl">Skills</button>
          <button onClick={() => { setActiveSection('education'); setMenuOpen(false); }} className="hover:text-gray-300 text-2xl">Education</button>
          <button onClick={() => { setActiveSection('certifications'); setMenuOpen(false); }} className="hover:text-gray-300 text-2xl">Certifications & Achievements</button>
          {/* Icons in mobile menu */}
          <div className="flex justify-center space-x-4 mt-8">
            <a href="/resume.pdf" download className="hover:text-gray-300" >
              <Download size={40} />
            </a>
            
            <a href="tel:+7166120738" className="hover:text-gray-300">
              <Phone size={40} />
            </a>
            <a href="mailto:phanivis@buffalo.edu" className="hover:text-gray-300">
              <Mail size={40} />
            </a>
            <a href="https://linkedin.com/in/phanivsandeep" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Linkedin size={40} />
            </a>
            <a href="https://github.com/phanivsandeep" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Github size={40} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
