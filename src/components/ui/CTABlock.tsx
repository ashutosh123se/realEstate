import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

interface CTABlockProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function CTABlock({ title, description, children, className }: CTABlockProps) {
  return (
    <Container size="form">
      <div
        className={cn(
          "glass-panel rounded-xl p-8 md:p-10 text-center border border-iron",
          className
        )}
      >
        <h2 className="font-display text-2xl md:text-3xl text-white mb-3">{title}</h2>
        {description && (
          <p className="text-ash text-sm md:text-base mb-6 max-w-md mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </Container>
  );
}
