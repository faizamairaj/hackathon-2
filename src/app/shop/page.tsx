import ShopBlowHero from "@/components/ShopBlowHero";
import Products from "@/components/Products";
import ShopCard from "@/components/ShopCard";
import ShopIcons from "@/components/ShopIcons";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <ShopCard />
      <div className="section-spacing"></div>
      <ShopBlowHero />
      <div className="section-spacing"></div>
      <Products />
      <div className="section-spacing"></div>
      <ShopIcons />
      {/* <Footer/> */}
    </>
  );
}