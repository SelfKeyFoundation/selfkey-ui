import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
var styles = createStyles({
    root: {
        borderRadius: '3px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 700,
        height: '60px',
        letterSpacing: '0.6px',
        padding: '16px',
        textTransform: 'uppercase',
        transition: 'background .5s ease',
    },
});
export var LWSButton = withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, className = _a.className, onClick = _a.onClick;
    return (React.createElement("button", { className: classes.root + " " + className, onClick: onClick }, children));
});
export default LWSButton;
//# sourceMappingURL=lws-button.js.map