"use client";
import { Heart, Share2, Scale, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";
import QuickView from "./QuickView";
import { formatPrice } from "@/utils/formatPrice";
import Image from 'next/image';
import { Product, ProductCardProps } from "@/types/product";

const actionButtonClasses = `
  inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
  transition-all duration-300 transform hover:scale-105
  hover:shadow-lg active:scale-95 backdrop-blur-sm
`;

export default function ProductCard({
  id,
  name,
  description,
  image,
  price,
  salePrice,
  salePercentage,
  viewMode = 'grid'
}: ProductCardProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { items, addToCompare, removeFromCompare } = useCompare();
  const [showQuickView, setShowQuickView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const product = {
    id,
    name,
    description,
    image,
    images: [image],
    price: salePrice || price,
    originalPrice: price,
    salePrice,
    salePercentage,
    features: {
      highlights: [
        `Premium ${name} with exceptional quality`,
        'Handcrafted with attention to detail',
        'Perfect for modern living spaces',
        'Sustainable materials'
      ],
      specifications: {
        dimensions: '60cm x 80cm x 55cm',
        weight: '25 kg',
        material: 'Premium Wood, Metal Accents',
        color: ['Natural', 'Walnut', 'Oak'],
        warranty: '2 Years Limited Warranty',
        inStock: true,
        stockCount: Math.floor(Math.random() * 50) + 10
      },
      rating: 4.5,
      reviewCount: Math.floor(Math.random() * 100) + 50,
      category: 'Furniture',
      tags: ['modern', 'furniture', 'premium'],
      brand: 'Luxura Living',
      sku: `SKU-${id}`,
      manufacturingDate: new Date().toISOString().split('T')[0]
    },
    isNew: Math.random() > 0.7,
    isBestSeller: Math.random() > 0.8,
    availableSizes: ['Standard', 'Large'],
    availableColors: ['Natural', 'Walnut', 'Oak'],
    shippingInfo: {
      freeShipping: price > 1000000,
      estimatedDays: 3,
      shippingCost: price > 1000000 ? 0 : 50000
    }
  };

  const handleCardClick = () => {
    router.push(`/shop/${id}`);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: name,
          text: description,
          url: window.location.href + '/' + id
        });
      } else {
        await navigator.clipboard.writeText(window.location.href + '/' + id);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (!mounted) {
    return (
      <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      </div>
    );
  }

  const isLiked = isInWishlist(id);
  const isComparing = items.some(item => item.id === id);

  const toggleCompare = (product: Product) => {
    if (isComparing) {
      removeFromCompare(product);
    } else {
      addToCompare(product);
    }
  };

  const isInCompare = items.some(item => item.id === id);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInCompare) {
      removeFromCompare(product);
    } else if (items.length >= 4) {
      alert('You can only compare up to 4 products at a time');
    } else {
      addToCompare(product);
      const shouldNavigate = confirm('Product added to comparison. Would you like to view the comparison?');
      if (shouldNavigate) {
        router.push('/compare');
      }
    }
  };

  return (
    <>
      <div
        className={`
          relative group bg-white rounded-2xl overflow-hidden
          transition-all duration-500 ease-out transform hover:-translate-y-1
          hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100
          ${viewMode === 'grid' ? '' : 'flex gap-6'}
          backdrop-blur-sm cursor-pointer
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative overflow-hidden ${viewMode === 'grid' ? 'w-full' : 'w-1/3'}`}
          onClick={handleCardClick}
        >
          <div className="relative w-full h-64 transform transition-transform duration-700 group-hover:scale-105">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-t-2xl transition-all duration-700 group-hover:filter group-hover:brightness-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Sale Badge */}
          {salePercentage && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                {salePercentage}% OFF
              </span>
            </div>
          )}

          {/* Quick View Button */}
          {isHovered && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickView(true);
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform
                bg-white/90 text-gray-800 px-4 py-2 rounded-full
                flex items-center gap-2 transition-all duration-300
                hover:bg-black hover:text-white hover:scale-105
                shadow-lg backdrop-blur-sm"
            >
              <Eye size={14} />
              <span className="text-sm font-medium">Quick View</span>
            </button>
          )}
        </div>

        <div className={`p-4 ${viewMode === 'grid' ? '' : 'flex-1'}`}>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h5 className="text-lg font-bold text-gray-800 group-hover:text-[#B88E2F] transition-colors duration-300">
                {name}
              </h5>
              <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-600 transition-colors duration-300">
                {description}
              </p>
            </div>
            <div className="text-right">
              {salePrice ? (
                <>
                  <span className="text-lg font-bold text-red-600">
                    {formatPrice.toRupiah(salePrice)}
                  </span>
                  <br />
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice.toRupiah(price)}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-[#B88E2F]">
                  {formatPrice.toRupiah(price)}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          {isHovered && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQuickView(true);
                }}
                className={`${actionButtonClasses}
                  bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white`}
              >
                <Eye size={12} strokeWidth={2.5} />
                <span className="hidden sm:inline">Quick</span>
              </button>

              <button
                onClick={handleCompareClick}
                className={`${actionButtonClasses}
                  ${isComparing 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              >
                <Scale size={12} strokeWidth={2.5} />
                <span className="hidden sm:inline">Compare</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
                className={`${actionButtonClasses}
                  ${isLiked 
                    ? 'bg-red-600 text-white scale-105' 
                    : 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white'}`}
              >
                <Heart 
                  size={12} 
                  strokeWidth={2.5}
                  className={`transition-transform duration-300 ${isLiked ? 'fill-current scale-110' : ''}`} 
                />
                <span className="hidden sm:inline">Save</span>
              </button>

              <button
                onClick={handleShare}
                className={`${actionButtonClasses}
                  bg-green-50 text-green-600 hover:bg-green-600 hover:text-white`}
              >
                <Share2 size={12} strokeWidth={2.5} />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 border-2 border-[#B88E2F] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {showQuickView && (
        <QuickView 
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  );
}