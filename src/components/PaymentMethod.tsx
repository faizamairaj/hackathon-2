"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";

interface CardDetails {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
}

export default function PaymentMethod() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateCard = (): boolean => {
    if (paymentMethod !== 'card') return true;

    if (!cardDetails.number.replace(/\s/g, '').match(/^\d{16}$/)) {
      setError('Invalid card number');
      return false;
    }
    if (!cardDetails.expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      setError('Invalid expiry date (MM/YY)');
      return false;
    }
    if (!cardDetails.cvc.match(/^\d{3,4}$/)) {
      setError('Invalid CVC');
      return false;
    }
    if (cardDetails.name.length < 3) {
      setError('Invalid cardholder name');
      return false;
    }

    return true;
  };

  const handlePayment = async () => {
    setError(null);
    if (!validateCard()) return;

    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      sessionStorage.setItem('orderComplete', 'true');
      clearCart();
      router.push('/checkout/success');
    } catch (error) {
      setError('Payment failed. Please try again.');
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
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
          <div className="space-y-3 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input
                type="text"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({
                  ...cardDetails,
                  number: e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim()
                })}
                maxLength={19}
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
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + '/' + value.slice(2, 4);
                    }
                    setCardDetails({
                      ...cardDetails,
                      expiry: value
                    });
                  }}
                  maxLength={5}
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input
                  type="text"
                  value={cardDetails.cvc}
                  onChange={(e) => setCardDetails({
                    ...cardDetails,
                    cvc: e.target.value.replace(/\D/g, '')
                  })}
                  maxLength={4}
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
              : 'bg-blue-600 hover:bg-blue-700'}
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