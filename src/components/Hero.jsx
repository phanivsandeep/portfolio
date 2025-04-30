import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Cloud, Database, Lock, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const taglines = [
    "Full Stack Sorcerer ✨",
    "Architecting Digital Excellence",
    "Where Innovation Meets Engineering",
    "Crafting Scalable Digital Experiences",
    "From Concept to Cloud Mastery",
    "Turning Complex into Elegant",
    "Building the Future, Line by Line",
    "Creating Impact Through Code"
  ];

  const stackIcons = [
    { icon: Terminal, color: "text-green-500" },
    { icon: Cloud, color: "text-blue-400" },
    { icon: Database, color: "text-yellow-500" },
    { icon: Lock, color: "text-red-400" },
    { icon: Globe, color: "text-purple-500" },
    { icon: Code2, color: "text-cyan-400" }
  ];

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const LetterByLetter = ({ text, isVisible }) => {
    const letters = text.split("");
    
    return (
      <div className="flex flex-wrap">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -50 }}  // Start from above
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : -50  // Move down when appearing
            }}
            exit={{ opacity: 0, y: 50 }}  // Exit downwards
            transition={{ 
              duration: 0.5,
              delay: isVisible ? i * 0.05 : 0,
              ease: "easeOut"
            }}
            className={letter === " " ? "w-2" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  };
  
  
  // Update the timing:
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 1000);
    }, 8000); // Increased time to allow for letter animation
  
    return () => clearInterval(interval);
  }, [taglines.length]);
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Phani Sandeep
                </span>
              </h1>
              <AnimatePresence mode='wait'>
                <motion.h2
                  key={currentTaglineIndex}
                  className="text-2xl md:text-3xl text-gray-300 flex items-center"
                >
                  <LetterByLetter 
                    text={taglines[currentTaglineIndex]} 
                    isVisible={isVisible}
                  />
                </motion.h2>
              </AnimatePresence>
              
              <p className="text-gray-400 text-lg">
                Computer Science graduate with 3+ years of expertise in crafting scalable web applications 
                and AI solutions. Passionate about optimizing backend architecture and creating engaging frontend experiences.
              </p>
              
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg inline-block hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="https://raw.githubusercontent.com/phanivsandeep/portfolio/main/public/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg inline-block hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
                >
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center"
          >
    <div className="relative w-64 h-64 flex items-center justify-center">
  {stackIcons.map((Icon, index) => {
    const totalIcons = stackIcons.length;
    // Calculate starting angle for each icon (evenly distributed)
    const startAngle = (index * (360 / totalIcons));
    const radius = 120;
    
    return (
      <motion.div
        key={index}
        className={`absolute ${Icon.color}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.1
        }}
      >
        {/* Create a rotating container centered at the origin */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          style={{
            position: "absolute",
            transformOrigin: "0 0"
          }}
        >
          {/* Position each icon at the fixed radius along its angle */}
          <motion.div
            style={{
              position: "absolute",
              left: `${Math.cos((startAngle * Math.PI) / 180) * radius}px`,
              top: `${Math.sin((startAngle * Math.PI) / 180) * radius}px`,
              transform: "translate(-50%, -50%)" // Center the icon on its position
            }}
          >
            {/* This motion.div handles the icon's self-rotation (spinning) */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            >
              <Icon.icon size={40} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  })}

  <motion.div 
    className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
    animate={{ 
      scale: [1, 1.1, 1],
      rotate: [0, 360]
    }}
    transition={{ 
      duration: 8,
      repeat: Infinity,
      repeatType: "loop"
    }}
  />
</div>
          </motion.div>
        </div>

        <motion.div 
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block" // Added hidden md:block
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;