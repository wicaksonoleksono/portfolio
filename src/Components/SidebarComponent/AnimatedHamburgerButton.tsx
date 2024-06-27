import React from "react";
import { MotionConfig, motion } from "framer-motion";

interface AnimatedHamburgerButtonProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleSidebar}
        className="fixed top-0 right-0 mt-10 h-20 w-20 rounded-full bg-white/0 transition-colors z-50"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
      backgroundColor: "#ffffff", // white color for X shape
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
      backgroundColor: "#000000",
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      backgroundColor: "#ffffff", 
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
      backgroundColor: "#000000", 
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
      backgroundColor: "#ffffff", // white color for X shape
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
      backgroundColor: "#000000", // black color for burger shape
    },
  },
};

export default AnimatedHamburgerButton;
