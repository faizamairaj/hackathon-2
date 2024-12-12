import React from 'react';
import Image from 'next/image';
import Dining from '@/Pictures/dining.png';
import Living from '@/Pictures/living.png';
import Bedroom from '@/Pictures/bedroom.png';

const SubHero = () => {
  return (
    <section 
      className="relative w-[1183px] h-[685px] bg-white mx-auto shadow-lg rounded-lg p-10"
    >
      <h2 className="text-4xl font-bold text-center mb-6">Browse The Range</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dining Room Card */}
        <button className="group relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image src={Dining} alt="Dining Room" width={382} height={300} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-center mt-4 text-xl font-semibold">Dining</p>
        </button>

        {/* Living Room Card */}
        <button className="group relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image src={Living} alt="Living Room" width={382} height={300} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-center mt-4 text-xl font-semibold">Living</p>
        </button>

        {/* Bedroom Card */}
        <button className="group relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image src={Bedroom} alt="Bedroom" width={382} height={300} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-center mt-4 text-xl font-semibold">Bedroom</p>
        </button>
      </div>
    </section>
  );
};

export default SubHero;