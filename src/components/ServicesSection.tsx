import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Droplets, Thermometer, ChevronRight, ArrowRight, Phone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Instalação de Ar-condicionado",
      description: "A instalação correta do ar-condicionado é crucial, sendo tão importante quanto a escolha do aparelho adequado.",
      features: ["Instalação profissional", "Garantia de qualidade", "Suporte técnico", "Manutenção preventiva"]
    },
    {
      icon: Settings,
      title: "Manutenção Corretiva/Preventiva",
      description: "A manutenção corretiva/preventiva tem como principal objetivo realizar quatro categorias de serviços.",
      features: ["Limpeza completa", "Verificação de componentes", "Substituição de peças", "Relatório técnico"]
    },
    {
      icon: Droplets,
      title: "Limpeza/Higienização",
      description: "Serviços especializados de limpeza e higienização para garantir a qualidade do ar e eficiência dos equipamentos.",
      features: ["Limpeza de filtros", "Higienização de dutos", "Desinfecção completa", "Controle de qualidade"]
    },
    {
      icon: Thermometer,
      title: "Ar-condicionado Industrial",
      description: "Soluções completas em Ar-condicionado para estabelecimentos comerciais e industriais.",
      features: ["Projeto personalizado", "Instalação especializada", "Manutenção programada", "Atendimento Agendado"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Climatização
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços especializados para garantir o funcionamento 
            eficiente e duradouro do seu sistema de ar condicionado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth border-0 bg-background overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl group-hover:scale-110 transition-bounce shadow-primary">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary-hover p-0 h-auto font-medium group/btn"
                      >
                        Saiba Mais
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-smooth" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect bar */}
                <div className="h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "500+", label: "Clientes Atendidos" },
            { number: "14+", label: "Anos de Experiência" },
            { number: "24h", label: "Suporte Técnico" },
            { number: "100%", label: "Satisfação Garantida" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background rounded-xl p-6 shadow-lg group-hover:shadow-elegant transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Precisa de nossos serviços?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e solicite um orçamento sem compromisso. 
              Nossa equipe está pronta para atender você com excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="bg-blue-500">
                <a href="#contato" className="inline-flex items-center gap-2">
                  <ChevronRight className="h-5 w-5" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+5511997907708" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;