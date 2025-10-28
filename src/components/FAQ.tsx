import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Os procedimentos são doloridos?",
      answer:
        "Todos os procedimentos são realizados com anestesia local e técnicas que minimizam o desconforto. A maioria dos pacientes relata apenas um leve incômodo durante a aplicação.",
    },
    {
      question: "Quanto tempo duram os resultados?",
      answer:
        "A duração varia conforme o procedimento e o metabolismo de cada paciente. Geralmente, os resultados de preenchimentos duram de 8 a 18 meses, enquanto toxina botulínica dura cerca de 4 a 6 meses. Bioestimuladores oferecem resultados progressivos e duradouros.",
    },
    {
      question: "Qual é o valor da harmonização facial?",
      answer:
        "O valor é personalizado após avaliação presencial, pois cada paciente tem necessidades únicas. Agende uma consulta pelo WhatsApp para receber um orçamento detalhado e personalizado.",
    },
    {
      question: "Quem pode realizar harmonização facial e glútea?",
      answer:
        "Somente profissionais habilitados em biomedicina estética, como a Dra. Thamires Lopes, podem realizar procedimentos de harmonização. É fundamental escolher um profissional qualificado e certificado.",
    },
    {
      question: "Existe tempo de recuperação?",
      answer:
        "A maioria dos pacientes retorna à rotina normal no mesmo dia. Inchaços e vermelhidões leves são comuns e desaparecem em poucos dias. Recomendações específicas serão passadas após cada procedimento.",
    },
    {
      question: "Posso agendar uma avaliação online?",
      answer:
        "Sim! Você pode entrar em contato pelo WhatsApp para agendar uma avaliação presencial ou tirar dúvidas iniciais. A Dra. Thamires terá prazer em atendê-lo(a).",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre os procedimentos e tratamentos oferecidos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
