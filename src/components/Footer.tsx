import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AustinstayerFX Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display font-bold text-xl text-foreground">AustinstayerFX</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © 2025 AustinstayerFX. All rights reserved.
          </p>

          <a
            href="https://chat.whatsapp.com/FPrxl7V6oBY3eiov1J4kZ5?mode=hqrt2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
