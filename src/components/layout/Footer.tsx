import Link from "next/link";
import { MapPin, MessageCircle, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { NAV_LINKS } from "@/lib/nav";
import { site, units, reserveLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="container-site py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <p className="text-display text-3xl text-sand">
              Território <span className="text-gold italic">Mexicano</span>
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-sand-dim">
              {site.tagline}. Rodízio, tacos e margaritas em Natal/RN desde{" "}
              {site.foundedYear}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Território Mexicano"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/15 text-sand transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon aria-hidden className="h-5 w-5" />
              </a>
              <a
                href={reserveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do Território Mexicano"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/15 text-sand transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle aria-hidden className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <p className="eyebrow">Navegue</p>
            <ul className="mt-5 space-y-3">
              {[...NAV_LINKS, { href: "/reservas", label: "Reservas" }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-dim transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Unidades */}
          <div>
            <p className="eyebrow">Unidades</p>
            <ul className="mt-5 space-y-5">
              {units.map((unit) => (
                <li key={unit.id} className="text-sm">
                  <p className="font-semibold text-sand">{unit.shortName}</p>
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-start gap-1.5 text-sand-dim transition-colors hover:text-gold"
                  >
                    <MapPin aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {unit.address} — {unit.neighborhood}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div>
            <p className="eyebrow">Horários</p>
            <ul className="mt-5 space-y-2.5">
              {site.openingHours.map((slot) => (
                <li
                  key={slot.days}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-sand-dim">{slot.days}</span>
                  <span className="font-medium text-sand">{slot.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-xs text-sand-dim">
              <Clock aria-hidden className="h-3.5 w-3.5 text-gold" />
              Happy hour: ter–sex, 17h às 19h30
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-sand-dim md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="transition-colors hover:text-gold">
              Política de privacidade
            </Link>
            <span aria-hidden className="text-gold/60">
              Hecho con ❤ en Natal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
