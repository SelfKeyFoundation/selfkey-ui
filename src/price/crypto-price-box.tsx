import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';

import { PriceSummary } from './price-summary';

const styles: StyleSheet = {
    cryptoPriceBox: {
        height: 'calc(100% - 36px)',
        padding: '18px 0 18px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginRight: '40px',
        marginLeft: '40px',
    }
};

type CryptoPriceBoxProps = {
    fromLocale: string,
    fromCurrencyShort: string,
    fromValue: string,
    toLocale: string,
    toCurrencyShort: string
    toValue: string
}

const CryptoPriceBoxComponent : SFC<StyledComponentProps & CryptoPriceBoxProps> = ({classes, children, fromLocale, fromCurrencyShort, fromValue, toLocale, toCurrencyShort, toValue }) => (
    <div className={`${classes.cryptoPriceBox}`}>
        <PriceSummary locale={fromLocale} currencyShort={fromCurrencyShort} value={fromValue}></PriceSummary>
        <PriceSummary locale={toLocale} currencyShort={toCurrencyShort} value={toValue} ></PriceSummary>
    </div>
)

/** Test description */
export const CryptoPriceBox: SFC<CryptoPriceBoxProps> = injectSheet(styles)(CryptoPriceBoxComponent);

export default CryptoPriceBox;
