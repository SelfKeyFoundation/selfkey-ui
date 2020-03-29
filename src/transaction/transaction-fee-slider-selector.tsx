import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import CommonStyle from '../common/common-style';
import BN from 'bignumber.js';
import { Slider, Typography } from '@material-ui/core';

const styles: StyleSheet = {
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
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between',
		lineHeight: '19px',
		width: '100%',
		'&>span': {
			fontSize: '16px',
        },
        '& p': {
            marginBottom: '5px'
        },
        '& h6:nth-child(3)': {
            marginBottom: '5px'
        }
	},
	networkFeeValue: {
		color: '#ffffff',
    },
    rightAligned: {
        textAlign: 'right'
    }
};

export type TransactionFeeSelectorProps = {
	minGasPrice: number;
	maxGasPrice: number;
	slowPrice: number;
	mediumPrice: number;
	fastPrice: number;
    transactionPrices?: any;
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

export type StyledProps = WithStyles<keyof typeof styles> & TransactionFeeSelectorProps;

const WEI = new BN('1000000000000000000');

export class TransactionFeeSelectorComponent extends React.Component<StyledProps, TransactionFeeSelectorState> {
	state = { 
		value: null
	};
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

	getTransactionPrice = ( price: any, fiat: any ) => {
		const transactionPrice = new BN(price).times(this.props.gasLimit).dividedBy(WEI);
		const priceInETH = transactionPrice.toString();
		const priceInFiat = transactionPrice.times(this.props.fiatRate);
		return (
			<React.Fragment>
				<Typography  variant="subtitle2" color="secondary">{priceInETH} ETH/</Typography>
				<Typography  variant="subtitle2" color="secondary">$ {priceInFiat.toFixed(2)} {fiat}</Typography>
			</React.Fragment>
		)
	};

	render() {
		const { classes, minGasPrice, maxGasPrice, slowPrice, mediumPrice, fastPrice, fiat } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.networkFee}>
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
						// active: classes.activated,
						root: classes.sliderRoot,
						// trackBefore: classes.trackBefore,
						// trackAfter: classes.trackAfter,
						thumb: classes.thumb,
						// activated: classes.activated,
					}}
				/>
				<div className={classes.sliderLabels}>
                    <div>
					    <Typography variant="body1">Slow</Typography>
					    {this.getTransactionPrice(slowPrice, fiat)}
					    <Typography  variant="subtitle2" color="secondary">5 - 30 min</Typography>
                    </div>
                    <div>
                        <Typography variant="body1">Medium</Typography>
					    {this.getTransactionPrice(mediumPrice, fiat)}
					    <Typography  variant="subtitle2" color="secondary">2 - 5 min</Typography>
                    </div>
                    <div className={classes.rightAligned}>
                        <Typography variant="body1">Fast</Typography>
						{this.getTransactionPrice(fastPrice, fiat)}
					    <Typography  variant="subtitle2" color="secondary">{`< 2 min`}</Typography>
                    </div>
				</div>
			</div>
		);
	}
}

export const TransactionFeeSliderSelector = injectSheet(styles)<TransactionFeeSelectorProps>(TransactionFeeSelectorComponent);

export default TransactionFeeSliderSelector;
