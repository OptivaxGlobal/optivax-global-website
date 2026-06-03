import React from "react";
import { motion } from "framer-motion";

const imageUrl =
  "https://horizons-cdn.hostinger.com/c43e6596-ab28-43b9-ad53-b1a7341229e7/71f6723b117af5fb7e36d829dfcd6b7f.jpg";

const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
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
          src={imageUrl}
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

export default AnimatedHeroBackground;