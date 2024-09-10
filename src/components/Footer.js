import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Phani Visweswara Sandeep Chodavarapu</h2>
            <p className="text-gray-300">University at Buffalo, SUNY</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="mailto:phanivis@buffalo.edu" className="flex items-center mb-2 md:mb-0 hover:text-gray-300">
              <Mail size={20} className="mr-2" />
              phanivis@buffalo.edu
            </a>
            <a href="tel:+17166120738" className="flex items-center mb-2 md:mb-0 hover:text-gray-300">
              <Phone size={20} className="mr-2" />
              +1 (716)-612-0738
            </a>
            <a href="https://www.linkedin.com/in/phanivsandeep" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 md:mb-0 hover:text-gray-300">
              <Linkedin size={20} className="mr-2" />
              phanivsandeep
            </a>
            <a href="https://github.com/phanivsandeep" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
              <Github size={20} className="mr-2" />
              phanivsandeep
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Phani Visweswara Sandeep Chodavarapu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;