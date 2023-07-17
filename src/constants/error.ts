import { LIMIT_COINS_QUANTITY } from "@/constants/coins";
import { IDialogMessage } from "@/interfaces/IDialogMessage";

export const EXCEEDING_THE_LIMIT: IDialogMessage = {
  img: "big-coin.png",
  title: `Количество монет\nограничено`,
  message: `Вы не можете нацыганить\nболее ${LIMIT_COINS_QUANTITY} монет biorobo`,
};
