import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";

export default function Hero() {
  return (
    <main className="relative w-full h-[716.83px]">
      {/* Wrapper for the hero section */}
      <div className="relative w-[1440px] h-full mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        {/* Pop-Up Content Section */}
        <div className="absolute z-10 bg-[#FFF3E3] p-8 shadow-lg rounded-[10px] top-[253px] left-[739px] w-[643px] h-[443px] transition-transform transform hover:scale-105">
          <h6 className="text-sm font-bold uppercase text-black">New Arrival</h6>
          <h3 className="text-3xl font-bold text-[#B88E2F] lg:text-5xl">Discover Our New Collection</h3>
          <p className="text-lg text-black mt-4 lg:text-xl lg:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolore.
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#FFF3E3] text-white font-bold py-2 px-4 rounded mt-6 border border-[#B88E2F] hover:text-[#B88E2F]">
            Buy Now
          </button>
        </div>

        {/* Mobile Image Section */}
        <div className="block md:hidden w-full h-[350px] relative">
          <Image
            src={HeroImage}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}