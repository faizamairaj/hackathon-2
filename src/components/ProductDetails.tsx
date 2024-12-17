// src/components/ProductDetails.tsx
"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, Scale, Star, Share2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";

type ProductDetailsProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  salePercentage?: number;
  imageUrl: string;
  colors: string[];
  ratings: number;
  stock?: number;
  category?: string;
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  additionalImages?: string[];
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  id,
  name,
  description,
  price,
  salePrice,
  salePercentage,
  imageUrl,
  colors,
  ratings,
  stock = 10,
  category,
  materials,
  dimensions,
  additionalImages
}) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: salePrice || price,
      image: imageUrl,
      quantity: quantity
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 space-y-4">
          <div className="relative group">
            <img
              src={selectedImage}
              alt={name}
              className="w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            {salePercentage && (
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                  px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  {salePercentage}% OFF
                </span>
              </div>
            )}
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Thumbnail Images */}
          {additionalImages && additionalImages.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {additionalImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 
                    ${selectedImage === img ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img
                    src={img}
                    alt={`${name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Home</span>
              <span>/</span>
              <span>{category}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < ratings
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({ratings} ratings)</span>
              </div>
              <span className="text-green-600">In Stock ({stock} available)</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

          <div className="border-t border-b py-4">
            <div className="flex items-center justify-between">
              <div>
                {salePrice ? (
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-red-600">
                      {formatPrice.toRupiah(salePrice)}
                    </span>
                    <br />
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice.toRupiah(price)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice.toRupiah(price)}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className={`p-2 rounded-full ${
                    isWishlist
                      ? "bg-red-50 text-red-500"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Heart
                    className={`w-6 h-6 ${isWishlist ? "fill-current" : ""}`}
                  />
                </button>
                <button
                  onClick={() => setIsCompare(!isCompare)}
                  className={`p-2 rounded-full ${
                    isCompare
                      ? "bg-blue-50 text-blue-500"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Scale className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {materials && materials.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {materials.map((material) => (
                  <span
                    key={material}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          )}

          {dimensions && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Width:</span> {dimensions.width}cm
                </div>
                <div>
                  <span className="font-medium">Height:</span> {dimensions.height}cm
                </div>
                <div>
                  <span className="font-medium">Depth:</span> {dimensions.depth}cm
                </div>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">Select Color</h3>
            <div className="flex mt-2 space-x-3">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quantity</h3>
            <div className="flex items-center mt-2">
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-l-lg transition-colors"
              >
                -
              </button>
              <span className="px-6 py-2 border-y bg-white">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(q + 1, stock))}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-r-lg transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;