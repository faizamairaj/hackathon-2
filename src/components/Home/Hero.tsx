import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";

export default function Hero() {
  return (
    <main className="relative w-full">
      {/* Wrapper for the hero section */}
      <div className="relative md:h-[calc(100vh-80px)] w-full">
        {/* Background Image for Desktop */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={HeroImage} // Using the same imported image
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        {/* Updated Content Section */}
        <div className="relative z-10 flex flex-col items-start justify-center bg-[#FFF3E3] md:absolute md:right-28 md:top-1/2 md:transform md:-translate-y-1/2 md:w-[550px] md:h-[350px] shadow-lg md:shadow-none p-6 md:p-10">
         <div className="hero-text lg:text-left">
         <h6 className="text-sm font-bold uppercase text-black">New Arrival</h6>
         <h3 className="text-3xl font-bold text-[#B88E2F] lg:text-5xl">Discover Our New Collection</h3>
        <p className="text-lg text-black mt-4 lg:text-xl lg:max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolore
       </p>
      <button className="bg-[#B88E2F] hover:bg-[#FFF3E3] text-white font-bold py-2 px-4 rounded mt-6">
      Buy Now
      </button>
      </div>
      </div>
        {/* Image Section for Mobile */}
        <div className="block md:hidden w-full h-[350px]">
          <Image
            src={HeroImage} // Using the same imported image
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