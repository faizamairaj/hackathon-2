import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo ">


        <Image src={Logo} width={185} height={41} alt="Picture of the author" />
        </div>

        <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-2xl cursor-pointer hover:text-gray-700">
            <MdPersonOutline />
          </button>
          <button className="text-2xl cursor-pointer hover:text-gray-700">
            <CiSearch />
          </button>
          <button className="text-2xl cursor-pointer hover:text-red-500">
            <GoHeart />
          </button>
          <button className="text-2xl cursor-pointer hover:text-gray-700">
            <AiOutlineShoppingCart />
          </button>
        </div>


      </div>
    </>
  );
}
