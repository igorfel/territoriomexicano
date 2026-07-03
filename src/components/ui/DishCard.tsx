import Image from "next/image";
import type { Dish } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export function DishCard({ dish, index }: { dish: Dish; index: number }) {
  return (
    <Reveal as="li" delay={(index % 3) * 0.12} className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={dish.image}
          alt={dish.imageAlt}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-display text-xl text-sand transition-colors duration-300 group-hover:text-gold md:text-2xl">
          {dish.name}
        </h3>
        <p className="shrink-0 text-sm font-semibold tracking-wide text-gold">
          {dish.price}
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-sand-dim">{dish.description}</p>
    </Reveal>
  );
}
