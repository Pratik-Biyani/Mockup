import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper function to split text into letters and animate them
const AnimatedText = ({ text, delay }) => {
  const letters = text.split('');

  return (
    <motion.div className="flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + index * 0.1, // Staggered delay for each letter
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const GIF = ({ gifSrc, duration = 4000, onEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

 

  // Hide the GIF after the specified duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the GIF
      if (onEnd) onEnd(); // Call the onEnd callback if provided
    }, duration);

    // Show the text after a short delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500); // Delay before text animation starts

    // Clean up the timers
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, [duration, onEnd]);

  if (!isVisible) return null; // Return null if the GIF is not visible

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
      <img
        src={gifSrc}
        alt="Loading..."
        className="w-full h-full object-cover"
      />

      {/* Animated Text Drop */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animate "JORDANS" */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <AnimatedText text="JORDANS" delay={0.5} />
            </motion.h1>

            {/* Animate "by NIKE" */}
            <motion.p
              className="text-2xl md:text-4xl text-gray-300 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <AnimatedText text="by NIKE" delay={1} />
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GIF;