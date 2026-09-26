import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WorkshopMascotGuide } from "@/components/workshop/WorkshopMascotGuide";

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
        <WorkshopSection />
        <CoreValuesSection />
        <ContactSection />
      </main>
      <WorkshopMascotGuide />
      <Footer />
    </>
  );
}
