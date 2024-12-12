"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Filter, ChevronDown } from 'lucide-react';

export default function ShopBlowHero() {
  const [itemsPerPage, setItemsPerPage] = useState('16');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="w-full h-16 bg-[#F9F1E7] flex justify-between items-center px-6">
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filter</span>
        </button>
        <p className="text-gray-600">Showing 1-16 of 32 results</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Show</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
            className="w-16 h-8 bg-white border border-gray-300 rounded px-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort by</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-40 h-8 bg-white border border-gray-300 rounded px-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            >
              <option value="newest">Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="popularity">Popularity</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}