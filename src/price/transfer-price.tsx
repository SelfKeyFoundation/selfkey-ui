import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Grid } from '@material-ui/core';

const styles = createStyles({
	cryptoCurrencyName: {
		fontFamily: 'Lato, arial, sans-serif',
		fontSize: '18px',
		color: '#ffffff'
	},

	cryptoCurrencyShort: {
		marginTop: '4px',
		opacity: 0.7,
		fontFamily: 'Lato, arial, sans-serif',
		fontSize: '14px',
		letterSpacing: '1px',
		color: '#ffffff'
	}
});

export type TransferPriceProps = {
	cryptoCurrencyShort: string;
	cryptoCurrencyName: string;
	CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
	children: any;
};

export const TransferPrice = withStyles(styles)(
	({
		classes,
		children,
		cryptoCurrencyShort,
		cryptoCurrencyName,
		CryptoCurrencyIconComponent
	}: TransferPriceProps & WithStyles<typeof styles>) => (
		<div>
			<Grid container>
				<Grid item xs={1}>
					<CryptoCurrencyIconComponent />
				</Grid>
				<Grid item xs={11}>
					<div className={classes.cryptoCurrencyName}>{cryptoCurrencyName}</div>
					<div className={classes.cryptoCurrencyShort}>{cryptoCurrencyShort}</div>
				</Grid>
			</Grid>
			<Grid>{children}</Grid>
		</div>
	)
);

export default TransferPrice;
