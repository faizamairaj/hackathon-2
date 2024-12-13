// src/app/shop/page.tsx
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Loader2 } from "lucide-react";

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

export default function ShopHomePage() {
  return (
    <div className="w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <ShopHero />
        <div className="container mx-auto">
          <div className="section-spacing" />
          <ShopBlowHero />
          <div className="section-spacing" />
          <Products />
          <div className="section-spacing" />
          <ShopIcons />
        </div>
      </Suspense>
    </div>
  );
}