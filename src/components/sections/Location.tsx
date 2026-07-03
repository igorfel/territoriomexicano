import { SectionTitle } from "@/components/ui/SectionTitle";
import { UnitCard } from "@/components/ui/UnitCard";
import { Reveal } from "@/components/ui/Reveal";
import { site, units } from "@/lib/site";

export function Location() {
  return (
    <section className="container-site py-24 md:py-36">
      <SectionTitle
        eyebrow="Onde estamos"
        align="center"
        title={
          <>
            Dois endereços, <em className="text-copper">o mesmo México</em>
          </>
        }
        description="Ponta Negra para quem vem da praia, Tirol para quem vive o centro. Escolha o seu lado da cidade."
      />

      <ul className="mt-16 grid gap-8 md:grid-cols-2">
        {units.map((unit, i) => (
          <UnitCard key={unit.id} unit={unit} index={i} />
        ))}
      </ul>

      <Reveal className="mt-12 text-center text-sm text-sand-dim">
        <p>
          Aberto {site.openingHours[1].days.toLowerCase()} das{" "}
          {site.openingHours[1].hours} · fins de semana desde meio-dia ·{" "}
          <span className="text-sand">segunda fechado</span>
        </p>
      </Reveal>
    </section>
  );
}
