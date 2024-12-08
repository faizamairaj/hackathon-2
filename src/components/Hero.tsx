import Image from 'next/image';
import HeroImage from '@/Pictures/Hero.png';

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src={HeroImage}
        alt="Hero Image"
        width={1440}
        height={100}
        priority
      />
      <div className="hero-text">
        <h6>New Arrival</h6>
        <h3 className="hero-title">Discover Our New Collection</h3>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          dolore
        </p>
        <button className="hero-button">Buy Now</button>
      </div>
    </section>
  );
}