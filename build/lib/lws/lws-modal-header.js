import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { CloseButtonIcon } from '../icons/close-button';
import { SelfkeyLogo } from '../theme/selfkey-dark-theme';
import { Typography } from '@material-ui/core';
const styles = createStyles({
    root: {
        position: 'relative',
        background: '#1F2830',
        borderBottom: '1px solid #43505B',
        borderRadius: '3px 3px 0 0',
        padding: '24px 30px',
        display: 'flex',
        alignItems: 'center'
    },
    closeButton: {
        background: 'none',
        border: 'none',
        margin: 0,
        outline: 'none',
        padding: 0,
        position: 'absolute',
        top: '-18px',
        right: '-18px',
    },
    title: {
        color: '#C5DCE9',
        margin: '0',
        padding: '0 0 0 25px'
    }
});
export const LWSModalHeader = withStyles(styles)(({ classes, closeAction }) => (React.createElement("div", { className: classes.root },
    React.createElement(SelfkeyLogo, { style: { width: '50px', height: '43px' } }),
    React.createElement(Typography, { variant: "h1", className: classes.title }, "Login with SelfKey"),
    React.createElement("button", { className: classes.closeButton, onClick: closeAction },
        React.createElement(CloseButtonIcon, null)))));
export default LWSModalHeader;
//# sourceMappingURL=lws-modal-header.js.map