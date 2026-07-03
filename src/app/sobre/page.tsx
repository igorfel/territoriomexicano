import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Story } from "@/components/sections/Story";
import { ReservationBanner } from "@/components/sections/ReservationBanner";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sobre nós — Nossa história, nossa cozinha",
  description:
    "Do food truck ao melhor restaurante mexicano de Natal: conheça a história do Território Mexicano, nossos valores e a cozinha fiel às receitas originais do México.",
  alternates: { canonical: "/sobre" },
};

const values = [
  {
    title: "Autenticidade",
    description:
      "Barbacoa de 12 horas, milho nixtamalizado, salsas de molcajete. Método mexicano de verdade, sem atalhos.",
  },
  {
    title: "Hospitalidade",
    description:
      "Aqui ninguém é cliente — é convidado. A equipe que os visitantes chamam de 'excepcional' nas avaliações é o coração da casa.",
  },
  {
    title: "Festa",
    description:
      "Cores, música e mesa cheia. Acreditamos que comer bem é um evento, não uma tarefa.",
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Sobre", path: "/sobre" }])} />
      <PageHero
        eyebrow="Sobre nós"
        title={
          <>
            Nascemos de <em className="text-gold">uma teimosia deliciosa</em>
          </>
        }
        description="Servir o México como ele é — e recebê-lo como o Brasil sabe receber."
        image={img.mexicoColors}
        imageAlt="Cores e texturas mexicanas na decoração do restaurante"
      />

      <section className="container-site py-24 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <ImageReveal className="aspect-[4/5] rounded-2xl">
            <Image
              src={img.chefPlating}
              alt="Chef finalizando prato na cozinha aberta do restaurante"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <div>
            <SectionTitle
              eyebrow="Quem somos"
              title={
                <>
                  Daniel, Ana Luíza e uma <em className="text-gold">cozinha obcecada</em>
                </>
              }
              description="Em 2019, Daniel e Ana Luíza Gouvêa venderam tacos por noites seguidas em um food truck que lotava as ruas de Natal. A pergunta que os movia continua a mesma: por que o Brasil merece um México de mentira? A resposta virou restaurante em 2021 — e hoje ocupa dois endereços na cidade."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 leading-relaxed text-sand-dim">
                Nossa cozinha aberta trabalha com tortillas de milho feitas
                todos os dias, cortes cozidos lentamente e pimentas que chegam
                de produtores locais. O tempero é mexicano; a generosidade da
                porção e o jeito de servir são potiguares. É essa mistura que
                os nossos convidados descrevem como{" "}
                <em className="text-sand">
                  “comida mexicana de qualidade com um toque brasileiro”
                </em>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Story />

      <section className="container-site py-24 md:py-36">
        <SectionTitle
          eyebrow="Nosso compromisso"
          align="center"
          title={
            <>
              Três valores, <em className="text-gold">uma mesa</em>
            </>
          }
        />
        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal
              as="li"
              key={value.title}
              delay={i * 0.12}
              className="rounded-xl border border-line bg-charcoal p-8 md:p-10"
            >
              <p className="text-display text-6xl text-terracotta/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-display mt-4 text-2xl text-sand">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-sand-dim">{value.description}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <ReservationBanner
        title={
          <>
            Venha escrever <em className="text-gold">o próximo capítulo</em>
          </>
        }
        subtitle="A história fica melhor com você à mesa. Reserve pelo WhatsApp em menos de um minuto."
      />
    </>
  );
}
