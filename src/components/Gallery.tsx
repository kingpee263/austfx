import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import stepIndexM30 from "@/assets/setups/step-index-m30.jpg";
import xauusdGoldM30 from "@/assets/setups/xauusd-gold-m30.jpg";
import audjpy1h from "@/assets/setups/audjpy-1h.jpg";
import gbpcadH1 from "@/assets/setups/gbpcad-h1.jpg";
import volatility100M15 from "@/assets/setups/volatility-100-m15.jpg";
import gainx999M15 from "@/assets/setups/gainx-999-m15.jpg";
import fxVol40M30 from "@/assets/setups/fx-vol-40-m30.jpg";
import gainx999H1 from "@/assets/setups/gainx-999-h1.jpg";

const setups = [
  { src: stepIndexM30, name: "Step Index M30", category: "Synthetic Index" },
  { src: xauusdGoldM30, name: "XAUUSD Gold M30", category: "Forex Pair" },
  { src: audjpy1h, name: "AUDJPY 1H", category: "Forex Pair" },
  { src: gbpcadH1, name: "GBPCAD H1", category: "Forex Pair" },
  { src: volatility100M15, name: "Volatility 100 (1s) M15", category: "Volatility Index" },
  { src: gainx999M15, name: "GainX 999 M15", category: "Synthetic Index" },
  { src: fxVol40M30, name: "FX Vol 40 M30", category: "Volatility Index" },
  { src: gainx999H1, name: "GainX 999 H1", category: "Synthetic Index" },
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const visibleCount = 4;

  // Auto-rotate every 30 seconds
  useEffect(() => {
    if (showAll) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(setups.length / visibleCount));
    }, 30000);

    return () => clearInterval(timer);
  }, [showAll]);

  const totalPages = Math.ceil(setups.length / visibleCount);
  const visibleSetups = setups.slice(currentIndex * visibleCount, (currentIndex + 1) * visibleCount);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Chart Analysis & Trade Setups
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real trade setups and analysis shared with members. Clean charts, precise entries, and consistent results.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleSetups.map((setup, index) => (
              <div
                key={`${setup.name}-${index}`}
                className="glass-card overflow-hidden group cursor-pointer hover-glow transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={setup.src}
                    alt={setup.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">{setup.category}</span>
                  <h3 className="font-display font-semibold text-foreground mt-1">{setup.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">More setups shared daily in the signal group.</p>
          <Button onClick={() => setShowAll(true)} variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View More Setups →
          </Button>
        </div>

        {/* Modal for all setups */}
        <Dialog open={showAll} onOpenChange={setShowAll}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background border-border">
            <DialogTitle className="font-display text-2xl font-bold mb-6">All Trade Setups</DialogTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {setups.map((setup, index) => (
                <div key={`modal-${setup.name}-${index}`} className="glass-card overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={setup.src}
                      alt={setup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{setup.category}</span>
                    <h3 className="font-display font-semibold text-foreground mt-1">{setup.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
