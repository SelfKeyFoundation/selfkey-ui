import * as React from 'react';
import { css, withStyles } from '../default/with-styles';


class P extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            styles,
            } = this.props;
        return (
            <p {...css(styles.Paragraph)}>
               {this.props.children}
            </p>
        );
    }
  }

export default withStyles(({ selfkeyWallet: { color } }) => ({
    Paragraph: {
        color: '#93b0c1',
        fontFamily: '"Proxima Nova"',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1.67
    },


}))(P);

