import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: StatItem[];
  className?: string;
  bordered?: boolean;
}

export function StatGrid({ stats, className, bordered = false }: StatGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
        bordered && "py-10 md:py-12 border-y border-iron",
        className
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-3xl md:text-4xl text-gold-warm leading-none">
            {stat.value}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-widest text-ash">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
