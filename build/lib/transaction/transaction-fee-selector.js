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
var Slider_1 = require("@material-ui/lab/Slider");
var common_style_1 = require("../common/common-style");
var bignumber_js_1 = require("bignumber.js");
var styles = {
    root: {
        width: '100%',
        color: '#93B0C1',
        fontFamily: common_style_1.default.fontFamily,
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
        height: '19px',
        width: '100%',
        lineHeight: '19px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        '&>span': {
            fontSize: '16px',
        },
    },
    networkFeeValue: {
        color: '#ffffff',
    },
};
var WEI = new bignumber_js_1.default('1000000000000000000');
var TransactionFeeSelectorComponent = /** @class */ (function (_super) {
    __extends(TransactionFeeSelectorComponent, _super);
    function TransactionFeeSelectorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { value: null };
        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
            _this.props.onChange(value);
        };
        return _this;
    }
    TransactionFeeSelectorComponent.prototype.componentDidMount = function () {
        this.props.onChange(this.value);
    };
    Object.defineProperty(TransactionFeeSelectorComponent.prototype, "avarageGasPrice", {
        get: function () {
            return (this.props.minGasPrice + this.props.maxGasPrice) / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionFeeSelectorComponent.prototype, "value", {
        get: function () {
            return this.props.value || this.state.value || this.props.defaultValue || this.avarageGasPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionFeeSelectorComponent.prototype, "transactionFee", {
        get: function () {
            return new bignumber_js_1.default(this.value).times(this.props.gasLimit).dividedBy(WEI);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionFeeSelectorComponent.prototype, "fiatFee", {
        get: function () {
            return this.transactionFee.times(this.props.fiatRate);
        },
        enumerable: true,
        configurable: true
    });
    TransactionFeeSelectorComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, minGasPrice = _a.minGasPrice, maxGasPrice = _a.maxGasPrice, fiat = _a.fiat;
        return (React.createElement("div", { className: classes.root },
            React.createElement("div", { className: classes.networkFee },
                React.createElement("span", null, "Network Transaction Fee:"),
                ' ',
                React.createElement("span", { className: classes.networkFeeValue },
                    this.transactionFee.toString(),
                    " ETH / ",
                    this.fiatFee.toFixed(2),
                    " ",
                    fiat)),
            React.createElement(Slider_1.default, { min: minGasPrice, max: maxGasPrice, onChange: this.handleChange, value: this.value, classes: {
                    root: classes.sliderRoot,
                    trackAfter: classes.trackAfter,
                    trackBefore: classes.trackBefore,
                    thumb: classes.thumb,
                    activated: classes.activated,
                } }),
            React.createElement("div", { className: classes.sliderLabels },
                React.createElement("span", null, "Slow"),
                React.createElement("span", null, "Medium"),
                React.createElement("span", null, "Fast"))));
    };
    return TransactionFeeSelectorComponent;
}(React.Component));
exports.TransactionFeeSelectorComponent = TransactionFeeSelectorComponent;
exports.TransactionFeeSelector = react_jss_1.default(styles)(TransactionFeeSelectorComponent);
exports.default = exports.TransactionFeeSelector;
//# sourceMappingURL=transaction-fee-selector.js.map