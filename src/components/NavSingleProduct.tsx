// src/components/NavSingleProduct.tsx

import React from 'react';

const NavSingleProduct = () => {
  return (
    <div className="w-[1440px] h-[100px] bg-[#F9F1E7] flex items-center justify-between px-10 shadow-md">
      <div className="flex items-center text-lg font-semibold text-gray-700">
        <span className="text-gray-500">Home</span>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Shop</span>
        <span className="mx-2">/</span>
        <span className="text-black">AsgardSofa</span>
      </div>

      <div className="text-right">
        <button className="bg-[#B88E2F] text-white py-2 px-6 rounded-md text-lg hover:bg-[#B88E2F]/80 transition duration-300">
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default NavSingleProduct;
