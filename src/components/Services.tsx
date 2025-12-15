import { Check, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Clean chart setups",
  "Covers Boom/Crash, Volatility, and FX",
  "Real-time analysis",
  "Mentorship for beginners and advanced traders",
];

const signalFeatures = [
  "Daily trade signals",
  "Market analysis",
  "Entry & exit points",
  "Risk management tips",
];

const premiumFeatures = [
  "Everything in Signal Group",
  "Personal trading sessions",
  "Strategy development",
  "Portfolio review",
  "24/7 support",
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-8">
            Join WhatsApp Group
          </h2>

          {/* Feature List */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Signal Group */}
          <div className="glass-card p-8 hover-glow transition-all duration-300">
            <h3 className="font-display text-2xl font-bold mb-2">Signal Group</h3>
            <p className="text-muted-foreground mb-4">Get started with daily signals</p>
            <div className="text-3xl font-bold text-accent mb-6">Join Free</div>

            <ul className="space-y-3 mb-8">
              {signalFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <a
                href="https://chat.whatsapp.com/FPrxl7V6oBY3eiov1J4kZ5?mode=hqrt2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Join WhatsApp Group
              </a>
            </Button>
          </div>

          {/* Premium Mentorship */}
          <div className="glass-card p-8 relative border-primary/50 hover-glow glow-box transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1">
              <Star className="h-3 w-3" />
              Popular
            </div>

            <h3 className="font-display text-2xl font-bold mb-2">Premium Mentorship</h3>
            <p className="text-muted-foreground mb-4">Personal 1-on-1 coaching</p>
            <div className="text-3xl font-bold text-primary mb-6">Contact for Pricing</div>

            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <a
                href="https://chat.whatsapp.com/FPrxl7V6oBY3eiov1J4kZ5?mode=hqrt2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Join WhatsApp Group
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
