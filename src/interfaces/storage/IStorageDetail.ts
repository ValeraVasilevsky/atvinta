import { ICard } from "@/interfaces/ICard";

export interface IStorageDetail extends ICard {
  quantity: number;
  selected: number;
  requiredAmount: number;
}
