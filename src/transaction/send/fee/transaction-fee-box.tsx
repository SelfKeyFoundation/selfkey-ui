import * as React from 'react';
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';
import { ActualTransactionFeeBox } from './actual-transaction-fee-box';
import CommonStyle from '../../../common/common-style';
import { Grid } from '@material-ui/core';
import { Loop as LoopIcon } from '@material-ui/icons';

export const styles: StyleSheet = {
    container: {
        fontFamily: CommonStyle.fontFamily
    },
    flex: {
        display: 'flex'
    },
    networkTransactionFeeTitle: {
        paddingRight: '5px',
        color: '#93B0C1',
        fontSize: '16px'
    },
    showAdvancedContainer: {
        cursor: 'pointer',
        fontSize: '14px',
        color: '#00C0D9'
    },

    icon: {
        border: 'solid #00C0D9',
        borderWidth: '0 2px 2px 0',
        display: 'inline-block',
        padding: '4px',
        marginLeft: '5px',
    },
    rightIcon: {
        transform: 'rotate(-45deg)',
        '-webkitTransform': 'rotate(-45deg)'
    },
    downIcon: {
        transform: 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
    },
    inputsContainer: {
        paddingTop: '52px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        '&& label': {
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '10px',
            lineHeight: '15px',
            color: '#93A4AF'
        }
    },
    fullWidth: {
        width: '100%',
    },
    checkbox: {
        color: '#FFFFFF', fontSize: '14px', lineHeight: '14px'
    },
    checkboxRoot: {
        color: '#00C0D9',
        '&$checked': {
            color: '#00C0D9 !important'
        }
    },
    checkboxChecked: {
        color: '#00C0D9 !important',
    },

    checkboxLabel: {
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '14px'
    },
    formControl: {
        paddingLeft: '12px',
        boxSizing: 'border-box',
        height: '46px',
        width: '178px',
        border: '1px solid #384656',
        borderRadius: '4px',
        backgroundColor: '#1E262E',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',
        color: '#FFFFFF', fontSize: '14px', lineHeight: '14px',
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 5px rgba(81, 203, 238, 1)'
        }
    },
    currNetworkStatusContainer: {
        display: 'flex',
        paddingTop: '9px'
    },
    currNetworkStatusTitle: {
        color: '#93B0C1',
        fontSize: '13px',
        lineHeight: '19px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    reloadNetworkIcon: {
        color: '#93B0C1',
        cursor: 'pointer'
    },
    gasPriceValuesContainer: {
        paddingTop: '15px;',
        '&& p': {
            color: '#FFFFFF',
            fontSize: '14px',
            lineHeight: '26px',
            margin: 0
        }
    }
};

export type EthGasStationInfo = {
    safeLow: string,
    average: string,
    fast: string
};

export type TransactionFeeBoxProps = {
    ethFee: number,
    usdFee: number,
    gasLimit: number,
    nonce: number,
    ethGasStationInfo: EthGasStationInfo,
    reloadEthGasStationInfoAction?: ((event: React.MouseEvent<SVGSVGElement>) => void)
}

export type TransactionFeeBoxState = {
    showAdvanced: boolean
    gasLimit: number
};

export type StyledProps = WithStyles<keyof typeof styles> & TransactionFeeBoxProps;

export class TransactionFeeBoxComponent extends React.Component<StyledProps, TransactionFeeBoxState> {

    constructor(props: StyledProps) {
        super(props);

        this.state = {
            showAdvanced: false,
            gasLimit: 0
        }
    }

    renderActualTransactionFeeBox() {
        return (
            <ActualTransactionFeeBox {...this.props}/>
        );
    }

    toggleShowAdvanced() {
        const { showAdvanced } = this.state;
        this.setState({ ...this.state, showAdvanced: !showAdvanced })
    }

    setGasLimit(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, gasLimit: Number(event.target.value) })
    }

    renderEdvancedContent() {
        let { classes, ethGasStationInfo, reloadEthGasStationInfoAction } = this.props;
        return (
            <div className={classes.fullWidth}>
                <Grid container className={classes.inputsContainer} direction="row" justify="space-between" alignItems="flex-start">
                    <div className={classes.formGroup}>
                        <label>Gas Price (Gwei)</label>
                        <input type="text" className={classes.formControl} />
                    </div>

                    <div>
                        <div className={classes.formGroup}>
                            <label>Gas Limit</label>
                            <input type="text" value={this.state.gasLimit} onChange={this.setGasLimit.bind(this)} className={classes.formControl} />
                        </div>
                    </div>
                    <div className={classes.formGroup}>
                        <label>Nonce</label>
                        <input disabled={true} type="text" className={classes.formControl} />
                    </div>
                </Grid>

                <Grid container direction="column" justify="center" alignItems="center">
                    <div className={classes.currNetworkStatusContainer}>
                        <span className={classes.currNetworkStatusTitle}>Current Network Status: </span>
                        <LoopIcon onClick={reloadEthGasStationInfoAction} classes={{
                            root: classes.reloadNetworkIcon
                        }}> </LoopIcon>
                    </div>
                    <div className={classes.gasPriceValuesContainer}>
                        <p> Under 30 Mins: {ethGasStationInfo.safeLow} Gwei </p>
                        <p> Under 5 Mins: {ethGasStationInfo.average} Gwei </p>
                        <p> Under 2 Mins: {ethGasStationInfo.fast} Gwei </p>
                    </div>
                </Grid>
            </div>
        );
    }

    render() {
        let { classes } = this.props;
        let { showAdvanced } = this.state;
        return (
            <Grid container direction="row" justify="space-between" alignItems="center" className={classes.container}>
                <Grid className={classes.flex}>
                    <span className={classes.networkTransactionFeeTitle}> Network Transaction Fee: </span>
                    {this.renderActualTransactionFeeBox()}
                </Grid>
                <Grid className={classes.showAdvancedContainer} onClick={() => this.toggleShowAdvanced()}>
                    <span> Advanced </span>
                    {!showAdvanced ? (
                        <i className={`${classes.icon}  ${classes.rightIcon}`}> </i>
                    ) : (
                            <i className={`${classes.icon}  ${classes.downIcon}`}> </i>
                        )}
                </Grid>

                {showAdvanced && this.renderEdvancedContent()}
            </Grid>
        );
    }
}

export const TransactionFeeBox = injectSheet(styles)(TransactionFeeBoxComponent);

export default TransactionFeeBox;
