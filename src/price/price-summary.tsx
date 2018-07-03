import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';
import CommonStyle from '../common/common-style';

import CurrencyFormat from './currency-format';

const styles: StyleSheet = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: '4px',
    },
    currencyShort: {
        opacity: '0.7',
        fontFamily: CommonStyle.fontFamily,
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1px',
        color: '#ffffff',
        marginRight: '6px',
    },
    value: {
        fontFamily: CommonStyle.fontFamily,
        fontSize: '17px',
        color: '#ffffff'
    }
};

export type PriceSummaryProps = {
    locale: string,
    currencyShort: string,
    value: string
};

const PriceSummaryComponent: SFC<StyledComponentProps & PriceSummaryProps> = ({ classes, children, locale, currencyShort, value }) => (
    <div className={`${classes.row}`}>
        <div className={`${classes.currencyShort}`}>{currencyShort}</div>
        <div className={`${classes.value}`}>
            <CurrencyFormat locale={locale} currency={currencyShort} value={value}></CurrencyFormat>
        </div>
    </div>
)

/** Test description */
export const PriceSummary: SFC<PriceSummaryProps> = injectSheet(styles)(PriceSummaryComponent);

export default PriceSummary;
