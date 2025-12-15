const testimonials = [
  {
    quote: "Austin's signals changed my trading completely. I went from losing consistently to making steady profits. His mentorship is worth every penny!",
    result: "+$2,400 in 3 months",
    name: "Tendai M.",
    location: "Harare, Zimbabwe",
    initials: "TM",
  },
  {
    quote: "The best forex mentor I've ever had. His analysis is always on point and he explains everything clearly. Highly recommend!",
    result: "85% win rate",
    name: "James K.",
    location: "Bulawayo, Zimbabwe",
    initials: "JK",
  },
  {
    quote: "Started as a complete beginner and now I'm trading confidently. Austin's patience and expertise made all the difference.",
    result: "From $500 to $3,200",
    name: "Sarah N.",
    location: "Johannesburg, SA",
    initials: "SN",
  },
  {
    quote: "The synthetic indices signals are incredibly accurate. Austin knows the markets inside out. My account has grown consistently.",
    result: "+150% account growth",
    name: "David C.",
    location: "Nairobi, Kenya",
    initials: "DC",
  },
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What Traders Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real traders who joined the community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 md:p-8 hover-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-foreground text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-accent font-medium text-sm px-3 py-1 bg-accent/10 rounded-full">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
