import * as React from 'react';
import { Slider, WithStyles, withStyles, createStyles } from '@material-ui/core';
import CommonStyle from '../common/common-style';
import BN from 'bignumber.js';

const styles = createStyles({
    root: {
        width: '100%',
        color: '#93B0C1',
        fontFamily: CommonStyle.fontFamily,
    },
    sliderRoot: {
        padding: '22px 0 12px 0',
    },
    trackAfter: {
        borderRadius: '6px;',
        height: '10px',
        opacity: 1,
        backgroundColor: '#313D49',
    },
    trackBefore: {
        borderRadius: '6px;',
        height: '10px',
        opacity: 1,
        backgroundColor: '#00C0D9',
    },
    thumb: {
        height: '18px',
        width: '18px',
        backgroundColor: '#23E6FE',
        '&$activated': {
            height: '22px',
            width: '22px',
        },
    },
    activated: {},
    sliderLabels: {
        height: '19px',
        width: '100%',

        lineHeight: '19px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        '&>span': {
            fontSize: '16px',
        },
    },
    networkFeeValue: {
        color: '#ffffff',
    },
});

export type TransactionFeeSelectorProps = {
    minGasPrice: number;
    maxGasPrice: number;
    gasLimit: number;
    fiat: string;
    fiatRate: number;
    defaultValue?: number;
    value?: number;
    onChange: (value: number) => void;
};

export type TransactionFeeSelectorState = {
    value: number | null;
};

export type StyledProps = WithStyles<typeof styles> & TransactionFeeSelectorProps;

const WEI = new BN('1000000000000000000');

export class TransactionFeeSelectorComponent extends React.Component<StyledProps, TransactionFeeSelectorState> {
    state = { value: null };
    handleChange = (event: React.ChangeEvent, value: number) => {
       this.setState({ value });
       this.props.onChange(value);
    };
    componentDidMount() {
        this.props.onChange(this.value);
    }
    get avarageGasPrice() {
        return (this.props.minGasPrice + this.props.maxGasPrice) / 2;
    }
    get value() {
        return this.props.value || this.state.value || this.props.defaultValue || this.avarageGasPrice;
    }
    get transactionFee() {
        return new BN(this.value).times(this.props.gasLimit).dividedBy(WEI);
    }
    get fiatFee() {
        return this.transactionFee.times(this.props.fiatRate);
    }
    render() {
        const { classes, minGasPrice, maxGasPrice, fiat } = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <span>Network Transaction Fee:</span>{' '}
                    <span className={classes.networkFeeValue}>
                        {this.transactionFee.toString()} ETH / {this.fiatFee.toFixed(2)} {fiat}
                    </span>
                </div>
                <Slider
                    min={minGasPrice}
                    max={maxGasPrice}
                    onChange={this.handleChange}
                    value={this.value}
                    classes={{
                        root: classes.sliderRoot,
                        // trackAfter: classes.trackAfter,
                        // trackBefore: classes.trackBefore,
                        thumb: classes.thumb,
                        // activated: classes.activated,
                        // active: classes.activated,
                    }}
                />
                <div className={classes.sliderLabels}>
                    <span>Slow</span>
                    <span>Medium</span>
                    <span>Fast</span>
                </div>
            </div>
        );
    }
}

export const TransactionFeeSelector = withStyles(styles)(TransactionFeeSelectorComponent);
export default TransactionFeeSelector;
