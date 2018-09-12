import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

const styles: StyleSheet = {
  root: {
    webkitTransition: 'background .5s ease',
    transition: 'background .5s ease',
    height: '60px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    fontSize: '16px',
    padding: '16px',
    textTransform: 'uppercase',

    fontFamily: '"Proxima Nova", arial, sans-serif',
    letterSpacing: '0.6px',
    cursor: 'pointer'
  },
};

export type ButtonProps = {
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void),
  className?: string
};


export const LWSButton = injectSheet(styles)<ButtonProps>(({classes, children, className, onClick}) => (
  <button className={`${classes.root} ${className}`} onClick={onClick}>
    {children}
  </button>
));

export default LWSButton;
