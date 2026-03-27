import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Struggle } from "@/components/Struggle";
import { Levels } from "@/components/Levels";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Summer } from "@/components/Summer";
import { CtaBand } from "@/components/CtaBand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Struggle />
      <Levels />
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <Summer />
      <CtaBand />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
