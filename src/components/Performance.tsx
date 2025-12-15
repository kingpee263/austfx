const performanceData = [
  { month: "Oct 2025", wins: 45, losses: 8, winRate: "85%", profit: "+$3,200" },
  { month: "Nov 2025", wins: 52, losses: 10, winRate: "84%", profit: "+$4,100" },
  { month: "Dec 2025", wins: 38, losses: 6, winRate: "86%", profit: "+$2,800" },
];

const stats = [
  { value: "88%", label: "Average Win Rate" },
  { value: "135", label: "Winning Trades (Q4)" },
  { value: "24", label: "Losing Trades (Q4)" },
  { value: "$10,100", label: "Total Profit (Q4)" },
];

export const Performance = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Performance</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Verified Track Record
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent results from our trading signals
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Monthly Breakdown Table */}
        <div className="glass-card overflow-hidden max-w-4xl mx-auto">
          <div className="p-6 border-b border-border">
            <h3 className="font-display text-xl font-bold">Monthly Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Month</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Wins</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Losses</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Win Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Profit</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row) => (
                  <tr key={row.month} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4 font-medium">{row.month}</td>
                    <td className="px-6 py-4 text-accent">{row.wins}</td>
                    <td className="px-6 py-4 text-destructive">{row.losses}</td>
                    <td className="px-6 py-4">{row.winRate}</td>
                    <td className="px-6 py-4 text-accent font-medium">{row.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="p-4 text-sm text-muted-foreground text-center">
            * Results based on signal group performance. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
};
