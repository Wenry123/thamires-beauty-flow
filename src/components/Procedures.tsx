import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Syringe, Droplets, HeartPulse, Sun, Zap } from "lucide-react";

const Procedures = () => {
  const procedures = [
    {
      icon: Sparkles,
      title: "Harmonização Facial Completa",
      description:
        "Técnicas avançadas para equilibrar proporções faciais, realçando sua beleza natural de forma harmoniosa.",
      color: "text-primary",
    },
    {
      icon: HeartPulse,
      title: "Preenchimento Labial",
      description:
        "Volume e contorno labial com ácido hialurônico de alta qualidade para lábios naturais e definidos.",
      color: "text-accent-foreground",
    },
    {
      icon: Zap,
      title: "Bioestimuladores de Colágeno",
      description:
        "Estimule a produção natural de colágeno para rejuvenescimento e firmeza da pele a longo prazo.",
      color: "text-gold",
    },
    {
      icon: Syringe,
      title: "Harmonização Glútea",
      description:
        "Procedimentos estéticos para realçar o contorno e a projeção dos glúteos de forma segura e natural.",
      color: "text-primary",
    },
    {
      icon: Droplets,
      title: "Skinbooster / Hidratação Profunda",
      description:
        "Hidratação intensiva da pele com ácido hialurônico para uma pele luminosa, saudável e rejuvenescida.",
      color: "text-accent-foreground",
    },
    {
      icon: Sun,
      title: "Toxina Botulínica (Botox)",
      description:
        "Redução de linhas de expressão e rugas para um rosto mais jovem e descansado, com resultados naturais.",
      color: "text-gold",
    },
  ];

  return (
    <section id="procedimentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Principais Procedimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os tratamentos que vão realçar sua beleza com técnica,
            segurança e resultados naturais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {procedures.map((procedure, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in border-border/50 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <procedure.icon className={`w-7 h-7 ${procedure.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">
                  {procedure.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {procedure.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    window.open("https://wa.me/5515996567565", "_blank")
                  }
                >
                  Agendar via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
