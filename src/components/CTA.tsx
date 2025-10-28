import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#ebe6de] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-accent rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 mb-6 animate-pulse">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Descubra o poder da sua melhor versão
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed px-2 sm:px-0">
            Agende sua avaliação agora e dê o primeiro passo para realçar sua
            beleza natural com segurança e excelência.
          </p>

          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5515996567565", "_blank")}
            className="bg-primary hover:bg-primary/90 text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-110 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Falar com a Dra. Thamires no WhatsApp
          </Button>

          <p className="text-xs sm:text-sm text-muted-foreground mt-6">
            Resposta rápida • Atendimento personalizado • Tire todas as suas
            dúvidas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
