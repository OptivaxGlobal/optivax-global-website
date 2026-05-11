import React from "react";
import { motion } from "framer-motion";

const imageUrl =
  "https://horizons-cdn.hostinger.com/c43e6596-ab28-43b9-ad53-b1a7341229e7/71f6723b117af5fb7e36d829dfcd6b7f.jpg";

const layers = [
  {
    initial: { x: "-4%", y: "-4%", scale: 1.04 },
    animate: { x: "4%", y: "4%" },
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 0.9,
  },
  {
    initial: { x: "4%", y: "4%", scale: 1.08 },
    animate: { x: "-4%", y: "-4%" },
    transition: {
      duration: 25,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 0.7,
  },
  {
    initial: { x: "0%", y: "7%", scale: 1.03 },
    animate: { x: "0%", y: "-7%" },
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    opacity: 1,
  },
];

const AnimatedWebsiteDesignBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
          initial={layer.initial}
          animate={layer.animate}
          transition={layer.transition}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: layer.opacity,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[#020B16]/82"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.24),transparent_34%)]"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/25 via-[#031C33]/65 to-[#020B16]"></div>
    </div>
  );
};

export default AnimatedWebsiteDesignBackground;