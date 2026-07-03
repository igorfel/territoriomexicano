import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Particles } from "@/components/effects/Particles";
import { TornEdge } from "@/components/effects/TornEdge";
import { img } from "@/lib/images";

/* CENA 03 — O fogo. Fagulhas sobem, flocos de chili caem. */
export function SceneFire() {
  return (
    <section className="relative">
      <div className="relative flex min-h-svh items-center overflow-hidden">
        <Image
          src={img.kitchenFire}
          alt="Chama alta na cozinha aberta, panela em fogo vivo"
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/30 to-night"
        />
        <Particles variant="ember" />
        <Particles variant="flake" className="opacity-60" />

        <div className="container-site relative">
          <div className="ml-auto max-w-xl text-right">
            <Reveal>
              <p className="eyebrow">Cena 03 · O fogo</p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-display mt-6 text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
                Doze horas
                <br />
                de <em className="text-ember">paciência.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 ml-auto max-w-md text-base leading-relaxed text-sand/90 md:text-lg">
                A barbacoa entra na madrugada e só sai quando desiste de
                resistir. Costela que desmancha no peso do garfo, defumada,
                escura, impaciente por uma tortilla quente.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="text-hand mt-8 text-2xl text-amber md:text-3xl">
                — se chegar cedo, dá pra ouvir.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <TornEdge flip fill="fill-charcoal" className="absolute bottom-0 z-20" />
    </section>
  );
}
