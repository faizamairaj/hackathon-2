"use client";
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import { Loader2 } from "lucide-react";
import { products } from '@/data/products';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="w-8 h-8 animate-spin text-[#B88E2F]" />
  </div>
);

// Dynamic imports with loading states
const ShopHero = dynamic(() => import("@/components/ShopHero"), {
  loading: () => <LoadingSpinner />
});

const ShopBlowHero = dynamic(() => import("@/components/ShopBlowHero"), {
  loading: () => <LoadingSpinner />
});

const Products = dynamic(() => import("@/components/Products"), {
  loading: () => <LoadingSpinner />
});

const SizeGuide = dynamic(() => import("@/components/Shop/SizeGuide"), {
  loading: () => <LoadingSpinner />
});

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (newFilteredProducts: any[]) => {
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <main className="w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="container mx-auto max-w-[1440px] px-4">
          <ShopHero />
          <div className="section-spacing" />
          <ShopBlowHero 
            onFilterChange={handleFilterChange} 
            totalProducts={products.length} 
          />
          <div className="section-spacing" />
          <Products products={filteredProducts} />          
        </div>
      </Suspense>
    </main>
  );
}