import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const TopScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="bg-lime-400 fixed top-0 left-0 right-0 h-3 transform origin-top-left"
      style={{ scaleX }}
    />
  );
};

export default TopScrollBar;
