import * as React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import CommonStyle from '../../common/common-style';
import { TransactionFeeBox } from './fee/transaction-fee-box';
import TransactionBox from '../transaction-box';
import { NumberFormat } from '../../price/number-format';
export const styles = createStyles({
    container: {
        fontFamily: CommonStyle.fontFamily
    },
    button: {
        boxSizing: 'border-box',
        height: '45px',
        width: '201px',
        border: '1px solid #0FB8D0',
        borderRadius: '4px',
        background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 2px 2px 0 #07C1DC, 2px 0 2px 0 rgba(0,0,0,0.2)',
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.67px',
        lineHeight: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        '&:disabled': {
            cursor: 'default',
            opacity: 0.7
        }
    },
    selectAllAmountBtn: {
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '16px',
        color: '#A9C5D6',
        boxSizing: 'border-box',
        height: '37px',
        width: '37px',
        border: '1px solid #303C49',
        borderRadius: '4px',
        backgroundColor: '#202932',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
    },
    actionButtonsContainer: {
        paddingTop: '50px'
    },
    input: {
        outlineWidth: 0,
        backgroundColor: '#262f39',
        paddingBottom: '20px',
        marginBottom: '20px',
        width: '100%',
        border: 'none',
        borderBottom: '2px solid #93b0c1',
        fontSize: '20px',
        color: '#a9c5d6',
        '&::-webkit-input-placeholder': {
            fontSize: '20px',
            color: '#a9c5d6'
        }
    },
    inputError: {
        borderBottom: '2px solid #FE4B61 !important'
    },
    amountContainer: {
        paddingTop: '25px',
        position: 'relative'
    },
    cryptoCurrencyText: {
        position: 'absolute',
        fontSize: '20px',
        color: '#ffffff',
        right: 0,
        fontWeight: 600
    },
    usdAmoutContainer: {
        '& span &:first-of-type': {
            fontSize: '40px',
            fontWeight: 300
        },
        '& span &:last-of-type': {
            fontSize: '20px',
            fontWeight: 600
        },
        color: '#ffffff',
        paddingBottom: '65px'
    },
    amountInput: {
        width: 'calc(100% - 45px)',
        border: 'none',
        margin: '0px',
        padding: '0px'
    },
    addressErrorText: {
        height: '19px',
        width: '242px',
        color: '#FE4B61',
        fontFamily: 'Lato',
        fontSize: '13px',
        lineHeight: '19px'
    },
    addressErrorColor: {
        color: '#FE4B61',
        borderBottom: '2px solid #FE4B61'
    },
    divider: {
        borderBottom: '2px solid #93b0c1',
        paddingTop: '10px'
    },
    cryptoSelect: {
        height: '40px',
        width: '300px',
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: '20px',
        lineHeight: '36px',
        backgroundColor: '#1E262E',
        border: '1px solid #384656',
        borderRadius: '30px',
        paddingLeft: '10px',
        paddingBottom: '10px'
    },
    selectItem: {
        border: 0,
        backgroundColor: '#1E262E',
        color: '#FFFFFF'
    }
});
export class TransactionSendBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderFeeBox = () => React.createElement(TransactionFeeBox, Object.assign({}, this.props));
        this.state = {
            amount: '',
            address: '',
            cryptoCurrency: props.cryptoCurrency
        };
    }
    handleAllAmountClick() {
        const value = String(this.props.balance);
        this.setState({ ...this.state, amount: value });
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(value);
        }
    }
    handleAddressChange(event) {
        if (!this.props.onAddressFieldChange) {
            return;
        }
        this.setState({ ...this.state, address: event.target.value });
        this.props.onAddressFieldChange(event.target.value);
    }
    handleAmountChange(event) {
        let value = event.target.value;
        if (isNaN(Number(value))) {
            value = '';
        }
        // Do not allow to enter values above the balance
        if (Number(value) > this.props.balance) {
            value = String(this.props.balance);
        }
        this.setState({ ...this.state, amount: value });
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(value);
        }
    }
    handleCryptoCurrencyChange(event) {
        const value = event.target.value;
        this.setState({ ...this.state, cryptoCurrency: value });
        if (this.props.onCryptoCurrencyChange) {
            this.props.onCryptoCurrencyChange(value);
        }
    }
    renderSelectTokenItems() {
        const { tokens, classes } = this.props;
        return tokens.map((token, index) => (React.createElement("option", { key: index, value: token.symbol, className: classes.selectItem }, `${token.name} - ${token.balance} ${token.symbol}`)));
    }
    renderButtons() {
        const { classes, onSendAction, sending, confirmAction, cancelAction, addressError } = this.props;
        const sendBtnIsEnabled = this.state.address && +this.state.amount && !addressError;
        if (sending) {
            return (React.createElement(Grid, { container: true, direction: "row", justify: "center", alignItems: "center", className: classes.actionButtonsContainer, spacing: 1 },
                React.createElement(Grid, { item: true },
                    React.createElement("button", { className: classes.button, onClick: confirmAction },
                        ' ',
                        "CONFIRM",
                        ' ')),
                React.createElement(Grid, { item: true },
                    React.createElement("button", { className: classes.button, onClick: cancelAction },
                        ' ',
                        "CANCEL",
                        ' '))));
        }
        else {
            return (React.createElement(Grid, { container: true, direction: "row", justify: "center", alignItems: "center", className: classes.actionButtonsContainer },
                React.createElement(Grid, { item: true },
                    React.createElement("button", { id: "sendAction", disabled: !sendBtnIsEnabled, className: classes.button, onClick: onSendAction },
                        ' ',
                        "SEND",
                        ' '))));
        }
    }
    render() {
        const { closeAction, isSendCustomToken, classes, addressError, amountUsd, locale, fiatCurrency } = this.props;
        const { cryptoCurrency } = this.state;
        const sendAmountClass = `${classes.input} ${classes.amountInput}`;
        const addressInputClass = `${classes.input} ${addressError ? classes.addressErrorColor : ''}`;
        const cryptoCurrencyText = cryptoCurrency || 'Send Custom Tokens';
        return (React.createElement(TransactionBox, { cryptoCurrency: cryptoCurrencyText, closeAction: closeAction },
            React.createElement("input", { id: "sendToAddress", type: "text", onChange: e => this.handleAddressChange(e), value: this.state.address, className: addressInputClass, placeholder: "Send to Address" }),
            addressError && (React.createElement("span", { className: classes.addressErrorText }, "Invalid address. Please check and try again.")),
            React.createElement(Grid, { container: true, direction: "row", className: classes.amountContainer, alignItems: "center", justify: "space-between" },
                React.createElement(Grid, { item: true },
                    React.createElement(Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "center", spacing: 4 },
                        React.createElement(Grid, { item: true },
                            React.createElement("button", { id: "allAmountButton", onClick: () => this.handleAllAmountClick(), className: classes.selectAllAmountBtn },
                                ' ',
                                "ALL",
                                ' ')),
                        React.createElement(Grid, { item: true },
                            React.createElement("input", { id: "amountInput", type: "text", onChange: e => this.handleAmountChange(e), value: this.state.amount, className: sendAmountClass, placeholder: "0.00" })))),
                React.createElement(Grid, { item: true }, isSendCustomToken && (React.createElement("select", { value: this.state.cryptoCurrency, onChange: e => this.handleCryptoCurrencyChange(e), name: "cryptoCurrency", className: classes.cryptoSelect, id: "customToken" },
                    React.createElement("option", { value: "", disabled: true, className: classes.selectItem }, "Custom Token"),
                    this.renderSelectTokenItems())))),
            React.createElement(Divider, { className: classes.divider }),
            React.createElement(Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.usdAmoutContainer },
                React.createElement("span", null,
                    React.createElement(NumberFormat, { locale: locale, priceStyle: "currency", currency: fiatCurrency, value: amountUsd, fractionDigits: 15 })),
                React.createElement("span", null, " USD ")),
            this.renderFeeBox(),
            this.renderButtons()));
    }
}
export const TransactionSendBox = withStyles(styles)(TransactionSendBoxComponent);
export default TransactionSendBox;
//# sourceMappingURL=transaction-send-box.js.map