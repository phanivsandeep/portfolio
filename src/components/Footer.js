import React from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, Facebook, Gamepad2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:phanivis@buffalo.edu', text: 'phanivis@buffalo.edu' },
    { icon: Phone, href: 'tel:+17166120738', text: '+1 (716)-612-0738' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/phanivsandeep', text: 'phanivsandeep' },
    { icon: Github, href: 'https://github.com/phanivsandeep', text: 'phanivsandeep' },
    { icon: Instagram, href: 'https://www.instagram.com/phanivsandeep', text: 'phanivsandeep' },
    { icon: Facebook, href: 'https://www.facebook.com/chodavarapu.phanisandeep/', text: 'Phani Sandeep' },
    { icon: Gamepad2, href: 'https://steamcommunity.com/id/phanivsandeep/', text: 'phanisandeep29' }
  ];

  return (
    <footer className="bg-[#121212] text-white py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-300 transition-colors duration-300"
              title={link.text}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Phani Visweswara Sandeep Chodavarapu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;