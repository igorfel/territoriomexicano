"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll da página enquanto o menu está aberto
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-80 transition-all duration-500",
        scrolled && !open
          ? "border-b border-line bg-night/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3"
          aria-label="Território Mexicano — página inicial"
        >
          <Image
            src="/logoterrtoriomexicano.webp"
            alt=""
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full border border-cream/20 object-cover"
          />
          <span className="font-display text-xl tracking-tight text-sand">
            Território <span className="text-copper italic">Mexicano</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "text-[13px] font-medium tracking-[0.14em] uppercase transition-colors hover:text-copper",
                pathname === link.href ? "text-copper" : "text-sand/75",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reservas"
            className="glow-candle hidden rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember sm:inline-flex"
          >
            Reservar mesa
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 text-sand lg:hidden"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu móvel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 flex h-svh flex-col justify-between bg-night px-6 pt-28 pb-10 lg:hidden"
          >
            <ul className="space-y-1">
              {[{ href: "/", label: "Início" }, ...NAV_LINKS].map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-display block py-2.5 text-4xl transition-colors",
                      pathname === link.href ? "text-copper" : "text-sand hover:text-copper",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/reservas"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-sand"
              >
                Reservar mesa
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
