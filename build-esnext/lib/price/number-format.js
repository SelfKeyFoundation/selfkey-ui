import * as React from 'react';
const formatters = {};
export const NumberFormat = ({ locale, priceStyle, currency, value, fractionDigits, showCurrency }) => {
    fractionDigits = fractionDigits ? fractionDigits : Number(value) >= 1 ? 2 : 10;
    const formatString = `${locale}:${priceStyle}:${currency}:${fractionDigits || 'default'}`;
    if (locale && !formatters[formatString]) {
        const options = {
            style: priceStyle,
            maximumFractionDigits: fractionDigits
        };
        if (priceStyle === 'currency') {
            options.currency = currency;
        }
        formatters[formatString] = new Intl.NumberFormat(locale, options);
    }
    return (React.createElement("div", null,
        formatters[formatString].format(Number(value)),
        " ",
        showCurrency && currency));
};
//# sourceMappingURL=number-format.js.map