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
        var inputDefaultVal = {
            value: '',
            error: ''
        };
        _this.state = {
            sendAmount: inputDefaultVal,
            address: inputDefaultVal
        };
        _this.onAddressFieldChange = _this.onAddressFieldChange.bind(_this);
        _this.onAmountInputChange = _this.onAmountInputChange.bind(_this);
        _this.onSelectAllAmount = _this.onSelectAllAmount.bind(_this);
        _this.onSendAction = _this.onSendAction.bind(_this);
        return _this;
    }
    TransactionSendBoxComponent.prototype.renderFeeBox = function () {
        return (React.createElement(transaction_fee_box_1.TransactionFeeBox, __assign({}, this.props)));
    };
    TransactionSendBoxComponent.prototype.onAddressFieldChange = function (event) {
        var newVal = {
            value: event.target.value,
            error: ''
        };
        this.setState(__assign({}, this.state, { address: newVal }));
        var onAddressFieldChange = this.props.onAddressFieldChange;
        if (!onAddressFieldChange) {
            return;
        }
        onAddressFieldChange(newVal);
    };
    TransactionSendBoxComponent.prototype.setSendAmount = function (value) {
        var newVal = {
            value: value,
            error: ''
        };
        this.setState(__assign({}, this.state, { sendAmount: newVal }));
    };
    TransactionSendBoxComponent.prototype.onAmountInputChange = function (event) {
        this.setSendAmount(event.target.value);
    };
    TransactionSendBoxComponent.prototype.onSelectAllAmount = function () {
        this.setSendAmount(this.props.totalBalance);
    };
    TransactionSendBoxComponent.prototype.onSendAction = function () {
        var onSendAction = this.props.onSendAction;
        if (!onSendAction) {
            return;
        }
        var _a = this.state, sendAmount = _a.sendAmount, address = _a.address;
        onSendAction({
            sendAmount: sendAmount.value,
            address: address.value
        });
        //this.state
    };
    TransactionSendBoxComponent.prototype.render = function () {
        var _a = this.props, cryptoCurrency = _a.cryptoCurrency, closeAction = _a.closeAction, classes = _a.classes, addressError = _a.addressError;
        var _b = this.state, sendAmount = _b.sendAmount, address = _b.address;
        var sendAmountClass = classes.input + " " + classes.amountInput + " " + (sendAmount.error ? classes.inputError : '');
        var addressInputClass = classes.input + " " + (addressError ? classes.addressErrorColor : '');
        return (React.createElement(transaction_box_1.default, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
            React.createElement("input", { onChange: this.onAddressFieldChange, value: address.value, className: addressInputClass, placeholder: "Step 1: Enter Label or ETH Address" }),
            addressError &&
                React.createElement("span", { className: classes.addressErrorText }, "Invalid address. Please check and try again."),
            React.createElement("div", { className: classes.amountContainer },
                React.createElement("button", { onClick: this.onSelectAllAmount, className: classes.selectAllAmountBtn }, " ALL "),
                React.createElement("input", { value: sendAmount.value, onChange: this.onAmountInputChange, className: sendAmountClass, placeholder: "Step 2: Select Token & Enter Amount" }),
                React.createElement("span", { className: classes.cryptoCurrencyText },
                    " ",
                    cryptoCurrency)),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.usdAmoutContainer },
                React.createElement("span", null, " 0.001 "),
                React.createElement("span", null, " USD ")),
            this.renderFeeBox(),
            React.createElement(core_1.Grid, { className: classes.actionButtonsContainer, container: true, direction: "row", justify: "center", alignItems: "center" },
                React.createElement("button", { className: classes.sendButton, onClick: this.onSendAction }, " SEND "))));
    };
    return TransactionSendBoxComponent;
}(React.Component));
exports.TransactionSendBoxComponent = TransactionSendBoxComponent;
exports.TransactionSendBox = react_jss_1.default(exports.styles)(TransactionSendBoxComponent);
exports.default = exports.TransactionSendBox;
//# sourceMappingURL=transaction-send-box.js.map