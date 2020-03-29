import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

const styles: StyleSheet = {
  root: {
    borderRadius: '3px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontFamily: 'Lato, arial, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    height: '60px',
    letterSpacing: '0.6px',
    padding: '16px',
    textTransform: 'uppercase',
    transition: 'background .5s ease',
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
