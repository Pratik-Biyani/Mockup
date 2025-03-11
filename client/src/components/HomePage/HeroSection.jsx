import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import jordangif from '../../assets/GIF/jordan.gif';

// Import your images or video for the background slideshow
import bg1 from '../../assets/Shoes/Kids/img1.png';
import bg2 from '../../assets/Shoes/Kids/img2.png';
import bg3 from '../../assets/Shoes/Kids/img3.png';
import bg4 from '../../assets/Shoes/Kids/img4.png';

const HeroSection = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Background images array
  const backgroundImages = [bg1, bg2, bg3, bg4];

  // Change background every 5 seconds
  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(backgroundInterval);
  }, [backgroundImages.length]);

  // Change sentence every 3 seconds
  useEffect(() => {
    const sentenceInterval = setInterval(() => {
      setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(sentenceInterval);
  }, [sentences.length]);

  return (
    <motion.section
      className="h-screen w-screen flex flex-col items-center justify-center text-center text-white rounded-lg shadow-lg bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content space-y-6 w-full">
        <div className="relative">
          {sentences.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ${
                index === currentSentenceIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <motion.div
                className="inline-block bg-blue-600/70 px-4 py-1 rounded-full text-white text-sm font-medium"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              >
                {item.badge}
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {item.header}
              </motion.h1>
            </div>
          ))}
        </div>
        <motion.p
          className="text-lg max-w-2xl mx-auto opacity-90 mb-6 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Discover the legacy of Jordan Sneakers, combining high-quality craftsmanship and unmatched style.
        </motion.p>
        <div className="flex gap-8 justify-center mt-6">
          <motion.div
            className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/shop">Shop Now</Link>
          </motion.div>
          <motion.div
            className="btn-secondary bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">Learn More</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;