import * as React from "react";
import { SFC } from "react";

export type NumberFormatProps = {
  locale: string,
  priceStyle: string,
  currency?: string,
  value: number,
  fractionDigits?: number,
  showCurrency?: boolean,
};

const formatters: {
  [key: string]: Intl.NumberFormat;
} = {};

export type OptionsType = {
  style: string,
  maximumFractionDigits: number,
  [key: string]: any
}

export const NumberFormat: SFC<NumberFormatProps> = ({
  locale,
  priceStyle,
  currency,
  value,
  fractionDigits,
  showCurrency,
}) => {
  fractionDigits = (fractionDigits)? fractionDigits : (Number(value) >= 1) ? 2 : 10;
  const formatString = `${locale}:${priceStyle}:${currency}:${fractionDigits || "default"}`;

  if (locale && !formatters[formatString]) {
    const options: OptionsType = {
      style: priceStyle,
      maximumFractionDigits: fractionDigits
    };

    if (priceStyle === 'currency') {
      options.currency = currency;
    }

    formatters[formatString] = new Intl.NumberFormat(locale, options);
  }

  return (
  <div>{formatters[formatString].format(Number(value))} {showCurrency && currency}</div>
  );
};
