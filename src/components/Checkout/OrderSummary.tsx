"use client";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";

export default function OrderSummary() {
  const { items, totalPrice } = useCart();
  const shippingCost = 0; // Free shipping
  const taxRate = 0.1; // 10% tax
  const tax = totalPrice * taxRate;
  const finalTotal = totalPrice + tax + shippingCost;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      
      {/* Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-16 h-16">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#B88E2F] text-white text-xs rounded-full flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {formatPrice.toRupiah(item.price)} x {item.quantity}
              </p>
            </div>
            <p className="font-medium">
              {formatPrice.toRupiah(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      {/* Calculations */}
      <div className="space-y-3 pt-4 border-t">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatPrice.toRupiah(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (10%)</span>
          <span>{formatPrice.toRupiah(tax)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-3 border-t">
          <span>Total</span>
          <span className="text-[#B88E2F]">{formatPrice.toRupiah(finalTotal)}</span>
        </div>
      </div>
    </div>
  );
} 