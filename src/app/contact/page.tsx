"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import MapSection from "@/components/Contact/MapSection";
import ContactHero from "@/components/Contact/ContactHero";
import ContactCard from "@/components/ContactCard";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactCards = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["support@furniro.com", "info@furniro.com"],
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    details: ["396 Lillian Blvd, Holbrook", "New York, 11741"],
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 - 22:00", "Saturday - Sunday: 10:00 - 20:00"],
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ContactCard
                icon={card.icon}
                title={card.title}
                details={card.details}
                color={card.color}
                iconColor={card.iconColor}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <ContactForm />
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ContactInfo />
            </div>

            {/* Store Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/Hero.png"
                alt="Our Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Store</h3>
                  <p>Experience our products in person</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us on the Map</h2>
            <MapSection />
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates, news, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}