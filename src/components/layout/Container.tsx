import { cn } from "@/lib/utils";

type ContainerSize = "default" | "narrow" | "form" | "wide";

const sizes: Record<ContainerSize, string> = {
  default: "max-w-container",
  wide: "max-w-[1600px]",
  narrow: "max-w-3xl",
  form: "max-w-2xl",
};

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({
  children,
  size = "default",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
