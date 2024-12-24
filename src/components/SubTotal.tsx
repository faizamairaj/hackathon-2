"use client";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatPrice";

export default function Subtotal() {
  const { items, totalPrice } = useCart();
  const TAX_RATE = 0.1; // 10% tax rate

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      
      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-medium">
              {formatPrice.toRupiah(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Calculations */}
      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice.toRupiah(totalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatPrice.toRupiah(totalPrice * TAX_RATE)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
          <span>Total</span>
          <span>{formatPrice.toRupiah(totalPrice * (1 + TAX_RATE))}</span>
        </div>
      </div>
    </div>
  );
}