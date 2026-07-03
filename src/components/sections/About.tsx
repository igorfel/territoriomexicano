import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/content";
import { img } from "@/lib/images";

export function About() {
  return (
    <section className="container-site py-24 md:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionTitle
            eyebrow="A casa"
            title={
              <>
                Comida mexicana de verdade,{" "}
                <em className="text-copper">com alma brasileira</em>
              </>
            }
            description="Receitas fiéis às cozinhas do México — barbacoa de 12 horas, tortillas de milho feitas todos os dias, salsas moídas na pedra — servidas com o calor e a generosidade do Nordeste. Não é fusion. É respeito pelos dois lados da fronteira."
          />
          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-display text-4xl text-copper md:text-5xl">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-2 text-sm leading-snug text-sand-dim">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10">
              <Button href="/sobre" variant="ghost">
                Conheça nossa história →
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <ImageReveal className="aspect-[4/5] rounded-2xl">
            <Image
              src={img.interiorWarm}
              alt="Salão do restaurante com luz quente e decoração mexicana"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <ImageReveal
            delay={0.2}
            className="absolute -bottom-10 -left-6 hidden aspect-square w-48 rounded-2xl border-4 border-night md:block lg:-left-14 lg:w-64"
          >
            <Image
              src={img.guacamole}
              alt="Guacamole preparado na hora em molcajete de pedra"
              fill
              sizes="16rem"
              className="object-cover"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
