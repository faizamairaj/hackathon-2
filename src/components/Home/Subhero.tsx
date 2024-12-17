"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Dining from '@/Pictures/dining.png';
import Living from '@/Pictures/living.png';
import Bedroom from '@/Pictures/bedroom.png';

const categories = [
  { 
    name: 'Dining Room',
    image: Dining,
    delay: 0.2,
    description: 'Elegant dining sets for memorable meals'
  },
  { 
    name: 'Living Room',
    image: Living,
    delay: 0.4,
    description: 'Comfortable spaces for family moments'
  },
  { 
    name: 'Bedroom',
    image: Bedroom,
    delay: 0.6,
    description: 'Peaceful retreats for perfect rest'
  }
];

const SubHero = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient mb-4">
          Browse The Range
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Discover our curated collection of beautiful furniture for every room
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: category.delay,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="relative h-[400px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: category.delay + 0.3 }}
                className="p-6 text-center relative z-10"
              >
                <h3 className="text-2xl font-bold text-[#B88E2F] group-hover:text-[#A07B2A] transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">
                  {category.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-[#B88E2F] mx-auto mt-4 transform origin-left transition-all duration-300 group-hover:w-24" />
              </motion.div>
            </div>

            {/* Hover Effect Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: category.delay + 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm
                px-6 py-2 rounded-full text-[#B88E2F] font-medium
                opacity-0 group-hover:opacity-100 transition-all duration-300
                hover:bg-[#B88E2F] hover:text-white transform hover:scale-105"
            >              
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SubHero;