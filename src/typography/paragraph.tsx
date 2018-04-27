import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';

const styles: StyleSheet = {
    p: {
        color: '#93b0c1',
        fontFamily: '"Proxima Nova"',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.67
    }
};

const Paragraph: SFC<StyledComponentProps> = ({ classes, children }) => (
    <p className={`${classes.base} ${classes.p}`}>{children}</p>
)

export const P: SFC<{}> = injectSheet(styles)(Paragraph);
