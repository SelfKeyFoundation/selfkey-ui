import * as React from 'react';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import WarningShieldIcon from '../icons/warning-shield';
import Copy from '../common/copy';
import ModalCloseIcon from '../icons/modal-close';
const styles = createStyles({
    boxWrapper: {
        position: 'relative',
        width: '781px',
        border: '1px solid #303C49',
        borderRadius: '4px',
        backgroundColor: '#262F39',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
    },
    header: {
        height: '65px',
        borderRadius: '4px 4px 0 0',
        backgroundColor: '#2A3540',
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'inset 0 -1px 0 0 #374758, 1px 0 0 0 rgba(118,128,147,0.2), 0 4px 2px 0 rgba(76,76,76,0.2)'
    },
    headerTitle: {
        paddingLeft: '29px',
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: '18px',
        lineHeight: '26px'
    },
    bodyContainer: {
        paddingTop: '30px',
        paddingLeft: '45px',
        paddingRight: '30px',
        paddingBottom: '53px'
    },
    txFailedText: {
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: '24px',
        lineHeight: '30px',
        paddingBottom: '17px'
    },
    yourAddressTitle: {
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: '16px',
        lineHeight: '20px'
    },
    publicKey: {
        outline: 'none',
        cursor: 'pointer',
        fontFamily: 'Lato',
        fontSize: '14px',
        color: '#93b0c1'
    },
    divider: {
        width: '100%',
        marginTop: '31px',
        marginBottom: '20px',
        height: '1px',
        transform: 'scaleY(-1)',
        backgroundColor: '#475768'
    },
    closeDialogIconWrapper: {
        position: 'absolute',
        left: '-15px',
        top: 0,
        cursor: 'pointer'
    }
});
export const TransactionErrorBox = withStyles(styles)(({ classes, children, publicKey, closeAction }) => (React.createElement("div", { className: classes.boxWrapper },
    React.createElement("div", { className: classes.header },
        React.createElement("span", { className: classes.headerTitle }, " Transaction Confirmation "),
        React.createElement("div", { className: classes.closeDialogIconWrapper, onClick: closeAction },
            React.createElement(ModalCloseIcon, null))),
    React.createElement(Grid, { container: true, className: classes.bodyContainer, direction: 'row', justify: 'flex-start', alignItems: 'flex-start' },
        React.createElement(Grid, { item: true, xs: 2 },
            React.createElement(WarningShieldIcon, null)),
        React.createElement(Grid, { item: true, xs: 10 },
            React.createElement(Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start' },
                React.createElement("div", { className: classes.txFailedText }, "Transaction Failed "),
                children,
                React.createElement("span", { className: classes.divider }, " "),
                React.createElement("div", null,
                    React.createElement("span", { className: classes.yourAddressTitle }, " Your Address: "),
                    React.createElement(Grid, { container: true },
                        React.createElement("span", { className: classes.publicKey }, publicKey),
                        React.createElement(Copy, { text: publicKey })))))))));
export default TransactionErrorBox;
//# sourceMappingURL=transaction-error-box.js.map