import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <Button
      size="lg"
      onClick={() => window.open("https://wa.me/5515996567565", "_blank")}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-elegant hover:shadow-xl bg-[#25D366] hover:bg-[#20BA5A] text-white p-0 animate-pulse hover:animate-none transition-all duration-500 hover:scale-125 hover:rotate-12"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default FloatingWhatsApp;
