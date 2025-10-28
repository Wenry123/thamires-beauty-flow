import aboutImage from "@/assets/about-doctor.png";
import { GraduationCap, Sparkles, UserCheck, Syringe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Formação em estética avançada",
      description: "Especialização e atualização constante",
    },
    {
      icon: Sparkles,
      title: "Técnicas de última geração",
      description: "Procedimentos modernos e eficazes",
    },
    {
      icon: UserCheck,
      title: "Acompanhamento individualizado",
      description: "Cuidado personalizado para cada paciente",
    },
    {
      icon: Syringe,
      title: "Procedimentos minimamente invasivos",
      description: "Segurança e conforto em primeiro lugar",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in group">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]">
              <img
                src={aboutImage}
                alt="Dra. Thamires Lopes"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-full opacity-20 blur-3xl -z-10 transition-opacity duration-500 group-hover:opacity-30"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 hover:text-primary transition-colors duration-300">
              Sobre a Dra. Thamires Lopes
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              Sou a Dra. Thamires Lopes, biomédica especializada em harmonização
              facial e glútea. Meu compromisso é realçar sua beleza natural com
              segurança, técnica e sensibilidade.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "600ms" }}>
              Cada procedimento é pensado de forma única, respeitando suas
              características individuais e seus objetivos estéticos, sempre
              buscando resultados harmoniosos e naturais.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 group hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                      <feature.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
