import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  return (
    <motion.section className="py-20 w-screen bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">What Our Customers Say</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Hear from those who wear the iconic Jordan sneakers every day. Their stories will inspire you to elevate your game.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <motion.div key={index} className="card bg-white p-6 shadow-xl rounded-lg hover:shadow-2xl">
            <p className="text-gray-300 mb-6">"The comfort and performance of these shoes are unmatched! I wear them for every game."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4">
                <img src={`https://via.placeholder.com/100x100?text=User+${index}`} alt={`User ${index}`} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-sm text-gray-400">Professional Athlete</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
