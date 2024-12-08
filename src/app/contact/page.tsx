import ContactCard from "@/components/ContactCard";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="container">
      <ContactCard />
      <div className="section-spacing"></div>
      <ContactMe />
    </main>
  );
}