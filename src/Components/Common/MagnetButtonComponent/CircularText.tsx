import React from 'react';
import { motion } from 'framer-motion';

interface CircularTextProps {
  isHovered: boolean;
}

const CircularText: React.FC<CircularTextProps> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg
        width="200"
        height="200"
        className="pointer-events-none absolute z-10"
      >
        <path
          id="circlePath"
          d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
          fill="none"
        ></path>
        <text>
          <textPath
            href="#circlePath"
            fill="currentColor"
            className={`fill-current font-bold text-2xl transition-opacity duration-700 ease-out ${
              isHovered ? 'text-white opacity-100' : 'text-black opacity-0'
            }`}
          >
            contact me! contact me! contact me! contact me!
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default CircularText;
