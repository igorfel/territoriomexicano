import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { site, units } from "@/lib/site";

/*
 * EPÍLOGO — créditos finais.
 * O filme acabou; aqui ficam os caminhos práticos (e o texto que o
 * Google lê): cardápio, eventos, unidades, horários.
 */
export function SceneEpilogue() {
  const paths = [
    {
      href: "/cardapio",
      label: "O cardápio",
      note: "Rodízio, tacos, margaritas — com preços, sem surpresa.",
    },
    {
      href: "/eventos",
      label: "As celebrações",
      note: "Aniversários, empresas e pedidos que precisam dar certo.",
    },
    {
      href: "/unidades",
      label: "Os endereços",
      note: `${units[0].shortName} e ${units[1].shortName}, em Natal/RN.`,
    },
  ];

  return (
    <section className="bg-night">
      <Marquee
        items={[
          "Guacamole na pedra",
          "Barbacoa de 12 horas",
          "Tortilla no comal",
          "Margarita de maracujá",
          "Churros con cajeta",
          "¡Buen provecho!",
        ]}
      />

      <div className="container-site py-20 md:py-28">
        <Reveal>
          <p className="max-w-2xl text-sm leading-relaxed text-sand-dim">
            O <strong className="font-semibold text-sand">Território Mexicano</strong>{" "}
            é restaurante mexicano em Natal/RN com rodízio, à la carte e bar de
            tequilaria nas unidades Ponta Negra e Tirol. Comida mexicana de
            verdade com alma brasileira — aberto de terça a domingo, happy hour
            de terça a sexta.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {paths.map((path, i) => (
            <Reveal as="li" key={path.href} delay={i * 0.08} className="bg-night">
              <Link
                href={path.href}
                className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-charcoal md:p-10"
              >
                <div>
                  <p className="text-xs tracking-[0.3em] text-sand-dim uppercase">
                    Continuar para
                  </p>
                  <p className="text-display mt-3 text-3xl text-cream transition-colors group-hover:text-copper">
                    {path.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sand-dim">
                    {path.note}
                  </p>
                </div>
                <ArrowRight
                  aria-hidden
                  className="h-5 w-5 text-copper transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-xs text-sand-dim">
            {site.instagramHandle} · 110 mil pessoas já acompanham a cozinha
          </p>
        </Reveal>
      </div>
    </section>
  );
}
