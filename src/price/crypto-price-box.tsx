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
        marginRight: '10px',
        marginLeft: '40px',
    }
};

export type CryptoPriceBoxProps = {
    locale: string,
    cryptoCurrency: string,
    cryptoValue: string,
    toCurrency: string
    toValue: string
}

const CryptoPriceBoxComponent : SFC<StyledComponentProps & CryptoPriceBoxProps> = ({classes, children, locale, cryptoCurrency, cryptoValue, toCurrency, toValue }) => (
    <div className={classes.cryptoPriceBox}>
        <PriceSummary locale='' currency={cryptoCurrency} value={cryptoValue}/>
        <PriceSummary locale={locale} currency={toCurrency} value={toValue} />
    </div>
)

/** Test description */
export const CryptoPriceBox: SFC<CryptoPriceBoxProps> = injectSheet(styles)(CryptoPriceBoxComponent);

export default CryptoPriceBox;
