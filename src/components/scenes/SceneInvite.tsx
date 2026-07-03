import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Particles } from "@/components/effects/Particles";
import { TornEdge } from "@/components/effects/TornEdge";
import { reserveLink, site } from "@/lib/site";

/*
 * CENA 06 — O convite.
 * Papel artesanal, azulejo quase invisível, o botão aceso como vela.
 */
export function SceneInvite() {
  return (
    <section className="relative">
      <TornEdge fill="fill-night" className="absolute top-0 z-20 rotate-180" />
      <div className="bg-paper bg-talavera relative overflow-hidden py-32 md:py-44">
        <Particles variant="dust" className="opacity-70" />

        <div className="container-site relative text-center">
          <Reveal>
            <Image
              src="/logoterrtoriomexicano.webp"
              alt=""
              width={96}
              height={96}
              className="mx-auto -rotate-3 rounded-full border-2 border-cream/20 object-cover shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-display mx-auto mt-10 max-w-2xl text-5xl leading-[1.03] text-cream sm:text-6xl md:text-7xl">
              Sexta que vem,
              <br />
              <em className="text-amber">você tem mesa.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-hand mt-8 text-2xl text-copper md:text-3xl">
              aniversário · date night · os amigos · sem motivo nenhum
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-col items-center gap-5">
              <a
                href={reserveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-candle inline-flex items-center gap-3 rounded-full bg-terracotta px-10 py-5 text-lg font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
              >
                <MessageCircle aria-hidden className="h-5 w-5" />
                Reservar pelo WhatsApp
              </a>
              <p className="text-sm text-sand-dim">
                Resposta em minutos · sem custo ·{" "}
                <Link
                  href="/reservas"
                  className="text-copper underline-offset-4 hover:underline"
                >
                  ou reserve pelo site
                </Link>
              </p>
              <p className="text-xs text-sand-dim/80">
                {site.whatsappDisplay} · Ponta Negra & Tirol, Natal/RN
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
