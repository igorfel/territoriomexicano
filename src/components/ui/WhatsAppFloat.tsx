import { MessageCircle } from "lucide-react";
import { reserveLink } from "@/lib/site";

/** Botão flutuante de reserva — presente em todas as páginas (CRO). */
export function WhatsAppFloat() {
  return (
    <a
      href={reserveLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar mesa pelo WhatsApp"
      className="glow-candle fixed right-5 bottom-5 z-60 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-ember md:right-8 md:bottom-8"
    >
      <MessageCircle aria-hidden className="h-6 w-6" />
    </a>
  );
}
