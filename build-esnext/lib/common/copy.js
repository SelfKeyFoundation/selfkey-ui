import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles, createStyles } from '@material-ui/core';
export const styles = createStyles({
    copyButton: {
        backgroundColor: 'transparent',
        border: '1px solid #3B4A5A',
        borderRadius: '4px',
        color: '#ffffff !important',
        cursor: 'pointer',
        display: 'flex',
        height: '24px',
        justifyContent: 'center',
        margin: '0 0 0 8px',
        minWidth: '63px',
        outline: 'none',
        padding: '8px 16px'
    },
    copyButtonSpan: {
        color: '#93b0c1',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '10px',
        letterSpacing: 'normal',
    }
});
export class CopyComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.copyText = 'COPY';
        this.copiedText = 'COPIED';
        this.state = {
            copyTextPlaceholder: this.copyText
        };
    }
    handleOnCopy() {
        return () => {
            this.setState({ copyTextPlaceholder: this.copiedText });
            const bounceTime = setTimeout(() => {
                this.setState({ copyTextPlaceholder: this.copyText });
                clearTimeout(bounceTime);
            }, 1000);
        };
    }
    render() {
        const { text, classes } = this.props;
        return (React.createElement(CopyToClipboard, { text: text, onCopy: this.handleOnCopy() },
            React.createElement("button", { className: classes.copyButton },
                React.createElement("span", { className: classes.copyButtonSpan }, this.state.copyTextPlaceholder))));
    }
}
export const Copy = withStyles(styles)(CopyComponent);
export default Copy;
//# sourceMappingURL=copy.js.map