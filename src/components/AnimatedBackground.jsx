import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/Animated-background/BACKGROUND IMAGE.webp";

const commonLayerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: "brightness(0.45) contrast(1.1)",
};

const variants = {
  hero: {
    type: "hero",
  },

  cta: {
    layers: [
      {
        initial: { x: "-5%", y: "5%", scale: 1.15 },
        animate: { x: "5%", y: "-5%" },
        transition: { duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.7,
      },
      {
        initial: { x: "5%", y: "-5%", scale: 1.25 },
        animate: { x: "-5%", y: "5%" },
        transition: { duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.5,
      },
      {
        initial: { x: "2%", y: "-8%", scale: 1.1 },
        animate: { x: "-2%", y: "8%" },
        transition: { duration: 35, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 1,
      },
    ],
  },

  contact: {
    layers: [
      {
        initial: { x: "-5%", y: "5%", scale: 1.12 },
        animate: { x: "5%", y: "-5%" },
        transition: { duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.72,
      },
      {
        initial: { x: "5%", y: "-5%", scale: 1.2 },
        animate: { x: "-5%", y: "5%" },
        transition: { duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.52,
      },
      {
        initial: { x: "0%", y: "10%", scale: 1.06 },
        animate: { x: "0%", y: "-10%" },
        transition: { duration: 36, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.9,
      },
    ],
  },

  websiteDesign: {
    layers: [
      {
        initial: { x: "-4%", y: "-4%", scale: 1.04 },
        animate: { x: "4%", y: "4%" },
        transition: { duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.9,
      },
      {
        initial: { x: "4%", y: "4%", scale: 1.08 },
        animate: { x: "-4%", y: "-4%" },
        transition: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.7,
      },
      {
        initial: { x: "0%", y: "7%", scale: 1.03 },
        animate: { x: "0%", y: "-7%" },
        transition: { duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 1,
      },
    ],
  },

  about: {
    layers: [
      {
        initial: { x: "-4%", y: "-4%", scale: 1.08 },
        animate: { x: "4%", y: "4%" },
        transition: { duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.75,
      },
      {
        initial: { x: "5%", y: "-5%", scale: 1.16 },
        animate: { x: "-5%", y: "5%" },
        transition: { duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.55,
      },
      {
        initial: { x: "0%", y: "8%", scale: 1.04 },
        animate: { x: "0%", y: "-8%" },
        transition: { duration: 36, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        opacity: 0.95,
      },
    ],
  },
};

const AnimatedBackground = ({ variant = "hero", overlay = true }) => {
  const config = variants[variant] || variants.hero;

  if (config.type === "hero") {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
  }

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
      {config.layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute -inset-[10%]"
          initial={layer.initial}
          animate={layer.animate}
          transition={layer.transition}
          style={{
            ...commonLayerStyle,
            opacity: layer.opacity,
          }}
        />
      ))}

      {overlay && (
        <>
          <div className="absolute inset-0 bg-[#020B16]/82"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_32%)]"></div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/25 via-[#031C33]/65 to-[#020B16]"></div>
        </>
      )}
    </div>
  );
};

export default AnimatedBackground;