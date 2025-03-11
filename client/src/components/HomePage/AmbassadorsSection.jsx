import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AmbassadorsSection = () => {
  // Ambassadors data with multiple images
  const ambassadors = [
    {
      id: 1,
      name: 'Michael Jordan',
      role: 'Basketball Legend',
      images: [
        'https://via.placeholder.com/800x600?text=Michael+Jordan+1',
        'https://via.placeholder.com/800x600?text=Michael+Jordan+2',
        'https://via.placeholder.com/800x600?text=Michael+Jordan+3',
      ],
    },
    {
      id: 2,
      name: 'Serena Williams',
      role: 'Tennis Champion',
      images: [
        'https://via.placeholder.com/800x600?text=Serena+Williams+1',
        'https://via.placeholder.com/800x600?text=Serena+Williams+2',
        'https://via.placeholder.com/800x600?text=Serena+Williams+3',
      ],
    },
    {
      id: 3,
      name: 'LeBron James',
      role: 'NBA Superstar',
      images: [
        'https://via.placeholder.com/800x600?text=LeBron+James+1',
        'https://via.placeholder.com/800x600?text=LeBron+James+2',
        'https://via.placeholder.com/800x600?text=LeBron+James+3',
      ],
    },
    {
      id: 4,
      name: 'Naomi Osaka',
      role: 'Tennis Prodigy',
      images: [
        'https://via.placeholder.com/800x600?text=Naomi+Osaka+1',
        'https://via.placeholder.com/800x600?text=Naomi+Osaka+2',
        'https://via.placeholder.com/800x600?text=Naomi+Osaka+3',
      ],
    },
  ];

  // State to track the current ambassador and image index
  const [currentAmbassador, setCurrentAmbassador] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle ambassador navigation
  const handleAmbassadorChange = (index) => {
    setCurrentAmbassador(index);
    setCurrentImageIndex(0); // Reset image index when switching ambassadors
  };

  // Function to handle image navigation
  const handleImageChange = (direction) => {
    const totalImages = ambassadors[currentAmbassador].images.length;
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    }
  };

  return (
    <motion.section
      className="py-20 w-screen bg-white text-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Brand Ambassadors
        </motion.h2>
        <motion.p
          className="text-black max-w-2xl mx-auto mb-12 text-center text-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          These athletes and celebrities represent the power of Jordan. Their influence inspires greatness both on and off the court.
        </motion.p>

        {/* Ambassador Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {ambassadors.map((ambassador, index) => (
            <motion.div
              key={ambassador.id}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                currentAmbassador === index
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black border border-black hover:bg-gray-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              onClick={() => handleAmbassadorChange(index)}
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {ambassador.name}
                </h3>
                <p className="">{ambassador.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ambassador Slideshow */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Image Slideshow */}
          <div className="w-full h-[500px] overflow-hidden rounded-lg relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={ambassadors[currentAmbassador].images[currentImageIndex]}
                alt={`${ambassadors[currentAmbassador].name} ${currentImageIndex + 1}`}
                className="absolute w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>

          {/* Image Navigation Buttons */}
          <button
            onClick={() => handleImageChange('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-black hover:bg-gray-100 transition-all duration-300 border border-black"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleImageChange('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-black hover:bg-gray-100 transition-all duration-300 border border-black"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Ambassador Details */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold">
            {ambassadors[currentAmbassador].name}
          </h3>
          <p className="text-black text-lg mt-2">
            {ambassadors[currentAmbassador].role}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AmbassadorsSection;
