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

export type OptionsType = {
  style: string,
  maximumFractionDigits: number,
  [key: string]: any
}

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
    const options: OptionsType = {
      style: style,
      maximumFractionDigits: fractionDigits
    };

    if (style === 'currency') {
      options.currency = currency;
    }

    formatters[formatString] = new Intl.NumberFormat(locale, options);
  }

  return (
    <div>{formatters[formatString].format(Number(value))}</div>
  );
};
