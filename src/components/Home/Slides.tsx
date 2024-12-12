import Image from 'next/image';
import InnerPeace from '@/Pictures/inner.png';
import SideInner from '@/Pictures/Sideinner.png';

export default function SlideSection() {
  return (
    <section className="relative w-[1760px] h-[670px] bg-white mx-auto shadow-lg rounded-lg p-10">
      <div className="flex flex-row items-center h-full">
        {/* Left Side Text and Button */}
        <div className="flex-1 px-8">
          <h2 className="text-4xl font-bold mb-6">50+ Beautiful Rooms Inspiration</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our designers have already created a lot of beautiful room prototypes to inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 rounded-md text-lg hover:bg-opacity-80 transition">
            Explore More
          </button>
        </div>

        {/* Right Side Images */}
        <div className="flex-1 flex justify-center gap-6">
          <Image
            src={InnerPeace}
            alt="Inner Peace Image"
            width={450}
            height={450}
            className="rounded-lg shadow-md"
          />
          <Image
            src={SideInner}
            alt="Side Inner Image"
            width={450}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}