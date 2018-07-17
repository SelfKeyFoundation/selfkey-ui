import * as React from "react";
import { SFC } from "react";

export type NumberFormatProps = {
  locale: string,
  style: string,
  currency?: string,
  value: number,
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
  fractionDigits = fractionDigits || (Number(value) >= 1) ? 2 : 10;
  const formatString = `${locale}:${style}:${currency}:${fractionDigits || "default"}`;

  if (locale && !formatters[formatString]) {
    formatters[formatString] = new Intl.NumberFormat(locale, {
      style: style || "decimal",
      currency: currency,
      maximumFractionDigits: fractionDigits
    });
  }

  return (
    <div>{formatters[formatString].format(Number(value))}</div>
  );
};
