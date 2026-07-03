import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

/* Bokeh de velas: pontos de luz âmbar desfocados, pulsando fora de fase. */
function CandleBokeh() {
  const dots = [
    { left: "8%", top: "22%", size: 90, delay: "0s" },
    { left: "85%", top: "14%", size: 60, delay: "-1.2s" },
    { left: "72%", top: "68%", size: 110, delay: "-2.1s" },
    { left: "18%", top: "74%", size: 70, delay: "-0.6s" },
    { left: "48%", top: "10%", size: 50, delay: "-1.8s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="animate-flicker absolute rounded-full bg-amber/25 blur-2xl"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

/* CENA 05 — A mesa. O prato importa menos que a noite. */
export function SceneTable() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-night">
      <Image
        src={img.friendsToast}
        alt="Amigos brindando sobre a mesa cheia, à luz de velas"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-night via-night/50 to-night"
      />
      <CandleBokeh />

      <div className="container-site relative py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Cena 05 · A mesa</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-display mt-6 text-4xl leading-[1.06] text-cream sm:text-5xl md:text-6xl">
              Ninguém fotografa
              <br />a melhor parte.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-sand/90 md:text-lg">
              É o riso no meio do brinde. O amigo que chega atrasado e a mesa
              que abre espaço. O aniversário que começou tímido e terminou em
              coro. A comida puxa a cadeira — <em>a noite é de vocês.</em>
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <blockquote className="mx-auto mt-12 max-w-md">
              <p className="text-display text-xl leading-relaxed text-sand italic md:text-2xl">
                “Saímos planejando a volta.”
              </p>
              <footer className="mt-3 text-xs tracking-[0.25em] text-sand-dim uppercase">
                Mariana C. · avaliação no Google
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
