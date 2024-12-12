"use client";
import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <header className="w-full h-[100px] bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-full max-w-[1440px] px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={Logo} width={185} height={41} alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" legacyBehavior>
            <a className="text-gray-700 hover:text-black font-medium">Home</a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a className="text-gray-700 hover:text-black font-medium">Shop</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-gray-700 hover:text-black font-medium">Blog</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-700 hover:text-black font-medium">Contact</a>
          </Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <button
            className="text-gray-600 text-2xl hover:text-black transition duration-200"
            aria-label="User Account"
          >
            <MdPersonOutline />
          </button>
          <button
            className="text-gray-600 text-2xl hover:text-black transition duration-200"
            aria-label="Search"
          >
            <CiSearch />
          </button>
          <button
            className="text-gray-600 text-2xl hover:text-red-500 transition duration-200"
            aria-label="Wishlist"
          >
            <GoHeart />
          </button>
          <button
            className="relative text-gray-600 text-2xl hover:text-black transition duration-200"
            aria-label="Shopping Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <AiOutlineShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
