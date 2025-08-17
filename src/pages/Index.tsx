import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Slider } from "@/components/Slider";
import { FaWhatsapp } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <HeroSection />
        <Slider />
        <AboutSection />
        <DifferentialsSection />
        <ServicesSection />
        <ContactSection />
        <div className="bg-green-500 animate-pulse md:w-44 w-12 h-12 
            flex items-center justify-center fixed bottom-10 
            md:right-10 right-2 rounded-full">
          <FaWhatsapp className="text-white mx-auto" size={26} />
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5562991025673"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white"
          >
            <span className="hidden md:flex">Contato</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
