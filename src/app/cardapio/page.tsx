import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ReservationBanner } from "@/components/sections/ReservationBanner";
import { menu, menuTags, rodizio } from "@/lib/menu";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cardápio — Rodízio, tacos, margaritas e mais",
  description:
    "Cardápio completo do Território Mexicano em Natal: rodízio mexicano por R$ 109,90, tacos de barbacoa, guacamole na hora, margaritas artesanais e sobremesas.",
  alternates: { canonical: "/cardapio" },
};

export default function CardapioPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Cardápio", path: "/cardapio" }])} />
      <PageHero
        eyebrow="Cardápio"
        title={
          <>
            Receitas com <em className="text-gold">passaporte carimbado</em>
          </>
        }
        description="Tudo feito na casa, todos os dias. Preços em reais, fome por sua conta."
        image={img.tacosBoard}
        imageAlt="Tábua de tacos variados com molhos e limão"
      />

      {/* Navegação de categorias (âncoras — zero JS) */}
      <nav
        aria-label="Categorias do cardápio"
        className="sticky top-20 z-40 border-y border-line bg-obsidian/90 backdrop-blur-md md:top-24"
      >
        <div className="container-site flex gap-6 overflow-x-auto py-4 text-sm whitespace-nowrap">
          <a href="#rodizio" className="font-semibold text-gold">
            Rodízio
          </a>
          {menu.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="text-sand-dim transition-colors hover:text-gold"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Rodízio em destaque */}
      <section id="rodizio" className="scroll-mt-40 border-b border-line bg-charcoal">
        <div className="container-site py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <p className="eyebrow">A experiência completa</p>
              <h2 className="text-display mt-4 text-4xl text-sand md:text-6xl">
                Rodízio mexicano
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-sand-dim">
                {rodizio.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {rodizio.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-sand/90">
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-gold/30 bg-obsidian p-10 text-center">
                <p className="eyebrow">Por pessoa</p>
                <p className="text-display mt-4 text-6xl text-gold">{rodizio.price}</p>
                <p className="mt-3 text-sm text-sand-dim">{rodizio.priceNote}</p>
                <p className="mt-1 text-xs text-sand-dim">{rodizio.kidsNote}</p>
                <Button href="/reservas" className="mt-8 w-full">
                  Reservar rodízio
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categorias à la carte */}
      <div className="container-site divide-y divide-line">
        {menu.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-40 py-20 md:py-28"
          >
            <Reveal className="max-w-2xl">
              <h2 className="text-display text-4xl text-sand md:text-5xl">
                {category.title}
              </h2>
              {category.note && (
                <p className="mt-4 text-sand-dim italic">{category.note}</p>
              )}
            </Reveal>
            <ul className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
              {category.items.map((item, i) => (
                <Reveal as="li" key={item.name} delay={(i % 2) * 0.08}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-display text-xl text-sand">{item.name}</h3>
                    <span
                      aria-hidden
                      className="flex-1 border-b border-dotted border-sand/25"
                    />
                    <p className="shrink-0 font-semibold text-gold">{item.price}</p>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-sand-dim">
                    {item.description}
                  </p>
                  {item.tags && (
                    <p className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "text-[11px] font-semibold tracking-[0.18em] uppercase",
                            menuTags[tag].color,
                          )}
                        >
                          {menuTags[tag].label}
                        </span>
                      ))}
                    </p>
                  )}
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <ReservationBanner
        title={
          <>
            Escolheu? <em className="text-gold">A mesa é por nossa conta</em>
          </>
        }
        subtitle="Reserve agora e chegue com o pedido pronto na cabeça — ou deixe o rodízio decidir por você."
      />
    </>
  );
}
