import { Star, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="container-site py-24 md:py-36">
      <SectionTitle
        eyebrow="Quem foi, conta"
        align="center"
        title={
          <>
            {site.rating.value} estrelas,{" "}
            <em className="text-copper">milhares de histórias</em>
          </>
        }
        description="O que os clientes dizem no Google e no TripAdvisor sobre as noites que passaram aqui."
      />

      <ul className="mt-16 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal
            as="li"
            key={t.author}
            delay={(i % 2) * 0.12}
            className="flex flex-col justify-between rounded-xl border border-line bg-charcoal p-8 md:p-10"
          >
            <div>
              <Quote aria-hidden className="h-8 w-8 text-terracotta/70" />
              <blockquote className="text-display mt-5 text-xl leading-relaxed text-sand md:text-2xl">
                “{t.quote}”
              </blockquote>
            </div>
            <footer className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-sand">{t.author}</p>
                <p className="mt-0.5 text-sm text-sand-dim">{t.context}</p>
              </div>
              <p
                className="flex text-copper"
                aria-label={`${t.rating} de 5 estrelas`}
              >
                {Array.from({ length: t.rating }).map((_, star) => (
                  <Star key={star} aria-hidden className="h-4 w-4 fill-current" />
                ))}
              </p>
            </footer>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
