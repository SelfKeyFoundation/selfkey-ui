import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet } from 'react-jss';
import CommonStyle from '../../../common/common-style';
import { NumberFormat } from '../../../price/number-format';
import { Grid } from '@material-ui/core';

export const styles: StyleSheet = {
    root: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: CommonStyle.fontFamily,
    }
};

export type ActualTransactionFeeBoxProps = {
    locale: string,
    ethFee: number,
    usdFee: number,
    fiatCurrency: string
}

export const ActualTransactionFeeBox = injectSheet(styles)<ActualTransactionFeeBoxProps>(({classes, locale, ethFee, usdFee, fiatCurrency }) => (
    <Grid container className={classes.root} direction='row' spacing={8}>
        <Grid item>
            <Grid container spacing={8}>
                <Grid item>
                    <NumberFormat locale={locale} priceStyle='decimal' currency='ETH' value={ethFee} fractionDigits={15}/>
                </Grid>
                <Grid item>
                    ETH
                </Grid>
                <Grid item>
                    /
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Grid container spacing={8}>
                <Grid item>
                    <NumberFormat locale={locale} priceStyle='currency' currency={fiatCurrency} value={usdFee} fractionDigits={15}/>
                </Grid>
                <Grid item>
                    {fiatCurrency}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
));

export default ActualTransactionFeeBox;
