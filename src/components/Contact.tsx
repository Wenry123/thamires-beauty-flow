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
            Estou aqui para atendê-lo(a). Entre em contato e agende sua avaliação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
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

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/dra.thamireslopes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @dra.thamireslopes
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
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

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                <p className="text-muted-foreground">
                  Sorocaba - SP<br />
                  Atendimento mediante agendamento
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5515996567565", "_blank")}
              className="w-full bg-primary hover:bg-primary/90 shadow-elegant"
            >
              Agendar Avaliação pelo WhatsApp
            </Button>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117434.52446538748!2d-47.544!3d-23.501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a7a0d5f7e6b%3A0x3a4b48e8e8f7e8f7!2sSorocaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Sorocaba"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
