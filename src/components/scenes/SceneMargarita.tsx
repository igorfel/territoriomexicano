"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/*
 * CENA 04 — A margarita.
 * Interação-assinatura: a taça se enche conforme você rola.
 * SVG desenhado com leve imperfeição de traço — nada de vetor clínico.
 */
export function SceneMargarita() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Líquido sobe (translateY dentro do clip da taça)
  const liquidY = useTransform(scrollYProgress, [0.12, 0.72], [74, 2]);
  // Rodela de limão gira devagar
  const limeRotate = useTransform(scrollYProgress, [0, 1], [0, 150]);
  // Fases de texto
  const introOpacity = useTransform(scrollYProgress, [0, 0.28, 0.42], [1, 1, 0]);
  const outroOpacity = useTransform(scrollYProgress, [0.62, 0.8], [0, 1]);
  const outroY = useTransform(scrollYProgress, [0.62, 0.8], [24, 0]);

  return (
    <section ref={ref} className="relative h-[240svh] bg-charcoal">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden">
        {/* Halo de bar atrás da taça */}
        <div
          aria-hidden
          className="animate-flicker absolute top-1/2 left-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(90,163,154,0.10),rgba(227,164,88,0.07),transparent)] motion-reduce:animate-none"
        />

        <p className="eyebrow relative">Cena 04 · No bar</p>

        {/* Frase de abertura da cena */}
        <motion.p
          style={reduce ? undefined : { opacity: introOpacity }}
          className="text-display relative mt-6 px-6 text-center text-3xl text-cream sm:text-4xl md:text-5xl"
        >
          Enquanto isso, <em className="text-turquoise">no bar…</em>
        </motion.p>

        {/* A taça */}
        <svg
          viewBox="0 0 200 240"
          role="img"
          aria-label="Taça de margarita se enchendo enquanto a página rola"
          className="relative mt-4 h-[46svh] max-h-[430px] w-auto"
        >
          <defs>
            <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d9d489" />
              <stop offset="70%" stopColor="#c9c06a" />
              <stop offset="100%" stopColor="#e3a458" />
            </linearGradient>
            <clipPath id="bowl">
              <path d="M33 45 C 34 43, 166 43, 167 45 C 160 78, 128 106, 101 109 C 72 106, 40 78, 33 45 Z" />
            </clipPath>
          </defs>

          {/* Líquido subindo, confinado à taça */}
          <g clipPath="url(#bowl)">
            <motion.rect
              x="28"
              y="40"
              width="144"
              height="74"
              fill="url(#liquid)"
              opacity="0.92"
              style={reduce ? { y: 2 } : { y: liquidY }}
            />
            {/* brilho na superfície do líquido */}
            <motion.rect
              x="28"
              y="38"
              width="144"
              height="3"
              fill="#f2e7d0"
              opacity="0.35"
              style={reduce ? { y: 2 } : { y: liquidY }}
            />
          </g>

          {/* Traço da taça — levemente irregular, feito à mão */}
          <path
            d="M30 42 C 32 40, 168 40, 170 42 C 163 79, 129 108, 102 111 C 71 108, 37 79, 30 42 Z"
            fill="none"
            stroke="#f2e7d0"
            strokeWidth="2.5"
            strokeLinejoin="round"
            opacity="0.85"
          />
          {/* Borda de sal */}
          <path
            d="M28 38 C 40 34, 160 34, 172 38"
            fill="none"
            stroke="#dcc9a4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 5"
            opacity="0.9"
          />
          {/* Haste e pé */}
          <path
            d="M101 111 C 100 130, 101 150, 100 172"
            stroke="#f2e7d0"
            strokeWidth="2.5"
            opacity="0.85"
          />
          <path
            d="M62 196 C 63 188, 137 188, 138 196 C 120 191, 80 191, 62 196 Z"
            fill="none"
            stroke="#f2e7d0"
            strokeWidth="2.5"
            strokeLinejoin="round"
            opacity="0.85"
          />

          {/* Rodela de limão girando na borda */}
          <motion.g
            style={
              reduce
                ? undefined
                : { rotate: limeRotate, transformBox: "fill-box", transformOrigin: "center" }
            }
          >
            <circle cx="168" cy="40" r="17" fill="#7d8a55" opacity="0.95" />
            <circle cx="168" cy="40" r="13" fill="#d9d489" />
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1="168"
                y1="40"
                x2={168 + 12 * Math.cos((i * Math.PI) / 3)}
                y2={40 + 12 * Math.sin((i * Math.PI) / 3)}
                stroke="#7d8a55"
                strokeWidth="1.5"
              />
            ))}
          </motion.g>
        </svg>

        {/* Fecho da cena */}
        <motion.div
          style={reduce ? undefined : { opacity: outroOpacity, y: outroY }}
          className="relative mt-6 px-6 text-center"
        >
          <p className="text-base leading-relaxed text-sand/90 md:text-lg">
            Tequila 100% agave, limão espremido na hora,
            <br className="hidden sm:block" />
            sal com chili moído na casa.
          </p>
          <p className="mt-3 text-sm text-sand-dim">
            Terça a sexta, das 17h às 19h30, a clássica{" "}
            <span className="text-hand text-xl text-amber">vira duas.</span>
          </p>
          <Link
            href="/cardapio#margaritas-drinks"
            className="mt-6 inline-block text-sm font-semibold text-turquoise underline-offset-4 hover:underline"
          >
            Carta de margaritas →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
