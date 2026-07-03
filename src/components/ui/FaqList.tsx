import { ChevronDown } from "lucide-react";
import type { Faq } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

/* Acordeão nativo (details/summary): acessível por teclado, zero JS. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => (
        <Reveal key={faq.question} delay={i * 0.05}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-lg text-sand transition-colors hover:text-gold md:text-xl [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronDown
                aria-hidden
                className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="max-w-3xl pb-7 leading-relaxed text-sand-dim">
              {faq.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
