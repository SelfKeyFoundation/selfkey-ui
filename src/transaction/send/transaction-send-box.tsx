import * as React from 'react';
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';
import CommonStyle from '../../common/common-style';
import { TransactionFeeBox } from './fee/transaction-fee-box';
import TransactionBox from '../transaction-box';
import { Button, Grid } from '@material-ui/core';

export const styles: StyleSheet = {
    container: {
        fontFamily: CommonStyle.fontFamily
    },
    button: {
        boxSizing: 'border-box',
        width: '201px',
        border: '1px solid #93B0C1',
        opacity: 0.6,
        borderRadius: '4px'
    },
    buttonText: {
        opacity: 0.8,
        color: '#C5DCE9',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.71px'
    },

    selectAllAmountBtn: {
        minWidth: 'auto',
        position: 'absolute',
        left: 0,
        boxSizing: 'border-box',
        borderRadius: '4px',
        width: '37px',
        border: '1px solid #303C49',
        backgroundColor: '#202932',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'

    },
    selectAllAmountText: {
       color: '#A9C5D6',
       fontSize: '13px',
       fontWeight: 500,
       lineHeight: '16px'
    },

    actionButtonsContainer: {
        paddingTop: '50px'
    },
    input: {
        outlineWidth: 0,
        backgroundColor: '#262f39',
        paddingBottom: '20px',
        marginBottom: '20px',
        width: '100%',
        border: 'none',
        borderBottom: '2px solid #93b0c1',
        fontSize: '20px',
        color: '#a9c5d6',
        '&::-webkit-input-placeholder': {
            fontSize: '20px',
            color: '#a9c5d6'
        }
    },
    amountContainer: {
        paddingTop: '25px',
        position: 'relative'
    },
    cryptoCurrencyText: {
        position: 'absolute',
        fontSize: '20px',
        color: '#ffffff',
        right: 0,
        fontWeight: 600
    },
    usdAmoutContainer: {
        paddingBottom: '65px',
        color: '#ffffff',
        '&& span': {
            '&:first-of-type': {
                fontSize: '40px',
                fontWeight: 300,
            },
            '&:last-of-type': {
                fontSize: '20px',
                fontWeight: 600,
            }
        }
    },
    amountInput: {
        paddingLeft: '45px',
        width: 'calc(100% - 45px)',
        marginBottom: '10px'
    }
};

export type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};

export type TransactionSendBoxProps = {
    ethValue: string;
    usdValue: string;
    gasLimit: string;
    nonce: string;
    showAdvanced?: boolean;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    sendAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    onAddressFieldChange?: Function;
}

export type TransactionSendBoxState = {};

export type StyledProps = WithStyles<keyof typeof styles> & TransactionSendBoxProps;

export class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps) {
        super(props);
    }

    renderFeeBox() {
        return (
            <TransactionFeeBox {...this.props} />
        );
    }
    onAddressFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        let { onAddressFieldChange } =  this.props;
        if (!onAddressFieldChange) {
            return;
        }
        onAddressFieldChange(event.target.value);
    }

    render() {
        let { cryptoCurrency, sendAction, closeAction, classes } = this.props;
        return (
            <TransactionBox cryptoCurrency={cryptoCurrency} closeAction={closeAction}>
                <input onChange={this.onAddressFieldChange.bind(this)} className={classes.input} placeholder="Step 1: Enter Label or ETH Address" />
                <div className={classes.amountContainer}>
                    <input className={`${classes.input} ${classes.amountInput}`} placeholder="Step 2: Select Token & Enter Amount" />
                    <span className={classes.cryptoCurrencyText}> {cryptoCurrency}</span>
                    <Button variant="outlined" onClick={sendAction} classes={{
                        root: classes.selectAllAmountBtn,
                        label: classes.selectAllAmountText
                    }}> ALL </Button>
                </div>
                <Grid container direction="row"  justify="space-between"  alignItems="center" className={classes.usdAmoutContainer}>
                    <span> 0.001 </span>
                    <span> USD </span>
                </Grid>
                {this.renderFeeBox()}
                <Grid className={classes.actionButtonsContainer} container direction="row" justify="center" alignItems="center">
                    <Button variant="outlined" onClick={sendAction} classes={{
                        root: classes.button,
                        label: classes.buttonText
                    }}> SEND </Button>
                </Grid>
            </TransactionBox>
        );
    }
}

export const TransactionSendBox = injectSheet(styles)(TransactionSendBoxComponent);

export default TransactionSendBox;
