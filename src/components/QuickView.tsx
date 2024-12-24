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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <div>
              {product.salePrice && product.salePrice < product.price ? (
                <>
                  <span className="text-red-600 font-bold">
                    {formatPrice.toRupiah(product.salePrice)}
                  </span>
                  <span className="text-gray-400 text-sm line-through ml-2">
                    {formatPrice.toRupiah(product.price)}
                  </span>
                </>
              ) : (
                <span className="font-bold">
                  {formatPrice.toRupiah(product.price)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
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
  );
} 