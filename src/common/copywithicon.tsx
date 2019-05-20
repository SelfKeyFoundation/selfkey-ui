import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import injectSheet, { WithStyles, StyleSheet, StyledComponentProps } from 'react-jss';
import ClipboardIcon from "../icons/clipboard";
import { Grid, Typography } from "@material-ui/core";

export const styles: StyleSheet = {
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
    },

    copyText: {
      minWidth: '50px',
      textAlign: 'center'
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
  copyText = "Copy";
  copiedText = "Copied";

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
          <Typography variant="subtitle2" color="secondary" className={classes.copyText}>
            {this.state.copyTextPlaceholder}
          </Typography>
        </Grid>
      </CopyToClipboard>
    );
  }
}

export const CopyWithIcon = injectSheet(styles)(CopyComponent);

export default CopyWithIcon;
