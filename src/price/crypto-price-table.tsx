import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps, ClassNameMap } from 'react-jss';

import { PriceSummary } from './price-summary';
import { VisibilityOnIcon } from '../icons/visibility-on';
import { VisibilityOffIcon } from '../icons/visibility-off';

export const styles: StyleSheet = {
	cryptoPriceTable: {
		fontFamily: 'Lato, arial, sans-serif',
		width: '1140px',
		'& td, & th': {
			fontFamily: 'Lato, arial, sans-serif!important'
		}
	},
	table: {
		borderSpacing: '0px',
		width: '100%',
		'& tbody tr:nth-child(odd)': {
			background: '#262f39',
		},
	},

	headerTableRow: {
		height: '38px',
		'& th': {
			fontSize: '12px',
			fontWeight: 600,
			textAlign: 'left',
			color: '#7f8fa4',
			textTransform: 'uppercase',
			borderBottom: '0px',
			paddingLeft: '0px',
		},
		'& th:first-child': {
			paddingLeft: '24px !important',
		},
	},

	bodyTableRow: {
		height: '74px',
		cursor: 'pointer',
		'& td': {
			padding: '0px',
			fontSize: '15px',
			textAlign: 'left',
			color: '#ffffff',
			borderBottom: '0px',
			'& svg g': {
				fill: '#7f8fa4',
			},
		},
		'& td:first-child': {
			paddingLeft: '24px !important',
		},
	},

	iconSize: {
		width: '19.6px !important',
		height: '23.1px !important',
	},
};

export type Token = {
	name: string;
	symbol: string;
	price: number;
	balance: number;
	balanceInFiat: number;
	address?: string;
	hidden: boolean;
	isCustom: boolean;
};

export type CryptoPriceTableProps = {
	locale: string;
	fiatCurrency: string;
	tokens: Array<Token>;
	toggleAction?: ((event: React.MouseEvent<HTMLElement>, token: Token) => void);
	alwaysVisible?: Array<string>;
};

export type CryptoPriceTableState = {};

export type StyledProps = WithStyles<keyof typeof styles> & CryptoPriceTableProps;

export class CryptoPriceTableComponent extends React.Component<StyledProps, CryptoPriceTableState> {
	constructor(props: StyledProps) {
		super(props);
	}

	renderVisibilityButton(token: Token) {
		const { classes, toggleAction, alwaysVisible = [] } = this.props;
		if (alwaysVisible.includes(token.address || '')) return;
		let icon;
		if (token.hidden) {
			icon = <VisibilityOffIcon className={classes.iconSize} />;
		} else {
			icon = <VisibilityOnIcon className={classes.iconSize} />;
		}
		return (
			<div
				onClick={(event: React.MouseEvent<HTMLElement>) => {
					toggleAction
						? toggleAction(event, token)
						: () => {
								return;
						  };
				}}
			>
				{icon}
			</div>
		);
	}

	renderRow(token: Token, index: number) {
		const { locale, fiatCurrency, classes } = this.props;
		const visibilityButton = this.renderVisibilityButton(token);
		return (
			<TableRow key={index} className={classes.bodyTableRow}>
				<TableCell>{token.name}</TableCell>
				<TableCell>{token.symbol}</TableCell>
				<TableCell numeric>
					<PriceSummary
						className={classes.test}
						locale={locale}
						style="decimal"
						currency={token.symbol}
						value={token.balance}
					/>
				</TableCell>
				<TableCell numeric>
					<PriceSummary locale={locale} style="currency" currency={fiatCurrency} value={token.price} />
				</TableCell>
				<TableCell numeric>
					<PriceSummary
						locale={locale}
						style="currency"
						currency={fiatCurrency}
						value={token.balanceInFiat}
					/>
				</TableCell>
				<TableCell>{token.address}</TableCell>
				<TableCell>{visibilityButton}</TableCell>
			</TableRow>
		);
	}

	render() {
		const { classes, tokens } = this.props;

		const tokenRows = tokens.map(this.renderRow.bind(this));

		return (
			<div className={classes.cryptoPriceTable}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow className={classes.headerTableRow}>
							<TableCell>NAME</TableCell>
							<TableCell numeric>TOKEN SYMBOL</TableCell>
							<TableCell numeric>BALANCE</TableCell>
							<TableCell numeric>LAST PRICE</TableCell>
							<TableCell numeric>TOTAL VALUE</TableCell>
							<TableCell numeric>TOKEN CONTRACT ADDRESS</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>{tokenRows}</TableBody>
				</Table>
			</div>
		);
	}
}

export const CryptoPriceTable = injectSheet(styles)(CryptoPriceTableComponent);

export default CryptoPriceTable;
