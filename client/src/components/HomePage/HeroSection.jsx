import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import jordangif from '../../assets/GIF/jordan.gif';

// Import your images for the background slideshow
import bg1 from '../../assets/Shoes/Kids/img1.png';
import bg2 from '../../assets/Shoes/Kids/img2.png';
import bg3 from '../../assets/Shoes/Kids/img3.png';
import bg4 from '../../assets/Shoes/Kids/img4.png';
import bg5 from '../../assets/Shoes/Kids/img5.png';
import bg6 from '../../assets/Shoes/Kids/img6.png';
import bg7 from '../../assets/Shoes/Kids/img7.png';


const HeroSection = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Background images array
  const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

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
    }, 5000);
    return () => clearInterval(sentenceInterval);
  }, [sentences.length]);

  return (
    <motion.section
      className="h-screen w-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Dark overlay */}
      <div className="hero-content space-y-8 w-full z-10">
        <motion.div
          className="inline-block bg-black/20 px-6 py-2 rounded-full text-white text-xl font-semibold "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          {sentences[currentSentenceIndex]?.badge}
        </motion.div>
        
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 max-w-xl mx-auto text-shadow-xl "
          style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {sentences[currentSentenceIndex]?.header}
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mx-auto opacity-90 mb-6 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {sentences[currentSentenceIndex]?.description || 'Discover the legacy of Jordan Sneakers, combining high-quality craftsmanship and unmatched style.'}
        </motion.p>

        <div className="flex gap-8 justify-center mt-8">
          <motion.div
            className="btn-primary bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-full shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/shop">Shop Now</Link>
          </motion.div>
          <motion.div
            className="btn-secondary bg-white text-black border-2 border-black hover:bg-gray-100 px-10 py-4 rounded-full shadow-xl text-lg"
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
