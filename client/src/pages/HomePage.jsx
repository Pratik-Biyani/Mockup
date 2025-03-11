import React from 'react';
import { useTheme } from '../context/themeContext';
import HeroSection from '../components/HomePage/HeroSection';
import QualitySection from '../components/HomePage/QualitySection';
import AmbassadorsSection from '../components/HomePage/AmbassadorsSection';
import ModelSection from '../components/HomePage/ModelSection';
import VideoSection from '../components/HomePage/VideoSection';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import CallToActionSection from '../components/HomePage/CallToActionSection';
import Navbar from '../components/Navbar';  // assuming Navbar component exists
import Footer from '../components/Footer';  // assuming Footer component exists
import { motion } from 'framer-motion'; // Import Framer Motion
import GIF from '../components/HomePage/GIF';
import jordangif from '../assets/GIF/jordan.gif';
import ProductSection from '../components/HomePage/productsection';



const HomePage = () => {
  const { isDarkMode } = useTheme();

  const sentences = [
    { badge: "Nike Air Jordans", header: "Iconic Sneakers for Legends" },
    { badge: "Premium Quality", header: "Crafted for Performance" },
    { badge: "Style Meets Comfort", header: "Comfort and Fashion in One" },
  ];

  // Animation variants for sliding in from the left
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
    <GIF gifSrc={jordangif} />
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <HeroSection sentences={sentences} />
        </motion.div>

        {/* Quality Section */}
        <motion.div

          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <ProductSection />
        </motion.div>

        

        {/* Model Section */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <ModelSection />
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <VideoSection />
        </motion.div>

        {/* Ambassadors Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <AmbassadorsSection />
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <TestimonialsSection />
        </motion.div>


      </div>
      <Footer />
    </div>
    </>
  );
};

export default HomePage;