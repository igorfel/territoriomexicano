import { cn } from "@/lib/utils";

/* Vapor/fumaça: elipses desfocadas subindo em loop. CSS puro. */
export function Smoke({ className }: { className?: string }) {
  const wisps = [
    { left: "38%", delay: "0s", opacity: 0.14, drift: "1.4rem", dur: "7.5s" },
    { left: "50%", delay: "-2.6s", opacity: 0.1, drift: "-1.8rem", dur: "9s" },
    { left: "60%", delay: "-5.2s", opacity: 0.16, drift: "0.8rem", dur: "8s" },
  ];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden",
        className,
      )}
    >
      {wisps.map((wisp, i) => (
        <span
          key={i}
          className="animate-smoke absolute bottom-[12%] h-40 w-16 rounded-full bg-cream blur-2xl will-change-transform"
          style={{
            left: wisp.left,
            animationDelay: wisp.delay,
            animationDuration: wisp.dur,
            ["--p-opacity" as string]: wisp.opacity,
            ["--p-drift" as string]: wisp.drift,
          }}
        />
      ))}
    </div>
  );
}
