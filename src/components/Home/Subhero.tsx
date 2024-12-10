import React from 'react';
import Image from 'next/image';
import Dining from '@/Pictures/dining.png';
import Living from '@/Pictures/living.png';
import Bedroom from '@/Pictures/bedroom.png';

const SubHero = () => {
  return (
    <section className="sub-hero">
      <h2 className="text-3xl font-bold text-center mb-8">Browse The Range</h2>
      <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="image-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <button className="image-card">
          <Image src={Dining} alt="Dining Room" width={282} height={200} />
          <p className="text-center mt-2">Dining</p>
        </button>
        <button className="image-card">
          <Image src={Living} alt="Living Room" width={282} height={200} />
          <p className="text-center mt-2">Living</p>
        </button>
        <button className="image-card">
          <Image src={Bedroom} alt="Bedroom" width={282} height={200} />
          <p className="text-center mt-2">Bedroom</p>
        </button>
      </div>
    </section>
  );
};

export default SubHero;