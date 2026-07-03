import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/ui/FaqList";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { site, units, waLink } from "@/lib/site";
import { faqs } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contato — Fale com o Território Mexicano",
  description:
    "Fale com o Território Mexicano em Natal/RN: WhatsApp, telefone, e-mail, Instagram e endereços das unidades Ponta Negra e Tirol.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp (reservas e dúvidas)",
      value: site.whatsappDisplay,
      href: waLink("Olá! Vim pelo site do Território Mexicano."),
    },
    {
      icon: Phone,
      label: "Telefone",
      value: site.whatsappDisplay,
      href: `tel:+${site.whatsappNumber}`,
    },
    {
      icon: Mail,
      label: "E-mail (eventos, imprensa e parcerias)",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: site.instagramHandle,
      href: site.instagram,
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contato", path: "/contato" }])} />
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Fala com a gente — <em className="text-copper">respondemos rápido</em>
          </>
        }
        description="Reserva, evento, parceria ou só saudade de taco: todos os caminhos estão aqui."
        image={img.barDark}
        imageAlt="Bar do restaurante com garrafas iluminadas em âmbar"
      />

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <h2 className="text-display text-3xl text-sand md:text-4xl">Canais</h2>
            </Reveal>
            <ul className="mt-10 space-y-4">
              {channels.map((channel, i) => (
                <Reveal as="li" key={channel.label} delay={i * 0.08}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-5 rounded-xl border border-line bg-charcoal p-6 transition-colors hover:border-copper/60"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-copper/40 text-copper">
                      <channel.icon aria-hidden className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs tracking-[0.2em] text-sand-dim uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-1 block font-semibold text-sand group-hover:text-copper">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <h2 className="text-display text-3xl text-sand md:text-4xl">
                Endereços
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-4">
              {units.map((unit, i) => (
                <Reveal as="li" key={unit.id} delay={i * 0.08}>
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 rounded-xl border border-line bg-charcoal p-6 transition-colors hover:border-copper/60"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-copper/40 text-copper">
                      <MapPin aria-hidden className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-sand group-hover:text-copper">
                        {unit.shortName}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-sand-dim">
                        {unit.address} — {unit.neighborhood}, {unit.city}
                      </span>
                      <span className="mt-2 block text-xs font-semibold tracking-[0.18em] text-copper uppercase">
                        Ver no mapa →
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <div className="mt-8 rounded-xl border border-line p-6">
                <h3 className="eyebrow">Horários</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {site.openingHours.map((slot) => (
                    <li key={slot.days} className="flex justify-between gap-4">
                      <span className="text-sand-dim">{slot.days}</span>
                      <span className="font-medium text-sand">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal">
        <div className="container-site py-20 md:py-28">
          <Reveal>
            <h2 className="text-display text-3xl text-sand md:text-4xl">
              Antes de perguntar, espia aqui
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList faqs={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>
    </>
  );
}
