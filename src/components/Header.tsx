import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "DIFERENCIAIS", href: "#diferenciais" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "GALERIA", href: "#galeria" },
    { name: "CLIENTES", href: "#clientes" },
  ];

  return (
    <header className="bg-background shadow-elegant sticky top-0 z-50">
      {/* Contact Info Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>62 99102-5673</span>
              </div>
              <div className="md:flex items-center gap-2 hidden">
                <Clock className="h-4 w-4" />
                <span>De Seg. a Sex. de 8h às 17h</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Grupo InClima Goiânia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Grupo InClima" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">Grupo InClima</span>
              <span className="text-sm text-muted-foreground font-medium">Ar Condicionado</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="nav"
                size="sm"
                asChild
                className="text-xs font-medium"
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;