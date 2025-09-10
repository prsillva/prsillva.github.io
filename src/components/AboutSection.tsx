import avatarPaulo from "@/assets/avatar-paulo.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sobre Mim
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sou <strong className="text-foreground">Paulo Roberto da Silva</strong>, 
                  com <strong className="text-primary">20 anos de experiência em TI</strong>, 
                  especializado em análise de dados, dashboards (Looker Studio & Power BI), 
                  automações e desenvolvimento web.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ajudo empresas e profissionais a transformar dados complexos em insights 
                  claros e criar soluções web que realmente convertem. Cada projeto é tratado 
                  com o cuidado e a expertise que merece.
                </p>

                {/* Skills */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-card p-4 rounded-lg shadow-card">
                    <div className="text-primary font-semibold text-sm">Power BI</div>
                    <div className="text-xs text-muted-foreground">Dashboards Avançados</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-card">
                    <div className="text-primary font-semibold text-sm">Looker Studio</div>
                    <div className="text-xs text-muted-foreground">Relatórios Dinâmicos</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-card">
                    <div className="text-primary font-semibold text-sm">Automação</div>
                    <div className="text-xs text-muted-foreground">Processos Inteligentes</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-card">
                    <div className="text-primary font-semibold text-sm">Análise de Dados</div>
                    <div className="text-xs text-muted-foreground">Insights Estratégicos</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-card">
                    <div className="text-primary font-semibold text-sm">Desenvolvimento Web</div>
                    <div className="text-xs text-muted-foreground">Sites Modernos</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-card">
                    <div className="text-primary font-semibold text-sm">Consultoria TI</div>
                    <div className="text-xs text-muted-foreground">Soluções Personalizadas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-hover bg-gradient-primary p-1">
                  <img
                    src={avatarPaulo}
                    alt="Paulo Roberto da Silva - Especialista em Análise de Dados e Desenvolvimento Web"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cta rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;