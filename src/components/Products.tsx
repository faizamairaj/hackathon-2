"use client";

import ProductGrid from "./ProductGrid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

  const data = [
    {
      id: "1",
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/Hero.png",
      description: "Stylish cafe chair",
    },
    {
      id: "2",
      name: "Jane Smith",
      price: "Rp 2.500.000",
      image: "/images.png",
      description: "A creative designer's masterpiece.",
    },
    {
      id: "3",
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      image: "/1.jpg",
      description: "Elegant software engineering product.",
    },
    {
      id: "4",
      name: "Ella Harper",
      price: "Rp 3.000.000",
      image: "/11.jpg",
      description: "Modern and minimalistic furniture piece.",
    },
    {
      id: "5",
      name: "Mason Grey",
      price: "Rp 2.700.000",
      image: "/13.jpg",
      description: "Luxury comfort redefined.",
    },
    {
      id: "6",
      name: "Olivia Brown",
      price: "Rp 2.900.000",
      image: "/19.jpg",
      description: "Contemporary elegance for your living space.",
    },
    {
      id: "7",
      name: "Ethan White",
      price: "Rp 3.200.000",
      image: "/9.jpg",
      description: "Timeless craftsmanship and design.",
    },
    {
      id: "8",
      name: "Sophia Green",
      price: "Rp 2.800.000",
      image: "/5.jpg",
      description: "Durable and stylish furniture solution.",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 
          bg-clip-text text-transparent mb-4">
          Our Products
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
          mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProductGrid data={data} />
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full 
          mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full 
          mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-200 rounded-full 
          mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}