import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do site do Território Mexicano: como tratamos seus dados de acordo com a LGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: false },
};

const sections = [
  {
    title: "1. Quais dados coletamos",
    body: [
      "Este site não possui cadastro nem armazena dados pessoais em banco próprio. As informações que você preenche no formulário de reserva (nome, data, horário, número de pessoas e observações) são usadas apenas para montar a mensagem enviada por você ao nosso WhatsApp — elas não são gravadas pelo site.",
      "Dados de navegação (páginas visitadas, dispositivo, origem do acesso) podem ser coletados de forma agregada por ferramentas de análise, com o objetivo exclusivo de melhorar a experiência do site.",
    ],
  },
  {
    title: "2. Como usamos as informações",
    body: [
      "As mensagens recebidas pelo WhatsApp são usadas para confirmar reservas, organizar eventos e responder dúvidas. Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de marketing.",
    ],
  },
  {
    title: "3. Cookies",
    body: [
      "Utilizamos apenas cookies essenciais ao funcionamento do site e, quando habilitadas, ferramentas de métricas (como Google Analytics) que usam cookies para estatísticas de audiência. Você pode bloquear cookies nas configurações do seu navegador sem prejuízo à navegação.",
    ],
  },
  {
    title: "4. Seus direitos (LGPD)",
    body: [
      "Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a qualquer momento a confirmação, acesso, correção ou exclusão de dados pessoais eventualmente tratados por nós.",
      `Para exercer esses direitos, escreva para ${"contato@territoriomexicano.com.br"} com o assunto “Privacidade”.`,
    ],
  },
  {
    title: "5. Contato do controlador",
    body: [
      `${site.legalName} — Natal/RN. E-mail: ${site.email}.`,
      "Esta política pode ser atualizada periodicamente; a versão vigente estará sempre nesta página.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <section className="container-site pt-36 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="text-display mt-4 text-4xl text-sand md:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-sand-dim">
          Última atualização: julho de 2026
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-display text-2xl text-sand">{section.title}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-4 leading-relaxed text-sand-dim">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
