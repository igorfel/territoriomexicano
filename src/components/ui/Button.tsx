import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variants = {
  primary:
    "bg-terracotta text-sand hover:bg-ember focus-visible:outline-gold shadow-[0_8px_30px_rgba(194,89,58,0.25)]",
  outline:
    "border border-sand/25 text-sand hover:border-gold hover:text-gold",
  ghost: "text-gold hover:text-ember",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5",
    variants[variant],
    variant !== "ghost" && sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
