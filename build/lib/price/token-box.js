import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TransferIcon } from '../icons/transfer';
import { Copy } from '../common/copy';
var styles = createStyles({
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
export var TokenBox = withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, cryptoCurrencyShort = _a.cryptoCurrencyShort, cryptoCurrencyName = _a.cryptoCurrencyName, CryptoCurrencyIconComponent = _a.CryptoCurrencyIconComponent, publicKey = _a.publicKey, transferAction = _a.transferAction;
    return (React.createElement("div", { className: classes.tokenBox },
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true, sm: 2 },
                React.createElement(CryptoCurrencyIconComponent, null)),
            React.createElement(Grid, { item: true, sm: 8 },
                React.createElement("div", { className: classes.cryptoCurrencyName }, cryptoCurrencyName),
                React.createElement("div", { className: classes.cryptoCurrencyShort }, cryptoCurrencyShort)),
            React.createElement(Grid, { item: true, sm: 2 },
                React.createElement("button", { className: classes.transferButton, onClick: transferAction },
                    React.createElement(TransferIcon, null)))),
        React.createElement(Grid, { className: classes.tokenBoxBody }, children),
        React.createElement(Grid, { className: classes.tokenBoxFooter },
            React.createElement("div", { className: classes.horizontalDivider })),
        React.createElement(Grid, { container: true, className: classes.addressBox },
            React.createElement(Grid, { item: true, xs: 10 },
                React.createElement("span", { className: classes.publicKey }, publicKey)),
            React.createElement(Grid, { item: true, xs: 2 },
                React.createElement(Copy, { text: publicKey })))));
});
export default TokenBox;
//# sourceMappingURL=token-box.js.map