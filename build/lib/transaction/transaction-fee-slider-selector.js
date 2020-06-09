import * as React from 'react';
import { Slider, Typography, withStyles, createStyles } from '@material-ui/core';
import CommonStyle from '../common/common-style';
import BN from 'bignumber.js';
const styles = createStyles({
    root: {
        width: '100%',
        color: '#93B0C1',
        fontFamily: CommonStyle.fontFamily,
    },
    sliderRoot: {
        padding: '22px 0 12px 0',
    },
    trackAfter: {
        borderRadius: '6px;',
        height: '10px',
        opacity: 1,
        backgroundColor: '#313D49',
    },
    trackBefore: {
        borderRadius: '6px;',
        height: '10px',
        opacity: 1,
        backgroundColor: '#00C0D9',
    },
    thumb: {
        height: '18px',
        width: '18px',
        backgroundColor: '#23E6FE',
        '&$activated': {
            height: '22px',
            width: '22px',
        },
    },
    activated: {},
    sliderLabels: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        lineHeight: '19px',
        width: '100%',
        '&>span': {
            fontSize: '16px',
        },
        '& p': {
            marginBottom: '5px'
        },
        '& h6:nth-child(3)': {
            marginBottom: '5px'
        }
    },
    networkFeeValue: {
        color: '#ffffff',
    },
    rightAligned: {
        textAlign: 'right'
    },
});
const WEI = new BN('1000000000000000000');
export class TransactionFeeSelectorComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: null
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
            this.props.onChange(value);
        };
        this.getTransactionPrice = (price, fiat) => {
            const transactionPrice = new BN(price).times(this.props.gasLimit).dividedBy(WEI);
            const priceInETH = transactionPrice.toString();
            const priceInFiat = transactionPrice.times(this.props.fiatRate);
            return (React.createElement(React.Fragment, null,
                React.createElement(Typography, { variant: "subtitle2", color: "secondary" },
                    priceInETH,
                    " ETH/"),
                React.createElement(Typography, { variant: "subtitle2", color: "secondary" },
                    "$ ",
                    priceInFiat.toFixed(2),
                    " ",
                    fiat)));
        };
    }
    componentDidMount() {
        this.props.onChange(this.value);
    }
    get avarageGasPrice() {
        return (this.props.minGasPrice + this.props.maxGasPrice) / 2;
    }
    get value() {
        return this.props.value || this.state.value || this.props.defaultValue || this.avarageGasPrice;
    }
    get transactionFee() {
        return new BN(this.value).times(this.props.gasLimit).dividedBy(WEI);
    }
    get fiatFee() {
        return this.transactionFee.times(this.props.fiatRate);
    }
    render() {
        const { classes, minGasPrice, maxGasPrice, slowPrice, mediumPrice, fastPrice, fiat } = this.props;
        return (React.createElement("div", { className: classes.root },
            React.createElement("div", null,
                React.createElement("span", null, "Network Transaction Fee:"),
                ' ',
                React.createElement("span", { className: classes.networkFeeValue },
                    this.transactionFee.toString(),
                    " ETH / ",
                    this.fiatFee.toFixed(2),
                    " ",
                    fiat)),
            React.createElement(Slider, { min: minGasPrice, max: maxGasPrice, onChange: this.handleChange, value: this.value, classes: {
                    // active: classes.activated,
                    root: classes.sliderRoot,
                    // trackBefore: classes.trackBefore,
                    // trackAfter: classes.trackAfter,
                    thumb: classes.thumb,
                } }),
            React.createElement("div", { className: classes.sliderLabels },
                React.createElement("div", null,
                    React.createElement(Typography, { variant: "body1" }, "Slow"),
                    this.getTransactionPrice(slowPrice, fiat),
                    React.createElement(Typography, { variant: "subtitle2", color: "secondary" }, "5 - 30 min")),
                React.createElement("div", null,
                    React.createElement(Typography, { variant: "body1" }, "Medium"),
                    this.getTransactionPrice(mediumPrice, fiat),
                    React.createElement(Typography, { variant: "subtitle2", color: "secondary" }, "2 - 5 min")),
                React.createElement("div", { className: classes.rightAligned },
                    React.createElement(Typography, { variant: "body1" }, "Fast"),
                    this.getTransactionPrice(fastPrice, fiat),
                    React.createElement(Typography, { variant: "subtitle2", color: "secondary" }, `< 2 min`)))));
    }
}
export const TransactionFeeSliderSelector = withStyles(styles)(TransactionFeeSelectorComponent);
export default TransactionFeeSliderSelector;
//# sourceMappingURL=transaction-fee-slider-selector.js.map