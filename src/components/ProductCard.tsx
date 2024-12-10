"use client";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function ProductCard({
  name,
  description,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="relative group bg-white border shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h5 className="text-lg font-bold">{name}</h5>
        <p className="text-sm text-gray-500">{description}</p>
        <h5 className="text-lg font-bold text-[#B88E2F]">{price}</h5>
      </div>
      {/* Hover Options */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#B88E2F] hover:text-white">
          Add to Cart
        </button>
        <div className="flex gap-4">
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-[#B88E2F] hover:text-white">
            Compare
          </button>
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-[#B88E2F] hover:text-white">
            ♥
          </button>
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-[#B88E2F] hover:text-white">
            ⤴
          </button>
        </div>
      </div>
    </div>
  );
}