import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  // Mock data with product images and testimonials
  const testimonials = [
    {
      id: 1,
      text: '"The comfort and performance of these shoes are unmatched! I wear them for every game."',
      user: {
        name: 'John Doe',
        role: 'Professional Athlete',
        avatar: 'https://via.placeholder.com/100x100?text=User+1',
      },
      product: {
        name: 'Air Jordan 1 Retro High',
        image: 'https://via.placeholder.com/400x400?text=Air+Jordan+1',
        price: '$180',
      },
    },
    {
      id: 2,
      text: '"These shoes are a perfect blend of style and comfort. Highly recommended!"',
      user: {
        name: 'Jane Smith',
        role: 'Fitness Enthusiast',
        avatar: 'https://via.placeholder.com/100x100?text=User+2',
      },
      product: {
        name: 'Air Jordan 4 Retro',
        image: 'https://via.placeholder.com/400x400?text=Air+Jordan+4',
        price: '$200',
      },
    },
    {
      id: 3,
      text: '"I\'ve never felt more confident on the court. These shoes are a game-changer!"',
      user: {
        name: 'Mike Johnson',
        role: 'Basketball Player',
        avatar: 'https://via.placeholder.com/100x100?text=User+3',
      },
      product: {
        name: 'Air Jordan 11 Retro',
        image: 'https://via.placeholder.com/400x400?text=Air+Jordan+11',
        price: '$220',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 w-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Hear from those who wear the iconic Jordan sneakers every day. Their stories will inspire you to elevate your game.
      </p>
      <div className="relative h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 gap-12"
          >
            {/* Product Image */}
            <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={testimonials[currentIndex].product.image}
                alt={testimonials[currentIndex].product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Testimonial and User Details */}
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {testimonials[currentIndex].product.name}
              </h3>
              <p className="text-gray-600 italic text-lg mb-6">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4">
                  <img
                    src={testimonials[currentIndex].user.avatar}
                    alt={testimonials[currentIndex].user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].user.name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].user.role}</p>
                </div>
              </div>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300">
                Shop Now — {testimonials[currentIndex].product.price}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-2 transition-colors duration-300 ${
              currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;