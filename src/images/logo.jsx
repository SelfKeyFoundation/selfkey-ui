import * as React from 'react';
import { css, withStyles } from '../default/with-styles';

import logoImage from '../assets/images/icons/selfkey.svg';

class LOGO extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            styles,
            } = this.props;
        return (
            <div {...css(styles.Logo)}>
            </div>
        );
    }
  }

export default withStyles(({ selfkeyWallet: { color } }) => ({
    Logo: {
        backgroundImage: 'url("'+logoImage+'")',
        width: '57px',
        height: '65px'
    },
}))(LOGO);

