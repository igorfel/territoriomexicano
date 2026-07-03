import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { UnitCard } from "@/components/ui/UnitCard";
import { ReservationBanner } from "@/components/sections/ReservationBanner";
import { site, units } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Unidades — Ponta Negra e Tirol, Natal/RN",
  description:
    "Duas casas do Território Mexicano em Natal: Ponta Negra (Av. Engenheiro Roberto Freire) e Tirol (Av. Prudente de Morais). Endereços, horários e como chegar.",
  alternates: { canonical: "/unidades" },
};

export default function UnidadesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Unidades", path: "/unidades" }])} />
      <PageHero
        eyebrow="Unidades"
        title={
          <>
            O México fica <em className="text-copper">mais perto do que parece</em>
          </>
        }
        description="Duas casas, o mesmo cardápio completo, a mesma festa. Escolha o seu lado de Natal."
        image={img.interiorLounge}
        imageAlt="Interior aconchegante do restaurante com iluminação âmbar"
      />

      <section className="container-site py-20 md:py-28">
        <ul className="grid gap-8 md:grid-cols-2">
          {units.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} index={i} />
          ))}
        </ul>

        <Reveal className="mt-16 overflow-hidden rounded-xl border border-line">
          <table className="w-full text-sm">
            <caption className="sr-only">Horários de funcionamento</caption>
            <thead>
              <tr className="border-b border-line bg-charcoal text-left">
                <th scope="col" className="px-6 py-4 font-semibold text-sand">
                  Dia
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-sand">
                  Horário
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {site.openingHours.map((slot) => (
                <tr key={slot.days}>
                  <td className="px-6 py-4 text-sand-dim">{slot.days}</td>
                  <td className="px-6 py-4 font-medium text-sand">{slot.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal className="mt-6">
          <p className="text-sm text-sand-dim">
            Happy hour de terça a sexta, das 17h às 19h30, nas duas unidades.
            Estacionamento com manobrista na unidade Ponta Negra.
          </p>
        </Reveal>
      </section>

      <ReservationBanner
        title={
          <>
            Escolheu o lado? <em className="text-copper">Reserve o seu</em>
          </>
        }
        subtitle="Ponta Negra ou Tirol — a mesa boa é a que tem você. Confirmação em minutos."
      />
    </>
  );
}
