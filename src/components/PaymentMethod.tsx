const PaymentMethod = () => {
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Payment</h3>
        <div className="mt-4 space-y-4">
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="bank"
              defaultChecked
              className="mr-2"
            />
            Direct Bank Transfer
          </label>
          <p className="text-sm text-gray-600">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="cod"
              className="mr-2"
            />
            Cash On Delivery
          </label>
          <button
            type="button"
            className="w-full bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-800"
          >
            Place Order
          </button>
        </div>
      </div>
    );
  };
  
  export default PaymentMethod;