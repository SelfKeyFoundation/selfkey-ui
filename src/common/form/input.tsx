import * as React from "react";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
import { Grid } from "@material-ui/core";

export const styles: StyleSheet = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    boxSizing: 'border-box',
    height: '46px',
    width: '100%',
    border: '1px solid #384656',
    borderRadius: '4px',
    backgroundColor: '#1E262E',
    boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',

    color: '#93B0C1',
    fontFamily: 'Lato',
    fontშize: '14px',
    lineHeight: '21px',
    paddingLeft: '17Px',
    '&:focus': {
      outline: 'none',
      border: '1px solid #00C0D9',
      boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 0 0 3px 1px rgba(0,192,217,0.5), 2px 0 2px 0 rgba(0,0,0,0.2)'
    }
  },
  error: {
    border: '1px solid #FE4B61',
    borderRadius: '4px',
    backgroundColor: 'rgba(255,46,99,0.09)',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.08)'
  },
  errorMessage: {
    color: '#FE4B61',
    fontFamily: 'Lato',
    fontSize: '13px',
    lineHeight: '19px',
    paddingTop: '6px'
  },
  label: {
    color: '#93A4AF',
    fontFamily: 'Lato',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '15px',
    paddingBottom: '11px'
  }

};

export type InputProps = {
  hasError?: boolean
};

export type InputState = {}

export type StyledProps = WithStyles<keyof typeof styles> & InputProps;


export class InputComponent extends React.Component<StyledProps, InputState> {

  constructor(props: StyledProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    // let inputCls =
    return (
      <Grid className={classes.container}>
        <span className={classes.label}>
          label here
        </span>
        <input className={`${classes.input} ${classes.error}`} type="text" />
        <span className={classes.errorMessage}> Error Message here</span>
      </Grid>
    );
  }
}

export const Input = injectSheet(styles)(InputComponent);

export default Input;
