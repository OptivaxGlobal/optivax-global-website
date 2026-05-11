import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        x: x - 8,
        y: y - 8,
      }}
      transition={{
        duration: 0,
      }}
      className="fixed top-0 left-0 h-4 w-4 bg-[#1699F1] shadow-[0_0_18px_rgba(22,153,241,0.75)] rounded-full pointer-events-none z-[9999]"
    />
  );
};

export default CustomCursor;