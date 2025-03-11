import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/Shoes/Kids/img1.png';
import img2 from '../../assets/Shoes/Kids/img2.png';
import img3 from '../../assets/Shoes/Kids/img3.png';
import img4 from '../../assets/Shoes/Kids/img4.png';

const ProductSection = () => {
  // Categories data with images
  const categories = [
    { id: 1, name: 'Shoes', description: 'Find the latest sneakers', image: img1 },
    { id: 2, name: 'Apparel', description: 'Explore stylish clothing', image: img2 },
    { id: 3, name: 'Accessories', description: 'Complete your look with accessories', image: img3 },
    { id: 4, name: 'Bags', description: 'Perfect bags for every occasion', image: img4 },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.4 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className=" ml-10 relative py-24 bg-white text-black w-full">
      <div className="container mx-auto px-4 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-black tracking-tight"
        >
          Product Categories
        </motion.h2>

        {/* Categories List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants} // animation for the category itself
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover="hover"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Category Image */}
              <motion.img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-4xl font-semibold mt-6 mb-3 text-center text-black tracking-wide">
                {category.name}
              </h3>
              <p className="text-xl text-center text-gray-700 mb-6">
                {category.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all"
              >
                Shop Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
