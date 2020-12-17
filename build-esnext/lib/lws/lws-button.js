import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
const styles = createStyles({
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
        transition: 'background .5s ease'
    }
});
export const LWSButton = withStyles(styles)(({ classes, children, className, onClick }) => (React.createElement("button", { className: `${classes.root} ${className}`, onClick: onClick }, children)));
export default LWSButton;
//# sourceMappingURL=lws-button.js.map