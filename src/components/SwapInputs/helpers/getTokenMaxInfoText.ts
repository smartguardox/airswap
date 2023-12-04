import {
  nativeCurrencyAddress,
  nativeCurrencySafeTransactionFee,
} from "../../../constants/nativeCurrency";
import { TokenInfo } from "@airswap/types";
import { TFunction } from "react-i18next";

export default function getTokenMaxInfoText(
  tokenInfo: TokenInfo | null,
  maxAmount: string | null,
  t: TFunction<"translation">,
): string | null {
  if (!maxAmount || !tokenInfo) {
    return null;
  }

  const transactionFee =
    tokenInfo.address === nativeCurrencyAddress &&
    nativeCurrencySafeTransactionFee[tokenInfo.chainId];
  const amountAndSymbolText = `${maxAmount} ${tokenInfo?.symbol}`;

  if (transactionFee) {
    return t("orders.nativeCurrencyMaxInfoText", {
      amount: amountAndSymbolText,
      fee: transactionFee,
    });
  }

  return `Balance: ${amountAndSymbolText}`;
}
