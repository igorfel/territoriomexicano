import type {
  Dish,
  EventPackage,
  Faq,
  GalleryImage,
  Post,
  Testimonial,
  TimelineEntry,
} from "@/types";
import { img } from "@/lib/images";

export const featuredDishes: Dish[] = [
  {
    name: "Taco de barbacoa",
    description:
      "Costela cozida por 12 horas até desmanchar, sobre tortilla de milho feita na casa.",
    price: "R$ 49",
    image: img.tacosBirria,
    imageAlt: "Tacos de barbacoa com coentro e cebola sobre tábua de madeira",
  },
  {
    name: "Guacamole en molcajete",
    description:
      "Preparado na pedra vulcânica, na hora, diante de você. Abacate, limão, serrano.",
    price: "R$ 42",
    image: img.guacamole,
    imageAlt: "Guacamole cremoso servido em molcajete de pedra com totopos",
  },
  {
    name: "Margarita de maracujá",
    description:
      "Tequila 100% agave e maracujá fresco, com borda de sal e chili. Brasil e México na mesma taça.",
    price: "R$ 34",
    image: img.margarita,
    imageAlt: "Margarita de maracujá com borda de sal e fatia de limão",
  },
  {
    name: "Birria com consomé",
    description:
      "Tacos dourados na gordura da birria, queijo derretido e caldo escuro para mergulhar.",
    price: "R$ 54",
    image: img.birriaConsome,
    imageAlt: "Tacos de birria dourados ao lado de consomé escuro",
  },
  {
    name: "Churros con cajeta",
    description:
      "Crocantes por fora, macios por dentro, com doce de leite de cabra e canela.",
    price: "R$ 32",
    image: img.churros,
    imageAlt: "Churros polvilhados com açúcar e canela e calda de doce de leite",
  },
  {
    name: "Ceviche del mar",
    description:
      "O pescado do dia, curado no limão com habanero — frescor do litoral potiguar.",
    price: "R$ 54",
    image: img.ceviche,
    imageAlt: "Ceviche fresco com cebola roxa, coentro e abacate",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "O rodízio é sensacional. Vieram pratos que eu nunca tinha provado e cada um melhor que o outro. Saímos planejando a volta.",
    author: "Mariana C.",
    context: "Rodízio · unidade Ponta Negra",
    rating: 5,
  },
  {
    quote:
      "Garçons muito educados e gentis, casa linda, clima de festa sem ser bagunça. Melhor mexicano de Natal, sem discussão.",
    author: "Rafael A.",
    context: "Jantar a dois · unidade Tirol",
    rating: 5,
  },
  {
    quote:
      "Comemorei meu aniversário aí e foi perfeito: mesa pronta na hora, atenção o tempo todo e a margarita de maracujá é covardia.",
    author: "Juliana M.",
    context: "Aniversário · 14 pessoas",
    rating: 5,
  },
  {
    quote:
      "Comida mexicana de verdade, com tempero que abraça o paladar brasileiro. O guacamole feito na hora vale a visita sozinho.",
    author: "Pedro H.",
    context: "Primeira visita · via Instagram",
    rating: 5,
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: "Um food truck e uma ideia fixa",
    description:
      "Daniel e Ana Luíza Gouvêa começam a servir tacos de receita original mexicana nas ruas de Natal. O trailer lotava toda noite.",
  },
  {
    year: "2021",
    title: "A primeira casa",
    description:
      "Nasce o restaurante em Ponta Negra: salão de cores quentes, cozinha aberta e o rodízio que virou assunto na cidade.",
  },
  {
    year: "2023",
    title: "Tirol entra no mapa",
    description:
      "A segunda unidade abre no coração da cidade, com bar de tequilaria ampliado e espaço para eventos privados.",
  },
  {
    year: "Hoje",
    title: "Referência em experiência mexicana no RN",
    description:
      "Mais de 110 mil seguidores, milhares de mesas servidas por mês e a mesma obsessão do primeiro dia: receita original, feita na hora.",
  },
];

export const eventPackages: EventPackage[] = [
  {
    id: "aniversarios",
    title: "Aniversários",
    subtitle: "A festa já está pronta — só falta você",
    description:
      "Mesa decorada, rodízio servido no ritmo da sua turma e a tradicional sobremesa com vela e coro da casa. Aniversariante tem cortesia especial.",
    highlights: [
      "Cortesia para o aniversariante em grupos de 10+",
      "Mesa reservada e decorada",
      "Bolo e sobremesas sob encomenda",
      "Playlist e brinde coletivo da casa",
    ],
    image: img.friendsToast,
    imageAlt: "Grupo de amigos brindando em jantar de aniversário",
  },
  {
    id: "corporativo",
    title: "Eventos corporativos",
    subtitle: "Confraternizações que ninguém esquece",
    description:
      "Do happy hour da equipe ao jantar de fim de ano: espaços semi-privativos, menu fechado por pessoa e operação pensada para grupos de 15 a 120 convidados.",
    highlights: [
      "Menus fechados a partir de R$ 89/pessoa",
      "Espaço semi-privativo na unidade Tirol",
      "Nota fiscal e faturamento para empresas",
      "Coordenador de evento dedicado",
    ],
    image: img.interiorElegant,
    imageAlt: "Salão elegante preparado para evento corporativo",
  },
  {
    id: "celebracoes",
    title: "Celebrações íntimas",
    subtitle: "Pedidos, bodas e jantares a dois",
    description:
      "Mesas especiais, menu degustação em parceria com o chef e aquela ajuda discreta da equipe para o momento sair perfeito.",
    highlights: [
      "Mesa premium com vista para a cozinha aberta",
      "Menu degustação de 5 tempos sob reserva",
      "Decoração e surpresas combinadas no WhatsApp",
      "Carta de tequilas e mezcais raros",
    ],
    image: img.handsTable,
    imageAlt: "Casal brindando em mesa iluminada à meia-luz",
  },
];

export const faqs: Faq[] = [
  {
    question: "Quanto custa o rodízio mexicano?",
    answer:
      "R$ 109,90 por pessoa, com mais de 20 receitas servidas à vontade na mesa. Bebidas e sobremesas são cobradas à parte. Crianças até 6 anos não pagam e de 7 a 10 anos pagam metade.",
  },
  {
    question: "Preciso reservar mesa?",
    answer:
      "Para sextas, sábados e datas comemorativas, recomendamos fortemente. Grupos de 8 ou mais pessoas devem sempre reservar. A reserva é gratuita e confirmada em minutos pelo WhatsApp.",
  },
  {
    question: "Vocês têm opções vegetarianas?",
    answer:
      "Sim — guacamole, tacos de cogumelos, chile relleno, quesadillas de queijo oaxaca e mais. No rodízio, avise o garçom e a sequência é adaptada para você.",
  },
  {
    question: "Onde ficam as unidades?",
    answer:
      "Estamos em Ponta Negra (Av. Engenheiro Roberto Freire) e no Tirol (Av. Prudente de Morais), em Natal/RN. As duas unidades têm o cardápio completo e aceitam reservas.",
  },
  {
    question: "Tem espaço para crianças?",
    answer:
      "Sim. Temos cadeirões, pratos kids fora do rodízio e equipe acostumada com famílias. Domingo de almoço é o horário favorito das famílias por aqui.",
  },
  {
    question: "Vocês fazem eventos privados?",
    answer:
      "Fazemos — de aniversários a confraternizações corporativas para até 120 convidados, com menus fechados. Conte o que você imagina pelo WhatsApp e montamos a proposta.",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: img.tacosBoard, alt: "Tábua de tacos variados servidos na mesa", span: "wide" },
  { src: img.interiorWarm, alt: "Salão do restaurante com iluminação quente", span: "tall" },
  { src: img.margaritaGold, alt: "Margarita dourada com borda de sal" },
  { src: img.chefPlating, alt: "Chef finalizando prato na cozinha aberta" },
  { src: img.mexicoColors, alt: "Cores e texturas mexicanas na decoração", span: "tall" },
  { src: img.guacamoleIngredients, alt: "Ingredientes frescos do guacamole" },
  { src: img.barDark, alt: "Bar de tequilas com iluminação âmbar", span: "wide" },
  { src: img.friendsTable, alt: "Amigos à mesa compartilhando pratos" },
  { src: img.peppers, alt: "Pimentas frescas usadas na cozinha" },
  { src: img.cocktailsBar, alt: "Coquetéis autorais no balcão do bar" },
  { src: img.spreadTable, alt: "Mesa posta com pratos mexicanos para compartilhar", span: "wide" },
  { src: img.kitchenFire, alt: "Fogo alto na cozinha do restaurante" },
];

export const instagramImages: GalleryImage[] = [
  { src: img.tacosClose, alt: "Close de tacos com coentro fresco" },
  { src: img.margarita, alt: "Margarita clássica com limão" },
  { src: img.friendsToast, alt: "Brinde entre amigos no salão" },
  { src: img.churros, alt: "Churros com canela e doce de leite" },
  { src: img.mexicoFlags, alt: "Bandeirinhas de papel picado coloridas" },
  { src: img.tequila, alt: "Dose de tequila com especiarias" },
];

export const posts: Post[] = [
  {
    slug: "guia-rodizio-mexicano-natal",
    title: "O guia definitivo do rodízio mexicano em Natal",
    excerpt:
      "Como funciona, quanto custa, o que vem e como aproveitar cada rodada — tudo o que você precisa saber antes de sentar à mesa.",
    date: "2026-05-18",
    readingTime: "6 min",
    image: img.spreadTable,
    imageAlt: "Mesa completa de pratos mexicanos servidos no rodízio",
    body: [
      "O rodízio mexicano é o jeito mais generoso de conhecer a cozinha do México: em vez de escolher um prato, você prova mais de vinte. No Território Mexicano, a sequência chega à mesa no seu ritmo — começa leve, com guacamole feito na hora e totopos crocantes, cresce para tacos, quesadillas e flautas, e termina em burritos e enchiladas para os corajosos.",
      "Quanto custa? R$ 109,90 por pessoa, com crianças até 6 anos como convidadas da casa. É o formato favorito de aniversários e primeiras visitas, porque ninguém precisa decidir nada: a cozinha decide por você, e decide bem.",
      "Nossa dica de casa: vá com fome moderada de entrada, não repita demais o nacho no começo (clássico erro de iniciante) e guarde espaço para a sequência doce. E sim — a margarita de maracujá com chili combina com absolutamente todas as rodadas.",
      "O rodízio acontece nas duas unidades, Ponta Negra e Tirol, todos os dias em que a casa abre. Nos fins de semana, reserve: as mesas do jantar costumam esgotar.",
    ],
  },
  {
    slug: "tacos-autenticos-segredo-tortilla",
    title: "Tacos autênticos: o segredo começa na tortilla",
    excerpt:
      "Por que fazemos nossas tortillas de milho todos os dias — e o que muda no sabor quando o taco nasce do jeito certo.",
    date: "2026-04-02",
    readingTime: "4 min",
    image: img.tacosClose,
    imageAlt: "Tacos em tortilla de milho artesanal com coentro",
    body: [
      "No México, taco bom se reconhece antes da primeira mordida: pelo cheiro de milho quente da tortilla recém-saída do comal. É por isso que, no Território Mexicano, as tortillas são feitas na casa, todos os dias, com massa de milho nixtamalizado.",
      "A tortilla industrial é prática, mas se comporta como embalagem. A artesanal é ingrediente: tem sabor, elasticidade e aquele leve tostado que segura a barbacoa suculenta sem desmontar. A diferença é a mesma entre pão de padaria e pão de forma.",
      "Nossa barbacoa cozinha por 12 horas em fogo baixo até desmanchar. O al pastor marina em achiote e ganha abacaxi tostado. E o taco de cogumelos prova que autenticidade não é sobre carne — é sobre método.",
      "Venha provar a diferença. Peça o trio de barbacoa e observe a tortilla: se ela dobra sem quebrar e perfuma a mesa, você está no lugar certo.",
    ],
  },
  {
    slug: "margarita-perfeita-historia-receita",
    title: "A margarita perfeita: história, técnica e a nossa versão potiguar",
    excerpt:
      "Da fronteira mexicana ao litoral do RN: como a margarita virou símbolo — e por que a nossa leva maracujá.",
    date: "2026-03-10",
    readingTime: "5 min",
    image: img.margaritaGold,
    imageAlt: "Margarita dourada com borda de sal em bar escuro",
    body: [
      "Toda margarita é uma equação de três partes: tequila, cítrico e licor de laranja. O equilíbrio perfeito depende de proporção, gelo e — detalhe que muita casa ignora — tequila 100% agave, sem mistura.",
      "No Território Mexicano usamos apenas tequilas 100% agave e limão espremido na hora. A borda de sal é opcional; a de sal com chili é a nossa assinatura, feita com pimentas desidratadas na casa.",
      "A versão que virou símbolo da casa é a margarita de maracujá: a acidez tropical do maracujá potiguar conversa com o agave como se tivessem crescido no mesmo quintal. É o Brasil e o México na mesma taça — exatamente o que a gente é.",
      "No happy hour de terça a sexta, das 17h às 19h30, as margaritas clássicas saem em dobro. A gente avisa: uma vira duas, duas viram uma noite.",
    ],
  },
];

export const stats = [
  { value: 110, suffix: "mil", label: "seguidores no Instagram" },
  { value: 20, suffix: "+", label: "receitas no rodízio" },
  { value: 4.8, suffix: "★", label: "avaliação no Google", decimals: 1 },
  { value: 2, suffix: "", label: "unidades em Natal" },
];
