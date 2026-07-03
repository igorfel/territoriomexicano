import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { eventPackages } from "@/lib/content";

export function EventsPreview() {
  return (
    <section className="border-y border-line bg-charcoal py-24 md:py-36">
      <div className="container-site">
        <SectionTitle
          eyebrow="Celebre aqui"
          title={
            <>
              Datas que merecem <em className="text-copper">um território</em>
            </>
          }
          description="Aniversários, confraternizações e pedidos especiais — com equipe dedicada e a festa já embutida no endereço."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {eventPackages.map((pack, i) => (
            <Reveal as="li" key={pack.id} delay={i * 0.12} className="group">
              <Link
                href={`/eventos#${pack.id}`}
                className="block overflow-hidden rounded-xl border border-line bg-night transition-colors duration-300 hover:border-copper/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pack.image}
                    alt={pack.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-display text-2xl text-sand group-hover:text-copper">
                    {pack.title}
                  </h3>
                  <p className="mt-1 text-sm text-terracotta">{pack.subtitle}</p>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-sand-dim">
                    {pack.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper">
                    Saber mais
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
