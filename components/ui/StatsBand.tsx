interface Stat {
  value: string;
  label: string;
}

interface StatsBandProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function StatsBand({ stats, title, subtitle, children }: StatsBandProps) {
  return (
    <section className="bg-navy-midnight py-16">
      <div className="max-w-container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-white/70 text-base max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {stats.map((stat, i) => (
            <div key={i} className="text-center min-w-[140px]">
              <div className="font-display font-extrabold text-4xl text-orange-soft">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}
