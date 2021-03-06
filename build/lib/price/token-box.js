"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBox = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var transfer_1 = require("../icons/transfer");
var copy_1 = require("../common/copy");
var styles = core_1.createStyles({
    tokenBox: {
        minWidth: '320px',
        position: 'relative',
        padding: '20px 20px 8px 20px',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        height: '186px'
    },
    tokenBoxBody: {
        marginTop: '20px'
    },
    tokenBoxFooter: {
        bottom: '7px',
        marginTop: '10px'
    },
    horizontalDivider: {
        height: '1px',
        backgroundColor: '#303c49'
    },
    addressBox: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    publicKey: {
        outline: 'none',
        cursor: 'pointer',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '12px',
        color: '#93b0c1'
    },
    transferButton: {
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        outline: 'none',
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end'
    },
    cryptoCurrencyName: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '18px',
        color: '#ffffff'
    },
    cryptoCurrencyShort: {
        marginTop: '4px',
        opacity: 0.7,
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        letterSpacing: '1px',
        color: '#ffffff'
    }
});
exports.TokenBox = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrencyShort = _a.cryptoCurrencyShort, cryptoCurrencyName = _a.cryptoCurrencyName, CryptoCurrencyIconComponent = _a.CryptoCurrencyIconComponent, publicKey = _a.publicKey, transferAction = _a.transferAction;
    return (React.createElement("div", { className: classes.tokenBox },
        React.createElement(core_2.Grid, { container: true },
            React.createElement(core_2.Grid, { item: true, sm: 2 },
                React.createElement(CryptoCurrencyIconComponent, null)),
            React.createElement(core_2.Grid, { item: true, sm: 8 },
                React.createElement("div", { className: classes.cryptoCurrencyName }, cryptoCurrencyName),
                React.createElement("div", { className: classes.cryptoCurrencyShort }, cryptoCurrencyShort)),
            React.createElement(core_2.Grid, { item: true, sm: 2 },
                React.createElement("button", { className: classes.transferButton, onClick: transferAction },
                    React.createElement(transfer_1.TransferIcon, null)))),
        React.createElement(core_2.Grid, { className: classes.tokenBoxBody }, children),
        React.createElement(core_2.Grid, { className: classes.tokenBoxFooter },
            React.createElement("div", { className: classes.horizontalDivider })),
        React.createElement(core_2.Grid, { container: true, className: classes.addressBox },
            React.createElement(core_2.Grid, { item: true, xs: 10 },
                React.createElement("span", { className: classes.publicKey }, publicKey)),
            React.createElement(core_2.Grid, { item: true, xs: 2 },
                React.createElement(copy_1.Copy, { text: publicKey })))));
});
exports.default = exports.TokenBox;
//# sourceMappingURL=token-box.js.map