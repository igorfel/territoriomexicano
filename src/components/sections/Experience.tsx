import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { rodizio } from "@/lib/menu";
import { img } from "@/lib/images";

/** Vitrine do rodízio — a experiência âncora da casa. */
export function Experience() {
  return (
    <section className="relative overflow-hidden py-28 md:py-44">
      <Parallax amount={90} className="absolute inset-0 scale-110">
        <Image
          src={img.spreadTable}
          alt="Mesa repleta de pratos mexicanos servidos no rodízio"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </Parallax>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-night via-night/70 to-night"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">A experiência</p>
            <h2 className="text-display mt-5 text-5xl text-sand md:text-7xl">
              Rodízio <em className="text-copper">mexicano</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
              {rodizio.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mx-auto mt-12 grid max-w-2xl gap-x-10 gap-y-4 text-left sm:grid-cols-2">
              {rodizio.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sand/90">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-copper" />
                  <span className="text-sm leading-relaxed md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 inline-flex flex-col items-center gap-2">
              <p className="text-display text-5xl text-copper md:text-6xl">
                {rodizio.price}
              </p>
              <p className="text-sm text-sand-dim">{rodizio.priceNote}</p>
              <p className="text-xs text-sand-dim">{rodizio.kidsNote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/reservas" size="lg">
                Reservar para hoje
              </Button>
              <Button href="/cardapio#rodizio" variant="outline" size="lg">
                Como funciona
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
