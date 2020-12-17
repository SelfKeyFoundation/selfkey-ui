import * as React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import { ActualTransactionFeeBox } from './actual-transaction-fee-box';
import CommonStyle from '../../../common/common-style';
import { Loop as LoopIcon } from '@material-ui/icons';
export const styles = createStyles({
    container: {
        fontFamily: CommonStyle.fontFamily
    },
    networkTransactionFeeTitle: {
        color: '#93B0C1',
        fontSize: '16px',
        paddingRight: '5px'
    },
    showAdvancedContainer: {
        color: '#00C0D9',
        cursor: 'pointer',
        fontSize: '14px',
        minWidth: '85px',
        textAlign: 'right'
    },
    icon: {
        border: 'solid #00C0D9',
        borderWidth: '0 2px 2px 0',
        display: 'inline-block',
        padding: '4px',
        marginLeft: '5px'
    },
    rightIcon: {
        transform: 'rotate(-45deg)'
    },
    downIcon: {
        transform: 'rotate(45deg)'
    },
    inputsContainer: {
        paddingTop: '52px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        '&& label': {
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '10px',
            lineHeight: '15px',
            color: '#93A4AF'
        }
    },
    fullWidth: {
        width: '100%'
    },
    checkbox: {
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '14px'
    },
    checkboxRoot: {
        color: '#00C0D9',
        '&$checked': {
            color: '#00C0D9 !important'
        }
    },
    checkboxChecked: {
        color: '#00C0D9 !important'
    },
    checkboxLabel: {
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '14px'
    },
    nonceValue: {
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
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '14px',
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
});
export class TransactionFeeBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.timerToUpdateGasPrice = 0;
        this.timerToUpdateGasLimit = 0;
        this.TIME_FOR_INPUT_CHANGE = 1000;
        this.state = {
            showAdvanced: props.showAdvanced || false,
            gasLimit: props.gasLimit,
            gasPrice: props.gasPrice
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.gasLimit !== this.props.gasLimit ||
            prevProps.gasPrice !== this.props.gasPrice) {
            this.setState({
                ...this.state,
                gasLimit: this.props.gasLimit,
                gasPrice: this.props.gasPrice
            });
        }
    }
    renderActualTransactionFeeBox() {
        return React.createElement(ActualTransactionFeeBox, Object.assign({}, this.props));
    }
    toggleShowAdvanced() {
        const { showAdvanced } = this.state;
        this.setState({ ...this.state, showAdvanced: !showAdvanced });
    }
    setGasLimit(event) {
        const value = event.target.value;
        if (this.timerToUpdateGasLimit)
            clearTimeout(this.timerToUpdateGasLimit);
        this.setState({ ...this.state, gasLimit: Number(value) });
        this.timerToUpdateGasLimit = window.setTimeout(() => {
            if (this.props.changeGasLimitAction) {
                this.props.changeGasLimitAction(value);
            }
        }, this.TIME_FOR_INPUT_CHANGE);
    }
    setGasPrice(event) {
        const value = event.target.value;
        if (this.timerToUpdateGasPrice)
            clearTimeout(this.timerToUpdateGasPrice);
        this.setState({ ...this.state, gasPrice: Number(value) });
        this.timerToUpdateGasPrice = window.setTimeout(() => {
            if (this.props.changeGasPriceAction) {
                this.props.changeGasPriceAction(value);
            }
        }, this.TIME_FOR_INPUT_CHANGE);
    }
    renderAdvancedContent() {
        const { classes, ethGasStationInfo, reloadEthGasStationInfoAction, nonce } = this.props;
        return (React.createElement("div", { className: classes.fullWidth },
            React.createElement(Grid, { container: true, className: classes.inputsContainer, direction: "row", justify: "space-between", alignItems: "flex-start" },
                React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Gas Price (Gwei)"),
                    React.createElement("input", { type: "text", className: classes.formControl, value: this.state.gasPrice, onChange: e => this.setGasPrice(e) })),
                React.createElement("div", null,
                    React.createElement("div", { className: classes.formGroup },
                        React.createElement("label", null, "Gas Limit"),
                        React.createElement("input", { type: "text", value: this.state.gasLimit, onChange: e => this.setGasLimit(e), className: classes.formControl }))),
                React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Nonce"),
                    React.createElement("span", { className: classes.nonceValue },
                        " ",
                        nonce,
                        " "))),
            React.createElement(Grid, { container: true, direction: "column", justify: "center", alignItems: "center" },
                React.createElement("div", { className: classes.currNetworkStatusContainer },
                    React.createElement("span", { className: classes.currNetworkStatusTitle },
                        "Current Network Status:",
                        ' '),
                    React.createElement(LoopIcon, { onClick: reloadEthGasStationInfoAction, classes: {
                            root: classes.reloadNetworkIcon
                        } }, ' ')),
                React.createElement("div", { className: classes.gasPriceValuesContainer },
                    React.createElement("p", null,
                        " Under 30 Mins: ",
                        ethGasStationInfo.safeLow,
                        " Gwei "),
                    React.createElement("p", null,
                        " Under 5 Mins: ",
                        ethGasStationInfo.average,
                        " Gwei "),
                    React.createElement("p", null,
                        " Under 2 Mins: ",
                        ethGasStationInfo.fast,
                        " Gwei ")))));
    }
    render() {
        const { classes } = this.props;
        const { showAdvanced } = this.state;
        return (React.createElement(Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", className: classes.container },
            React.createElement(Grid, { container: true, wrap: "nowrap" },
                React.createElement(Grid, { container: true, direction: "row" },
                    React.createElement(Grid, { item: true },
                        React.createElement("span", { className: `${classes.networkTransactionFeeTitle} feeTitle` },
                            ' ',
                            "Network Transaction Fee:",
                            ' ')),
                    React.createElement(Grid, { item: true }, this.renderActualTransactionFeeBox())),
                React.createElement(Grid, { item: true, className: classes.showAdvancedContainer, onClick: () => this.toggleShowAdvanced() },
                    React.createElement("span", null, " Advanced "),
                    !showAdvanced ? (React.createElement("i", { className: `${classes.icon}  ${classes.rightIcon}` }, " ")) : (React.createElement("i", { className: `${classes.icon}  ${classes.downIcon}` }, " ")))),
            showAdvanced && this.renderAdvancedContent()));
    }
}
export const TransactionFeeBox = withStyles(styles)(TransactionFeeBoxComponent);
export default TransactionFeeBox;
//# sourceMappingURL=transaction-fee-box.js.map