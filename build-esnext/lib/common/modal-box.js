import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { CloseButtonIcon } from '../icons/close-button';
const styles = createStyles({
    root: {
        boxSizing: 'border-box',
        minHeight: '300px',
        width: '781px',
        border: '1px solid #303C49',
        borderRadius: '4px',
        backgroundColor: '#262F39',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
    },
    header: {
        height: '65px',
        width: '780px',
        borderRadius: '4px 4px 0 0',
        backgroundColor: '#2A3540',
        boxShadow: 'inset 0 -1px 0 0 #374758, 1px 0 0 0 rgba(118,128,147,0.2), 0 4px 2px 0 rgba(76,76,76,0.2)',
        '& h2': {
            height: '22px',
            width: '346px',
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '22px',
            marginLeft: '30px',
            marginTop: '20px'
        },
        overflow: 'visible',
        position: 'relative'
    },
    body: {
        padding: '30px 42px'
    },
    closeButton: {
        background: 'none',
        border: 'none',
        margin: 0,
        outline: 'none',
        padding: 0,
        position: 'absolute',
        top: '-18px',
        right: '-18px'
    }
});
export const ModalBox = withStyles(styles)((props) => (React.createElement(Grid, { container: true, className: props.classes.root, direction: "column", justify: "flex-start", alignItems: "flex-start" },
    React.createElement(Grid, { item: true, id: "header", className: props.classes.header },
        React.createElement(Typography, { variant: "h2" }, props.headerText),
        React.createElement("button", { className: props.classes.closeButton, onClick: props.closeAction },
            React.createElement(CloseButtonIcon, null))),
    React.createElement(Grid, { item: true, id: "body", className: props.classes.body }, props.children))));
export default ModalBox;
//# sourceMappingURL=modal-box.js.map