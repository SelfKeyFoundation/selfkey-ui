"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFeeSliderSelector = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var common_style_1 = require("../common/common-style");
var bignumber_js_1 = require("bignumber.js");
var styles = styles_1.createStyles({
    root: {
        width: '100%',
        color: '#93B0C1',
        fontFamily: common_style_1.default.fontFamily
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
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        lineHeight: '19px',
        width: '100%',
        '&>span': {
            fontSize: '16px'
        },
        '& p': {
            marginBottom: '5px'
        },
        '& h6:nth-child(3)': {
            marginBottom: '5px'
        }
    },
    networkFeeValue: {
        color: '#ffffff'
    },
    rightAligned: {
        textAlign: 'right'
    }
});
var WEI = new bignumber_js_1.default('1000000000000000000');
var TransactionFeeSliderSelectorComponent = /** @class */ (function (_super) {
    __extends(TransactionFeeSliderSelectorComponent, _super);
    function TransactionFeeSliderSelectorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: null
        };
        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
            _this.props.onChange(value);
        };
        _this.getTransactionPrice = function (price, fiat) {
            var transactionPrice = new bignumber_js_1.default(price).times(_this.props.gasLimit).dividedBy(WEI);
            var priceInETH = transactionPrice.toString();
            var priceInFiat = transactionPrice.times(_this.props.fiatRate);
            return (React.createElement(React.Fragment, null,
                React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" },
                    priceInETH,
                    " ETH/"),
                React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" },
                    "$ ",
                    priceInFiat.toFixed(2),
                    " ",
                    fiat)));
        };
        return _this;
    }
    TransactionFeeSliderSelectorComponent.prototype.componentDidMount = function () {
        this.props.onChange(this.value);
    };
    Object.defineProperty(TransactionFeeSliderSelectorComponent.prototype, "avarageGasPrice", {
        get: function () {
            return (this.props.minGasPrice + this.props.maxGasPrice) / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransactionFeeSliderSelectorComponent.prototype, "value", {
        get: function () {
            return (this.props.value || this.state.value || this.props.defaultValue || this.avarageGasPrice);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransactionFeeSliderSelectorComponent.prototype, "transactionFee", {
        get: function () {
            return new bignumber_js_1.default(this.value).times(this.props.gasLimit).dividedBy(WEI);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransactionFeeSliderSelectorComponent.prototype, "fiatFee", {
        get: function () {
            return this.transactionFee.times(this.props.fiatRate);
        },
        enumerable: false,
        configurable: true
    });
    TransactionFeeSliderSelectorComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, minGasPrice = _a.minGasPrice, maxGasPrice = _a.maxGasPrice, slowPrice = _a.slowPrice, mediumPrice = _a.mediumPrice, fastPrice = _a.fastPrice, fiat = _a.fiat;
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
            React.createElement(core_1.Slider, { min: minGasPrice, max: maxGasPrice, onChange: this.handleChange, value: this.value, classes: {
                    // active: classes.activated,
                    root: classes.sliderRoot,
                    // trackBefore: classes.trackBefore,
                    // trackAfter: classes.trackAfter,
                    thumb: classes.thumb
                    // activated: classes.activated,
                } }),
            React.createElement("div", { className: classes.sliderLabels },
                React.createElement("div", null,
                    React.createElement(core_1.Typography, { variant: "body1" }, "Slow"),
                    this.getTransactionPrice(slowPrice, fiat),
                    React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "5 - 30 min")),
                React.createElement("div", null,
                    React.createElement(core_1.Typography, { variant: "body1" }, "Medium"),
                    this.getTransactionPrice(mediumPrice, fiat),
                    React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "2 - 5 min")),
                React.createElement("div", { className: classes.rightAligned },
                    React.createElement(core_1.Typography, { variant: "body1" }, "Fast"),
                    this.getTransactionPrice(fastPrice, fiat),
                    React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "< 2 min")))));
    };
    return TransactionFeeSliderSelectorComponent;
}(React.Component));
exports.TransactionFeeSliderSelector = styles_1.withStyles(styles)(TransactionFeeSliderSelectorComponent);
exports.default = exports.TransactionFeeSliderSelector;
//# sourceMappingURL=transaction-fee-slider-selector.js.map