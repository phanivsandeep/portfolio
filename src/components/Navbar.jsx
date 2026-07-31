import React, { useState, useEffect } from 'react';
import {
  Download,
  Phone,
  Mail,
  Linkedin,
  Code,
  Menu,
  X,
  Sparkles,
  Home,
} from 'lucide-react';
import icon from '../assets/pvs_pic.ico';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: Home },
    { id: 'experience', label: 'Experience', icon: Sparkles },
    { id: 'education', label: 'Education', icon: Code },
    { id: 'projects', label: 'Projects', icon: Sparkles },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    {
      icon: Download,
      href: 'https://raw.githubusercontent.com/phanivsandeep/portfolio/main/public/resume.pdf',
      download: true,
      tooltip: 'Download Resume',
      color: 'hover:text-green-400',
    },
    {
      icon: Phone,
      href: 'tel:+17166120738',
      tooltip: 'Call Me',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:phanisandeepchodavarapu@gmail.com',
      tooltip: 'Email Me',
      color: 'hover:text-red-400',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/phanivsandeep',
      tooltip: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/phanivsandeep',
      tooltip: 'LeetCode',
      color: 'hover:text-yellow-400',
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg shadow-black/20'
          : 'bg-[#121212]/75 backdrop-blur-sm border-b border-gray-800/30'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center px-6 py-4'>
        {/* Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className='cursor-pointer group relative'
        >
          <div className='relative'>
            <img
              src={icon}
              alt='Profile'
              className='w-12 h-12 rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-offset-[#121212] group-hover:ring-blue-500'
            />
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
          </div>
          <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#121212] animate-pulse'></div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-1'>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className='relative px-4 py-2 group text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-700/50'
            >
              <span className='relative z-10 flex items-center gap-2 text-sm font-medium'>
                <item.icon
                  size={16}
                  className='opacity-60 group-hover:opacity-100 transition-opacity'
                />
                {item.label}
              </span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300'></span>
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300'></span>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className='hidden md:flex items-center space-x-2'>
          {socialLinks.map((item, index) => (
            <div key={index} className='relative group'>
              <a
                href={item.href}
                download={item.download}
                target={item.download ? '_self' : '_blank'}
                rel={!item.download ? 'noopener noreferrer' : undefined}
                className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center text-gray-400 ${item.color} hover:bg-gray-700/50 hover:scale-110`}
              >
                <item.icon size={20} />
              </a>
              <div className='absolute z-20 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 text-white text-xs rounded-lg py-1.5 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap border border-gray-600'>
                {item.tooltip}
                <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-gray-600'></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-white'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <div className='relative w-6 h-6'>
            <span
              className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#121212]/98 backdrop-blur-md transition-all duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
        style={{ top: '73px' }}
      >
        <div className='flex flex-col p-8 space-y-6'>
          {/* Mobile Navigation Items */}
          <div className='space-y-4'>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className='flex items-center gap-4 w-full text-left text-lg text-gray-300 hover:text-white hover:bg-gray-700/50 py-3 px-4 rounded-lg transition-all duration-300 group'
              >
                <item.icon
                  size={20}
                  className='text-gray-500 group-hover:text-blue-400 transition-colors'
                />
                <span className='font-medium'>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className='pt-8 border-t border-gray-700'>
            <h4 className='text-gray-400 text-sm font-medium mb-4 uppercase tracking-wide'>
              Connect
            </h4>
            <div className='flex justify-center space-x-6'>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  download={item.download}
                  target={item.download ? '_self' : '_blank'}
                  rel={!item.download ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-lg transition-all duration-300 text-gray-400 ${item.color} hover:bg-gray-700/50 hover:scale-110`}
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
