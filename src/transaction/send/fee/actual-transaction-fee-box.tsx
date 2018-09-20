import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import CommonStyle from '../../../common/common-style';
const styles: StyleSheet = {
    container: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontFamily: CommonStyle.fontFamily,
    }
};

export type ActualTransactionFeeBoxProps = {
    ethValue: number;
    usdValue: number
}

export const ActualTransactionFeeBox = injectSheet(styles)<ActualTransactionFeeBoxProps>(({classes, ethValue, usdValue }) => (
    <div className={classes.container}>
        <span>{ethValue} ETH</span>
        <span> / </span>
        <span>${usdValue} USD</span>
    </div>
));

export default ActualTransactionFeeBox;
