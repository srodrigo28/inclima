import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";
import logo from "@/assets/logo.png";
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Home,
  Sparkles,
  Settings,
  Image,
  Users,
  Briefcase,
} from "lucide-react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const isPortfolioPage = pathname === "/portfolio";

  const homeAnchor = (hash: string) => (isPortfolioPage ? `/${hash}` : hash);

  const navItems = [
    { name: "HOME", href: homeAnchor("#home"), icon: <Home className="h-4 w-4" /> },
    { name: "DIFERENCIAIS", href: homeAnchor("#diferenciais"), icon: <Sparkles className="h-4 w-4" /> },
    { name: "SERVIÇOS", href: homeAnchor("#servicos"), icon: <Settings className="h-4 w-4" /> },
    { name: "PORTFÓLIO", href: "/portfolio", icon: <Briefcase className="h-4 w-4" /> },
    { name: "CLIENTES", href: homeAnchor("#clientes"), icon: <Users className="h-4 w-4" /> },
    { name: "CONTATO", href: homeAnchor("#contato"), icon: <Image className="h-4 w-4" /> },
  ];

  return (
    <header className="bg-background shadow-elegant sticky top-0 z-50">
      {/* Top Info Bar */}
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
              <span>
                Grupo <BrandName redClassName="text-red-300" suffix="Goiânia" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Grupo In Clima" className="h-12 w-12" />
            <div className="flex flex-col">
              <BrandName className="font-bold text-xl text-primary" redClassName="text-red-500" prefix="Grupo" />
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
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsDrawerOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold text-lg text-primary">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setIsDrawerOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-muted transition"
              onClick={() => setIsDrawerOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
