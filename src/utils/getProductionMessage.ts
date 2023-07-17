import { IStorageDetail } from "@/interfaces/storage/IStorageDetail";

import { DETAILS_CASE } from "@/constants/case/case-details";
import { getFormattedCase } from "@/utils/formatCase";

export const getProductionMessage = ({
  details,
}: {
  details: IStorageDetail[];
}) => {
  const wantageDetails = Object.entries(
    details.reduce((acc: { [key: string]: number }, selected) => {
      const detail = details.find((item) => item.id === selected.id);

      detail &&
        (acc[selected.id] =
          selected.requiredAmount - detail.selected >= 0
            ? selected.requiredAmount - detail.selected
            : 0);

      return acc;
    }, {})
  )
    .filter(([_, wantage]) => wantage)
    .map(([id, wantage]) => {
      const words = DETAILS_CASE.find((item) => item.id === id);
      const message =
        words && `${wantage} ${getFormattedCase(wantage, words.forms)}`;
      return message;
    }) as string[];

  const formattedMessage = new Intl.ListFormat("de", {
    style: "short",
    type: "disjunction",
  })
    .format(wantageDetails)
    .replace("oder", "и");

  return formattedMessage
    ? `Для производства биоробота не хватает ${formattedMessage}`
    : "Вы можете произвести робота";
};
