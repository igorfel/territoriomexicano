import Image from "next/image";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import type { Unit } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

export function UnitCard({ unit, index }: { unit: Unit; index: number }) {
  return (
    <Reveal
      as="li"
      delay={index * 0.12}
      className="group overflow-hidden rounded-xl border border-line bg-charcoal"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={unit.image}
          alt={`Salão da unidade ${unit.shortName}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"
        />
        <p className="text-display absolute bottom-5 left-6 text-3xl text-sand">
          {unit.shortName}
        </p>
      </div>
      <div className="space-y-4 p-7">
        <p className="flex items-start gap-3 text-sm text-sand-dim">
          <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
          {unit.address} — {unit.neighborhood}, {unit.city}
        </p>
        <p className="flex items-start gap-3 text-sm text-sand-dim">
          <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
          {unit.phone}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={waLink(
              `Olá! Quero reservar uma mesa na unidade ${unit.shortName}.`,
              unit.whatsapp,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:bg-ember"
          >
            Reservar aqui
          </a>
          <a
            href={unit.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-sand/20 px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:border-copper hover:text-copper"
          >
            Como chegar
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
