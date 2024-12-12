"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: "/1.jpg", alt: "Gallery Image 1", shape: 'hexagon' },
  { src: "/2.jpg", alt: "Gallery Image 2", shape: 'pentagon' },
  { src: "/3.jpg", alt: "Gallery Image 3", shape: 'hexagon' },
  { src: "/4.jpg", alt: "Gallery Image 4", shape: 'pentagon' },
  { src: "/5.jpg", alt: "Gallery Image 5", shape: 'hexagon' },
  { src: "/6.jpg", alt: "Gallery Image 6", shape: 'pentagon' },
  { src: "/7.jpg", alt: "Gallery Image 7", shape: 'hexagon' },
  { src: "/8.jpg", alt: "Gallery Image 8", shape: 'pentagon' }
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[1799px] mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Share your setup with
        </h1>
        <h2 className="text-3xl font-semibold text-[#B88E2F]">
          #FuniroFurniture
        </h2>
      </div>

      <div className="shape-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`shape-cell ${image.shape}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 10,
              rotate: image.shape === 'pentagon' ? 72 : 60 
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelectedImage(image.src)}
          >
            <div className={`shape-image ${image.shape}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            <motion.div 
              className={`shape-overlay ${image.shape}`}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0
              }}
            >
              <span className="text-white text-sm font-medium">View Image</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full h-[80vh]"
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shape-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          max-width: 1200px;
          padding: 0;
          gap: 20px;
        }

        .shape-cell {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 25px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .shape-cell.hexagon::before,
        .shape-cell.hexagon::after,
        .shape-image.hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .shape-cell.pentagon::before,
        .shape-cell.pentagon::after,
        .shape-image.pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }

        .shape-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          transform: scale(1.055);
          transition: transform 0.3s ease;
        }

        .shape-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(184, 142, 47, 0.6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .shape-overlay.hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .shape-overlay.pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }

        .shape-cell:hover .shape-image {
          transform: scale(1.15);
        }

        .shape-cell:hover .shape-overlay {
          opacity: 1;
        }

        /* Glowing effect on hover */
        .shape-cell::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #B88E2F, #DAA520);
          z-index: -1;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .shape-cell:hover::after {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .shape-cell {
            width: 200px;
            height: 200px;
            margin: 15px;
          }
        }

        @media (max-width: 480px) {
          .shape-cell {
            width: 150px;
            height: 150px;
            margin: 10px;
          }
        }

        /* Alternating rotation for visual interest */
        .shape-cell:nth-child(even) {
          transform: rotate(30deg);
        }

        .shape-cell:nth-child(even):hover {
          transform: rotate(0deg) scale(1.1);
        }

        .shape-cell:nth-child(odd):hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
