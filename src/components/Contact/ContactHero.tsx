"use client";
import HeroLayout from "../common/HeroLayout";

export default function ContactHero() {
  return (
    <HeroLayout
      title="Contact"
      backgroundImage="/18.jpg"
      breadcrumbs={[
        { label: "Home" },
        { label: "Contact", isActive: true }
      ]}
    />
  );
} 