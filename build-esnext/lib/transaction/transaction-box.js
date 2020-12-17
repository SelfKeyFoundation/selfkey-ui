import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import EthereumIcon from '../icons/ethereum';
import SelfkeyIcon from '../icons/selfkey';
import { ModalCloseIcon } from '../icons/modal-close';
const styles = createStyles({
    transactionBox: {
        padding: '90px 30px 40px 30px',
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        boxShadow: '0 0 16px 1px #15222e'
    },
    iconWrapper: {
        position: 'absolute',
        top: '-32px',
        left: '50%',
        transform: 'translate(-50%)'
    },
    icon: {
        width: '64px !important',
        height: '64px !important'
    },
    closeDialogIconWrapper: {
        position: 'absolute',
        left: '-100px',
        top: 0,
        cursor: 'pointer'
    },
    custom: {
        padding: '10px',
        display: 'block',
        backgroundColor: '#1e262d',
        border: 'solid 1px #303c49',
        color: '#fff',
        fontSize: '25px',
        fontWeight: 600,
        fontFamily: 'Lato, arial, sans-serif'
    }
});
const renderIcon = (shortName, classes) => {
    switch (shortName) {
        case 'KEY':
            return React.createElement(SelfkeyIcon, { className: classes.icon });
        case 'KI':
            return React.createElement(SelfkeyIcon, { className: classes.icon });
        case 'ETH':
            return React.createElement(EthereumIcon, { className: classes.icon });
        default:
            return React.createElement("div", { className: classes.custom }, shortName);
    }
};
export const TransactionBox = withStyles(styles)(({ classes, children, cryptoCurrency, closeAction }) => (React.createElement("div", { className: classes.transactionBox },
    React.createElement("div", { className: classes.closeDialogIconWrapper, onClick: closeAction },
        React.createElement(ModalCloseIcon, null)),
    React.createElement("div", { className: classes.iconWrapper }, renderIcon(cryptoCurrency, classes)),
    React.createElement("div", null, children))));
export default TransactionBox;
//# sourceMappingURL=transaction-box.js.map