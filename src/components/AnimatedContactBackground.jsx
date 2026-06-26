import React from "react";
import { motion } from "framer-motion";
// import backgroundImage from "../assets/Animated-background/BACKGROUND IMAGE.webp";
import backgroundImage from "@/assets/independence-day/independence-hero-bg.webp";

const AnimatedContactBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1.05, 1.15, 1.05],
          x: ["0%", "2%", "0%"],
          y: ["0%", "-2%", "0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.45) contrast(1.1)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedContactBackground;