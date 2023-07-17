import { IStorageDetail } from "@/interfaces/storage/IStorageDetail";
import { defineStore } from "pinia";

import { BIO_HAND, MICROCHIP, SOUL } from "@/constants/details";
import {
  BIO_HAND_AMOUNT,
  MICROCHIP_AMOUNT,
  SOUL_AMOUNT,
} from "@/constants/production/detailsAmount";

export const useStorageStore = defineStore("storage", {
  state: () => ({
    details: [
      {
        id: BIO_HAND,
        title: "Биорука",
        price: 5,
        quantity: 0,
        selected: 0,
        requiredAmount: BIO_HAND_AMOUNT,
      },
      {
        id: MICROCHIP,
        title: "Микрочип",
        price: 3,
        quantity: 0,
        selected: 0,
        requiredAmount: MICROCHIP_AMOUNT,
      },
      {
        id: SOUL,
        title: "Душа",
        price: 15,
        quantity: 0,
        selected: 0,
        requiredAmount: SOUL_AMOUNT,
      },
    ] as IStorageDetail[],
  }),

  actions: {
    ADD_DETAIL(id: string) {
      this.details = this.details.map((detail) => {
        detail.id === id &&
          (detail = { ...detail, quantity: detail.quantity + 1, selected: 0 });

        return detail;
      });
    },

    SELL_DETAIL(id: string) {
      this.details = this.details.map((detail) => {
        detail.id === id &&
          (detail = { ...detail, quantity: detail.quantity - 1, selected: 0 });

        return detail;
      });
    },

    CREATE_ROBOT() {
      this.details = this.details.map((detail) => {
        detail = {
          ...detail,
          quantity: detail.quantity
            ? detail.quantity - detail.requiredAmount
            : 0,
          selected: 0,
        };
        return detail;
      });
    },

    INCREMENT_SELECTED_DETAILS(detailId: string) {
      this.details = this.details.map((detail) => {
        detail.id === detailId &&
          (detail = { ...detail, selected: detail.selected + 1 });
        return detail;
      });
    },

    DECREMENT_SELECTED_DETAILS(detailId: string) {
      this.details = this.details.map((detail) => {
        detail.id === detailId &&
          (detail = detail.selected
            ? { ...detail, selected: detail.selected - 1 }
            : { ...detail });
        return detail;
      });
    },
  },
});
