import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { PriceSummary } from './price-summary';

const styles: StyleSheet = {
    cryptoPriceBox: {
        height: 'calc(100% - 36px)',
        padding: '18px 0 18px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginRight: '10px',
        marginLeft: '40px',
    },
    smallText: {
        color: '#fff',
        fontSize: '12px',
        marginTop: '3px !important'
    },
    test: {
        color: 'red'
    }
};

export type CryptoPriceBoxProps = {
    locale: string,
    cryptoCurrency: string,
    cryptoValue: number,
    toCurrency: string
    toValue: number
}

export const CryptoPriceBox = injectSheet(styles)<CryptoPriceBoxProps>(({classes, children, locale, cryptoCurrency, cryptoValue, toCurrency, toValue }) => (
    <div className={classes.cryptoPriceBox}>
        <PriceSummary className={classes.test} locale={locale} priceStyle="decimal" currency={cryptoCurrency} value={cryptoValue} appendCurrency/>
        <PriceSummary locale={locale} priceStyle="currency" currency={toCurrency} value={toValue} appendCurrency valueClass={classes.smallText} />
    </div>
));

export default CryptoPriceBox;
