import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import RotatingIcon from './RotatingIcon';
import CircularText from './CircularText';

const MagnetButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="flex min-h-[250px] items-center justify-center p-4">
      <motion.div
        ref={containerRef}
        className="group relative flex items-center justify-center h-[220px] w-[220px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={isHovered ? { x: position.x / 4, y: position.y / 4 } : { x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.button
          animate={isHovered ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={isHovered ? { repeat: Infinity, duration: 6, ease: 'linear' } : { duration: 0 }}
          className={`relative flex items-center justify-center h-full w-full rounded-full border-2 border-black transition-colors duration-700 ease-out ${
            isHovered ? 'bg-purple-600 ' : 'bg-blue-300'
          }`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isHovered ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 z-0 rounded-full transition-transform duration-700 ease-out"
          ></motion.div>
        </motion.button>

        <RotatingIcon isHovered={isHovered} />
        <CircularText isHovered={isHovered} />
      </motion.div>
    </div>
  );
};

export default MagnetButton;
