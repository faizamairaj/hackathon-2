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

export default function BillingDetails() {
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Billing Details</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
            required
          />
        </div>

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name (Optional)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
          required
        >
          <option value="default">Select Country</option>
          <option value="ID">Indonesia</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="JP">Japan</option>
        </select>

        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
            required
          />
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            placeholder="Province"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
            required
          />
        </div>

        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="ZIP Code"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
          required
        />

        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Information (Optional)"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:outline-none resize-none"
        />
      </div>
    </div>
  );
} 
