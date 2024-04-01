'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HorizontalMovingText = () => {
  const controls = useAnimation();
  const textWidth = useRef(0); // Store the text width

  const animateX = () => {
    controls.start({
      x: textWidth.current * -1, // Move text to the left by its own width
      transition: { duration: 2, ease: 'linear' }, // Constant speed
      onComplete: () => {
        // Ensure cleanup before resetting position
        controls.set({ x: 0 }); // Reset position to the right edge
      },
    });
  };

  useEffect(() => {
    // Measure text width only once on initial render
    const element = document.querySelector('.transform.text-white');
    if (element) {
      textWidth.current = element.scrollWidth;
    }

    animateX(); // Start the animation initially

    // Use a loop for continuous animation
    const intervalId = setInterval(animateX, 2000); // Repeat every 2 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval on cleanup
    };
  }, []);

  return (
    <motion.div
      className="transform text-white"
      style={{
        position: 'absolute',
        color: 'white',
        fontSize: '24px',
        left: 0, // Reset starting position to left edge
      }}
      animate={controls}
    >
      Hello, Framer Motion! Hello, Framer Motion! Hello, Framer Motion!
    </motion.div>
  );
};

export default HorizontalMovingText;
