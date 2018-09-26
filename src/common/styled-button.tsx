import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Button } from '@material-ui/core';

const styles: StyleSheet = { 
  button: {
    background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
    color: '#FFFFFF',
    fontFamily: 'Lato, arial, sans-serif',
    '&:hover': {
      backgroundColor: '#3c4956'
    }
  },
};

export type ButtonProps = {
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void)  
}


export const StyledButton = injectSheet(styles)<ButtonProps>(({classes, children, onClick}) => (
  <Button variant="contained" size='large' className={classes.button} onClick={onClick}>{children}</Button>
));

export default StyledButton;
