import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <motion.section className="py-20 w-screen bg-blue-600 text-center text-white">
      <div className="cta-content max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Game?</h2>
        <p className="text-gray-400 mb-6">Get your pair of Jordans today and experience the perfect balance of style, performance, and comfort.</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-primary bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg"
        >
          <Link to="/shop">Shop Now</Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;
