import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Eficiência e compromisso com seu bem-estar.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Oferecemos serviços especializados para garantir o funcionamento
            eficiente e duradouro dos seus equipamentos.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="animate-scale-in bg-blue-500"
            asChild
          >
            <a className="inline-flex items-center gap-2 bg-blue-500"
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5562991025673"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight className="h-5 w-5" />
              SOLICITE UM ORÇAMENTO RÁPIDO
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;