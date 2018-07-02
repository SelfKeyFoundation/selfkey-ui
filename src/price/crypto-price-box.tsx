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
    fromCurrencyShort: string,
    fromCurrencySymbol: string,
    fromValue: string,
    toCurrencyShort: string
    toCurrencySymbol: string
    toValue: string
}

const CryptoPriceBoxComponent : SFC<StyledComponentProps & CryptoPriceBoxProps> = ({classes, children, fromCurrencyShort, fromCurrencySymbol, fromValue, toCurrencyShort,  toValue }) => (
    <div className={`${classes.cryptoPriceBox}`}>
        <PriceSummary currencyShort={fromCurrencyShort} currencySymbol={fromCurrencySymbol} value={fromValue}></PriceSummary>
        <PriceSummary currencyShort={toCurrencyShort} currencySymbol={fromCurrencySymbol} value={toValue} ></PriceSummary>
    </div>
)

/** Test description */
export const CryptoPriceBox: SFC<CryptoPriceBoxProps> = injectSheet(styles)(CryptoPriceBoxComponent);

export default CryptoPriceBox;
