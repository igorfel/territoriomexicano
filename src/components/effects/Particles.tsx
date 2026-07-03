import { cn } from "@/lib/utils";

type Variant = "dust" | "ember" | "flake";

/*
 * Partículas atmosféricas em CSS puro (sem canvas, sem JS de runtime).
 * Valores pseudo-aleatórios derivados do índice — determinísticos,
 * portanto idênticos no servidor e no cliente (sem hydration mismatch).
 */
const rnd = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const config: Record<
  Variant,
  { count: number; animation: string; render: (r: (s: number) => number) => React.CSSProperties }
> = {
  dust: {
    count: 26,
    animation: "animate-dust",
    render: (r) => ({
      width: 1 + r(1) * 2.5,
      height: 1 + r(1) * 2.5,
      background: "rgba(242, 231, 208, 0.65)",
      borderRadius: "9999px",
      filter: "blur(0.5px)",
      ["--p-opacity" as string]: 0.15 + r(2) * 0.4,
      ["--p-drift" as string]: `${(r(3) - 0.5) * 8}rem`,
    }),
  },
  ember: {
    count: 18,
    animation: "animate-ember-rise",
    render: (r) => ({
      width: 2 + r(1) * 3,
      height: 2 + r(1) * 3,
      background: r(4) > 0.5 ? "#e3a458" : "#cf6b31",
      borderRadius: "9999px",
      boxShadow: "0 0 6px rgba(227, 164, 88, 0.8)",
      ["--p-drift" as string]: `${(r(3) - 0.5) * 10}rem`,
    }),
  },
  flake: {
    count: 16,
    animation: "animate-flake-fall",
    render: (r) => ({
      width: 3 + r(1) * 4,
      height: 1.5 + r(1) * 2,
      background: r(4) > 0.6 ? "#93301f" : "#b65c38",
      borderRadius: "2px",
      ["--p-drift" as string]: `${(r(3) - 0.5) * 12}rem`,
      ["--p-spin" as string]: `${120 + r(5) * 300}deg`,
    }),
  },
};

export function Particles({
  variant = "dust",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { count, animation, render } = config[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden",
        className,
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        const r = (salt: number) => rnd(i, salt);
        return (
          <span
            key={i}
            className={cn("absolute will-change-transform", animation)}
            style={{
              left: `${r(0) * 100}%`,
              bottom: variant === "flake" ? "auto" : "-4vh",
              top: variant === "flake" ? "-6vh" : "auto",
              animationDelay: `${r(6) * -16}s`,
              animationDuration: `${
                variant === "dust"
                  ? 12 + r(7) * 10
                  : variant === "ember"
                    ? 5 + r(7) * 5
                    : 7 + r(7) * 6
              }s`,
              ...render(r),
            }}
          />
        );
      })}
    </div>
  );
}
