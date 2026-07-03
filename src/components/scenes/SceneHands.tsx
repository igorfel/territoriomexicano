"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Smoke } from "@/components/effects/Smoke";
import { img } from "@/lib/images";

/*
 * CENA 02 — As mãos.
 * Momento Apple: tela escura, uma frase; ao rolar, a frase cede lugar
 * às mãos que prensam a massa. Vapor sobe. Sem cards, sem UI.
 */
export function SceneHands() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const sentenceOpacity = useTransform(scrollYProgress, [0, 0.22, 0.38], [1, 1, 0]);
  const sentenceY = useTransform(scrollYProgress, [0.22, 0.38], [0, -40]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.3, 1], [1.15, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  return (
    <section ref={ref} className="relative h-[260svh] bg-night">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {/* A imagem revela por trás da frase */}
        <motion.div
          style={reduce ? { opacity: 0.75 } : { opacity: imageOpacity, scale: imageScale }}
          className="absolute inset-0"
        >
          <Image
            src={img.chefPlating}
            alt="Mãos de chef trabalhando a massa na cozinha, em close"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/60"
          />
          <Smoke />
        </motion.div>

        {/* A frase solitária */}
        <motion.p
          style={reduce ? undefined : { opacity: sentenceOpacity, y: sentenceY }}
          className="text-display relative px-6 text-center text-4xl leading-[1.08] text-cream sm:text-5xl md:text-6xl"
        >
          Toda tortilla
          <br />
          nasce <em className="text-amber">à mão.</em>
        </motion.p>

        {/* Legenda final sobre a imagem */}
        <motion.div
          style={reduce ? undefined : { opacity: captionOpacity }}
          className="absolute right-0 bottom-16 left-0 md:bottom-24"
        >
          <div className="container-site">
            <p className="eyebrow">Cena 02 · As mãos</p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-sand/90 md:text-lg">
              Milho nixtamalizado, prensado todos os dias, o dia inteiro.
              A máquina não sabe fazer — e a gente não quer ensinar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
