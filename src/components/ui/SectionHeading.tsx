import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        isCenter && "text-center flex flex-col items-center w-full",
        className
      )}
    >
      {label && (
        <p className="section-label mb-3 w-full">{label}</p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl text-white leading-tight",
          isCenter && "max-w-3xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-mist text-base md:text-lg leading-relaxed",
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
