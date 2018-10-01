import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Grid, Checkbox, FormControlLabel, FormControl, FormHelperText, WithStyles } from '@material-ui/core';
import { P } from '../typography/paragraph';
import ExchangeIcon from '../icons/exchange-large';
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

export type UnlockState = {
	understood: boolean;
	error: boolean;
	fee: number;
};

export type UnlockProps = {
	amount?: number;
	token?: string;
	days?: number;
	minGasPrice: number;
	maxGasPrice: number;
	gasLimit: number;
	fiat: string;
	fiatRate: number;
	onTransactionFeeChange?: (value: number) => void;
	onConfirm: (value: number) => void;
	onCancel: () => void;
};

export type StyledProps = WithStyles<keyof typeof styles> & UnlockProps;

export class UnlockComponent extends React.Component<StyledProps, UnlockState> {
	state = {
		error: false,
		understood: false,
		fee: 0,
	};
	handleUnderstoodChange = (event: object, checked: boolean) => {
		this.setState({ understood: checked });
	};
	handleFeeChange = (fee: number) => {
		this.setState({ fee });
	};
	handleSubmit = (event: any) => {
		event.preventDefault();
		if (!this.state.understood) {
			return this.setState({ error: true });
		}
		return this.props.onConfirm(this.state.fee);
	};

	render() {
		const {
			classes,
			amount = 25,
			token = 'KEY',
			days = 30,
			minGasPrice,
			maxGasPrice,
			gasLimit,
			fiat,
			fiatRate,
			onCancel,
		} = this.props;

		const { error, understood } = this.state;
		return (
			<Grid container direction="row" justify="flex-start" alignItems="flex-start">
				<Grid item xs={2}>
					<ExchangeIcon />
				</Grid>
				<Grid item xs={10}>
					<Grid container direction="column" justify="flex-start" alignItems="stretch">
						<Grid item classes={{ item: classes.contentSection }}>
							<P className={classes.text}>
								A refundable deposit of {amount} {token} tokens is required to unlock this marketplace
								for {days} days.
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
							<form onSubmit={this.handleSubmit}>
								<FormControl required={true} component="fieldset" error={error}>
									<FormControlLabel
										classes={{ label: classes.understandLabel }}
										checked={understood}
										value="understood"
										onChange={this.handleUnderstoodChange}
										control={
											<Checkbox
												color="primary"
												classes={{
													root: classes.understandCheckbox,
													colorPrimary: classes.primary,
													checked: classes.checked,
												}}
											/>
										}
										label={`OK, I understand that this deposit is refundable after ${days} days.`}
									/>
									{error ? (
										<FormHelperText>
											Please confirm you understand how the deposit works.
										</FormHelperText>
									) : (
										''
									)}
								</FormControl>
								<div className={classes.actions}>
									<StyledButton variant="contained" size="medium" type="submit">
										Confirm
									</StyledButton>
									<StyledButton variant="outlined" size="medium" onClick={onCancel}>
										Cancel
									</StyledButton>
								</div>
							</form>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export const Unlock = injectSheet(styles)<UnlockProps>(UnlockComponent);

export default Unlock;
