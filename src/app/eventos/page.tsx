import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { eventPackages } from "@/lib/content";
import { waLink } from "@/lib/site";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Eventos — Aniversários, corporativo e celebrações",
  description:
    "Comemore no Território Mexicano: aniversários com cortesia, eventos corporativos para até 120 pessoas e celebrações íntimas. Restaurante para festas em Natal/RN.",
  alternates: { canonical: "/eventos" },
};

const eventFaqs = [
  {
    question: "Com quanta antecedência devo reservar um evento?",
    answer:
      "Para grupos até 20 pessoas, 48 horas costumam bastar. Eventos corporativos e festas maiores pedem de 1 a 2 semanas para fecharmos menu, espaço e equipe.",
  },
  {
    question: "Existe valor mínimo de consumo?",
    answer:
      "Depende do formato: no rodízio, o valor é por pessoa; nos menus fechados, trabalhamos com pacotes a partir de R$ 89 por convidado. Não cobramos taxa de espaço em formatos padrão.",
  },
  {
    question: "Posso levar bolo e decoração?",
    answer:
      "Pode — e a equipe ajuda a montar. Também produzimos bolo e mesa doce sob encomenda, se preferir chegar com tudo pronto.",
  },
  {
    question: "Vocês emitem nota fiscal para empresas?",
    answer:
      "Sim. Para eventos corporativos, emitimos NF e aceitamos faturamento mediante aprovação prévia.",
  },
];

export default function EventosPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Eventos", path: "/eventos" }])} />
      <PageHero
        eyebrow="Eventos"
        title={
          <>
            Toda comemoração merece <em className="text-copper">pimenta</em>
          </>
        }
        description="Aniversários, confraternizações e pedidos que precisam dar certo — cuidamos da festa, você cuida do brinde."
        image={img.friendsTable}
        imageAlt="Grupo de amigos celebrando à mesa do restaurante"
      />

      {eventPackages.map((pack, i) => (
        <section
          key={pack.id}
          id={pack.id}
          className={cn(
            "scroll-mt-28",
            i % 2 === 1 && "border-y border-line bg-charcoal",
          )}
        >
          <div className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
            <ImageReveal
              className={cn(
                "aspect-[4/3] rounded-2xl",
                i % 2 === 1 && "lg:order-2",
              )}
            >
              <Image
                src={pack.image}
                alt={pack.imageAlt}
                fill
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </ImageReveal>
            <div>
              <Reveal>
                <p className="eyebrow">{pack.subtitle}</p>
                <h2 className="text-display mt-4 text-4xl text-sand md:text-5xl">
                  {pack.title}
                </h2>
                <p className="mt-6 max-w-lg leading-relaxed text-sand-dim">
                  {pack.description}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="mt-8 space-y-3">
                  {pack.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-sand/90 md:text-base"
                    >
                      <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10">
                  <Button
                    href={waLink(
                      `Olá! Quero saber mais sobre ${pack.title.toLowerCase()} no Território Mexicano.`,
                    )}
                    external
                  >
                    Planejar meu evento
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="container-site py-20 md:py-28">
        <SectionTitle
          eyebrow="Antes de fechar"
          title={
            <>
              Perguntas de quem <em className="text-copper">já está planejando</em>
            </>
          }
        />
        <div className="mt-12">
          <FaqList faqs={eventFaqs} />
        </div>
      </section>
    </>
  );
}
