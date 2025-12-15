import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://chat.whatsapp.com/FPrxl7V6oBY3eiov1J4kZ5?mode=hqrt2"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
};
