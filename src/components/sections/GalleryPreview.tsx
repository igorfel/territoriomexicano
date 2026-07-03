import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 7);

  return (
    <section className="container-site py-24 md:py-36">
      <SectionTitle
        eyebrow="O clima"
        align="center"
        title={
          <>
            Entre antes <em className="text-copper">de chegar</em>
          </>
        }
        description="Luz baixa, cores quentes, cozinha aberta e o barulho bom de mesa cheia. Um pedaço do México no litoral potiguar."
      />

      <div className="mt-16 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {preview.map((image, i) => (
          <Reveal
            key={image.src}
            delay={(i % 4) * 0.08}
            className={cn(
              "group relative overflow-hidden rounded-lg",
              image.span === "wide" && "col-span-2",
              image.span === "tall" && "row-span-2",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        ))}
        <Reveal delay={0.32} className="relative">
          <Link
            href="/galeria"
            className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border border-line bg-charcoal text-center transition-colors hover:border-copper"
          >
            <span className="text-display text-2xl text-copper italic">+ fotos</span>
            <span className="text-xs tracking-[0.2em] text-sand-dim uppercase">
              Ver galeria
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
