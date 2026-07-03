import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { ShieldCheck, Zap, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/ui/FaqList";
import { ReservationForm } from "@/components/ReservationForm";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Reservas — Garanta sua mesa em 1 minuto",
  description:
    "Reserve sua mesa no Território Mexicano em Natal: escolha a unidade (Ponta Negra ou Tirol), data e horário. Confirmação rápida pelo WhatsApp, sem custo.",
  alternates: { canonical: "/reservas" },
};

const assurances = [
  {
    icon: Zap,
    title: "Confirmação em minutos",
    description: "Mensagem pronta, resposta humana rápida. Nada de formulário que cai no vazio.",
  },
  {
    icon: ShieldCheck,
    title: "Sem custo, sem pegadinha",
    description: "Reservar é grátis. Imprevisto? Avise pelo mesmo WhatsApp e remarcamos.",
  },
  {
    icon: Users,
    title: "Grupos são bem-vindos",
    description: "A partir de 8 pessoas, montamos a mesa e o serviço com antecedência.",
  },
];

export default function ReservasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Reservas", path: "/reservas" }])} />
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Reservas"
        title={
          <>
            A melhor mesa da noite <em className="text-gold">tem seu nome</em>
          </>
        }
        description="Preencha, envie, pronto: sua reserva chega direto no WhatsApp da unidade com tudo organizado."
        image={img.interiorTables}
        imageAlt="Mesas postas no salão do restaurante à meia-luz"
      />

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="text-display text-3xl text-sand md:text-4xl">
                Como funciona
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-sand-dim">
                Sem sistema complicado, sem cadastro: a reserva acontece onde
                você já está — no WhatsApp — só que sem digitar nada.
              </p>
            </Reveal>
            <ul className="mt-10 space-y-8">
              {assurances.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.1} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <item.icon aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sand">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sand-dim">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <p className="mt-10 rounded-lg border border-line bg-charcoal p-5 text-sm leading-relaxed text-sand-dim">
                Prefere falar direto? Chame no{" "}
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold hover:underline"
                >
                  {site.whatsappDisplay}
                </a>{" "}
                ou apareça — sempre guardamos algumas mesas para quem chega
                sem aviso.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-charcoal p-7 md:p-10">
              <h2 className="text-display text-2xl text-sand md:text-3xl">
                Reservar mesa
              </h2>
              <div className="mt-8">
                <ReservationForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal">
        <div className="container-site py-20 md:py-28">
          <Reveal>
            <h2 className="text-display text-3xl text-sand md:text-4xl">
              Perguntas frequentes
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
