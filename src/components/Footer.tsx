import logo from "@/assets/logo.png";
import BrandName from "@/components/BrandName";
import { useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const { pathname } = useLocation();
  const isPortfolioPage = pathname === "/portfolio";
  const homeAnchor = (hash: string) => (isPortfolioPage ? `/${hash}` : hash);

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Grupo In Clima" className="h-12 w-12" />
              <div className="flex flex-col">
                <BrandName className="font-bold text-xl text-primary" redClassName="text-red-500" prefix="Grupo" />
                <span className="text-sm text-gray-300 font-medium">ARCONDICIONADO</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Desde 2014, oferecemos serviços especializados em ar condicionados com eficiência, compromisso e excelência para nossos clientes.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>62 99102-5673</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>comercial@grupoinclima.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>
                  Grupo <BrandName redClassName="text-red-400" suffix="Goiânia Goiás" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Seg. a Sex. das 8h às 17h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={homeAnchor("#servicos")} className="hover:text-primary transition-smooth">Instalação de Ar-condicionado</a></li>
              <li><a href={homeAnchor("#servicos")} className="hover:text-primary transition-smooth">Manutenção Preventiva</a></li>
              <li><a href={homeAnchor("#servicos")} className="hover:text-primary transition-smooth">Limpeza e Higienização</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-smooth">Portfólio</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={homeAnchor("#home")} className="hover:text-primary transition-smooth">Home</a></li>
              <li><a href={homeAnchor("#sobre")} className="hover:text-primary transition-smooth">Quem Somos</a></li>
              <li><a href={homeAnchor("#diferenciais")} className="hover:text-primary transition-smooth">Diferenciais</a></li>
              <li><a href={homeAnchor("#servicos")} className="hover:text-primary transition-smooth">Serviços</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-smooth">Portfólio</a></li>
              <li><a href={homeAnchor("#contato")} className="hover:text-primary transition-smooth">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2025 Grupo <BrandName redClassName="text-red-400" suffix="Ar Condicionado" />. Todos os direitos reservados.
            </div>
            <div className="mt-4 md:mt-0 hidden md:flex">
              Desenvolvido com ❤️ para seu conforto
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
