import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

const styles: StyleSheet = {
  root: {
    '& a': {
      color: '#23E6FE',
      textDecoration: 'none',
    },
    '& a &:hover': {
      textDecoration: 'underline'
    },
    padding: '60px 70px 80px',
  },
};

export const LWSModalBody = injectSheet(styles)<{}>(({classes, children}) => (
  <div className={classes.root}>
    {children}
  </div>
));

export default LWSModalBody;
