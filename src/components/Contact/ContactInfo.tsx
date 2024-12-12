import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-[#B88E2F]">Get in Touch</h2>
        <p className="text-gray-600">
          Have a question or feedback? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-[#B88E2F] mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Our Location</h3>
            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-[#B88E2F] mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">
              Mobile: +(84) 546-6789<br />
              Hotline: +(84) 456-6789
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-[#B88E2F] mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Working Time</h3>
            <p className="text-gray-600">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-[#B88E2F] mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">info@furniro.com</p>
          </div>
        </div>
      </div>
    </div>
  );
} 