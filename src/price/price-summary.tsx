import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';
import CommonStyle from '../common/common-style';

import { NumberFormat } from './number-format';
import { Grid } from '@material-ui/core'


const styles: StyleSheet = {
    row: {
        marginTop: '4px',
    },
    currency: {
        opacity: '0.7',
        fontFamily: CommonStyle.fontFamily,
        fontSize: '14px',
        fontWeight: '500',
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

const PriceSummaryComponent: SFC<StyledComponentProps & PriceSummaryProps> = ({ classes, children, className, currencyClass, valueClass, locale, style, currency, value, appendCurrency, prependCurrency }) => (
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
)

/** Test description */
export const PriceSummary: SFC<PriceSummaryProps> = injectSheet(styles)(PriceSummaryComponent);

export default PriceSummary;
