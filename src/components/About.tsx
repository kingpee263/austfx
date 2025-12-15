import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 88, suffix: "%", label: "Accuracy Rate" },
  { value: 100, suffix: "+", label: "Traders Mentored" },
  { value: 5, suffix: "+", label: "Markets Covered" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Who is AustinstayerFX?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Austin Paradzai is a Harare-based trader with 3+ years of experience in Forex markets. He specializes in Deriv Synthetic Indices, Weltrade Synthetic assets, and currency pairs.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              His mission is to help others win through powerful analysis and consistent mentorship. With a proven track record and dedication to trader education, Austin has helped hundreds of traders achieve their financial goals.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 glass-card rounded-r-xl">
              <p className="text-foreground italic text-lg mb-4">
                "Trading is not just about making money—it's about mastering the markets and helping others achieve financial freedom."
              </p>
              <cite className="text-primary font-medium">— Austin Paradzai</cite>
            </blockquote>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 md:p-8 text-center hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
