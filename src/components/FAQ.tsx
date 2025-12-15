import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I join the signal group?",
    answer: "Simply click any 'Join via WhatsApp' button on this page to send a message directly. I'll add you to the signal group within 24 hours.",
  },
  {
    question: "What markets do you cover?",
    answer: "I specialize in Deriv Synthetic Indices (Boom/Crash, Volatility indices), Weltrade Synthetic assets, and major Forex currency pairs like EUR/USD, GBP/USD, and XAU/USD.",
  },
  {
    question: "Is the signal group really free?",
    answer: "Yes! The basic signal group is completely free. You'll receive daily trade signals, market analysis, and entry/exit points at no cost. Premium mentorship is available for those who want personal coaching.",
  },
  {
    question: "What's your average win rate?",
    answer: "My signals maintain an average win rate of 88% over the past year. However, trading involves risk and past performance doesn't guarantee future results.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "You can start with as little as $50-100. I always recommend starting small and only risking what you can afford to lose while you learn.",
  },
  {
    question: "What's included in Premium Mentorship?",
    answer: "Premium mentorship includes everything in the signal group plus: personal 1-on-1 trading sessions, custom strategy development, portfolio review, and 24/7 direct support via WhatsApp.",
  },
  {
    question: "Do you guarantee profits?",
    answer: "No legitimate trader can guarantee profits. Trading involves significant risk. I provide analysis and signals, but you're responsible for your own trading decisions.",
  },
  {
    question: "What time zone are signals sent in?",
    answer: "Signals are sent in CAT (Central Africa Time / GMT+2). I typically send signals during peak market hours for the instruments we trade.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/50"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <a
                href="https://wa.me/263781498828?text=Hi%2C%20I%20have%20a%20question%20about%20your%20trading%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Message me on WhatsApp →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
