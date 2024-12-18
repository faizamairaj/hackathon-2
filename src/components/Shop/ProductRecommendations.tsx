"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { formatPrice } from "@/utils/formatPrice";

interface RecommendationProps {
  currentProductId?: string;
  category?: string;
  maxItems?: number;
}

export default function ProductRecommendations({ 
  currentProductId, 
  category, 
  maxItems = 4 
}: RecommendationProps) {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState(products);

  useEffect(() => {
    // Filter and sort recommendations based on current product and category
    let filtered = products.filter(p => p.id !== currentProductId);
    
    if (category) {
      filtered = filtered.filter(p => p.features.category === category);
    }

    // Sort by rating and limit
    filtered = filtered
      .sort((a, b) => (b.features.rating || 0) - (a.features.rating || 0))
      .slice(0, maxItems);

    setRecommendations(filtered);
  }, [currentProductId, category, maxItems]);

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Recommended For You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your preferences and shopping history
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => router.push(`/shop/${product.id}`)}
          >
            <div className="relative h-[200px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.salePercentage && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  {product.salePercentage}% OFF
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  {product.salePrice ? (
                    <div>
                      <span className="text-red-600 font-bold">
                        {formatPrice.toRupiah(product.salePrice)}
                      </span>
                      <span className="text-gray-400 text-sm line-through ml-2">
                        {formatPrice.toRupiah(product.price)}
                      </span>
                    </div>
                  ) : (
                    <span className="font-bold">
                      {formatPrice.toRupiah(product.price)}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-600">
                    {product.features.rating}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 