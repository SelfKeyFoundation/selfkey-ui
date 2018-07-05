import * as React from "react";
import { SFC } from "react";

export type CurrencyFormatProps = {
  locale: string;
  currency: string;
  value: string;
  fractionDigits?: number;
};

const formatters: {
  [key: string]: Intl.NumberFormat;
} = {};

export const CurrencyFormat: SFC<CurrencyFormatProps> = ({
  locale,
  currency,
  value,
  fractionDigits
}) => {
  const formatString = `${locale}:${currency}:${fractionDigits || "default"}`;

  if (locale && !formatters[formatString]) {
    formatters[formatString] = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      maximumFractionDigits: fractionDigits || 10
    });
  }

  return (
    <div>{locale ? formatters[formatString].format(Number(value)) : value}</div>
  );
};
