"use client";

import ProductGrid from "./ProductGrid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProductsProps {
  products?: any[];
}

export default function Products({ products }: ProductsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

  const defaultProducts = [
    {
      id: "1",
      name: "Syltherine",
      price: 2500000,
      salePrice: 2000000,
      salePercentage: 20,
      image: "/Hero.png",
      description: "Stylish cafe chair",
    },
    {
      id: "2",
      name: "Jane Smith",
      price: 2500000,
      salePrice: 1250000,
      salePercentage: 50,
      image: "/images.png",
      description: "A creative designer's masterpiece.",
    },
    {
      id: "3",
      name: "Sam Wilson",
      price: 2500000,
      salePrice: 1250000,
      salePercentage: 50,
      image: "/images.png",
      description: "A creative designer's masterpiece.",
    },
  ];

  const displayProducts = products || defaultProducts;

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProductGrid data={displayProducts} />
      </motion.div>

      {/* No Results Message */}
      {displayProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 text-lg">
            No products match your current filters. Try adjusting your search criteria.
          </p>
        </motion.div>
      )}

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