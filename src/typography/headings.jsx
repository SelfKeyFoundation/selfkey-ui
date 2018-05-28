import * as React from 'react';
import { css, withStyles } from '../default/with-styles';


class H1 extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            styles,
            } = this.props;
        return (
            <h1 {...css(styles.Header)}>
                {this.props.children}
            </h1>
        );
    }
  }

export default withStyles(({ selfkeyWallet: { color } }) => ({
    Header: {
        color: color.core.white,
        fontFamily: '"OrbitronMedium"',
        fontWeight: 500,
        textTransform: 'uppercase',
        marginTop: '24px',
        letterSpacing: '4px',
        fontSize: '26px'
    },


}))(H1);

