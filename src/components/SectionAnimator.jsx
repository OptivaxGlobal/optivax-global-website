import React from "react";
import { motion } from "framer-motion";

const SectionAnimator = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimator;