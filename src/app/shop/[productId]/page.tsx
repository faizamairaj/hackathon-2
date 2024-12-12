"use client";

import ProductDetails from "@/components/ProductDetails";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

// Define the Product type
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: string[];
  ratings: number;
  stock?: number;
}

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate fetching product data
    const fetchProduct = async () => {
      try {
        // Mock data - replace with actual API call
        const mockProduct = {
          id: params.productId,
          name: `Luxury Furniture ${params.productId}`,
          description: "Premium quality furniture piece crafted with attention to detail and comfort in mind.",
          price: 2500000, // Price in Rupiah
          imageUrl: "/Hero.png",
          colors: ["#1a1a1a", "#8B4513", "#DEB887"],
          ratings: 4.5,
          stock: 15
        };

        setProduct(mockProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.productId]);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto" />
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductDetails {...product} />
      </div>
    </div>
  );
};

export default ProductPage;