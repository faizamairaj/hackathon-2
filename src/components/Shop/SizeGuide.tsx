"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, X } from "lucide-react";

const sizeGuides = {
  Chair: {
    measurements: [
      { size: "Small", width: "45-50", depth: "40-45", height: "80-85" },
      { size: "Medium", width: "50-55", depth: "45-50", height: "85-90" },
      { size: "Large", width: "55-60", depth: "50-55", height: "90-95" }
    ],
    tips: [
      "Measure your dining table height to ensure proper chair height",
      "Allow 30cm between chairs for comfortable seating",
      "Consider armrest height if placing under a table"
    ]
  },
  Sofa: {
    measurements: [
      { size: "2 Seater", width: "140-160", depth: "80-90", height: "85-90" },
      { size: "3 Seater", width: "180-200", depth: "80-90", height: "85-90" },
      { size: "4 Seater", width: "220-240", depth: "80-90", height: "85-90" }
    ],
    tips: [
      "Ensure 45cm minimum walkway space around the sofa",
      "Consider door dimensions for delivery",
      "Leave space for reclining features if applicable"
    ]
  },
  Table: {
    measurements: [
      { size: "Small", width: "80-100", depth: "80-100", height: "75" },
      { size: "Medium", width: "120-140", depth: "80-100", height: "75" },
      { size: "Large", width: "160-180", depth: "90-100", height: "75" }
    ],
    tips: [
      "Allow 60cm per person for comfortable dining",
      "Ensure 90cm clearance around the table",
      "Consider extendable options for flexible sizing"
    ]
  }
};

interface SizeGuideProps {
  category: keyof typeof sizeGuides;
}

export default function SizeGuide({ category }: SizeGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"measurements" | "tips">("measurements");

  const guide = sizeGuides[category];

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Ruler className="w-5 h-5" />
        <span>Size Guide</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-[600px]"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold">Size Guide - {category}</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab("measurements")}
                  className={`flex-1 py-3 text-center font-medium transition-colors
                    ${activeTab === "measurements" 
                      ? "text-blue-600 border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"}`}
                >
                  Measurements
                </button>
                <button
                  onClick={() => setActiveTab("tips")}
                  className={`flex-1 py-3 text-center font-medium transition-colors
                    ${activeTab === "tips" 
                      ? "text-blue-600 border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"}`}
                >
                  Tips
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {activeTab === "measurements" ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 text-left">Size</th>
                          <th className="py-2 text-left">Width (cm)</th>
                          <th className="py-2 text-left">Depth (cm)</th>
                          <th className="py-2 text-left">Height (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {guide.measurements.map((item, index) => (
                          <tr key={item.size} className="border-b last:border-b-0">
                            <td className="py-3 font-medium">{item.size}</td>
                            <td className="py-3">{item.width}</td>
                            <td className="py-3">{item.depth}</td>
                            <td className="py-3">{item.height}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {guide.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
                <p className="text-sm text-gray-600">
                  All measurements are approximate. Please allow for slight variations in size.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 