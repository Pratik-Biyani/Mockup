import React from 'react';
import { motion } from 'framer-motion';

const ModelSection = () => {
  return (
    <motion.section
      className="py-20 w-screen bg-gradient-to-b from-gray-50 to-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore in 3D
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Interact with our sneakers in 3D for an up-close look at every detail.
        </motion.p>

        <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-2 gap-8">
          {/* Spline 3D Model */}
          <motion.div
            className="card bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://my.spline.design/nikesbdunks-99abf234bd2d0e181be6f7c02c3e044f/"
              title="Spline 3D Model"
              style={{ width: '100%', height: '400px', border: 'none', borderRadius: '12px' }}
              allowFullScreen
            />
            <h3 className="text-2xl font-bold text-gray-900 mt-6">Nike SB Dunks</h3>
            <p className="text-gray-500 mt-2">Explore this sneaker in 3D.</p>
          </motion.div>

          {/* 3D Model 2 */}
          <motion.div
            className="card bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://my.spline.design/untitled-4c155e669c3ac06a8e7ef77671b8967e/"
              title="Spline 3D Model"
              style={{ width: '100%', height: '400px', border: 'none', borderRadius: '12px' }}
              allowFullScreen
            />
            <h3 className="text-2xl font-bold text-gray-900 mt-6">Nike Jordans</h3>
            <p className="text-gray-500 mt-2">Explore this sneaker in 3D.</p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ModelSection;