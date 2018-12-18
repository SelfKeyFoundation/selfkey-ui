"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var actual_transaction_fee_box_1 = require("./actual-transaction-fee-box");
var common_style_1 = require("../../../common/common-style");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
exports.styles = {
    container: {
        fontFamily: common_style_1.default.fontFamily
    },
    networkTransactionFeeTitle: {
        paddingRight: '5px',
        color: '#93B0C1',
        fontSize: '16px'
    },
    showAdvancedContainer: {
        cursor: 'pointer',
        fontSize: '14px',
        color: '#00C0D9'
    },
    icon: {
        border: 'solid #00C0D9',
        borderWidth: '0 2px 2px 0',
        display: 'inline-block',
        padding: '4px',
        marginLeft: '5px',
    },
    rightIcon: {
        transform: 'rotate(-45deg)',
        '-webkitTransform': 'rotate(-45deg)'
    },
    downIcon: {
        transform: 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
    },
    inputsContainer: {
        paddingTop: '52px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        '&& label': {
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '10px',
            lineHeight: '15px',
            color: '#93A4AF'
        }
    },
    fullWidth: {
        width: '100%',
    },
    checkbox: {
        color: '#FFFFFF', fontSize: '14px', lineHeight: '14px'
    },
    checkboxRoot: {
        color: '#00C0D9',
        '&$checked': {
            color: '#00C0D9 !important'
        }
    },
    checkboxChecked: {
        color: '#00C0D9 !important',
    },
    checkboxLabel: {
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '14px'
    },
    nonceValue: {
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '14px'
    },
    formControl: {
        paddingLeft: '12px',
        boxSizing: 'border-box',
        height: '46px',
        width: '178px',
        border: '1px solid #384656',
        borderRadius: '4px',
        backgroundColor: '#1E262E',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',
        color: '#FFFFFF', fontSize: '14px', lineHeight: '14px',
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 5px rgba(81, 203, 238, 1)'
        }
    },
    currNetworkStatusContainer: {
        display: 'flex',
        paddingTop: '9px'
    },
    currNetworkStatusTitle: {
        color: '#93B0C1',
        fontSize: '13px',
        lineHeight: '19px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    reloadNetworkIcon: {
        color: '#93B0C1',
        cursor: 'pointer'
    },
    gasPriceValuesContainer: {
        paddingTop: '15px;',
        '&& p': {
            color: '#FFFFFF',
            fontSize: '14px',
            lineHeight: '26px',
            margin: 0
        }
    }
};
var TransactionFeeBoxComponent = /** @class */ (function (_super) {
    __extends(TransactionFeeBoxComponent, _super);
    function TransactionFeeBoxComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.timerToUpdateGasPrice = 0;
        _this.timerToUpdateGasLimit = 0;
        _this.TIME_FOR_INPUT_CHANGE = 1000;
        _this.state = {
            showAdvanced: props.showAdvanced || false,
            gasLimit: props.gasLimit,
            gasPrice: props.gasPrice
        };
        return _this;
    }
    TransactionFeeBoxComponent.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.gasLimit !== this.props.gasLimit || prevProps.gasPrice !== this.props.gasPrice) {
            this.setState(__assign({}, this.state, { gasLimit: this.props.gasLimit, gasPrice: this.props.gasPrice }));
        }
    };
    TransactionFeeBoxComponent.prototype.renderActualTransactionFeeBox = function () {
        return (React.createElement(actual_transaction_fee_box_1.ActualTransactionFeeBox, __assign({}, this.props)));
    };
    TransactionFeeBoxComponent.prototype.toggleShowAdvanced = function () {
        var showAdvanced = this.state.showAdvanced;
        this.setState(__assign({}, this.state, { showAdvanced: !showAdvanced }));
    };
    TransactionFeeBoxComponent.prototype.setGasLimit = function (event) {
        var _this = this;
        var value = event.target.value;
        if (this.timerToUpdateGasLimit)
            clearTimeout(this.timerToUpdateGasLimit);
        this.setState(__assign({}, this.state, { gasLimit: Number(value) }));
        this.timerToUpdateGasLimit = window.setTimeout(function () {
            if (_this.props.changeGasLimitAction) {
                _this.props.changeGasLimitAction(value);
            }
        }, this.TIME_FOR_INPUT_CHANGE);
    };
    TransactionFeeBoxComponent.prototype.setGasPrice = function (event) {
        var _this = this;
        var value = event.target.value;
        if (this.timerToUpdateGasPrice)
            clearTimeout(this.timerToUpdateGasPrice);
        this.setState(__assign({}, this.state, { gasPrice: Number(value) }));
        this.timerToUpdateGasPrice = window.setTimeout(function () {
            if (_this.props.changeGasPriceAction) {
                _this.props.changeGasPriceAction(value);
            }
        }, this.TIME_FOR_INPUT_CHANGE);
    };
    TransactionFeeBoxComponent.prototype.renderAdvancedContent = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, ethGasStationInfo = _a.ethGasStationInfo, reloadEthGasStationInfoAction = _a.reloadEthGasStationInfoAction, nonce = _a.nonce;
        return (React.createElement("div", { className: classes.fullWidth },
            React.createElement(core_1.Grid, { container: true, className: classes.inputsContainer, direction: "row", justify: "space-between", alignItems: "flex-start" },
                React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Gas Price (Gwei)"),
                    React.createElement("input", { type: "text", className: classes.formControl, value: this.state.gasPrice, onChange: function (e) { return _this.setGasPrice(e); } })),
                React.createElement("div", null,
                    React.createElement("div", { className: classes.formGroup },
                        React.createElement("label", null, "Gas Limit"),
                        React.createElement("input", { type: "text", value: this.state.gasLimit, onChange: function (e) { return _this.setGasLimit(e); }, className: classes.formControl }))),
                React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Nonce"),
                    React.createElement("span", { className: classes.nonceValue },
                        " ",
                        nonce,
                        " "))),
            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "center", alignItems: "center" },
                React.createElement("div", { className: classes.currNetworkStatusContainer },
                    React.createElement("span", { className: classes.currNetworkStatusTitle }, "Current Network Status: "),
                    React.createElement(icons_1.Loop, { onClick: reloadEthGasStationInfoAction, classes: {
                            root: classes.reloadNetworkIcon
                        } }, " ")),
                React.createElement("div", { className: classes.gasPriceValuesContainer },
                    React.createElement("p", null,
                        " Under 30 Mins: ",
                        ethGasStationInfo.safeLow,
                        " Gwei "),
                    React.createElement("p", null,
                        " Under 5 Mins: ",
                        ethGasStationInfo.average,
                        " Gwei "),
                    React.createElement("p", null,
                        " Under 2 Mins: ",
                        ethGasStationInfo.fast,
                        " Gwei ")))));
    };
    TransactionFeeBoxComponent.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var showAdvanced = this.state.showAdvanced;
        return (React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.container },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, direction: "row" },
                    React.createElement(core_1.Grid, { item: true },
                        React.createElement("span", { className: classes.networkTransactionFeeTitle }, " Network Transaction Fee: ")),
                    React.createElement(core_1.Grid, { item: true }, this.renderActualTransactionFeeBox()))),
            React.createElement(core_1.Grid, { item: true, className: classes.showAdvancedContainer, onClick: function () { return _this.toggleShowAdvanced(); } },
                React.createElement("span", null, " Advanced "),
                !showAdvanced ? (React.createElement("i", { className: classes.icon + "  " + classes.rightIcon }, " ")) : (React.createElement("i", { className: classes.icon + "  " + classes.downIcon }, " "))),
            showAdvanced && this.renderAdvancedContent()));
    };
    return TransactionFeeBoxComponent;
}(React.Component));
exports.TransactionFeeBoxComponent = TransactionFeeBoxComponent;
exports.TransactionFeeBox = react_jss_1.default(exports.styles)(TransactionFeeBoxComponent);
exports.default = exports.TransactionFeeBox;
//# sourceMappingURL=transaction-fee-box.js.map