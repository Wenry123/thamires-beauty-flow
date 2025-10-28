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
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Beleza com propósito.{" "}
            <span className="text-primary">
              Resultados naturais e personalizados
            </span>{" "}
            para realçar o que há de melhor em você.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Harmonização facial e corporal com segurança, técnica e excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5515996567565", "_blank")
              }
              className="bg-primary hover:bg-primary/90 text-base md:text-lg px-8 py-6 shadow-elegant"
            >
              Agendar agora pelo WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Badge
              variant="secondary"
              className="py-2 px-4 text-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              +500 pacientes atendidos
            </Badge>
            <Badge
              variant="secondary"
              className="py-2 px-4 text-sm flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Atendimento humanizado
            </Badge>
            <Badge
              variant="secondary"
              className="py-2 px-4 text-sm flex items-center gap-2"
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
