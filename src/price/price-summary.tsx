import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import CommonStyle from '../common/common-style';

import { NumberFormat } from './number-format';
import { Grid } from '@material-ui/core'


const styles: StyleSheet = {
    row: {
        marginTop: '4px',
    },
    currency: {
        opacity: 0.7,
        fontFamily: CommonStyle.fontFamily,
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '1px',
        color: '#ffffff',
    },
    value: {
        fontFamily: CommonStyle.fontFamily,
        fontSize: '17px',
        color: '#ffffff'
    }
};

export type PriceSummaryProps = {
    className?: string,
    currencyClass?: string,
    valueClass?: string,
    locale: string,
    style: string,
    currency: string,
    value: string,
    appendCurrency?: boolean,
    prependCurrency?: boolean,
};

export const PriceSummary = injectSheet(styles)<PriceSummaryProps>(({ classes, children, className, currencyClass, valueClass, locale, style, currency, value, appendCurrency, prependCurrency }) => (
    <Grid container className={className? className : classes.row} alignItems='center' spacing={8}>
        {appendCurrency &&
            <Grid item className={currencyClass? currencyClass : classes.currency}>{currency}</Grid>
        }
        <Grid item className={valueClass? valueClass : classes.value} >
            <NumberFormat locale={locale} style={style} currency={currency} value={value}/>
        </Grid>
        {prependCurrency &&
            <Grid item className={currencyClass? currencyClass : classes.currency}>{currency}</Grid>
        }
    </Grid>
));

export default PriceSummary;
