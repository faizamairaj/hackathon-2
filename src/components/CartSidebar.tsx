"use client";
import { useEffect, useState } from 'react';
import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";
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
    totalPrice 
  } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
  };

  if (!mounted) return null;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="fixed right-0 top-0 h-full w-[400px] bg-white p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="flex flex-col gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{formatPrice.toRupiah(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  {formatPrice.toRupiah(totalPrice)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}