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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var paragraph_1 = require("../typography/paragraph");
var exchange_large_1 = require("../icons/exchange-large");
var transaction_fee_selector_1 = require("../transaction/transaction-fee-selector");
var common_style_1 = require("../common/common-style");
var styled_button_1 = require("../common/styled-button");
var styles = {
    text: {
        fontSize: '18px',
        lineHeight: '30px',
    },
    footer: {
        marginTop: '30px',
        paddingTop: '30px',
        borderTop: '1px solid #475768',
    },
    contentSection: {
        marginBottom: '20px',
        marginTop: '20px',
    },
    understandLabel: {
        fontFamily: common_style_1.default.fontFamily,
        fontSize: '14px',
        lineHeight: '21px',
        color: '#93B0C1',
    },
    understandCheckbox: {
        color: '#00C0D9',
        '&$primary$checked': {
            color: '#00C0D9',
        },
    },
    actions: {
        '&>button': {
            marginRight: '20px',
            marginTop: '30px',
        },
    },
    primary: {},
    checked: {},
};
var UnlockComponent = /** @class */ (function (_super) {
    __extends(UnlockComponent, _super);
    function UnlockComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: false,
            understood: false,
            fee: 0,
        };
        _this.handleUnderstoodChange = function (event, checked) {
            _this.setState({ understood: checked });
        };
        _this.handleFeeChange = function (fee) {
            _this.setState({ fee: fee });
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            if (!_this.state.understood) {
                return _this.setState({ error: true });
            }
            return _this.props.onConfirm(_this.state.fee);
        };
        return _this;
    }
    UnlockComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, _b = _a.amount, amount = _b === void 0 ? 25 : _b, _c = _a.token, token = _c === void 0 ? 'KEY' : _c, _d = _a.days, days = _d === void 0 ? 30 : _d, minGasPrice = _a.minGasPrice, maxGasPrice = _a.maxGasPrice, gasLimit = _a.gasLimit, fiat = _a.fiat, fiatRate = _a.fiatRate, onCancel = _a.onCancel;
        var _e = this.state, error = _e.error, understood = _e.understood;
        return (React.createElement(core_1.Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "flex-start" },
            React.createElement(core_1.Grid, { item: true, xs: 2 },
                React.createElement(exchange_large_1.default, null)),
            React.createElement(core_1.Grid, { item: true, xs: 10 },
                React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "stretch" },
                    React.createElement(core_1.Grid, { item: true, classes: { item: classes.contentSection } },
                        React.createElement(paragraph_1.P, { className: classes.text },
                            "A refundable deposit of ",
                            amount,
                            " ",
                            token,
                            " tokens is required to unlock this marketplace for ",
                            days,
                            " days.")),
                    React.createElement(core_1.Grid, { item: true, classes: { item: classes.contentSection } },
                        React.createElement(transaction_fee_selector_1.TransactionFeeSelector, { minGasPrice: minGasPrice, maxGasPrice: maxGasPrice, gasLimit: gasLimit, fiat: fiat, fiatRate: fiatRate, onChange: this.handleFeeChange })),
                    React.createElement(core_1.Grid, { item: true, classes: { item: classes.footer } },
                        React.createElement("form", { onSubmit: this.handleSubmit },
                            React.createElement(core_1.FormControl, { required: true, component: "fieldset", error: error },
                                React.createElement(core_1.FormControlLabel, { classes: { label: classes.understandLabel }, checked: understood, value: "understood", onChange: this.handleUnderstoodChange, control: React.createElement(core_1.Checkbox, { color: "primary", classes: {
                                            root: classes.understandCheckbox,
                                            colorPrimary: classes.primary,
                                            checked: classes.checked,
                                        } }), label: "OK, I understand that this deposit is refundable after " + days + " days." }),
                                error ? (React.createElement(core_1.FormHelperText, null, "Please confirm you understand how the deposit works.")) : ('')),
                            React.createElement("div", { className: classes.actions },
                                React.createElement(styled_button_1.StyledButton, { variant: "contained", size: "medium", type: "submit" }, "Confirm"),
                                React.createElement(styled_button_1.StyledButton, { variant: "outlined", size: "medium", onClick: onCancel }, "Cancel"))))))));
    };
    return UnlockComponent;
}(React.Component));
exports.UnlockComponent = UnlockComponent;
exports.Unlock = react_jss_1.default(styles)(UnlockComponent);
exports.default = exports.Unlock;
//# sourceMappingURL=unlock.js.map