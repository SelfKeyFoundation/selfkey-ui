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
    button: {
        boxSizing: 'border-box',
        width: '201px',
        border: '1px solid #93B0C1',
        opacity: 0.6,
        borderRadius: '4px'
    },
    buttonText: {
        opacity: 0.8,
        color: '#C5DCE9',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.71px'
    },
    selectAllAmountBtn: {
        minWidth: 'auto',
        position: 'absolute',
        left: 0,
        boxSizing: 'border-box',
        borderRadius: '4px',
        width: '37px',
        border: '1px solid #303C49',
        backgroundColor: '#202932',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
    },
    selectAllAmountText: {
        color: '#A9C5D6',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '16px'
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
    }
};
var TransactionSendBoxComponent = /** @class */ (function (_super) {
    __extends(TransactionSendBoxComponent, _super);
    function TransactionSendBoxComponent(props) {
        return _super.call(this, props) || this;
    }
    TransactionSendBoxComponent.prototype.renderFeeBox = function () {
        return (React.createElement(transaction_fee_box_1.TransactionFeeBox, __assign({}, this.props)));
    };
    TransactionSendBoxComponent.prototype.onAddressFieldChange = function (event) {
        var onAddressFieldChange = this.props.onAddressFieldChange;
        if (!onAddressFieldChange) {
            return;
        }
        onAddressFieldChange(event.target.value);
    };
    TransactionSendBoxComponent.prototype.render = function () {
        var _a = this.props, cryptoCurrency = _a.cryptoCurrency, sendAction = _a.sendAction, closeAction = _a.closeAction, classes = _a.classes;
        return (React.createElement(transaction_box_1.default, { cryptoCurrency: cryptoCurrency, closeAction: closeAction },
            React.createElement("input", { onChange: this.onAddressFieldChange.bind(this), className: classes.input, placeholder: "Step 1: Enter Label or ETH Address" }),
            React.createElement("div", { className: classes.amountContainer },
                React.createElement("input", { className: classes.input + " " + classes.amountInput, placeholder: "Step 2: Select Token & Enter Amount" }),
                React.createElement("span", { className: classes.cryptoCurrencyText },
                    " ",
                    cryptoCurrency),
                React.createElement(core_1.Button, { variant: "outlined", onClick: sendAction, classes: {
                        root: classes.selectAllAmountBtn,
                        label: classes.selectAllAmountText
                    } }, " ALL ")),
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.usdAmoutContainer },
                React.createElement("span", null, " 0.001 "),
                React.createElement("span", null, " USD ")),
            this.renderFeeBox(),
            React.createElement(core_1.Grid, { className: classes.actionButtonsContainer, container: true, direction: "row", justify: "center", alignItems: "center" },
                React.createElement(core_1.Button, { variant: "outlined", onClick: sendAction, classes: {
                        root: classes.button,
                        label: classes.buttonText
                    } }, " SEND "))));
    };
    return TransactionSendBoxComponent;
}(React.Component));
exports.TransactionSendBoxComponent = TransactionSendBoxComponent;
exports.TransactionSendBox = react_jss_1.default(exports.styles)(TransactionSendBoxComponent);
exports.default = exports.TransactionSendBox;
//# sourceMappingURL=transaction-send-box.js.map