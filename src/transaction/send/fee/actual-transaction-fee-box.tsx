import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import CommonStyle from '../../../common/common-style';
import { NumberFormat } from '../../../price/number-format';
import { Grid } from '@material-ui/core';

export const styles = createStyles({
    root: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: CommonStyle.fontFamily,
    }
});

export type ActualTransactionFeeBoxProps = {
    locale: string,
    ethFee: number,
    usdFee: number,
    fiatCurrency: string
};

export const ActualTransactionFeeBox = withStyles(styles)(
    ({classes, locale, ethFee, usdFee, fiatCurrency }: ActualTransactionFeeBoxProps & WithStyles<typeof styles>) => (
        <Grid container className={classes.root} direction='row' spacing={1}>
            <Grid item>
                <Grid container spacing={1}>
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
                <Grid container spacing={1}>
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
