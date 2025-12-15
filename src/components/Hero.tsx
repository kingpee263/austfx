import { TrendingUp, Users, Shield, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">Live Trading Signals Available</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trade Smart. Win Big.
            <br />
            <span className="gradient-text">Join AustinstayerFX.</span>
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Signals | Analysis | Mentorship
          </p>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Empowering traders with precision analysis and winning strategies in Forex & Synthetic Indices
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 py-6 text-lg hover-glow"
            >
              <a
                href="https://wa.me/263781498828?text=Hi%2C%20I%20found%20your%20number%20on%20your%20website.%20I%27m%20interested%20in%20your%20Forex%20signals%20and%20mentorship."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary px-8 py-6 text-lg">
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-accent" />
              <span>Verified Trader</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span>70+ Active Members</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span>88% Win Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
