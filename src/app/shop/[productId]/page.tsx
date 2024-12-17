"use client";

import ProductDetails from "@/components/ProductDetails";
import Slides from "@/components/Home/Slides";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { products } from "@/data/products";

// Define the Product type
interface Product {
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
}

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Find product from our data
    const fetchProduct = async () => {
      try {
        const foundProduct = products.find(p => p.id === params.productId);
        if (foundProduct) {
          // Transform the data to match our component props
          setProduct({
            ...foundProduct,
            imageUrl: foundProduct.image,
          });
        }
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
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">You May Also Like</h2>
          <Slides />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;