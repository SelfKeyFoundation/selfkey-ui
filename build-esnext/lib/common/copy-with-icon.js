import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles, createStyles } from '@material-ui/core';
import ClipboardIcon from "../icons/clipboard";
import { Grid, Typography } from "@material-ui/core";
const styles = createStyles({
    clipboard: {
        '&:hover & svg': {
            fill: '#FFFFFF'
        },
        cursor: 'pointer',
    },
    icon: {
        marginBottom: '10px'
    },
    copyText: {
        minWidth: '50px',
        textAlign: 'center'
    }
});
class CopyComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.copyText = "Copy";
        this.copiedText = "Copied";
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
            React.createElement(Grid, { container: true, alignItems: "center", direction: "column", className: classes.clipboard },
                React.createElement(ClipboardIcon, { className: classes.icon }),
                React.createElement(Typography, { variant: "subtitle2", color: "secondary", className: classes.copyText }, this.state.copyTextPlaceholder))));
    }
}
export const CopyWithIcon = withStyles(styles)(CopyComponent);
export default CopyWithIcon;
//# sourceMappingURL=copy-with-icon.js.map