import ContactHero from "../../components/Contact/ContactHero";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import MapSection from "../../components/Contact/MapSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <MapSection />
    </div>
  );
}