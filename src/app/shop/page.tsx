// src/app/shop/page.tsx
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic imports with loading states
const ShopCard = dynamic(() => import("@/components/ShopCard"), {
  loading: () => <div>Loading shop card...</div>
});

const ShopBlowHero = dynamic(() => import("@/components/ShopBlowHero"), {
  loading: () => <div>Loading hero section...</div>
});

const Products = dynamic(() => import("@/components/Products"), {
  loading: () => <div>Loading products...</div>
});

const ShopIcons = dynamic(() => import("@/components/ShopIcons"), {
  loading: () => <div>Loading shop icons...</div>
});

export default function ShopHomePage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Suspense fallback={<div>Loading page...</div>}>
        <ShopCard />
        <div className="section-spacing"></div>
        <ShopBlowHero />
        <div className="section-spacing"></div>
        <Products />
        <div className="section-spacing"></div>
        <ShopIcons />
      </Suspense>
    </div>
  );
}