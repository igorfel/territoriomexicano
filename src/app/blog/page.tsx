import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { posts } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog — Cultura mexicana, receitas e bastidores",
  description:
    "Histórias da cozinha do Território Mexicano: guia do rodízio mexicano em Natal, segredos das tortillas artesanais, margaritas e cultura mexicana.",
  alternates: { canonical: "/blog" },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Histórias que <em className="text-gold">abrem o apetite</em>
          </>
        }
        description="Receitas, cultura mexicana e os bastidores da nossa cozinha — direto do comal para a sua tela."
        image={img.peppers}
        imageAlt="Pimentas frescas coloridas sobre superfície escura"
      />

      <section className="container-site py-20 md:py-28">
        <ul className="grid gap-10 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.1} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs tracking-[0.2em] text-sand-dim uppercase">
                  {formatDate(post.date)} · {post.readingTime} de leitura
                </p>
                <h2 className="text-display mt-3 text-2xl leading-snug text-sand transition-colors group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-sand-dim">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Ler artigo
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
