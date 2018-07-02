import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';

const styles: StyleSheet = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: '4px',
    },
    currencyShort: {
        opacity: '0.7',
        fontFamily: 'ProximaNovaRegular',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '1px',
        color: '#ffffff',
        marginRight: '6px',
    },
    value: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '17px',
        color: '#ffffff'
    }
};

type PriceSummaryProps = {
    currencyShort: string,
    currencySymbol: string,
    value: string
};

const PriceSummaryComponent: SFC<StyledComponentProps & PriceSummaryProps> = ({ classes, children, currencyShort, currencySymbol, value }) => (
    <div className={`${classes.row}`}>
        <div className={`${classes.currencyShort}`}>{currencyShort}</div>
        <div className={`${classes.value}`}>{currencySymbol}{value}</div>
    </div>
)

/** Test description */
export const PriceSummary: SFC<PriceSummaryProps> = injectSheet(styles)(PriceSummaryComponent);

export default PriceSummary;
