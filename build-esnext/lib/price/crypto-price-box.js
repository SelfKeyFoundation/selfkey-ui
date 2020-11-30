import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { PriceSummary } from './price-summary';
const styles = createStyles({
    cryptoPriceBox: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 36px)',
        justifyContent: 'flex-start',
        marginLeft: '40px',
        marginRight: '8px',
        padding: '16px 0',
    },
    smallText: {
        color: '#fff',
        fontSize: '12px',
        marginTop: '3px !important'
    },
    test: {
        color: 'red'
    }
});
export const CryptoPriceBox = withStyles(styles)(({ classes, locale, cryptoCurrency, cryptoValue, toCurrency, toValue }) => (React.createElement("div", { className: classes.cryptoPriceBox },
    React.createElement(PriceSummary, { className: classes.test, locale: locale, priceStyle: "decimal", currency: cryptoCurrency, value: cryptoValue, appendCurrency: true }),
    React.createElement(PriceSummary, { locale: locale, priceStyle: "currency", currency: toCurrency, value: toValue, appendCurrency: true, valueClass: classes.smallText }))));
export default CryptoPriceBox;
//# sourceMappingURL=crypto-price-box.js.map