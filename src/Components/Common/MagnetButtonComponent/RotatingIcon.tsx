import React from 'react';
import { motion } from 'framer-motion';

interface RotatingIconProps {
  isHovered: boolean;
}

const RotatingIcon: React.FC<RotatingIconProps> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      initial={{ rotate: 45 }}
      animate={isHovered ? { rotate: 90 } : { rotate: 45 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className={`pointer-events-none text-7xl ${
          isHovered ? 'text-white' : 'text-black'
        }`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
      </motion.svg>
    </motion.div>
  );
};

export default RotatingIcon;
