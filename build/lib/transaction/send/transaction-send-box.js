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
//import DynamicNumber from 'react-dynamic-number';
exports.styles = {
    container: {
        fontFamily: common_style_1.default.fontFamily
    },
    sendButton: {
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
        cursor: 'pinter'
    },
    selectAllAmountBtn: {
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '16px',
        color: '#A9C5D6',
        position: 'absolute',
        left: 0,
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
        paddingLeft: '45px',
        width: 'calc(100% - 45px)',
        marginBottom: '10px'
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
    }
};
var TransactionSendBoxComponent = /** @class */ (function (_super) {
    __extends(TransactionSendBoxComponent, _super);
    function TransactionSendBoxComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { amount: '' };
        return _this;
    }
    TransactionSendBoxComponent.prototype.renderFeeBox = function () {
        return (React.createElement(transaction_fee_box_1.TransactionFeeBox, __assign({}, this.props)));
    };
    TransactionSendBoxComponent.prototype.handleAllAmountClick = function () {
        this.setState({ amount: String(this.props.balance) });
    };
    TransactionSendBoxComponent.prototype.handleAmountChange = function (event) {
        var value = event.target.value;
        if (isNaN(Number(value))) {
            value = '';
        }
        this.setState({ amount: value });
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(event);
        }
    };
    TransactionSendBoxComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, address = _a.address, cryptoCurrency = _a.cryptoCurrency, closeAction = _a.closeAction, classes = _a.classes, addressError = _a.addressError, onAddressFieldChange = _a.onAddressFieldChange, onSendAction = _a.onSendAction, amountUsd = _a.amountUsd, locale = _a.locale, fiatCurrency = _a.fiatCurrency;
        var sendAmountClass = classes.input + " " + classes.amountInput;
        var addressInputClass = classes.input + " " + (addressError ? classes.addressErrorColor : '');
        return (React.createElement(transaction_box_1.default, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
            React.createElement("input", { type: 'text', onChange: onAddressFieldChange, defaultValue: address, className: addressInputClass, placeholder: "Send to Address" }),
            addressError &&
                React.createElement("span", { className: classes.addressErrorText }, "Invalid address. Please check and try again."),
            React.createElement("div", { className: classes.amountContainer },
                React.createElement("button", { onClick: function () { return _this.handleAllAmountClick(); }, className: classes.selectAllAmountBtn }, " ALL "),
                React.createElement("input", { type: 'text', onChange: function (e) { return _this.handleAmountChange(e); }, value: this.state.amount, className: sendAmountClass, placeholder: "0.00" })),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.usdAmoutContainer },
                React.createElement("span", null,
                    React.createElement(number_format_1.NumberFormat, { locale: locale, style: 'currency', currency: fiatCurrency, value: amountUsd, fractionDigits: 15 })),
                React.createElement("span", null, " USD ")),
            this.renderFeeBox(),
            React.createElement(core_1.Grid, { className: classes.actionButtonsContainer, container: true, direction: "row", justify: "center", alignItems: "center" },
                React.createElement("button", { className: classes.sendButton, onClick: onSendAction }, " SEND "))));
    };
    return TransactionSendBoxComponent;
}(React.Component));
exports.TransactionSendBoxComponent = TransactionSendBoxComponent;
exports.TransactionSendBox = react_jss_1.default(exports.styles)(TransactionSendBoxComponent);
exports.default = exports.TransactionSendBox;
//# sourceMappingURL=transaction-send-box.js.map