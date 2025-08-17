import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, ChevronRight } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Entre nossos muitos objetivos, o maior deles com certeza é entregar o nosso melhor ao cliente e prestar nossos serviços com Prima Excelência em todos os aspectos."
    },
    {
      icon: Eye,
      title: "Nossa Visão",
      description: "Ar-Condicionado: Promover o melhor conforto térmico para nossos clientes com melhor eficiência e excelência possível. Ar condicionado: Entregar as melhores soluções aos nossos clientes com agilidade e eficácia."
    },
    {
      icon: Heart,
      title: "Nossos Valores",
      description: "Dentre o que valorizamos temos como nossa trindade o Comprometimento, Respeito e Segurança. Além do amor que temos com a profissão e os resultados."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma equipe dedicada de especialistas comprometidos em oferecer 
            serviços de alta qualidade e garantir o conforto e bem-estar dos nossos clientes.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Conheça Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Grupo InClima é uma empresa prestadora de serviços na área de 
                Ar Condicionado. Desde sua fundação, em 2014, nos dedicamos 
                plenamente ao atendimento de nossos clientes, com eficácia e compromisso.
              </p>
              <p>
                Contamos com uma equipe que combina experiência e inovação, proporcionando 
                ao mercado serviços com agilidade e alta qualidade.
              </p>
              <p>
                Atuamos com atendimentos em todo Goiás, 
                abrangendo a região metropolitana e o interior.
              </p>
            </div>
            <Button variant="default" size="lg" asChild>
              <a href="#contato" className="inline-flex items-center gap-2">
                <ChevronRight className="h-5 w-5" />
                Entre em contato conosco
              </a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant">
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg mb-4">Anos de Experiência</div>
                <div className="w-full h-px bg-white/30 mb-4"></div>
                <div className="text-sm opacity-90">
                  Desde 2014 oferecendo serviços de excelência em Ar Condicionado
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-bounce">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;