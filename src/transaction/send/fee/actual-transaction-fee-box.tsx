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
    ethFee: number;
    usdFee: number
}

export const ActualTransactionFeeBox = injectSheet(styles)<ActualTransactionFeeBoxProps>(({classes, ethFee, usdFee }) => (
    <div className={classes.container}>
        <span>{ethFee} ETH</span>
        <span> / </span>
        <span>${usdFee} USD</span>
    </div>
));

export default ActualTransactionFeeBox;
