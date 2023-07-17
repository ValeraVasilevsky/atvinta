import { COINS_WORDS } from "@/constants/case/case-coins";
import { BIO_HAND, MICROCHIP, SOUL } from "@/constants/details";

export const DETAILS_CASE: { id: string; forms: string[] }[] = [
  { id: BIO_HAND, forms: ["биорука", "биоруки", "биорук"] },
  { id: MICROCHIP, forms: ["микрочипа", "микрочипа", "микрочипов"] },
  { id: SOUL, forms: ["души", "души", "душ"] },
  { id: "money", forms: COINS_WORDS },
];
