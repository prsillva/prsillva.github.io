import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, MessageCircle } from "lucide-react";

const packages = [
  {
    name: "Pacote Básico",
    description: "Perfeito para pequenas empresas começando com análise de dados",
    price: "R$ 500",
    originalPrice: "R$ 700",
    savings: "Economize R$ 200",
    popular: false,
    features: [
      "Dashboard Looker Studio personalizado",
      "Até 2 fontes de dados conectadas",
      "Relatórios básicos interativos",
      "1 reunião de alinhamento",
      "Suporte por 30 dias"
    ],
    includes: "Dashboard Looker Studio + até 2 fontes de dados",
    delivery: "Entrega em 5 dias úteis"
  },
  {
    name: "Pacote Intermediário",
    description: "Ideal para empresas que precisam de análises mais robustas",
    price: "R$ 1.200",
    originalPrice: "R$ 1.600",
    savings: "Economize R$ 400",
    popular: true,
    features: [
      "Dashboard Power BI avançado",
      "Automação de relatórios",
      "Até 5 fontes de dados",
      "KPIs personalizados",
      "2 reuniões de alinhamento",
      "Treinamento básico incluso",
      "Suporte por 60 dias"
    ],
    includes: "Dashboard Power BI + Automação de relatórios",
    delivery: "Entrega em 10 dias úteis"
  },
  {
    name: "Pacote Premium",
    description: "Solução completa para empresas que querem máxima presença digital",
    price: "R$ 2.800",
    originalPrice: "R$ 3.500",
    savings: "Economize R$ 700",
    popular: false,
    features: [
      "Site institucional completo",
      "Dashboard integrado ao site",
      "CMS personalizado",
      "SEO otimizado",
      "Design responsivo premium",
      "Múltiplas fontes de dados",
      "3 reuniões de alinhamento",
      "Treinamento completo",
      "Suporte por 90 dias"
    ],
    includes: "Site Institucional + Dashboard integrado",
    delivery: "Entrega em 15 dias úteis"
  }
];

const PackagesSection = () => {
  return (
    <section id="pacotes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pacotes Especiais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combos promocionais com desconto para você economizar e ter uma solução completa
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative group transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-primary shadow-hover scale-105 lg:scale-110' 
                    : 'border-border/50 hover:shadow-hover hover:scale-105'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-cta text-cta-foreground px-4 py-1 text-xs font-semibold shadow-cta">
                      <Star className="w-3 h-3 mr-1" />
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-cta">{pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {pkg.savings}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Package includes */}
                  <div className="p-3 bg-gradient-hero rounded-lg border border-border/20">
                    <div className="text-sm font-semibold text-foreground mb-1">Inclui:</div>
                    <div className="text-sm text-muted-foreground">{pkg.includes}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Delivery time */}
                  <div className="pt-4 border-t border-border/20">
                    <div className="text-xs text-muted-foreground text-center">
                      {pkg.delivery}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={pkg.popular ? "cta" : "default"}
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/5517997815306?text=Olá! Tenho interesse no ${pkg.name} por ${pkg.price}. Podemos conversar?`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contratar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Precisa de algo diferente? Vamos criar um pacote personalizado para você.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/5517997815306?text=Olá! Gostaria de um orçamento personalizado.', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;