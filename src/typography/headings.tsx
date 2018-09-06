import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
    base: {
        color: '#fff',
        fontFamily: 'ProximaNovaRegular, arial, sans-serif',
        fontWeight: 400
    },

    h1: {
        fontSize: '26px'
    },

    h2: {
        fontSize: '22px'
    },
    
    h3: {
        fontSize: '18px'
    }
};

export type HeadingsProps = {
    className?: string
}

export const H1 = injectSheet(styles)<HeadingsProps>(({ classes, children, className }) => (
    <h1 className={`${classes.base} ${classes.h1} ${className}`}>{children}</h1>
));


export const H2 = injectSheet(styles)<HeadingsProps>(({ classes, children, className}) => (
    <h2 className={`${classes.base} ${classes.h2} ${className}`}>{children}</h2>
));


export const H3 = injectSheet(styles)<HeadingsProps>(({ classes, children, className}) => (
    <h3 className={`${classes.base} ${classes.h3} ${className}`}>{children}</h3>
));

export default H1;
