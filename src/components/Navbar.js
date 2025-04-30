import React, { useState } from 'react';
import { Download, Phone, Mail, Linkedin, Code, Menu, X } from 'lucide-react';
import icon from "../assets/pvs_pic.ico";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 bg-[#121212] bg-opacity-75 backdrop-blur-sm text-white z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Replace with your photo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer"
        >
          <img
            src={icon}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#121212] hover:ring-blue-500 transition-all duration-300"
          />
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['about', 'experience', 'education', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative px-2 py-1 group text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {[
            { icon: Download, href: 'https://raw.githubusercontent.com/phanivsandeep/portfolio/main/public/resume.pdf', download: true, tooltip: 'Download Resume' },
            { icon: Phone, href: 'tel:+17166120738', tooltip: 'Call Me' },
            { icon: Mail, href: 'mailto:phanisandeepchodavarapu@gmail.com', tooltip: 'Email Me' },
            { icon: Linkedin, href: 'https://linkedin.com/in/phanivsandeep', tooltip: 'LinkedIn' },
            { icon: Code, href: 'https://leetcode.com/u/phanivsandeep', tooltip: 'LeetCode' }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <a              
                href={item.href}
                download={item.download}
                target={item.download ? '_self' : '_blank'}
                rel={!item.download ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
              >
                <item.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <div className="absolute z-20 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-700 text-white text-sm rounded-lg py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                {item.tooltip}
              </div>
            </div>
          ))}
        </div>

        <button 
          className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-[#121212] bg-opacity-98 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        style={{ top: '73px' }}
      >
        <div className="flex flex-col p-8 space-y-6 text-center">
          {['about', 'projects', 'experience', 'skills', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-xl text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition-all duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { icon: Download, href: 'https://raw.githubusercontent.com/phanivsandeep/portfolio/main/public/resume.pdf', download: true },
              { icon: Phone, href: 'tel:+17166120738' },
              { icon: Mail, href: 'mailto:phanisandeepchodavarapu@gmail.com' },
              { icon: Linkedin, href: 'https://linkedin.com/in/phanivsandeep' },
              { icon: Code, href: 'https://leetcode.com/u/phanivsandeep' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                download={item.download}
                target={item.download ? '_self' : '_blank'}
                rel={!item.download ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <item.icon size={24} className="hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;