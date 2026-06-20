import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { NAV_OFFSET } from "@/lib/layout/constants";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  image?: string;
  align?: "left" | "center";
  size?: "default" | "compact";
}

export function PageHeader({
  label,
  title,
  description,
  image,
  align = "left",
  size = "default",
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <section
      className="relative overflow-hidden border-b border-iron/50"
      style={{ paddingTop: NAV_OFFSET }}
    >
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-void/88" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-void" />
      )}

      <Container
        className={cn(
          "relative py-14 md:py-20",
          size === "compact" && "py-10 md:py-14",
          isCenter && "text-center"
        )}
      >
        {label && (
          <p className={cn("section-label mb-4", isCenter && "mx-auto w-fit")}>
            {label}
          </p>
        )}
        <h1
          className={cn(
            "font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight",
            isCenter ? "mx-auto max-w-4xl" : "max-w-3xl"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-4 md:mt-5 text-mist text-base md:text-lg leading-relaxed",
              isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
