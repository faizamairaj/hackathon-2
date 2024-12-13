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
    image: string;
    description: string;
  };
  onClose: () => void;
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    onClose();
  };

  const formattedPrice = typeof product.price === 'number' 
    ? formatPrice.toRupiah(product.price)
    : product.price;

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
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">
              {formattedPrice}
            </p>

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