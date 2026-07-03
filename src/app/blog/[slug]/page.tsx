import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ReservationBanner } from "@/components/sections/ReservationBanner";
import { posts } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
              >
                <ArrowLeft aria-hidden className="h-4 w-4" />
                Voltar ao blog
              </Link>
              <p className="mt-8 text-xs tracking-[0.2em] text-sand-dim uppercase">
                {new Date(`${post.date}T12:00:00`).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {post.readingTime} de leitura
              </p>
              <h1 className="text-display mt-4 text-4xl leading-tight text-sand md:text-6xl">
                {post.title}
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-7">
            {post.body.map((paragraph, i) => (
              <Reveal as="div" key={i} delay={Math.min(i * 0.05, 0.2)}>
                <p className="text-lg leading-relaxed text-sand/85">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <ReservationBanner
        title={
          <>
            Deu fome? <em className="text-gold">A gente resolve</em>
          </>
        }
        subtitle="Do texto à mesa em um clique: reserve pelo WhatsApp e prove tudo isso hoje."
      />
    </>
  );
}
