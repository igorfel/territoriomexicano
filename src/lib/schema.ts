import { site, units } from "@/lib/site";
import { img } from "@/lib/images";

/* JSON-LD estruturado: Restaurant por unidade + WebSite, num único @graph. */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
      },
      ...units.map((unit) => ({
        "@type": "Restaurant",
        "@id": `${site.url}/#${unit.id}`,
        name: unit.name,
        url: site.url,
        image: img.hero,
        servesCuisine: "Mexicana",
        priceRange: "$$",
        telephone: `+${unit.whatsapp}`,
        acceptsReservations: "True",
        address: {
          "@type": "PostalAddress",
          streetAddress: unit.address,
          addressLocality: "Natal",
          addressRegion: "RN",
          addressCountry: "BR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
        },
        openingHours: site.openingHoursSchema,
        sameAs: [site.instagram],
        hasMenu: `${site.url}/cardapio`,
      })),
    ],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: site.url },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${site.url}${item.path}`,
      })),
    ],
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
