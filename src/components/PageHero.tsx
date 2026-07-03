import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  imageAlt: string;
};

/** Hero cinematográfico das páginas internas. */
export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden pt-32 pb-16 md:min-h-[70svh] md:pb-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/35"
      />
      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-display mt-5 max-w-3xl text-5xl text-sand sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/80">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
