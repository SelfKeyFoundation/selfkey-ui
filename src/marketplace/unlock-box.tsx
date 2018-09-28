import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { Grid } from '@material-ui/core';
import { H2 } from '../typography/headings';
import { CloseButtonIcon } from '../icons/close-button';

const styles: StyleSheet = { 
  root: {
    boxSizing: 'border-box',
    minHeight: '423px',
    width: '781px',
    border: '1px solid #303C49',
    borderRadius: '4px',
    backgroundColor: '#262F39',
    boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
  },

  header: {
    height: '65px',
    width: '780px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#2A3540',
    boxShadow: 'inset 0 -1px 0 0 #374758, 1px 0 0 0 rgba(118,128,147,0.2), 0 4px 2px 0 rgba(76,76,76,0.2)',
    '& h2': {
      height: '22px',	
      width: '346px',	
      color: '#FFFFFF',	
      fontSize: '18px',
      lineHeight: '22px',
      marginLeft: '30px',
      marginTop: '20px'
    },
    overflow: 'visible',
    position: 'relative'
  },

  body: {
    padding: '30px 42px'
  },

  closeButton: {
    position: 'absolute',
    top: '-18px',
    right: '-18px',
  },
};

export type UnlockBoxProps = {
  closeAction?: ((event: React.MouseEvent<HTMLElement>) => void) 
}

export const UnlockBox = injectSheet(styles)<UnlockBoxProps>(({classes, children, closeAction}) => (
  <Grid container className={classes.root} direction='column' justify='flex-start' alignItems='flex-start'>
    <Grid item id='header' className={classes.header}>
      <H2>Unlock This Marketplace: Crypto Exchanges</H2>
      <a className={classes.closeButton} onClick={closeAction}><CloseButtonIcon/></a>
    </Grid>
    <Grid item id='body' className={classes.body}>
      {children}  
    </Grid>
  </Grid>
));

export default UnlockBox;
