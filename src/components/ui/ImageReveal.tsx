"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Mask reveal: image scales down inside a clipping frame while a
 * charcoal curtain slides away. Children = a fill <Image>.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ scale: reduce ? 1 : 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ y: reduce ? "101%" : "0%" }}
        whileInView={{ y: "101%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-10 bg-charcoal"
      />
    </div>
  );
}
