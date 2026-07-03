import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/lib/content";

export function Story() {
  return (
    <section className="border-y border-line bg-charcoal py-24 md:py-36">
      <div className="container-site">
        <SectionTitle
          eyebrow="Nossa história"
          align="center"
          title={
            <>
              De um food truck <em className="text-gold">a um território</em>
            </>
          }
          description="Tudo começou com um trailer, uma chapa quente e a teimosia de servir o taco como ele é feito no México."
        />

        <ol className="relative mx-auto mt-20 max-w-3xl space-y-16 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line md:space-y-20">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={entry.year} delay={i * 0.1} className="relative pl-12 md:pl-16">
              <span
                aria-hidden
                className="absolute top-2 left-0 h-[15px] w-[15px] rounded-full border-2 border-gold bg-charcoal"
              />
              <p className="text-display text-sm tracking-[0.2em] text-terracotta uppercase">
                {entry.year}
              </p>
              <h3 className="text-display mt-3 text-2xl text-sand md:text-3xl">
                {entry.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-sand-dim">
                {entry.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
