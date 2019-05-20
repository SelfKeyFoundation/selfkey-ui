import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
import ClipboardIcon from "../icons/clipboard";
import { Grid } from "@material-ui/core";

export const styles: StyleSheet = {
    copyButtonSpan: {
        fontSize: "11px",
        lineHeight: "12px",
        fontFamily: 'Lato, arial, sans-serif',
        letterSpacing: "normal",
        color: "#93b0c1"
    },

    clipboard: {
        cursor: "pointer",
        '&:hover': {
            '& svg': {
                fill: '#FFFFFF'
            }
        }
    },

    icon: {
      marginBottom: '10px'
    }
};

export type CopyProps = {
  text: string;
};

export type CopyState = {
  copyTextPlaceholder: string;
};

export type StyledProps = WithStyles<keyof typeof styles> & CopyProps;


export class CopyComponent extends React.Component<StyledProps, CopyState> {
  copyText = "COPY";
  copiedText = "COPIED";

  state = {
    copyTextPlaceholder: this.copyText
  };

  constructor(props: StyledProps) {
    super(props);
  }

  handleOnCopy() {
    return () => {
      this.setState({ copyTextPlaceholder: this.copiedText });
      const bounceTime = setTimeout(() => {
        this.setState({ copyTextPlaceholder: this.copyText });
        clearTimeout(bounceTime);
      }, 1000);
    }
  }

  render() {
    const { text, classes } = this.props;
    return (
      <CopyToClipboard text={text} onCopy={this.handleOnCopy()}>
        <Grid container alignItems="center" direction="column" className={classes.clipboard}>
          <ClipboardIcon className={classes.icon} />
          <p className={classes.copyButtonSpan}>
            {this.state.copyTextPlaceholder}
          </p>
        </Grid>
      </CopyToClipboard>
    );
  }
}

export const CopyWithIcon = injectSheet(styles)(CopyComponent);

export default CopyWithIcon;
