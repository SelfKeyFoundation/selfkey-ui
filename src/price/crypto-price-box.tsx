import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { PriceSummary } from './price-summary';

const styles = createStyles({
	cryptoPriceBox: {
		alignItems: 'flex-start',
		display: 'flex',
		flexDirection: 'column',
		height: 'calc(100% - 36px)',
		justifyContent: 'flex-start',
		marginLeft: '40px',
		marginRight: '8px',
		padding: '16px 0'
	},
	smallText: {
		color: '#fff',
		fontSize: '12px',
		marginTop: '3px !important'
	},
	test: {
		color: 'red'
	}
});

export type CryptoPriceBoxProps = {
	locale: string;
	cryptoCurrency: string;
	cryptoValue: number;
	toCurrency: string;
	toValue: number;
};

export const CryptoPriceBox = withStyles(styles)(
	({
		classes,
		locale,
		cryptoCurrency,
		cryptoValue,
		toCurrency,
		toValue
	}: CryptoPriceBoxProps & WithStyles<typeof styles>) => (
		<div className={classes.cryptoPriceBox}>
			<PriceSummary
				className={classes.test}
				locale={locale}
				priceStyle="decimal"
				currency={cryptoCurrency}
				value={cryptoValue}
				appendCurrency
			/>
			<PriceSummary
				locale={locale}
				priceStyle="currency"
				currency={toCurrency}
				value={toValue}
				appendCurrency
				valueClass={classes.smallText}
			/>
		</div>
	)
);

export default CryptoPriceBox;
