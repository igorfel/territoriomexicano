export type Unit = {
  id: "ponta-negra" | "tirol";
  name: string;
  shortName: string;
  address: string;
  neighborhood: string;
  city: string;
  mapsUrl: string;
  phone: string;
  whatsapp: string;
  image: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: Array<"vegetariano" | "picante" | "casa" | "novo">;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

export type EventPackage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "tall" | "wide";
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  body: string[];
};
