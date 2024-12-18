"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const { setIsCartOpen, totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { items: compareItems } = useCompare();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[100px] bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto flex items-center justify-between h-full max-w-[1440px] px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={Logo} width={185} height={41} alt="Company Logo" priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#B88E2F] font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B88E2F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <button
            className="text-gray-600 text-2xl hover:text-[#2cffce] transition duration-200"
            aria-label="User Account"
          >
            <MdPersonOutline />
          </button>
          <button
            className="text-gray-600 text-2xl hover:text-[#24bde0] transition duration-200"
            aria-label="Search"
          >
            <CiSearch />
          </button>
          <button
            className="text-gray-600 text-2xl hover:text-[#ff1b1b] transition duration-200"
            aria-label="Wishlist"
          >
            <GoHeart />
          </button>
          {mounted && (
            <button
              className="relative text-gray-600 text-2xl hover:text-[#af9c6f] transition duration-200"
              aria-label="Shopping Cart"
              onClick={handleCartClick}
            >
              <AiOutlineShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#a37200] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          )}
          <Link
            href="/compare"
            className="relative text-gray-600 text-2xl hover:text-[#B88E2F] transition duration-200"
            aria-label="Compare Products"
          >
            <Scale className="w-6 h-6" />
            {compareItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {compareItems.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 text-2xl hover:text-[#B88E2F] transition duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200"
          >
            <nav className="container mx-auto max-w-[1440px] px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 text-gray-700 hover:text-[#B88E2F] font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
