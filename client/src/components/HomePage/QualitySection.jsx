import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaCheckCircle, FaRocket } from 'react-icons/fa';

const QualitySection = () => {
  // Features data
  const features = [
    {
      icon: <FaStar className="text-blue-500" size={32} />,
      title: 'Premium Materials',
      description: 'Crafted with the finest materials for unmatched durability and comfort.',
    },
    {
      icon: <FaHeart className="text-pink-500" size={32} />,
      title: 'Designed for Comfort',
      description: 'Ergonomic design ensures all-day comfort and support.',
    },
    {
      icon: <FaCheckCircle className="text-green-500" size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing to guarantee top-notch quality.',
    },
    {
      icon: <FaRocket className="text-purple-500" size={32} />,
      title: 'Innovative Technology',
      description: 'Cutting-edge technology for superior performance.',
    },
  ];

  return (
    <motion.section
      className="py-20 w-screen bg-gradient-to-b from-gray-50 to-white text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Unmatched Quality
        </motion.h2>
        <motion.p
          className="text-gray-500 max-w-3xl mx-auto mb-12 text-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Our sneakers are crafted with precision and premium materials to ensure durability, comfort, and style.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white rounded-lg flex items-center justify-center mb-6 mx-auto shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default QualitySection;