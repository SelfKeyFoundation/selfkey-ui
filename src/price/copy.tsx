import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import injectSheet from 'react-jss';
import { StyleSheet, StyledComponentProps } from '../react-jss.types';

const styles: StyleSheet = {
  copyButton: {
    cursor: 'pointer',
    width: '46px',
    height: '20px',
    marginLeft: '7px',
    padding: 0,
    backgroundColor: '#435160',
    border: 'none',
    borderRadius: '4px',
    margin: 0,
    color: '#ffffff !important'
  },

  copyButtonSpan: {
    fontSize: '11px',
    lineHeight: '12px',
    fontFamily: 'ProximaNovaRegular',
    letterSpacing: 'normal',
    color: '#93b0c1'
  },
};

interface Props {
  text: string;
}

export class CopyComponent extends React.Component<StyledComponentProps & Props, {}> {
  
  copyText = 'COPY';
  copiedText = 'COPIED';

  state = {
    copyTextPlaceholder: this.copyText
  };

  handleOnCopy() {
    this.state.copyTextPlaceholder = this.copiedText;
    const bounceTime = setTimeout( () => {
      this.state.copyTextPlaceholder = this.copyText;
      clearTimeout(bounceTime);
    }, 5000)
  };

  render() {
    return (
      <CopyToClipboard text={this.props.text}
          onCopy={this.handleOnCopy}>
        <button className={this.props.classes.copyButton}>
          <span className={this.props.classes.copyButtonSpan}>{this.state.copyTextPlaceholder}</span>
        </button>
      </CopyToClipboard>
    );
  }
}

export const Copy: React.Component<Props> = injectSheet(styles)(CopyComponent);

export default Copy;
