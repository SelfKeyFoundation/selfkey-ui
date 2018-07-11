"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var transfer_1 = require("../icons/transfer");
var styles = {
    tokenBox: {
        minWidth: '360px',
        position: 'relative',
        padding: '20px 20px 8px 20px',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
    },
    tokenBoxBody: {
        marginTop: '30px',
    },
    tokenBoxFooter: {
        bottom: '7px',
        marginTop: '20px',
    },
    horizontalDivider: {
        height: '1px',
        backgroundColor: '#303c49'
    },
    addressBox: {
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    publicKey: {
        outline: 'none',
        cursor: 'pointer',
        fontFamily: 'ProximaNovaRegular',
        fontSize: '12px',
        color: '#93b0c1'
    },
    copyButton: {
        cursor: 'pointer',
        width: '46px',
        height: '20px',
        marginLeft: '7px',
        padding: 0,
        backgroundColor: '#435160',
        border: 'none',
        borderRadius: '4px',
        margin: 0,
        color: '#ffffff !important'
    },
    copyButtonSpan: {
        fontSize: '11px',
        lineHeight: '12px',
        fontFamily: 'ProximaNovaRegular',
        letterSpacing: 'normal',
        color: '#93b0c1'
    },
    transferButton: {
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        outline: 'none'
    },
    cryptoCurrencyName: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '18px',
        color: '#ffffff'
    },
    cryptoCurrencyShort: {
        marginTop: '4px',
        opacity: '0.7',
        fontFamily: 'ProximaNovaRegular',
        fontSize: '14px',
        letterSpacing: '1px',
        color: '#ffffff'
    }
};
var TokenBoxComponent = function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrencyShort = _a.cryptoCurrencyShort, cryptoCurrencyName = _a.cryptoCurrencyName, CryptoCurrencyIconComponent = _a.CryptoCurrencyIconComponent, publicKey = _a.publicKey, transferAction = _a.transferAction, copyAction = _a.copyAction;
    return (React.createElement("div", { className: classes.tokenBox },
        React.createElement(core_1.Grid, { container: true },
            React.createElement(core_1.Grid, { item: true, xs: 6, sm: 2 },
                React.createElement(CryptoCurrencyIconComponent, null)),
            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 9 },
                React.createElement("div", { className: classes.cryptoCurrencyName }, cryptoCurrencyName),
                React.createElement("div", { className: classes.cryptoCurrencyShort }, cryptoCurrencyShort)),
            React.createElement(core_1.Grid, { item: true, xs: 6, sm: 1 },
                React.createElement("button", { className: classes.transferButton, onClick: transferAction },
                    React.createElement(transfer_1.TransferIcon, null)))),
        React.createElement(core_1.Grid, { className: classes.tokenBoxBody }, children),
        React.createElement(core_1.Grid, { className: classes.tokenBoxFooter },
            React.createElement("div", { className: classes.horizontalDivider })),
        React.createElement(core_1.Grid, { container: true, className: classes.addressBox },
            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 10 },
                React.createElement("span", { className: classes.publicKey }, publicKey)),
            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 2 },
                React.createElement("button", { className: classes.copyButton, onClick: copyAction },
                    React.createElement("span", { className: classes.copyButtonSpan }, "COPY"))))));
};
/** Test description */
exports.TokenBox = react_jss_1.default(styles)(TokenBoxComponent);
exports.default = exports.TokenBox;
//# sourceMappingURL=token-box.js.map