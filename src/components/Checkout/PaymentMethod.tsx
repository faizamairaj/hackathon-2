"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, CreditCard, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const paymentMethods = [
  {
    id: "credit-card",
    name: "Credit Card",
    icon: CreditCard,
    description: "Pay with Visa, Mastercard, or American Express"
  },
  // Add more payment methods as needed
];

export default function PaymentMethod() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("credit-card");
  const router = useRouter();
  const { clearCart } = useCart();

  const handlePayment = async () => {
    setIsProcessing(true);
    setError("");

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      router.push('/checkout/success');
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Payment Method</h2>

      {/* Payment Methods */}
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer
              transition-colors duration-200 ${
                selectedMethod === method.id
                  ? 'border-[#B88E2F] bg-[#B88E2F]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="flex items-center gap-4 flex-1">
              <method.icon className={`w-6 h-6 ${
                selectedMethod === method.id ? 'text-[#B88E2F]' : 'text-gray-400'
              }`} />
              <div>
                <h3 className="font-medium text-gray-900">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
            {selectedMethod === method.id && (
              <CheckCircle className="w-5 h-5 text-[#B88E2F]" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className={`w-full py-3 rounded-lg text-white font-medium
          transition-all duration-200 relative overflow-hidden
          ${isProcessing 
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#B88E2F] hover:bg-[#A07B2A]'
          }`}
      >
        <span className={`flex items-center justify-center gap-2 ${
          isProcessing ? 'opacity-0' : 'opacity-100'
        }`}>
          Pay Now
        </span>
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        )}
      </button>
    </div>
  );
} 