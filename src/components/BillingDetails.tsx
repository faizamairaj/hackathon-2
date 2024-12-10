const BillingDetails = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Billing Details</h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <select
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          >
            <option value="default">Country / Region</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
          <input
            type="text"
            placeholder="Street Address"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Town / City"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Province"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
          </div>
          <input
            type="text"
            placeholder="ZIP Code"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <textarea
            placeholder="Additional Information"
            className="w-full border border-gray-300 p-3 rounded-md"
          ></textarea>
        </form>
      </div>
    );
  };
  
  export default BillingDetails;