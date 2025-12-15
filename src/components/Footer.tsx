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
            href="https://wa.me/263781498828?text=Hi%2C%20I%20found%20your%20number%20on%20your%20website.%20I%27m%20interested%20in%20your%20Forex%20signals%20and%20mentorship."
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
