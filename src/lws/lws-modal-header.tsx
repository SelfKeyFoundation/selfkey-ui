import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { H1 } from '../typography/headings';
import { CloseButtonIcon } from '../icons/close-button';
import { SelfkeyLogo } from '../theme/selfkey-dark-theme';

const styles: StyleSheet = {
  root: {
    position: 'relative',
    background: '#1F2830',
    borderBottom: '1px solid #43505B',
    borderRadius: '3px 3px 0 0',
    padding: '24px 30px',
    display: 'flex',
    alignItems: 'center'
  },

  closeButton: {
    position: 'absolute',
    top: '-18px',
    right: '-18px',
  },

  title: {
    color: '#C5DCE9',
    fontSize: '24px',	
    fontWeight: 'normal',
    margin: '0',
    padding: '0 0 0 25px'
  }  
};

export type LWSModalHeaderProps = {
  closeAction?: ((event: React.MouseEvent<HTMLElement>) => void),
};


export const LWSModalHeader = injectSheet(styles)<LWSModalHeaderProps>(({classes, children, closeAction}) => (
  <div className={classes.root}>
    <SelfkeyLogo style={{ width: '50px', height: '43px' }} />
    <H1 className={classes.title}>Login with SelfKey</H1>
    <a className={classes.closeButton} onClick={closeAction}><CloseButtonIcon/></a>
  </div>
));

export default LWSModalHeader;
