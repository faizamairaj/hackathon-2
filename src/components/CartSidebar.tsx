"use client";
import { useEffect, useState } from 'react';
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/formatPrice";

export default function CartSidebar() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { 
    isCartOpen, 
    setIsCartOpen, 
    items, 
    removeFromCart, 
    updateQuantity,
    subtotal,
    tax,
    shippingCost,
    total
  } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
  };

  const handleViewCart = () => {
    setIsCartOpen(false);
    router.push('/cart');
  };

  if (!mounted) return null;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="fixed right-0 top-0 h-full w-[417px] bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-500 mt-1">{items.length} items</p>
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.color}`} className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    {item.color && (
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-500">Color:</span>
                        <div
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    )}
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-medium text-gray-900">
                        {formatPrice.toRupiah(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>{formatPrice.toRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Tax</span>
                <span>{formatPrice.toRupiah(tax)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>{formatPrice.toRupiah(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium text-gray-900 pt-2 border-t">
                <span>Total</span>
                <span>{formatPrice.toRupiah(total)}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#A07B2A] transition-colors"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={handleViewCart}
                className="w-full border border-[#B88E2F] text-[#B88E2F] py-3 rounded-lg hover:bg-[#B88E2F]/5 transition-colors"
              >
                View Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}