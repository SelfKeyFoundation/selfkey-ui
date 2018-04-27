import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';

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

const Heading1: SFC<StyledComponentProps> = ({ classes, children }) => (
    <h1 className={`${classes.base} ${classes.h1}`}>{children}</h1>
)

/** Test description */
export const H1: SFC<{}> = injectSheet(styles)(Heading1);

export default H1;
