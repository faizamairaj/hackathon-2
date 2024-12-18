// src/app/shop/page.tsx
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

const ShopIcons = dynamic(() => import("@/components/ShopIcons"), {
  loading: () => <LoadingSpinner />
});

const CategoryShowcase = dynamic(() => import("@/components/CategoryShowcase"), {
  loading: () => <LoadingSpinner />
});

const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"), {
  loading: () => <LoadingSpinner />
});

const NewsletterSignup = dynamic(() => import("@/components/NewsletterSignup"), {
  loading: () => <LoadingSpinner />
});

export default function ShopHomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (newFilteredProducts: any[]) => {
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <ShopHero />
        <div className="container mx-auto">
          <div className="section-spacing" />
          <ShopBlowHero 
            onFilterChange={handleFilterChange} 
            totalProducts={products.length} 
          />
          <div className="section-spacing" />
          <Products products={filteredProducts} />
          <div className="section-spacing" />
          <CategoryShowcase />
          <div className="section-spacing" />
          <ShopIcons />
          <div className="section-spacing" />
          <TestimonialCarousel />
          <div className="section-spacing" />
          <NewsletterSignup />
        </div>
      </Suspense>
    </div>
  );
}