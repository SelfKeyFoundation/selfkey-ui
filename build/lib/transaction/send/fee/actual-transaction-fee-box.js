import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
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
export const ActualTransactionFeeBox = withStyles(styles)(({ classes, locale, ethFee, usdFee, fiatCurrency }) => (React.createElement(Grid, { container: true, className: classes.root, direction: 'row', spacing: 1 },
    React.createElement(Grid, { item: true },
        React.createElement(Grid, { container: true, spacing: 1 },
            React.createElement(Grid, { item: true },
                React.createElement(NumberFormat, { locale: locale, priceStyle: 'decimal', currency: 'ETH', value: ethFee, fractionDigits: 15 })),
            React.createElement(Grid, { item: true }, "ETH"),
            React.createElement(Grid, { item: true }, "/"))),
    React.createElement(Grid, { item: true },
        React.createElement(Grid, { container: true, spacing: 1 },
            React.createElement(Grid, { item: true },
                React.createElement(NumberFormat, { locale: locale, priceStyle: 'currency', currency: fiatCurrency, value: usdFee, fractionDigits: 15 })),
            React.createElement(Grid, { item: true }, fiatCurrency))))));
export default ActualTransactionFeeBox;
//# sourceMappingURL=actual-transaction-fee-box.js.map