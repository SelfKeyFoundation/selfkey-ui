import * as React from 'react';
import { css, withStyles } from '../default/with-styles';


class EXISTING_BUTTON extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            styles,
            } = this.props;
        return (
            <div {...css(styles.ExistingButton)}>
                {this.props.children}
            </div>  
        );
    }
  }

export default withStyles(({ selfkeyWallet: { color } }) => ({
    ExistingButton: {
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
        marginTop: '36px',
        width: '350px',
        height: '52px',
        border: 'solid 1px rgba(10, 187, 208, 0.5)',
        ':hover': {
            border: 'solid 1px rgba(3, 225, 250, 0.774)'
        },
        opacity: '0.8',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '0.86',
        letterSpacing: '0.6px',
        color: '#0dc7dd',
        fontFamily: 'ProximaNovaRegular',
        textTransform: 'uppercase',
        userSelect: 'none',
    },
}))(EXISTING_BUTTON);

