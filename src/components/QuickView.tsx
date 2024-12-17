"use client";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { formatPrice } from "@/utils/formatPrice";

interface QuickViewProps {
  product: {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    salePercentage?: number;
    image: string;
    description: string;
  };
  onClose: () => void;
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const finalPrice = product.salePrice || product.price;
    addToCart({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
      quantity: quantity
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
            {product.salePercentage && (
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                  px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  {product.salePercentage}% OFF
                </span>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              {product.salePrice ? (
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-red-600">
                    {formatPrice.toRupiah(product.salePrice)}
                  </p>
                  <p className="text-lg text-gray-500 line-through">
                    {formatPrice.toRupiah(product.price)}
                  </p>
                </div>
              ) : (
                <p className="text-2xl font-bold text-[#B88E2F]">
                  {formatPrice.toRupiah(product.price)}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 