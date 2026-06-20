import { cn } from "@/lib/utils";
import { SECTION_SPACING } from "@/lib/layout/constants";

type SectionBg = "void" | "obsidian" | "transparent";
type SectionSpacing = keyof typeof SECTION_SPACING;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: SectionBg;
  spacing?: SectionSpacing;
  id?: string;
}

const bgClasses: Record<SectionBg, string> = {
  void: "bg-void",
  obsidian: "bg-obsidian",
  transparent: "",
};

export function Section({
  children,
  className,
  bg = "transparent",
  spacing = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(SECTION_SPACING[spacing], bgClasses[bg], className)}
    >
      {children}
    </section>
  );
}
