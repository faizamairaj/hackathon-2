// src/components/ProductGrid.tsx
"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  data: Product[];
}

export default function ProductGrid({ data }: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {data.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {visibleCount < data.length && (
        <div className="flex items-center justify-center mb-12">
          <button
            onClick={handleShowMore}
            className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
