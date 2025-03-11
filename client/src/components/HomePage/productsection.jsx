import React from 'react';
import { motion } from 'framer-motion';


const ProductSection = () => {
  // Categories data with images
  const categories = [
    { id: 1, name: 'Shoes', description: 'Find the latest sneakers', image: ('https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2018/01/Air-Jordan-1-Retro-High-Alternate-Black-Royal.png') },
    { id: 2, name: 'Apparel', description: 'Explore stylish clothing', image: ('https://i5.walmartimages.com/asr/9b4fd699-5a0a-4f56-82c4-9a81b8eebc59_1.20ced8a58efdc710986cad510a5497cc.jpeg')  },
    { id: 3, name: 'Accessories', description: 'Complete your look with accessories', image:('https://images-na.ssl-images-amazon.com/images/I/819R8c%2B7BcL._AC_UL1500_.jpg')  },
    { id: 4, name: 'Bags', description: 'Perfect bags for every occasion', image: ('https://m.media-amazon.com/images/I/61Ckm9FZ+4L._AC_SL1254_.jpg') },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-24 bg-white text-black w-full ml-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-black tracking-tight w-full"
        >
          Product Categories
        </motion.h2>

        {/* Categories List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-16 w-full"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="w-full flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Category Image */}
              <motion.img
                src={category.image}
                alt={category.name}
                className=" h-96 object-cover rounded-lg mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-3xl font-semibold text-center text-black tracking-wide mb-4">
                {category.name}
              </h3>
              <p className="text-lg text-center text-gray-700 mb-6">
                {category.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all"
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
