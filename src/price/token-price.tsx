import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { PriceSummary } from './price-summary';

const styles: StyleSheet = {
    cryptoCurrencyValue: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '40px',
        fontWeight: 300,
        color: '#ffffff'
    },

    currency: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        color: '#93b0c1'
    }
};

export type TokenPriceProps = {
    locale: string,
    cryptoCurrency: string,
    cryptoValue: number,
    toCurrency: string,
    toValue: number
};

export const TokenPrice = injectSheet(styles)<TokenPriceProps>(({classes, children, locale, cryptoCurrency, cryptoValue, toCurrency, toValue }) => (
    <div>
        <PriceSummary locale={locale} priceStyle='decimal' currency={cryptoCurrency} value={cryptoValue} valueClass={classes.cryptoCurrencyValue}/>
        <PriceSummary locale={locale} priceStyle='currency' currency={toCurrency} currencyClass={classes.currency} value={toValue} valueClass={classes.currency} prependCurrency/>
    </div>
));

export default TokenPrice;
