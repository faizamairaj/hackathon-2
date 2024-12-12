"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";

export default function PaymentMethod() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handlePayment = async () => {
    setError(null);
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store completion status
      sessionStorage.setItem('orderComplete', 'true');
      
      // Clear cart and redirect
      clearCart();
      router.push('/checkout/success');
    } catch (error) {
      setError('Payment failed. Please try again.');
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-6">Payment Method</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="card"
            name="payment"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4"
          />
          <label htmlFor="card">Credit/Debit Card</label>
        </div>

        {paymentMethod === 'card' && (
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input
                type="text"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({
                  ...cardDetails,
                  number: e.target.value.replace(/\D/g, '').slice(0, 16)
                })}
                maxLength={16}
                className="w-full p-2 border rounded-md"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input
                  type="text"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({
                    ...cardDetails,
                    expiry: e.target.value.replace(/\D/g, '').slice(0, 4)
                      .replace(/(\d{2})(\d{2})/, '$1/$2')
                  })}
                  maxLength={5}
                  className="w-full p-2 border rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input
                  type="text"
                  value={cardDetails.cvc}
                  onChange={(e) => setCardDetails({
                    ...cardDetails,
                    cvc: e.target.value.replace(/\D/g, '').slice(0, 3)
                  })}
                  maxLength={3}
                  className="w-full p-2 border rounded-md"
                  placeholder="123"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cardholder Name</label>
              <input
                type="text"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({
                  ...cardDetails,
                  name: e.target.value
                })}
                className="w-full p-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="paypal"
            name="payment"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4"
          />
          <label htmlFor="paypal">PayPal</label>
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`
            w-full py-3 rounded-lg text-white flex items-center justify-center gap-2
            ${isProcessing 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#B88E2F] hover:bg-[#9F7B2A]'} 
            transition-colors
          `}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Complete Order</span>
          )}
        </button>
      </div>
    </div>
  );
} 