import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">
              Paulo R. Silva | <span className="text-primary">Dados & Web</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('pacotes')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pacotes
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
              className="ml-4"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('pacotes')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Pacotes
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://wa.me/5517997815306', '_blank')}
                className="mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                Fale no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;