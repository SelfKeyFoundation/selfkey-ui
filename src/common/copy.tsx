import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';

export const styles: StyleSheet = {
  copyButton: {
    cursor: "pointer",
    width: "46px",
    height: "20px",
    marginLeft: "7px",
    padding: 0,
    backgroundColor: "#435160",
    border: "none",
    borderRadius: "4px",
    margin: 0,
    color: "#ffffff !important"
  },

  copyButtonSpan: {
    fontSize: "11px",
    lineHeight: "12px",
    fontFamily: 'Lato, arial, sans-serif',
    letterSpacing: "normal",
    color: "#93b0c1"
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
        <button className={classes.copyButton}>
          <span className={classes.copyButtonSpan}>
            {this.state.copyTextPlaceholder}
          </span>
        </button>
      </CopyToClipboard>
    );
  }
}

export const Copy = injectSheet(styles)(CopyComponent);

export default Copy;