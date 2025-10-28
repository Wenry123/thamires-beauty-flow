import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      text: "A Dra. Thamires é muito cuidadosa e atenciosa. Fiz harmonização facial e o resultado ficou incrível, muito natural! Recomendo demais!",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      text: "Melhor experiência! Profissional extremamente qualificada, explica tudo com detalhes e o resultado do preenchimento labial foi exatamente o que eu queria.",
      rating: 5,
    },
    {
      name: "Juliana Rodrigues",
      text: "Fiz bioestimuladores com a Dra. Thamires e estou amando o resultado! Minha pele está mais firme e com aspecto rejuvenescido. Atendimento impecável!",
      rating: 5,
    },
    {
      name: "Camila Oliveira",
      text: "Profissional incrível! Realizei harmonização facial e glútea, os resultados superaram minhas expectativas. Muito técnica e cuidado em cada procedimento.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que minhas pacientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação e confiança dos meus pacientes são a minha maior
            recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in border-border/50 cursor-pointer hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold transition-transform duration-300 hover:scale-125"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Name */}
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
