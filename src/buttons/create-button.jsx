import * as React from 'react';
import { css, withStyles } from '../default/with-styles';

import BlueButton from './blue-button';

class CreateButton extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            styles,
            } = this.props;
        return (
            <BlueButton {...css(styles.CreateButton)}>{this.props.children}</BlueButton>
        );
    }
  }

export default withStyles(({ selfkeyWallet: { color } }) => ({
  CreateButton: {
    marginTop: '44px',
    width: '350px',
    height: '52px'
  },
}))(CreateButton);

