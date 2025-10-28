import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.png";
import { Sparkles, Shield, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Dra. Thamires Lopes"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl text-left animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Beleza com propósito.{" "}
            <span className="text-primary animate-fade-in" style={{ animationDelay: "200ms" }}>
              Resultados naturais e personalizados
            </span>{" "}
            para realçar o que há de melhor em você.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
            Harmonização facial e corporal com segurança, técnica e excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5515996567565", "_blank")
              }
              className="bg-primary hover:bg-primary/90 text-base md:text-lg px-8 py-6 shadow-elegant hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Agendar agora pelo WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 items-center animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Badge
              variant="secondary"
              className="py-2 px-4 text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Sparkles className="w-4 h-4" />
              +500 pacientes atendidos
            </Badge>
            <Badge
              variant="secondary"
              className="py-2 px-4 text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Heart className="w-4 h-4" />
              Atendimento humanizado
            </Badge>
            <Badge
              variant="secondary"
              className="py-2 px-4 text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Shield className="w-4 h-4" />
              Resultados naturais
            </Badge>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
