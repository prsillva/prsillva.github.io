import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  Github, 
  MessageCircle,
  Heart,
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Paulo R. Silva | <span className="text-primary">Dados & Web</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialista em análise de dados, dashboards e desenvolvimento web. 
                Transformo dados em decisões e crio páginas que vendem.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Disponível para novos projetos</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Navegação Rápida</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  Sobre Mim
                </button>
                <button
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  Serviços
                </button>
                <button
                  onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  Pacotes
                </button>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  Contato
                </button>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Conecte-se Comigo</h4>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  <span>(17) 99781-5306</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>prsillva@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://www.linkedin.com/in/paulo-roberto-silva/', '_blank')}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://github.com/prsillva', '_blank')}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://instagram.com/prsillvaofc', '_blank')}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
                  className="text-muted-foreground hover:text-primary"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>

              {/* CTA */}
              <Button 
                variant="cta" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale Comigo Agora
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Paulo Roberto da Silva.</span>
              <span className="hidden sm:inline">Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="w-3 h-3 text-red-500 fill-current" />
                <span>e muito código</span>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;