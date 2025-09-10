import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Gerente de Vendas",
    company: "TechSolutions Ltda",
    content: "O Paulo transformou nossos dados bagunçados em dashboards incríveis! Agora conseguimos tomar decisões muito mais rápidas e assertivas. O investimento se pagou em menos de 2 meses.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Carlos Mendonça",
    role: "Diretor Comercial", 
    company: "InovaDigital",
    content: "Precisávamos de um site que realmente convertesse visitantes em clientes. O Paulo criou uma landing page que aumentou nossas conversões em 180%. Profissional excepcional!",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "Ana Beatriz Santos",
    role: "CEO",
    company: "DataCorp Analytics",
    content: "A automação de processos que o Paulo implementou economizou 15 horas semanais da nossa equipe. Agora focamos no que realmente importa: crescer o negócio. Recomendo de olhos fechados!",
    rating: 5,
    avatar: "AB"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Meus Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação e crescimento através de dados e tecnologia
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative border-border/50 hover:shadow-hover transition-all duration-300 group">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="bg-gradient-primary p-3 rounded-full shadow-card">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                <CardContent className="pt-8 pb-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    
                    {/* Info */}
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <span>100% de satisfação dos clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                  <span>Mais de 50 projetos entregues</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <span>20 anos de experiência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;