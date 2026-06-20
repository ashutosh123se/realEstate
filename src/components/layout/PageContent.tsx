import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { PAGE_BOTTOM } from "@/lib/layout/constants";

interface PageContentProps {
  children: React.ReactNode;
  size?: "default" | "narrow" | "form" | "wide";
  className?: string;
  noContainer?: boolean;
}

export function PageContent({
  children,
  size = "default",
  className,
  noContainer = false,
}: PageContentProps) {
  if (noContainer) {
    return (
      <div className={cn(PAGE_BOTTOM, className)}>
        {children}
      </div>
    );
  }

  return (
    <Container size={size} className={cn(PAGE_BOTTOM, className)}>
      {children}
    </Container>
  );
}
