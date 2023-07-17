import {
  DEFAULT_COINS_QUANTITY,
  LIMIT_COINS_QUANTITY,
  MAX_COINS_QUANTITY,
} from "@/constants/coins";
import { CREATE_PRICE } from "@/constants/details";
import { EXCEEDING_THE_LIMIT } from "@/constants/error";
import { defineStore } from "pinia";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    coinsQuantity: 0,
  }),

  actions: {
    ADD_COINS({
      isFiveCoins,
      price,
    }: {
      isFiveCoins?: boolean;
      price?: number;
    }) {
      if (this.coinsQuantity < LIMIT_COINS_QUANTITY) {
        this.coinsQuantity += isFiveCoins
          ? MAX_COINS_QUANTITY
          : price || DEFAULT_COINS_QUANTITY;

        this.coinsQuantity >= LIMIT_COINS_QUANTITY &&
          (this.coinsQuantity = LIMIT_COINS_QUANTITY);
      } else {
        throw new Error(JSON.stringify(EXCEEDING_THE_LIMIT));
      }
    },

    BUY_DETAIL(price: number) {
      this.coinsQuantity -= price;
    },

    BUY_ROBOT() {
      this.coinsQuantity -= CREATE_PRICE;
    },
  },
});
