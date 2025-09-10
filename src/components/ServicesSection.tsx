import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Monitor, 
  Zap, 
  TrendingUp, 
  Globe, 
  Building2, 
  Clock, 
  Headphones,
  MessageCircle 
} from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Dashboard Looker Studio",
    description: "Relatórios interativos e visualizações de dados conectadas em tempo real",
    price: "R$ 300",
    features: ["Conexão com múltiplas fontes", "Relatórios interativos", "Atualizações automáticas"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Dashboard Power BI",
    description: "Dashboards avançados com análises profundas e KPIs estratégicos",
    price: "R$ 500",
    features: ["Análises avançadas", "KPIs personalizados", "Modelagem de dados"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Análise de Dados",
    description: "Transformo seus dados brutos em insights acionáveis para o negócio",
    price: "R$ 400",
    features: ["Limpeza de dados", "Análise estatística", "Relatórios executivos"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e ganhe eficiência operacional",
    price: "R$ 400",
    features: ["Scripts personalizados", "Integração de sistemas", "Monitoramento"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Landing Page",
    description: "Páginas otimizadas para conversão com design responsivo moderno",
    price: "R$ 300",
    features: ["Design responsivo", "SEO otimizado", "Formulários integrados"]
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Site Institucional",
    description: "Sites completos para empresas com CMS e painel administrativo",
    price: "R$ 800",
    features: ["CMS personalizado", "Painel admin", "Múltiplas páginas"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Consultoria (hora)",
    description: "Consultoria especializada para resolver desafios específicos",
    price: "R$ 100",
    features: ["Análise de problemas", "Soluções sob medida", "Orientação técnica"]
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Suporte Mensal",
    description: "Suporte contínuo para manutenção e evolução dos seus projetos",
    price: "R$ 400",
    features: ["Suporte prioritário", "Atualizações incluídas", "Consultoria inclusa"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meus Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em análise de dados e desenvolvimento web 
              para impulsionar o seu negócio
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:shadow-card transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">A partir de</div>
                      <div className="text-xl font-bold text-cta">{service.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não encontrou o que precisa?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada projeto é único. Entre em contato para discutirmos uma solução personalizada 
              para o seu negócio.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Fale Comigo no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;