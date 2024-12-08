import Image from 'next/image';
import Filter from '@/Pictures/filter.png';

export default function BlowHero() {
  return (
    <div className="showBlowBar w-full h-16 bg-[#F9F1E7] flex justify-between items-center px-4">
      <div className="flex items-center">
        <Image src={Filter} alt="Filter" width={20} height={20} />
        <p className="ml-2">Filter</p>
        <p className="ml-4">Showing 1-16 of 32 results</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Show</p>
        <input
          type="text"
          placeholder="16"
          className="w-8 h-8 bg-black text-white text-center"
        />
        <p className="mr-2">Sort by</p>
        <select className="bg-black text-white text-center">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}