import { cn } from "@/lib/utils";

/** CSS-only infinite marquee. Content is duplicated for the seamless loop. */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="text-display flex items-center whitespace-nowrap px-6 text-2xl text-sand/35 italic md:px-10 md:text-4xl"
        >
          {item}
          <span aria-hidden className="ml-12 text-copper/50 not-italic md:ml-20">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "flex overflow-hidden border-y border-line bg-charcoal py-6 md:py-8",
        className,
      )}
    >
      <div className="flex animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
