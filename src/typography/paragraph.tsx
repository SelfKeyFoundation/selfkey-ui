import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
    p: {
        color: '#93b0c1',
        fontFamily: '"Proxima Nova"',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.67
    }
};

export const P = injectSheet(styles)<{}>(({ classes, children }) => (
    <p className={`${classes.base} ${classes.p}`}>{children}</p>
));
