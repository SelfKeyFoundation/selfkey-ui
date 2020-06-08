import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import EthereumIcon from '../icons/ethereum';
import SelfkeyIcon from '../icons/selfkey';
import { ModalCloseIcon } from '../theme/selfkey-dark-theme';

const styles = createStyles({
    transactionBox: {
        padding: '90px 30px 40px 30px',
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        boxShadow: '0 0 16px 1px #15222e',
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

export type TransactionBoxProps = {
    cryptoCurrency: string,
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void),
    children: any
};

const renderIcon = (shortName: string, classes: any) => {
    switch (shortName) {
       case 'KEY':
            return (<SelfkeyIcon className={classes.icon}/>);
        case 'KI':
          return (<SelfkeyIcon className={classes.icon}/>);
        case 'ETH':
            return (<EthereumIcon className={classes.icon}/>);
        default:
            return (<div className={classes.custom}>{shortName}</div>)
    }
};

export const TransactionBox = withStyles(styles)(({ classes, children, cryptoCurrency, closeAction }: TransactionBoxProps & WithStyles<typeof styles>) => (
    <div className={classes.transactionBox}>
        <div className={classes.closeDialogIconWrapper} onClick={closeAction}>
            <ModalCloseIcon />
        </div>
        <div className={classes.iconWrapper}>
            {renderIcon(cryptoCurrency, classes)}
        </div>
        <div>
            {children}
        </div>
    </div>
));

export default TransactionBox;
