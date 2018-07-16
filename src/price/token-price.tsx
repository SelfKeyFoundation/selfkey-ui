import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';

import { PriceSummary } from './price-summary';

const styles: StyleSheet = {
    cryptoCurrencyValue: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '40px',
        fontWeight: '300',
        color: '#ffffff'
    },

    currency: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '14px',
        color: '#93b0c1'
    }
};

export type TokenPriceProps = {
    locale: string,
    cryptoCurrency: string,
    cryptoValue: string,
    toCurrency: string,
    toValue: string
};

const TokenPriceComponent : SFC<StyledComponentProps & TokenPriceProps> = ({classes, children, locale, cryptoCurrency, cryptoValue, toCurrency, toValue }) => (
    <div>
        <PriceSummary locale={locale} style="decimal" currency={cryptoCurrency} value={cryptoValue} valueClass={classes.cryptoCurrencyValue}/>
        <PriceSummary locale={locale} style="currency" currency={toCurrency} currencyClass={classes.currency} value={toValue} valueClass={classes.currency} prependCurrency/>
    </div>
)

/** Test description */
export const TokenPrice: SFC<TokenPriceProps> = injectSheet(styles)(TokenPriceComponent);

export default TokenPrice;
