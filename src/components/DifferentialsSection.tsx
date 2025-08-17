import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Shield, ChevronRight } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Zap,
      title: "AGILIDADE",
      description: "Rapidez com eficiência e qualidade.",
      color: "text-yellow-500"
    },
    {
      icon: CheckCircle,
      title: "EFICÁCIA",
      description: "Um resultado de excelência e com segurança.",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "COMPROMISSO",
      description: "Sempre prontos a entregar o melhor para os nossos clientes.",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm font-medium text-accent-foreground">
              Por que escolher o Grupo InClima Ar Condicionado
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Diferenciais
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nosso compromisso com a excelência, a atenção aos detalhes e a busca 
            contínua pela satisfação do cliente nos destacam como a escolha ideal 
            para suas necessidades.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth border-0 bg-gradient-to-br from-background to-muted/30"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full group-hover:scale-110 transition-bounce shadow-primary">
                    <differential.icon className="h-10 w-10 text-white" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-20 scale-75 group-hover:scale-100 transition-smooth"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {differential.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-12 h-0.5 bg-gradient-primary mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-muted/20 to-accent/20 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Conte com uma empresa que preza pelo seu bem-estar!
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a ter 
            o melhor para seu ar condicionado.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-blue-500">
            <a href="#contato" className="inline-flex items-center gap-2 bg-blue-500">
              <ChevronRight className="h-5 w-5 " />
              Solicite um orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;