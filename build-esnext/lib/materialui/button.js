import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core';
const styles = createStyles({
    bold: {
        fontWeight: 600
    },
    button: {
        height: '36px',
        minWidth: '80px',
        width: '80px'
    }
});
export const BackButton = withStyles(styles)(({ classes, id, size, onclick, leftPosition, position, ...props }) => {
    return (React.createElement("div", { style: { left: leftPosition || 'initial', position: position || 'initial' } },
        React.createElement(Button, { variant: "outlined", color: "secondary", size: size ? size : 'medium', onClick: onclick, id: id, className: classes.button },
            React.createElement(Typography, { variant: "subtitle2", color: "secondary", className: classes.bold }, "\u2039 Back"))));
});
//# sourceMappingURL=button.js.map