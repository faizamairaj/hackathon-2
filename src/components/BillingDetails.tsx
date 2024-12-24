"use client";
import { useState } from 'react';

interface BillingFormData {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  street: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo: string;
}

const BillingDetails = () => {
  const [formData, setFormData] = useState<BillingFormData>({
    firstName: '',
    lastName: '',
    company: '',
    country: 'default',
    street: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Billing Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
        </div>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name (Optional)"
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        >
          <option value="default">Country / Region</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Town / City"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            placeholder="Province"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
        </div>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="ZIP Code"
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Information"
          className="w-full border border-gray-300 p-3 rounded-md"
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;