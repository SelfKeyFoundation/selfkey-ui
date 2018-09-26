import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
    p: {
        color: '#fff',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.67
    }
};

export type ParagraphProps = {
    className?: string,
}

export const P = injectSheet(styles)<ParagraphProps>(({ classes, children, className }) => (
    <p className={`${classes.base} ${classes.p} ${className}`}>{children}</p>
));
