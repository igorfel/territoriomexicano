import Image from "next/image";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Reveal } from "@/components/ui/Reveal";
import { instagramImages } from "@/lib/content";
import { site } from "@/lib/site";

export function InstagramFeed() {
  return (
    <section className="border-y border-line bg-charcoal py-24 md:py-32">
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="text-display mt-4 text-4xl text-sand md:text-5xl">
              {site.instagramHandle}
            </h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sand/25 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:border-gold hover:text-gold"
          >
            <InstagramIcon aria-hidden className="h-4 w-4" />
            Seguir · 110 mil
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {instagramImages.map((image, i) => (
            <Reveal key={image.src} delay={i * 0.06}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver no Instagram: ${image.alt}`}
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-obsidian/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <InstagramIcon className="h-6 w-6 text-sand" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
