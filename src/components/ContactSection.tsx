import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "62 99102-5673",
      link: "tel:+5562991025673"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@assrefriar.com.br",
      link: "mailto:contato@assrefriar.com.br"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Grupo InCLima",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg. a Sex. das 8h às 17h",
      link: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-secondary">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Entre em contato conosco e 
            solicite seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Solicite seu Orçamento
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium">Nome Completo</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome completo"
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">Telefone</Label>
                      <Input 
                        id="phone" 
                        placeholder="(62) 99999-9999"
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com"
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-medium">Serviço de Interesse</Label>
                    <select 
                      id="service" 
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="instalacao">Instalação de Ar-condicionado</option>
                      <option value="manutencao">Manutenção Corretiva/Preventiva</option>
                      <option value="limpeza">Limpeza/Higienização</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Descreva detalhes do serviço que precisa..."
                      className="min-h-[110px] transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full bg-blue-500">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-smooth border-0 bg-muted/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:scale-110 transition-bounce">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {contact.title}
                        </h4>
                        <a 
                          href={contact.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {contact.info}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 border-0 text-white shadow-elegant">
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Atendimento pelo WhatsApp
                </h3>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-100"
                  asChild
                >
                  <a 
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5562991025673" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="border-0 bg-primary/5">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  Área de Atendimento
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Atendemos toda região de Goiás, 
                  região metropolitana e interior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;