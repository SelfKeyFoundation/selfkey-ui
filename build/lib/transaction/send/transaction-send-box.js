"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// @ts-ignore
var react_jss_1 = require("react-jss");
var common_style_1 = require("../../common/common-style");
var transaction_fee_box_1 = require("./fee/transaction-fee-box");
var transaction_box_1 = require("../transaction-box");
var core_1 = require("@material-ui/core");
var number_format_1 = require("../../price/number-format");
exports.styles = {
    container: {
        fontFamily: common_style_1.default.fontFamily
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
        paddingBottom: '65px',
        color: '#ffffff',
        '&& span': {
            '&:first-of-type': {
                fontSize: '40px',
                fontWeight: 300,
            },
            '&:last-of-type': {
                fontSize: '20px',
                fontWeight: 600,
            }
        }
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
        borderBottom: '2px solid #FE4B61',
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
        paddingBottom: '10px',
    },
    selectItem: {
        border: 0,
        backgroundColor: '#1E262E',
        color: '#FFFFFF',
    }
};
var TransactionSendBoxComponent = /** @class */ (function (_super) {
    __extends(TransactionSendBoxComponent, _super);
    function TransactionSendBoxComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { amount: '', address: '', cryptoCurrency: props.cryptoCurrency };
        return _this;
    }
    TransactionSendBoxComponent.prototype.renderFeeBox = function () {
        return (React.createElement(transaction_fee_box_1.TransactionFeeBox, __assign({}, this.props)));
    };
    TransactionSendBoxComponent.prototype.handleAllAmountClick = function () {
        var value = String(this.props.balance);
        this.setState(__assign({}, this.state, { amount: value }));
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(value);
        }
    };
    TransactionSendBoxComponent.prototype.handleAddressChange = function (event) {
        if (!this.props.onAddressFieldChange) {
            return;
        }
        this.setState(__assign({}, this.state, { address: event.target.value }));
        this.props.onAddressFieldChange(event.target.value);
    };
    TransactionSendBoxComponent.prototype.handleAmountChange = function (event) {
        var value = event.target.value;
        if (isNaN(Number(value))) {
            value = '';
        }
        // Do not allow to enter values above the balance
        if (Number(value) > this.props.balance) {
            value = String(this.props.balance);
        }
        this.setState(__assign({}, this.state, { amount: value }));
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(value);
        }
    };
    TransactionSendBoxComponent.prototype.handleCryptoCurrencyChange = function (event) {
        var value = event.target.value;
        this.setState(__assign({}, this.state, { cryptoCurrency: value }));
        if (this.props.onCryptoCurrencyChange) {
            this.props.onCryptoCurrencyChange(value);
        }
    };
    TransactionSendBoxComponent.prototype.renderSelectTokenItems = function () {
        var _a = this.props, tokens = _a.tokens, classes = _a.classes;
        return tokens.map(function (token) {
            return (React.createElement("option", { value: token.symbol, className: classes.selectItem }, token.name + " - " + token.balance + " " + token.symbol));
        });
    };
    TransactionSendBoxComponent.prototype.renderButtons = function () {
        var _a = this.props, classes = _a.classes, onSendAction = _a.onSendAction, sending = _a.sending, confirmAction = _a.confirmAction, cancelAction = _a.cancelAction, addressError = _a.addressError;
        var sendBtnIsEnabled = this.state.address && +this.state.amount && !addressError;
        if (sending) {
            return (React.createElement(core_1.Grid, { container: true, direction: "row", justify: "center", alignItems: "center", className: classes.actionButtonsContainer, spacing: 24 },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement("button", { className: classes.button, onClick: confirmAction }, " CONFIRM ")),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement("button", { className: classes.button, onClick: cancelAction }, " CANCEL "))));
        }
        else {
            return (React.createElement(core_1.Grid, { container: true, direction: "row", justify: "center", alignItems: "center", className: classes.actionButtonsContainer },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement("button", { disabled: !sendBtnIsEnabled, className: classes.button, onClick: onSendAction }, " SEND "))));
        }
    };
    TransactionSendBoxComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, closeAction = _a.closeAction, isSendCustomToken = _a.isSendCustomToken, classes = _a.classes, addressError = _a.addressError, amountUsd = _a.amountUsd, locale = _a.locale, fiatCurrency = _a.fiatCurrency;
        var cryptoCurrency = this.state.cryptoCurrency;
        var sendAmountClass = classes.input + " " + classes.amountInput;
        var addressInputClass = classes.input + " " + (addressError ? classes.addressErrorColor : '');
        var cryptoCurrencyText = cryptoCurrency || 'Send Custom Tokens';
        return (React.createElement(transaction_box_1.default, { cryptoCurrency: cryptoCurrencyText, closeAction: closeAction },
            React.createElement("input", { type: 'text', onChange: function (e) { return _this.handleAddressChange(e); }, value: this.state.address, className: addressInputClass, placeholder: "Send to Address" }),
            addressError &&
                React.createElement("span", { className: classes.addressErrorText }, "Invalid address. Please check and try again."),
            React.createElement(core_1.Grid, { container: true, direction: 'row', className: classes.amountContainer, alignItems: 'center', justify: 'space-between' },
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: "center", spacing: 16 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement("button", { onClick: function () { return _this.handleAllAmountClick(); }, className: classes.selectAllAmountBtn }, " ALL ")),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement("input", { type: 'text', onChange: function (e) { return _this.handleAmountChange(e); }, value: this.state.amount, className: sendAmountClass, placeholder: "0.00" })))),
                React.createElement(core_1.Grid, { item: true }, isSendCustomToken &&
                    React.createElement("select", { value: this.state.cryptoCurrency, onChange: function (e) { return _this.handleCryptoCurrencyChange(e); }, name: "cryptoCurrency", className: classes.cryptoSelect },
                        React.createElement("option", { value: "", disabled: true, selected: true, className: classes.selectItem }, "Custom Token"),
                        this.renderSelectTokenItems()))),
            React.createElement(core_1.Divider, { className: classes.divider }),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.usdAmoutContainer },
                React.createElement("span", null,
                    React.createElement(number_format_1.NumberFormat, { locale: locale, style: 'currency', currency: fiatCurrency, value: amountUsd, fractionDigits: 15 })),
                React.createElement("span", null, " USD ")),
            this.renderFeeBox(),
            this.renderButtons()));
    };
    return TransactionSendBoxComponent;
}(React.Component));
exports.TransactionSendBoxComponent = TransactionSendBoxComponent;
exports.TransactionSendBox = react_jss_1.default(exports.styles)(TransactionSendBoxComponent);
exports.default = exports.TransactionSendBox;
//# sourceMappingURL=transaction-send-box.js.map