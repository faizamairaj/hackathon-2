import Image from 'next/image';
import InnerPeace from '@/Pictures/inner.png';
import SideInner from '@/Pictures/Sideinner.png';

export default function SlideSection() {
  return (
    <section className="slide-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">50+ Beautiful Rooms Inspiration</h2>
          <p className="text-gray-700 mb-6">
            Our designers have already created a lot of beautiful room prototypes to inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-opacity-80">
            Explore More
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src={InnerPeace}
            alt="Inner Peace Image"
            width={250}
            height={250}
            className="mr-8"
          />
          <Image src={SideInner} alt="Side Inner Image" width={250} height={250} />
        </div>
      </div>
    </section>
  );
}