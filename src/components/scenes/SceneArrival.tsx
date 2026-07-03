import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { TornEdge } from "@/components/effects/TornEdge";
import { img } from "@/lib/images";

/* CENA 01 — A chegada. Você ouve a casa antes de ver. */
export function SceneArrival() {
  return (
    <section className="relative">
      <TornEdge fill="fill-night" className="absolute top-0 z-20" />
      <div className="relative flex min-h-svh items-end overflow-hidden">
        <Parallax amount={70} className="absolute inset-0 scale-110">
          <Image
            src={img.interiorWarm}
            alt="Salão em luz âmbar, mesas ocupadas, clima de início de noite"
            fill
            sizes="100vw"
            className="object-cover opacity-55"
          />
        </Parallax>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-night/70"
        />

        <div className="container-site relative pb-24 md:pb-32">
          <Reveal>
            <p className="eyebrow">Cena 01 · A chegada</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-display mt-6 max-w-2xl text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
              Você ouve a casa
              <br />
              antes de ver.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sand/90 md:text-lg">
              Gelo batendo no shaker. Uma mesa grande rindo do próprio
              brinde. Milho tostando no comal. A porta abre e a cidade
              fica do lado de fora.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
