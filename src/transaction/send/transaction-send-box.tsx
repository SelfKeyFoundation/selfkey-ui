import * as React from 'react';
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';
import CommonStyle from '../../common/common-style';
import { TransactionFeeBox } from './fee/transaction-fee-box';
import TransactionBox from '../transaction-box';
import { Grid } from '@material-ui/core';

export const styles: StyleSheet = {
    container: {
        fontFamily: CommonStyle.fontFamily
    },

    sendButton: {
        boxSizing: 'border-box',
        height: '45px',
        width: '201px',
        border: '1px solid #0FB8D0',
        borderRadius: '4px',
        background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 2px 2px 0 #07C1DC, 2px 0 2px 0 rgba(0,0,0,0.2)',

        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.67px',
        lineHeight: '20px',
        textAlign: 'center',
        cursor: 'pinter'
    },

    selectAllAmountBtn: {
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '16px',
        color: '#A9C5D6',

        position: 'absolute',
        left: 0,
        boxSizing: 'border-box',
        height: '37px',
        width: '37px',
        border: '1px solid #303C49',
        borderRadius: '4px',
        backgroundColor: '#202932',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
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
    inputError: {
        borderBottom: '2px solid #FE4B61 !important'
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

export type InputField = {
        value: string,
        error: string
};

export type TransactionSendBoxProps = {
    address: string,
	amount: number,
	networkFee: number,
	gasPrice: number,
	gasLimit: number,
	nonce: number,
    addressError: boolean
    ethValue: number;
    usdValue: number;
    ethGasStationInfo: EthGasStationInfo;
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void);
    cryptoCurrency: string;
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void);

    onSendAction: Function,


    onSelectAllAmount?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    onAddressFieldChange?: Function;
    
}

export type TransactionSendBoxState = {
    sendAmount: InputField,
    address: InputField
};

export type StyledProps = WithStyles<keyof typeof styles> & TransactionSendBoxProps;

export class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps) {
        super(props);
        let inputDefaultVal = {
            value: '',
            error: ''
        };
        this.state = {
            sendAmount: inputDefaultVal,
            address: inputDefaultVal
        };

        this.onAddressFieldChange = this.onAddressFieldChange.bind(this);
        this.onAmountInputChange = this.onAmountInputChange.bind(this);
        this.onSelectAllAmount = this.onSelectAllAmount.bind(this);

        this.onSendAction = this.onSendAction.bind(this);
    }

    renderFeeBox() {
        return (
            <TransactionFeeBox {...this.props} />
        );
    }

    onAddressFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        let newVal = {
            value: event.target.value,
            error: ''
        }
        this.setState({...this.state, address: newVal});

        let { onAddressFieldChange } = this.props;
        if (!onAddressFieldChange) {
            return;
        }

        onAddressFieldChange(newVal);
    }

    onAmountInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    }

    onSelectAllAmount() {
    }

    onSendAction() {
        let { onSendAction } = this.props;
        if (!onSendAction) {
            return;
        }
        let { sendAmount, address } = this.state;

        onSendAction({
            sendAmount: sendAmount.value,
            address: address.value
        });
        //this.state
    }

    render() {
        let { cryptoCurrency, closeAction, classes } = this.props;
        let { sendAmount, address } =  this.state;

        let sendAmountClass = `${classes.input} ${classes.amountInput} ${sendAmount.error ? classes.inputError: ''}`;

        return (
            <TransactionBox cryptoCurrency={cryptoCurrency} closeAction={closeAction}>
                <input onChange={this.onAddressFieldChange} value={address.value} className={classes.input} placeholder="Step 1: Enter Label or ETH Address" />
                <div className={classes.amountContainer}>
                    <button onClick={this.onSelectAllAmount} className={classes.selectAllAmountBtn}> ALL </button>
                    <input value={sendAmount.value} onChange={this.onAmountInputChange} className={sendAmountClass} placeholder="Step 2: Select Token & Enter Amount" />
                    <span className={classes.cryptoCurrencyText}> {cryptoCurrency}</span>

                </div>
                <Grid container direction="row" justify="space-between" alignItems="center" className={classes.usdAmoutContainer}>
                    <span> 0.001 </span>
                    <span> USD </span>
                </Grid>
                {this.renderFeeBox()}
                <Grid className={classes.actionButtonsContainer} container direction="row" justify="center" alignItems="center">
                    <button className={classes.sendButton} onClick={this.onSendAction}> SEND </button>
                </Grid>
            </TransactionBox>
        );
    }
}

export const TransactionSendBox = injectSheet(styles)(TransactionSendBoxComponent);

export default TransactionSendBox;
