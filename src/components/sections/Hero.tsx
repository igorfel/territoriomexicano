import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden">
      {/* Fundo cinematográfico com Ken Burns sutil */}
      <div className="absolute inset-0 motion-safe:animate-kenburns">
        <Image
          src={img.hero}
          alt="Mesa servida à meia-luz no salão do Território Mexicano"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-obsidian/55 via-transparent to-transparent"
      />

      <div className="container-site relative pt-40 pb-20 md:pb-28">
        <Reveal delay={0.1}>
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            Natal · Ponta Negra & Tirol
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <h1 className="text-display mt-6 max-w-4xl text-[13vw] leading-[0.95] text-sand sm:text-7xl md:text-8xl">
            O México inteiro,
            <br />
            <em className="text-gold">servido à sua mesa.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand/85 md:text-xl">
            Rodízio com mais de 20 receitas originais, tortillas feitas na casa
            e margaritas que já viraram lenda na cidade. Entre — a festa começa
            quando você senta.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/reservas" size="lg">
              Reservar mesa
            </Button>
            <Button href="/cardapio" variant="outline" size="lg">
              Conhecer o cardápio
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-sand/70">
            <span className="flex items-center gap-2">
              <span className="flex text-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {site.rating.value} no Google · {site.rating.count.toLocaleString("pt-BR")}+ avaliações
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-sand/25 sm:block" />
            <span>110 mil pessoas acompanham no Instagram</span>
          </div>
        </Reveal>
      </div>

      {/* Indicador de scroll */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-12 w-7 rounded-full border border-sand/30 p-1.5">
          <div className="h-2.5 w-full rounded-full bg-gold/80 motion-safe:animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
