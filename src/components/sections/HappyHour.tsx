import Image from "next/image";
import { Clock, GlassWater } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { img } from "@/lib/images";

export function HappyHour() {
  return (
    <section className="container-site py-24 md:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <ImageReveal className="order-2 aspect-[4/5] rounded-2xl lg:order-1">
          <Image
            src={img.margaritaGold}
            alt="Margarita dourada com borda de sal servida no bar"
            fill
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="object-cover"
          />
        </ImageReveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Happy hour</p>
            <h2 className="text-display mt-5 text-4xl text-sand sm:text-5xl md:text-6xl">
              Margaritas <em className="text-copper">em dobro</em>,
              <br />
              terça a sexta
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sand-dim md:text-lg">
              Das 17h às 19h30, toda margarita clássica vira duas. O fim de
              tarde perfeito depois do trabalho — guacamole na mesa, tequila
              100% agave na taça e o pôr do sol de Natal lá fora.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4">
              <p className="flex items-center gap-3 text-sand">
                <Clock aria-hidden className="h-5 w-5 text-copper" />
                Terça a sexta · 17h — 19h30
              </p>
              <p className="flex items-center gap-3 text-sand">
                <GlassWater aria-hidden className="h-5 w-5 text-copper" />
                Margarita clássica em dobro · petiscos com preço de bar
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/reservas">Garantir minha mesa</Button>
              <Button href="/cardapio#margaritas-drinks" variant="outline">
                Carta de drinks
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
