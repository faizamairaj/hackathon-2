// src/components/ShopCard.tsx

import React from 'react';

const ShopCard = () => {
  return (
    <div className="w-[1440px] h-[316px] bg-cover bg-center relative" style={{ backgroundImage: 'url(/10.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-center p-6">
        <div>
          <h2 className="text-4xl text-black font-bold mb-2">Shop</h2>
          <p className="text-xl text-gray-500">
            Home &gt; <span className="text-black">Shop</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
