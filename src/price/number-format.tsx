import * as React from "react";
import { SFC } from "react";

export type NumberFormatProps = {
  locale: string,
  style: string,
  currency: string,
  value: string,
  fractionDigits?: number
};

const formatters: {
  [key: string]: Intl.NumberFormat;
} = {};

export const NumberFormat: SFC<NumberFormatProps> = ({
  locale,
  style,
  currency,
  value,
  fractionDigits
}) => {
  const formatString = `${locale}:${style}:${currency}:${fractionDigits || "default"}`;

  if (locale && !formatters[formatString]) {
    formatters[formatString] = new Intl.NumberFormat(locale, {
      style: style || "decimal",
      currency: currency,
      maximumFractionDigits: fractionDigits || (Number(value) >= 1) ? 2 : 10
    });
  }

  return (
    <div>{formatters[formatString].format(Number(value))}</div>
  );
};
