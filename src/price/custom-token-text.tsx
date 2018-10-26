import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

const styles: StyleSheet = {
    customTokenText: {
        fontFamily: 'Lato, arial, sans-serif',
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
