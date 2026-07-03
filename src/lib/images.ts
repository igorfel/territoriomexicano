/*
 * Registro central de imagens (placeholders premium via Unsplash).
 * Todas as URLs foram verificadas (HTTP 200). Ao receber a fotografia
 * profissional do restaurante, troque apenas este arquivo.
 */

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`;

export const img = {
  // Hero & atmosfera
  hero: u("1414235077428-338989a2e8c0"),
  interiorWarm: u("1552566626-52f8b828add9"),
  interiorTables: u("1517248135467-4c7edcad34c4"),
  interiorElegant: u("1559339352-11d035aa65de"),
  interiorLounge: u("1613145997970-db84a7975fbb"),
  barDark: u("1470337458703-46ad1756a187"),
  barNeon: u("1543007630-9710e4a00a20"),
  bartender: u("1533777324565-a040eb52facd"),

  // Pratos
  tacosBoard: u("1599974579688-8dbdd335c77f"),
  tacosClose: u("1551504734-5ee1c4a1479b"),
  tacosBirria: u("1613514785940-daed07799d9b"),
  tacosDuo: u("1552332386-f8dd00dc2f85"),
  birriaConsome: u("1626700051175-6818013e1d4f"),
  quesadilla: u("1618040996337-56904b7850b9"),
  guacamole: u("1541544181051-e46607bc22a4"),
  guacamoleIngredients: u("1615870216519-2f9fa575fa5c"),
  ceviche: u("1532980400857-e8d9d275d858"),
  spreadTable: u("1534352956036-cd81e27dd615"),
  churros: u("1624371414361-e670edf4898d"),
  fineDining: u("1504544750208-dc0358e63f7f"),

  // Drinks
  margarita: u("1556855810-ac404aa91e85"),
  margaritaGold: u("1609951651556-5334e2706168"),
  cocktailsBar: u("1514362545857-3bc16c4c7d1b"),
  cocktailsColor: u("1551024709-8f23befc6f87"),
  tequila: u("1516535794938-6063878f08cc"),

  // Gente & cozinha
  friendsToast: u("1529156069898-49953e39b3ac"),
  friendsTable: u("1543269865-cbf427effbad"),
  handsTable: u("1467003909585-2f8a72700288"),
  chefPlating: u("1577219491135-ce391730fb2c"),
  kitchenFire: u("1556910103-1c02745aae4d"),

  // México
  mexicoColors: u("1512813195386-6cf811ad3542"),
  mexicoFlags: u("1518105779142-d975f22f1b0a"),
  mexicoStreet: u("1547995886-6dc09384c6e6"),
  peppers: u("1526346698789-22fd84314424"),
} as const;
