import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ReservationBanner } from "@/components/sections/ReservationBanner";
import { galleryImages } from "@/lib/content";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Galeria — O clima da casa em imagens",
  description:
    "Fotos do Território Mexicano: pratos, drinks, salão e a energia das nossas noites em Natal. Veja o clima antes de reservar sua mesa.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Galeria", path: "/galeria" }])} />
      <PageHero
        eyebrow="Galeria"
        title={
          <>
            A casa, <em className="text-gold">em movimento</em>
          </>
        }
        description="Um passeio pelo salão, pela cozinha aberta e pelas mesas cheias — antes mesmo de você chegar."
        image={img.friendsToast}
        imageAlt="Brinde entre amigos no salão do restaurante"
      />

      <section className="container-site py-20 md:py-28">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 4) * 0.07}
              className={cn(
                "group relative overflow-hidden rounded-lg",
                image.span === "wide" && "col-span-2",
                image.span === "tall" && "row-span-2",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-obsidian/85 to-transparent p-4 text-xs text-sand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                {image.alt}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <ReservationBanner
        title={
          <>
            Agora imagine <em className="text-gold">com você na foto</em>
          </>
        }
        subtitle="A próxima noite boa da sua semana está a uma mensagem de distância."
      />
    </>
  );
}
