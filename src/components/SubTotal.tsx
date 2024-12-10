const Subtotal = () => {
    return (
      <div className="border border-gray-300 p-6 rounded-md space-y-4">
        <h3 className="text-xl font-semibold">Product</h3>
        <div className="flex justify-between text-sm">
          <p>Asgaard sofa x 1</p>
          <p>Rs. 250,000.00</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg">
          <p>Total</p>
          <p>Rs. 250,000.00</p>
        </div>
      </div>
    );
  };
  
  export default Subtotal;