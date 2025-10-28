import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para atendê-lo(a). Entre em contato e agende sua
            avaliação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/5515996567565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 (15) 99656-7565
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/dra.thamires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @dra.thamireslopes
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <a
                  href="mailto:contato@drathamireslopes.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@drathamireslopes.com.br
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Localização
                </h3>
                <p className="text-muted-foreground">
                  R. Luiz Canalle, 89 - Centro, Salto de Pirapora - SP,
                  18160-000
                  <br />
                  Atendimento mediante agendamento
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5515996567565", "_blank")
              }
              className="w-full bg-primary hover:bg-primary/90 shadow-elegant hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Agendar Avaliação pelo WhatsApp
            </Button>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8079672852587!2d-47.57529162476101!3d-23.647047264745602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58faf434e9cd7%3A0xd1a87bf4a09a2be7!2sR.%20Luiz%20Canalle%2C%2089%20-%20Centro%2C%20Salto%20de%20Pirapora%20-%20SP%2C%2018160-000!5e0!3m2!1spt-BR!2sbr!4v1761677329402!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
