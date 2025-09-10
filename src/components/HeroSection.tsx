import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Dashboards, Automação e{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Soluções Web
            </span>{" "}
            sob medida
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Transformo dados em decisões e crio páginas que vendem
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Está precisando analisar seus dados, montar aquele dashboard ou site? 
            Entre em contato e vamos negociar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Fale comigo no WhatsApp
            </Button>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>20 anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Especialista em Power BI & Looker Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Desenvolvimento web moderno</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cta/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;