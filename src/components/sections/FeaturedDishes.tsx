import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DishCard } from "@/components/ui/DishCard";
import { featuredDishes } from "@/lib/content";

export function FeaturedDishes() {
  return (
    <section className="container-site py-24 md:py-36">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionTitle
          eyebrow="Do comal para a mesa"
          title={
            <>
              As estrelas <em className="text-copper">da casa</em>
            </>
          }
          description="Uma amostra do que sai da nossa cozinha aberta todos os dias. Cada receita tem origem, técnica e uma fila de fãs."
        />
        <Reveal delay={0.2} className="hidden md:block">
          <Button href="/cardapio" variant="outline">
            Cardápio completo
          </Button>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {featuredDishes.map((dish, i) => (
          <DishCard key={dish.name} dish={dish} index={i} />
        ))}
      </ul>

      <Reveal className="mt-14 text-center md:hidden">
        <Button href="/cardapio" variant="outline">
          Ver cardápio completo
        </Button>
      </Reveal>
    </section>
  );
}
