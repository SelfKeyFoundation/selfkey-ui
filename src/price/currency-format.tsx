import * as React from 'react';
import { SFC } from 'react';

export type CurrencyFormatProps = {
  locale: string,
  currency: string,
  value: string
}

export const CurrencyFormat: SFC<CurrencyFormatProps> = ({locale, currency, value }) => (
  <div>
      {(locale) ? new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: 10
 }).format(Number(value)): value}
  </div>    
)