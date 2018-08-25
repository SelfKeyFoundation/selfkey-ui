import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

const styles: StyleSheet = {
  root: {
    padding: '60px 70px 80px',
    '& a': {
      color: '#23E6FE',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
};

export const LWSModalBody = injectSheet(styles)<{}>(({classes, children}) => (
  <div className={classes.root}>
    {children}
  </div>
));

export default LWSModalBody;
