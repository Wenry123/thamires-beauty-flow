import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";
import beforeAfter3 from "@/assets/before-after-3.png";
import beforeAfter4 from "@/assets/before-after-4.png";

const Results = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const results = [
    {
      image: beforeAfter1,
      title: "Harmonização de Sobrancelhas",
      description: "Preenchimento e design natural",
    },
    {
      image: beforeAfter2,
      title: "Redução de Linhas de Expressão",
      description: "Tratamento com toxina botulínica",
    },
    {
      image: beforeAfter3,
      title: "Preenchimento Labial",
      description: "Volume e definição natural",
    },
    {
      image: beforeAfter4,
      title: "Harmonização Facial Completa",
      description: "Bioestimuladores e preenchimento",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section id="resultados" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Resultados Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados naturais, personalizados e visíveis. Veja a transformação
            de nossos pacientes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-border/50">
            <CardContent className="p-0">
              <div className="relative">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted group">
                  <img
                    src={results[currentIndex].image}
                    alt={results[currentIndex].title}
                    className="w-full h-full object-contain animate-fade-in transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
                  onClick={prevSlide}
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 hover:translate-x-1"
                  onClick={nextSlide}
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center bg-card">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {results[currentIndex].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {results[currentIndex].description}
                </p>

                {/* Dots */}
                <div className="flex justify-center gap-2">
                  {results.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Ir para resultado ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
