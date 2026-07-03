import type { Unit } from "@/types";
import { img } from "@/lib/images";

/*
 * Fonte única de dados institucionais.
 * Telefones e endereços são provisórios — confirmar com o restaurante
 * antes do go-live e ajustar apenas aqui.
 */

export const site = {
  name: "Território Mexicano",
  legalName: "Território Mexicano Restaurante",
  tagline: "Cozinha mexicana de verdade, com alma brasileira",
  description:
    "Restaurante mexicano em Natal/RN. Rodízio mexicano, tacos, margaritas e experiências completas nas unidades Ponta Negra e Tirol. Reserve sua mesa.",
  url: "https://www.territoriomexicano.com.br",
  foundedYear: 2019,
  instagram: "https://www.instagram.com/territorio.mexicano",
  instagramHandle: "@territorio.mexicano",
  whatsappNumber: "5584988001122",
  whatsappDisplay: "(84) 98800-1122",
  email: "contato@territoriomexicano.com.br",
  priceRange: "R$ 60–120",
  rating: { value: 4.8, count: 2700 },
  openingHours: [
    { days: "Segunda", hours: "Fechado" },
    { days: "Terça a quinta", hours: "17h — 23h" },
    { days: "Sexta", hours: "17h — 00h" },
    { days: "Sábado", hours: "12h — 00h" },
    { days: "Domingo", hours: "12h — 22h30" },
  ],
  // Formato schema.org (https://schema.org/openingHours)
  openingHoursSchema: [
    "Tu-Th 17:00-23:00",
    "Fr 17:00-24:00",
    "Sa 12:00-24:00",
    "Su 12:00-22:30",
  ],
} as const;

export const units: Unit[] = [
  {
    id: "ponta-negra",
    name: "Território Mexicano — Ponta Negra",
    shortName: "Ponta Negra",
    address: "Av. Engenheiro Roberto Freire, 3980",
    neighborhood: "Ponta Negra",
    city: "Natal/RN",
    mapsUrl: "https://maps.google.com/?q=Territ%C3%B3rio+Mexicano+Ponta+Negra+Natal",
    phone: "(84) 98800-1122",
    whatsapp: "5584988001122",
    image: img.interiorWarm,
  },
  {
    id: "tirol",
    name: "Território Mexicano — Tirol",
    shortName: "Tirol",
    address: "Av. Prudente de Morais, 744",
    neighborhood: "Tirol",
    city: "Natal/RN",
    mapsUrl: "https://maps.google.com/?q=Territ%C3%B3rio+Mexicano+Tirol+Natal",
    phone: "(84) 98800-3344",
    whatsapp: "5584988003344",
    image: img.interiorTables,
  },
];

export function waLink(message: string, number: string = site.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const reserveLink = waLink(
  "Olá! Gostaria de reservar uma mesa no Território Mexicano.",
);
