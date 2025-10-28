import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Dra. Thamires Lopes
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Biomédica Estética
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
               href="https://instagram.com/dra.thamires"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@drathamireslopes.com.br"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Dra. Thamires Lopes — Harmonização facial e glútea com
            excelência, técnica e naturalidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
