import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ServiceGallery } from "@/components/ServiceGallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories onCategorySelect={setSelectedCategory} />
      <ServiceGallery selectedCategory={selectedCategory} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
