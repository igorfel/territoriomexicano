import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site, reserveLink } from "@/lib/site";
import { img } from "@/lib/images";

/** CTA de reserva reutilizável — fecha a home e as páginas internas. */
export function ReservationBanner({
  title = (
    <>
      Sua mesa está <em className="text-copper">quase pronta</em>
    </>
  ),
  subtitle = "Reserve em menos de um minuto pelo WhatsApp. Sem formulário longo, sem espera — a gente confirma na hora.",
}: {
  title?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <Image
        src={img.interiorElegant}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/60"
      />
      <div className="container-site relative py-24 text-center md:py-36">
        <Reveal>
          <p className="eyebrow">Reservas</p>
          <h2 className="text-display mx-auto mt-5 max-w-3xl text-5xl text-sand md:text-7xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand/80 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={reserveLink} external size="lg">
              Reservar pelo WhatsApp
            </Button>
            <Button href="/reservas" variant="outline" size="lg">
              Ver detalhes e horários
            </Button>
          </div>
          <p className="mt-6 text-sm text-sand-dim">
            Ou ligue: <span className="text-sand">{site.whatsappDisplay}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
