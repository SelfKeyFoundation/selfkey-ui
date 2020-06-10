import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { PriceSummary } from './price-summary';
import { VisibilityOnIcon } from '../icons/visibility-on';
import { VisibilityOffIcon } from '../icons/visibility-off';

export const styles = createStyles({
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
        '& td': {
            padding: '0px',
            fontSize: '15px',
            textAlign: 'left',
            color: '#ffffff',
            borderBottom: '0px',
        },
        '& td & svg g': {
            fill: '#ffffff',
        },
        '& td:first-child': {
            paddingLeft: '24px !important',
        },
        cursor: 'pointer',
        height: '74px',
    },
    iconSize: {
        width: '19.6px !important',
        height: '23.1px !important',
    },
});

type Token = {
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
    showCurrency?: boolean,
    tokens: Array<Token>;
    toggleAction?: ((event: React.MouseEvent<HTMLElement>, token: Token) => void);
    alwaysVisible?: Array<string>;
};

export type CryptoPriceTableState = {};

export type StyledProps = WithStyles<typeof styles> & CryptoPriceTableProps;

export class CryptoPriceTableComponent extends React.Component<StyledProps, CryptoPriceTableState> {

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
            <div onClick={(event: React.MouseEvent<HTMLElement>) => {
                    if (toggleAction) {
                        toggleAction(event, token);
                    }
                }}
            >
                {icon}
            </div>
        );
    }

    renderRow(token: Token, index: number) {
        const { locale, fiatCurrency, showCurrency, classes } = this.props;
        const visibilityButton = this.renderVisibilityButton(token);
        return (
            <TableRow key={index} className={classes.bodyTableRow}>
                <TableCell>{token.name}</TableCell>
                <TableCell>{token.symbol}</TableCell>
                <TableCell align="right">
                    <PriceSummary
                        locale={locale}
                        priceStyle="decimal"
                        currency={token.symbol}
                        value={token.balance}
                    />
                </TableCell>
                <TableCell align="right">
                    <PriceSummary locale={locale} priceStyle="currency" currency={fiatCurrency} value={token.price} showCurrency={showCurrency} />
                </TableCell>
                <TableCell align="right">
                    <PriceSummary
                        locale={locale}
                        priceStyle="currency"
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
                            <TableCell align="right">TOKEN SYMBOL</TableCell>
                            <TableCell align="right">BALANCE</TableCell>
                            <TableCell align="right">LAST PRICE</TableCell>
                            <TableCell align="right">TOTAL VALUE</TableCell>
                            <TableCell align="right">TOKEN CONTRACT ADDRESS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{tokenRows}</TableBody>
                </Table>
            </div>
        );
    }
}

export const CryptoPriceTable = withStyles(styles)(CryptoPriceTableComponent);

export default CryptoPriceTable;
