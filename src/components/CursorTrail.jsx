import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = e => {
      setTrail(prevTrail =>
        [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }].slice(
          -30
        )
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prevTrail => prevTrail.slice(1));
    }, 5000 / 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
      <AnimatePresence>
        {trail.map((position, index) => (
          <motion.div
            key={position.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0.9, scale: 1.8 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 5, ease: 'easeOut' }}
            className='absolute w-3 h-3 rounded-full'
            style={{
              left: position.x,
              top: position.y,
              background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)`,
              boxShadow:
                '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.8)',
              filter: 'blur(1px)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
