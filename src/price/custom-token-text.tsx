import * as React from 'react';
import { SFC } from 'react';
import injectSheet from 'react-jss';

import { StyleSheet, StyledComponentProps } from '../react-jss.types';

const styles: StyleSheet = {
    customTokenText: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: '14px',
        color: '#93b0c1',
        paddingTop: '8px',
        paddingBottom: '50px',
        textAlign: 'center'
    }
};

const CustomTokenTextComponent : SFC<StyledComponentProps> = ({classes, children}) => (
    <div className={classes.customTokenText}>
        {children}
    </div>
)

/** Test description */
export const CustomTokenText: SFC<{}> = injectSheet(styles)(CustomTokenTextComponent);

export default CustomTokenText;
