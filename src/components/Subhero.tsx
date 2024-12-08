import React from 'react';
import Image from 'next/image';
import Dining from '@/Pictures/dining.png';
import Living from '@/Pictures/living.png';
import Bedroom from '@/Pictures/bedroom.png';

const SubHero = () => {
  return (
    <section className="sub-hero">
      <h2 className="title">Browse The Range</h2>
      <div className="image-grid">
        <div className="image-card">
          <Image src={Dining} alt="Dining Room" width={282} height={200} />
          <p>Dining</p>
        </div>
        <div className="image-card">
          <Image src={Living} alt="Living Room" width={282} height={200} />
          <p>Living</p>
        </div>
        <div className="image-card">
          <Image src={Bedroom} alt="Bedroom" width={282} height={200} />
          <p>Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;