import { Reveal } from "@/components/ui/Reveal";
import { Particles } from "@/components/effects/Particles";

/*
 * CENA 00 — Abertura fria.
 * Escuro. Uma frase. Poeira na luz de vela. Nada de UI.
 */
export function SceneOpening() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Luz de vela respirando no canto inferior */}
      <div
        aria-hidden
        className="animate-flicker absolute -bottom-40 left-1/2 h-[70vh] w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(227,164,88,0.14),rgba(207,107,49,0.05),transparent)] motion-reduce:animate-none"
      />
      <Particles variant="dust" />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.3} y={12}>
            <p className="text-hand text-2xl text-amber md:text-3xl">
              Sexta-feira, 19h47.
            </p>
          </Reveal>

          <Reveal delay={1.0} y={20}>
            <h1 className="text-display mt-8 text-5xl leading-[1.04] text-cream sm:text-6xl md:text-7xl">
              A semana inteira foi
              <br />
              só o trailer.
              <span className="sr-only">
                {" "}
                — Território Mexicano, restaurante mexicano em Natal/RN
              </span>
            </h1>
          </Reveal>

          <Reveal delay={1.8} y={16}>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-sand-dim md:text-lg">
              O filme começa agora, em Natal, numa casa onde o México
              não é tema — é temperatura.
            </p>
          </Reveal>

          <Reveal delay={2.5} y={10}>
            <p className="mt-16 text-[11px] tracking-[0.4em] text-sand-dim/80 uppercase">
              Role devagar
            </p>
            <div
              aria-hidden
              className="mx-auto mt-4 h-14 w-px bg-gradient-to-b from-amber/70 to-transparent"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
