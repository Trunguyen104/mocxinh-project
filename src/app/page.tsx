import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <StorySection />
        <ProductShowcase />
        <CoreValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
