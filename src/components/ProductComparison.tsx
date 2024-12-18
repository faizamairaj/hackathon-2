"use client";
import { useCompare } from "@/context/CompareContext";
import Image from "next/image";
import { X, Star, Check, AlertCircle } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";

export default function ProductComparison() {
  const { items, removeFromCompare, clearCompare } = useCompare();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No products to compare</h3>
        <p className="text-gray-500">Add some products to start comparing</p>
      </div>
    );
  }

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Comparison</h2>
        <button
          onClick={clearCompare}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left w-1/4">Features</th>
              {items.map((product) => (
                <th key={product.id} className="p-4 text-left w-1/4 relative">
                  <button
                    onClick={() => removeFromCompare(product)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Image Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Image</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </td>
              ))}
            </tr>

            {/* Name Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Name</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </td>
              ))}
            </tr>

            {/* Price Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Price</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <div className="space-y-1">
                    {product.salePrice ? (
                      <>
                        <p className="text-lg font-bold text-red-600">
                          {formatPrice.toRupiah(product.salePrice)}
                        </p>
                        <p className="text-sm text-gray-500 line-through">
                          {formatPrice.toRupiah(product.price)}
                        </p>
                        <p className="text-sm text-green-600">
                          Save {product.salePercentage}%
                        </p>
                      </>
                    ) : (
                      <p className="text-lg font-bold text-[#B88E2F]">
                        {formatPrice.toRupiah(product.price)}
                      </p>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {/* Category Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Category</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {product.features.category}
                  </span>
                </td>
              ))}
            </tr>

            {/* Brand Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Brand</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <span className="font-medium text-[#B88E2F]">
                    {product.features.brand}
                  </span>
                </td>
              ))}
            </tr>

            {/* Rating Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Rating</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {renderRating(product.features.rating)}
                  <p className="text-sm text-gray-500 mt-1">
                    {product.features.reviewCount} reviews
                  </p>
                </td>
              ))}
            </tr>

            {/* Stock Status Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Stock Status</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.features.specifications.inStock ? (
                    <div className="flex items-center text-green-600">
                      <Check size={16} className="mr-1" />
                      In Stock
                      {product.features.specifications.stockCount && (
                        <span className="ml-1 text-sm text-gray-500">
                          ({product.features.specifications.stockCount} units)
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <AlertCircle size={16} className="mr-1" />
                      Out of Stock
                    </div>
                  )}
                </td>
              ))}
            </tr>

            {/* Specifications Section */}
            <tr className="bg-gray-50">
              <td colSpan={items.length + 1} className="p-4 font-bold">
                Specifications
              </td>
            </tr>

            {/* Dimensions Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Dimensions</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.features.specifications.dimensions}
                </td>
              ))}
            </tr>

            {/* Weight Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Weight</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.features.specifications.weight}
                </td>
              ))}
            </tr>

            {/* Material Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Material</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.features.specifications.material}
                </td>
              ))}
            </tr>

            {/* Colors Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Available Colors</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {product.availableColors?.map((color) => (
                      <span
                        key={color}
                        className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Sizes Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Available Sizes</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes?.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Warranty Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Warranty</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.features.specifications.warranty}
                </td>
              ))}
            </tr>

            {/* Shipping Section */}
            <tr className="bg-gray-50">
              <td colSpan={items.length + 1} className="p-4 font-bold">
                Shipping Information
              </td>
            </tr>

            {/* Shipping Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Shipping</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <div>
                    {product.shippingInfo.freeShipping ? (
                      <span className="text-green-600 font-medium">Free Shipping</span>
                    ) : (
                      <span>{formatPrice.toRupiah(product.shippingInfo.shippingCost || 0)}</span>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Estimated delivery: {product.shippingInfo.estimatedDays} days
                    </p>
                  </div>
                </td>
              ))}
            </tr>

            {/* Key Features Section */}
            <tr className="bg-gray-50">
              <td colSpan={items.length + 1} className="p-4 font-bold">
                Key Features
              </td>
            </tr>

            {/* Highlights Row */}
            <tr>
              <td className="p-4 font-medium">Highlights</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 