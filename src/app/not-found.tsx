import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-svh flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="text-display mt-6 text-6xl text-sand md:text-8xl">
        ¡Ay, caramba!
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-sand-dim">
        Essa página saiu para almoçar e não voltou. A mesa, no entanto,
        continua posta.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/">Voltar ao início</Button>
        <Button href="/reservas" variant="outline">
          Reservar mesa
        </Button>
      </div>
    </section>
  );
}
