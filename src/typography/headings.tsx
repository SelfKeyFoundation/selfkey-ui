import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

const styles: StyleSheet = {
    base: {
        color: '#fff',
        fontFamily: '"Proxima Nova"',
        fontWeight: 400
    },
    h1: {
        fontSize: '26px'
    }
};

export const H1 = injectSheet(styles)<{}>(({ classes, children }) => (
    <h1 className={`${classes.base} ${classes.h1}`}>{children}</h1>
));

export default H1;
