import React from 'react';
import { motion } from 'framer-motion';
import nikeVideo from '../../assets/nike.mp4'; // Adjust the path to your video file

const VideoSection = () => {
  return (
    <motion.section
      className="relative w-screen h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        className="w-full h-full object-cover"
>

          <source src={nikeVideo} type="nike/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Watch Our Latest Ad
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-8 text-center text-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          See the Air Jordans in action. Watch the latest commercial to experience the legacy of Jordan sneakers.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            onClick={() => {
              // Add your click handler here
              console.log('Shop Now clicked');
            }}
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;