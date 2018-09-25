import * as React from 'react';
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';
import CommonStyle from '../../common/common-style';
import { TransactionFeeBox } from './fee/transaction-fee-box';
import TransactionBox from '../transaction-box';
import { Grid } from '@material-ui/core';
import { NumberFormat } from '../../price/number-format';

export const styles: StyleSheet = {
    container: {
        fontFamily: CommonStyle.fontFamily
    },

    button: {
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
        cursor: 'pointer'
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
    },

    addressErrorText: {
        height: '19px',
        width: '242px',
        color: '#FE4B61',
        fontFamily: 'Lato',
        fontSize: '13px',
        lineHeight: '19px'
    },

    addressErrorColor: {
        color: '#FE4B61',
        borderBottom: '2px solid #FE4B61',
    }

};

export type EthGasStationInfo = {
    safeLow: string;
    average: string;
    fast: string;
};

export type TransactionSendBoxProps = {
    locale: string,
    fiatCurrency: string,
    address: string,
    amount: number,
    amountUsd: number,
	gasPrice: number,
	gasLimit: number,
	nonce: number,
    addressError: boolean
    ethFee: number,
    usdFee: number,
    balance: number,
    ethGasStationInfo: EthGasStationInfo,
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void),
    cryptoCurrency: string,
    closeAction?: ((event: React.MouseEvent<HTMLElement>) => void),
    onSendAction: ((event: React.MouseEvent<HTMLButtonElement>) => void),
    onAddressFieldChange?: Function,
    onAmountInputChange?: Function,
    changeGasLimitAction?: Function,
    changeGasPriceAction?: Function,
    sending: boolean,
    confirmAction?: ((event: React.MouseEvent<HTMLElement>) => void),
    cancelAction?: ((event: React.MouseEvent<HTMLElement>) => void)
}

export type TransactionSendBoxState = {
    amount: string,
    address: string
}

export type StyledProps = WithStyles<keyof typeof styles> & TransactionSendBoxProps;

export class TransactionSendBoxComponent extends React.Component<StyledProps, TransactionSendBoxState> {
    constructor(props: StyledProps) {
        super(props);
        this.state = { amount: '', address: '' }
    }

    renderFeeBox() {
        return (
            <TransactionFeeBox {...this.props} />
        );
    }

    handleAllAmountClick() {
        const value = String(this.props.balance);
        this.setState({...this.state, amount: value});
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(value);
        }
    }

    handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(!this.props.onAddressFieldChange) {
            return;
        }
        this.setState({...this.state, address: event.target.value});
        this.props.onAddressFieldChange(event.target.value);
    }

    handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        if (isNaN(Number(value))) { 
            value = '' 
        }

        // Do not allow to enter values above the balance
        if(Number(value) > this.props.balance){
            value = String(this.props.balance)
        }

        this.setState({...this.state, amount: value});
        if (this.props.onAmountInputChange) {
            this.props.onAmountInputChange(value)
        }
    }

    renderButtons() {
        const { classes, onSendAction, sending, confirmAction, cancelAction } = this.props
        if (sending) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.actionButtonsContainer} spacing={24}>
                    <Grid item>
                        <button className={classes.button} onClick={confirmAction}> CONFIRM </button>
                    </Grid>
                    <Grid item>
                        <button className={classes.button} onClick={cancelAction}> CANCEL </button>
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.actionButtonsContainer}>
                    <Grid item>
                        <button className={classes.button} onClick={onSendAction}> SEND </button>
                    </Grid>
                </Grid>
            );
        }
    }

    render() {
        const { cryptoCurrency, closeAction, classes, addressError, amountUsd, locale, fiatCurrency } = this.props;

        let sendAmountClass = `${classes.input} ${classes.amountInput}`
        let addressInputClass = `${classes.input} ${addressError? classes.addressErrorColor : ''}`;

        return (
            <TransactionBox cryptoCurrency={cryptoCurrency} closeAction={closeAction}>
                <input type='text' onChange={e => this.handleAddressChange(e)} value={this.state.address} className={addressInputClass} placeholder="Send to Address" />
                {addressError &&
                    <span className={classes.addressErrorText}>Invalid address. Please check and try again.</span>
                }
                <div className={classes.amountContainer}>
                    <button onClick={() => this.handleAllAmountClick()} className={classes.selectAllAmountBtn}> ALL </button>
                    <input type='text' onChange={e => this.handleAmountChange(e)} value={this.state.amount} className={sendAmountClass} placeholder="0.00"/>
                </div>
                <Grid container direction="row" justify="space-between" alignItems="center" className={classes.usdAmoutContainer}>
                    <span><NumberFormat locale={locale} style='currency' currency={fiatCurrency} value={amountUsd} fractionDigits={15}/></span>
                    <span> USD </span>
                </Grid>
                {this.renderFeeBox()}
                {this.renderButtons()}
            </TransactionBox>
        );
    }
}

export const TransactionSendBox = injectSheet(styles)(TransactionSendBoxComponent);

export default TransactionSendBox;
