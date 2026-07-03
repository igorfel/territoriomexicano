import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionTitleProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="text-display mt-5 text-4xl text-sand sm:text-5xl md:text-6xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-sand-dim md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
