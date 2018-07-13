import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import injectSheet from 'react-jss';
import { StyleSheet} from '../react-jss.types';

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

export interface Props {
  text: string;
}

@injectSheet(styles)
export class Copy extends React.Component<Props, {}> {
  
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
        <button>
          <span>{this.state.copyTextPlaceholder}</span>
        </button>
      </CopyToClipboard>
    );
  }
}