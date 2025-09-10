import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5517997815306?text=Olá Paulo! Vim do seu site e gostaria de conversar sobre seus serviços.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        variant="whatsapp"
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl animate-pulse hover:animate-none transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;