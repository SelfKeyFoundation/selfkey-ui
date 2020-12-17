import * as React from 'react';
import { Slider } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import CommonStyle from '../common/common-style';
import BN from 'bignumber.js';
const styles = createStyles({
    root: {
        width: '100%',
        color: '#93B0C1',
        fontFamily: CommonStyle.fontFamily
    },
    sliderRoot: {
        padding: '22px 0 12px 0'
    },
    trackAfter: {
        borderRadius: '6px;',
        height: '10px',
        opacity: 1,
        backgroundColor: '#313D49'
    },
    trackBefore: {
        borderRadius: '6px;',
        height: '10px',
        opacity: 1,
        backgroundColor: '#00C0D9'
    },
    thumb: {
        height: '18px',
        width: '18px',
        backgroundColor: '#23E6FE',
        '&$activated': {
            height: '22px',
            width: '22px'
        }
    },
    activated: {},
    sliderLabels: {
        height: '19px',
        width: '100%',
        lineHeight: '19px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        '&>span': {
            fontSize: '16px'
        }
    },
    networkFeeValue: {
        color: '#ffffff'
    }
});
const WEI = new BN('1000000000000000000');
export class TransactionFeeSelectorComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { value: null };
        this.handleChange = (event, value) => {
            this.setState({ value });
            this.props.onChange(value);
        };
    }
    componentDidMount() {
        this.props.onChange(this.value);
    }
    get avarageGasPrice() {
        return (this.props.minGasPrice + this.props.maxGasPrice) / 2;
    }
    get value() {
        return (this.props.value || this.state.value || this.props.defaultValue || this.avarageGasPrice);
    }
    get transactionFee() {
        return new BN(this.value).times(this.props.gasLimit).dividedBy(WEI);
    }
    get fiatFee() {
        return this.transactionFee.times(this.props.fiatRate);
    }
    render() {
        const { classes, minGasPrice, maxGasPrice, fiat } = this.props;
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
                    root: classes.sliderRoot,
                    // trackAfter: classes.trackAfter,
                    // trackBefore: classes.trackBefore,
                    thumb: classes.thumb
                    // activated: classes.activated,
                    // active: classes.activated,
                } }),
            React.createElement("div", { className: classes.sliderLabels },
                React.createElement("span", null, "Slow"),
                React.createElement("span", null, "Medium"),
                React.createElement("span", null, "Fast"))));
    }
}
export const TransactionFeeSelector = withStyles(styles)(TransactionFeeSelectorComponent);
export default TransactionFeeSelector;
//# sourceMappingURL=transaction-fee-selector.js.map