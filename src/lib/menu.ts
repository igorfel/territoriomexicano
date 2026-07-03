import type { MenuCategory } from "@/types";

export const rodizio = {
  price: "R$ 109,90",
  priceNote: "por pessoa · bebidas e sobremesas à parte",
  kidsNote: "Crianças até 6 anos não pagam · 7 a 10 anos, 50%",
  description:
    "Mais de 20 receitas servidas à vontade na sua mesa: tacos, quesadillas, burritos, nachos, flautas e as criações da casa — em sequência, no ritmo da sua mesa.",
  includes: [
    "Guacamole preparado na hora",
    "Tacos de barbacoa, carnitas e camarão",
    "Quesadillas, flautas e panuchos",
    "Nachos com queijo fundido",
    "Burrito norteño e enchiladas",
    "Sequência doce de encerramento",
  ],
};

export const menu: MenuCategory[] = [
  {
    id: "para-compartilhar",
    title: "Para compartilhar",
    note: "O começo de toda boa mesa mexicana.",
    items: [
      {
        name: "Guacamole en molcajete",
        description:
          "Abacate amassado na pedra, tomate, coentro, limão e pimenta serrano. Servido com totopos crocantes.",
        price: "R$ 42",
        tags: ["casa", "vegetariano"],
      },
      {
        name: "Nachos Território",
        description:
          "Totopos artesanais, queijo fundido, pico de gallo, jalapeños, sour cream e barbacoa desfiada.",
        price: "R$ 56",
        tags: ["casa"],
      },
      {
        name: "Queso fundido com chorizo",
        description:
          "Queijo derretido na chapa com chorizo mexicano e tortillas de milho quentinhas.",
        price: "R$ 48",
      },
      {
        name: "Ceviche del mar",
        description:
          "Peixe branco do dia curado no limão com cebola roxa, coentro, abacate e toque de habanero.",
        price: "R$ 54",
        tags: ["picante"],
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    note: "Tortillas de milho feitas na casa, todos os dias. Trio por pedido.",
    items: [
      {
        name: "Taco de barbacoa",
        description:
          "Costela bovina cozida por 12 horas, cebola crispy, coentro e salsa roja defumada.",
        price: "R$ 49",
        tags: ["casa"],
      },
      {
        name: "Taco al pastor",
        description:
          "Lombo suíno marinado em achiote, abacaxi tostado, cebola e coentro fresco.",
        price: "R$ 46",
      },
      {
        name: "Taco de camarón",
        description:
          "Camarões salteados na manteiga de pimenta, repolho crocante e maionese de chipotle.",
        price: "R$ 52",
        tags: ["picante"],
      },
      {
        name: "Taco de cogumelos",
        description:
          "Mix de cogumelos na chapa com queijo oaxaca, milho tostado e crema de coentro.",
        price: "R$ 44",
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "principais",
    title: "Pratos principais",
    note: "Receitas generosas para quem quer o prato só para si.",
    items: [
      {
        name: "Burrito norteño",
        description:
          "Tortilla de trigo recheada com arroz mexicano, feijão preto, queijo, guacamole e sua proteína.",
        price: "R$ 58",
      },
      {
        name: "Enchiladas verdes",
        description:
          "Tortillas recheadas de frango desfiado, banhadas em salsa verde de tomatillo, crema e queijo gratinado.",
        price: "R$ 62",
      },
      {
        name: "Quesadilla del patrón",
        description:
          "Queijo oaxaca, arrachera grelhada, pimentões tostados e guacamole ao lado.",
        price: "R$ 64",
        tags: ["casa"],
      },
      {
        name: "Chile relleno",
        description:
          "Pimenta poblano recheada de queijo, empanada e servida sobre salsa de tomate assado.",
        price: "R$ 56",
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    note: "O final feliz, à moda mexicana.",
    items: [
      {
        name: "Churros con cajeta",
        description:
          "Churros crocantes de canela com doce de leite de cabra e sorvete de baunilha.",
        price: "R$ 32",
        tags: ["casa"],
      },
      {
        name: "Flan de la abuela",
        description: "Pudim cremoso de baunilha com calda de caramelo queimado.",
        price: "R$ 26",
      },
      {
        name: "Brownie con mezcal",
        description:
          "Brownie de chocolate 70% com caramelo defumado de mezcal e flor de sal.",
        price: "R$ 30",
        tags: ["novo"],
      },
    ],
  },
  {
    id: "margaritas-drinks",
    title: "Margaritas & drinks",
    note: "Tequila e mezcal selecionados. Peça com sal, chili ou puro.",
    items: [
      {
        name: "Margarita clássica",
        description: "Tequila 100% agave, licor de laranja e limão tahiti. A original.",
        price: "R$ 32",
        tags: ["casa"],
      },
      {
        name: "Margarita de maracujá com chili",
        description:
          "O encontro do Brasil com o México: maracujá fresco, tequila e borda de sal com pimenta.",
        price: "R$ 34",
        tags: ["casa", "picante"],
      },
      {
        name: "Paloma",
        description: "Tequila, grapefruit e água com gás. Leve, cítrica, dançante.",
        price: "R$ 30",
      },
      {
        name: "Mezcal negroni",
        description: "Nossa releitura defumada do clássico italiano.",
        price: "R$ 38",
        tags: ["novo"],
      },
      {
        name: "Agua fresca do dia",
        description: "Frutas frescas batidas com água e um toque de hortelã. Sem álcool.",
        price: "R$ 16",
        tags: ["vegetariano"],
      },
    ],
  },
];

export const menuTags = {
  vegetariano: { label: "Vegetariano", color: "text-agave" },
  picante: { label: "Picante", color: "text-terracotta" },
  casa: { label: "Assinatura da casa", color: "text-copper" },
  novo: { label: "Novo", color: "text-ember" },
} as const;
