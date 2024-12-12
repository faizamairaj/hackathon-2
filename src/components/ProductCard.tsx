"use client";
import { Heart, Share2, Scale, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";
import QuickView from "./QuickView";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({
  id,
  name,
  description,
  image,
  price,
  viewMode = 'grid'
}: ProductCardProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isInCompare, toggleCompare } = useCompare();
  const [showQuickView, setShowQuickView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-100">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200" />
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  const isLiked = isInWishlist(id);
  const isComparing = isInCompare(id);

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

  const product = {
    id,
    name,
    description,
    image,
    price: formatPrice.parseRupiah(price),
  };

  return (
    <>
      <div
        className={`
          relative group bg-gradient-to-b from-white to-gray-50
          rounded-2xl overflow-hidden transition-all duration-500
          hover:shadow-2xl ${viewMode === 'grid' ? '' : 'flex gap-6'}
          border border-gray-100 backdrop-blur-sm cursor-pointer
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative overflow-hidden ${viewMode === 'grid' ? 'w-full' : 'w-1/3'}`}
          onClick={handleCardClick}
        >
          <img 
            src={image} 
            alt={name} 
            className={`
              w-full h-64 object-cover transition-transform duration-700
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
          
          {/* Sale Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
              px-3 py-1 rounded-full text-sm font-medium
              shadow-lg animate-pulse">
              Sale
            </span>
          </div>

          {/* Quick View Button */}
          {mounted && isHovered && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickView(true);
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2
                bg-white/90 backdrop-blur-sm text-gray-800
                px-4 py-2 rounded-full flex items-center gap-2
                transform transition-all duration-500
                hover:bg-black hover:text-white"
            >
              <Eye size={16} />
              <span>Quick View</span>
            </button>
          )}
        </div>

        <div className={`p-4 ${viewMode === 'grid' ? '' : 'flex-1'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 
                bg-clip-text text-transparent">{name}</h5>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
            <span className="text-lg font-bold text-blue-600">
              {price}
            </span>
          </div>

          {/* Action Buttons */}
          {mounted && isHovered && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQuickView(true);
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full
                  bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white
                  transition-all duration-300"
              >
                <Eye size={16} />
                <span className="hidden sm:inline">Quick View</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCompare(product);
                }}
                className={`
                  flex items-center gap-1 px-3 py-1.5 rounded-full
                  ${isComparing 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'}
                  transition-all duration-300
                `}
              >
                <Scale size={16} />
                <span className="hidden sm:inline">Compare</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
                className={`
                  flex items-center gap-1 px-3 py-1.5 rounded-full
                  ${isLiked 
                    ? 'bg-red-600 text-white' 
                    : 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white'}
                  transition-all duration-300
                `}
              >
                <Heart size={16} className={isLiked ? 'fill-current' : ''} />
                <span className="hidden sm:inline">Wishlist</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full
                  bg-green-50 text-green-600 hover:bg-green-600 hover:text-white
                  transition-all duration-300"
              >
                <Share2 size={16} />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          )}
        </div>
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