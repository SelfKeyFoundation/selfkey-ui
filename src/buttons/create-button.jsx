import * as React from 'react';
import { css, withStyles } from '../default/with-styles';


class CREATE_BUTTON extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            styles,
            } = this.props;
        return (
            <div {...css(styles.CreateButton)}>
                CREATE NEW WALLET
            </div>
        );
    }
  }

export default withStyles(({ selfkeyWallet: { color } }) => ({
  CreateButton: {
    padding: '13px 74px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '4px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    outline: 'none',
    background: 'none',
    cursor: 'pointer',
    marginTop: '44px',
    width: '350px',
    height: '52px',
    backgroundImage: 'linear-gradient(309deg, #08bccd, #2da1f8)',
    boxShadow: '0 2px 2px 0 #15222e',
    borderImageSource: 'linear-gradient(335deg, #15d4e6, #48aefa)',
    borderImageSlice: '0',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.5',
    letterSpacing: '0.7px',
    color: '#ffffff',
    fontFamily: 'ProximaNovaRegular',
    textTransform: 'uppercase',
    userSelect: 'none',
  },
}))(CREATE_BUTTON);

