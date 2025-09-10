import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  Linkedin, 
  Github,
  Send,
  MapPin,
  Phone,
  Clock
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Compose WhatsApp message
    const whatsappMessage = `Olá Paulo! Vim do seu site.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5517997815306?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato e vamos discutir como posso ajudar o seu negócio a crescer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-hover border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envie uma Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário e seja redirecionado para o WhatsApp para continuar nossa conversa.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Como você gostaria de ser chamado?"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-me sobre seu projeto ou necessidade..."
                      rows={5}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Continuar no WhatsApp
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Ou fale diretamente comigo no WhatsApp
                    </p>
                    <Button 
                      type="button"
                      variant="whatsapp" 
                      size="lg" 
                      className="mt-2 w-full"
                      onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Abrir WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-muted-foreground">(17) 99781-5306</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">E-mail</div>
                      <div className="text-muted-foreground">prsillva@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Localização</div>
                      <div className="text-muted-foreground">São Paulo, Brasil</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Horário de Atendimento</div>
                      <div className="text-muted-foreground">Seg-Sex: 9h às 18h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Redes Sociais</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Me acompanhe nas redes para dicas e conteúdos sobre dados e tecnologia
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="justify-start"
                      onClick={() => window.open('https://www.linkedin.com/in/paulo-roberto-silva/', '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                      LinkedIn
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="justify-start"
                      onClick={() => window.open('https://github.com/prsillva', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>

                    <Button
                      variant="outline"
                      className="justify-start col-span-2"
                      onClick={() => window.open('https://instagram.com/prsillvaofc', '_blank')}
                    >
                      <Instagram className="w-4 h-4 mr-2 text-pink-600" />
                      @prsillvaofc
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;