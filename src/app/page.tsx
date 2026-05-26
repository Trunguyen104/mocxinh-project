import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ProductShowcase />
        <CoreValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
