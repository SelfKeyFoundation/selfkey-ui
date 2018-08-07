import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
    base: {
        color: '#fff',
        fontFamily: 'ProximaNovaRegular',
        fontWeight: 400
    },
    h1: {
        fontSize: '26px'
    },
    h2: {
        fontSize: '20px'
    }
};

export type HeadingsProps = {
    className?: string
}

export const H1 = injectSheet(styles)<HeadingsProps>(({ classes, children, className }) => (
    <h1 className={`${classes.base} ${classes.h1} ${className}`}>{children}</h1>
));


export const H2 = injectSheet(styles)<HeadingsProps>(({ classes, children, className}) => (
    <h1 className={`${classes.base} ${classes.h2} ${className}`}>{children}</h1>
));

export default H1;
