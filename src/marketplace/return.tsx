import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Grid, WithStyles } from '@material-ui/core';
import { P } from '../typography/paragraph';
import ReturnIcon from '../icons/return-large';
import { TransactionFeeSelector } from '../transaction/transaction-fee-selector';
import CommonStyle from '../common/common-style';
import { StyledButton } from '../common/styled-button';

const styles: StyleSheet = {
	text: {
		fontSize: '18px',
		lineHeight: '30px',
	},
	footer: {
		marginTop: '30px',
		paddingTop: '30px',
		borderTop: '1px solid #475768',
	},
	contentSection: {
		marginBottom: '20px',
		marginTop: '20px',
	},
	understandLabel: {
		fontFamily: CommonStyle.fontFamily,
		fontSize: '14px',
		lineHeight: '21px',
		color: '#93B0C1',
	},
	understandCheckbox: {
		color: '#00C0D9',
		'&$primary$checked': {
			color: '#00C0D9',
		},
	},
	actions: {
		'&>button': {
			marginRight: '20px',
			marginTop: '30px',
		},
	},
	primary: {},
	checked: {},
};

export type ReturnState = {
	understood: boolean;
	error: boolean;
	fee: number;
};

export type ReturnProps = {
	amount?: number;
	token?: string;
	minGasPrice: number;
	maxGasPrice: number;
	gasLimit: number;
	fiat: string;
	fiatRate: number;
	onTransactionFeeChange?: (value: number) => void;
	onConfirm: (value: number) => void;
	onCancel: () => void;
};

export type StyledProps = WithStyles<keyof typeof styles> & ReturnProps;

export class ReturnComponent extends React.Component<StyledProps, ReturnState> {
	state = {
		error: false,
		understood: false,
		fee: 0,
	};
	handleFeeChange = (fee: number) => {
		this.setState({ fee });
	};
	handleConfirm = (event: any) => {
		event.preventDefault();
		return this.props.onConfirm(this.state.fee);
	};

	render() {
		const {
			classes,
			amount = 25,
			token = 'KEY',
			minGasPrice,
			maxGasPrice,
			gasLimit,
			fiat,
			fiatRate,
			onCancel,
		} = this.props;
		return (
			<Grid container direction="row" justify="flex-start" alignItems="flex-start">
				<Grid item xs={2}>
					<ReturnIcon />
				</Grid>
				<Grid item xs={10}>
					<Grid container direction="column" justify="flex-start" alignItems="stretch">
						<Grid item classes={{ item: classes.contentSection }}>
							<P className={classes.text}>
								You can now get your deposit of {amount} {token} tokens back. After the transaction is
								confirmed, you will lose access to this marketplace.
							</P>
						</Grid>
						<Grid item classes={{ item: classes.contentSection }}>
							<TransactionFeeSelector
								minGasPrice={minGasPrice}
								maxGasPrice={maxGasPrice}
								gasLimit={gasLimit}
								fiat={fiat}
								fiatRate={fiatRate}
								onChange={this.handleFeeChange}
							/>
						</Grid>
						<Grid item classes={{ item: classes.footer }}>
							<div className={classes.actions}>
								<StyledButton variant="contained" size="medium" onClick={this.handleConfirm}>
									Confirm
								</StyledButton>
								<StyledButton variant="outlined" size="medium" onClick={onCancel}>
									Cancel
								</StyledButton>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export const Return = injectSheet(styles)<ReturnProps>(ReturnComponent);

export default Return;
