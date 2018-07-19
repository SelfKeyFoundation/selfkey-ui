import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

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

export const CustomTokenText = injectSheet(styles)<{}>(({classes, children}) => (
    <div className={classes.customTokenText}>
        {children}
    </div>
));

export default CustomTokenText;
