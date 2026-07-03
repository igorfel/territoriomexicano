import { cn } from "@/lib/utils";

/*
 * Borda rasgada de papel artesanal entre cenas.
 * `fill` = cor da cena que "rasga" por cima (classe fill-*).
 */
export function TornEdge({
  flip,
  fill = "fill-night",
  className,
}: {
  flip?: boolean;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 42"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none relative z-10 -my-px block h-7 w-full md:h-10",
        flip && "rotate-180",
        fill,
        className,
      )}
    >
      <path d="M0 42 L0 20 L38 26 L74 14 L131 24 L182 10 L246 22 L301 15 L344 27 L419 12 L477 25 L539 9 L601 23 L662 13 L719 26 L783 11 L841 24 L906 16 L961 28 L1024 10 L1087 22 L1146 13 L1207 25 L1264 15 L1321 27 L1378 12 L1440 21 L1440 42 Z" />
    </svg>
  );
}
