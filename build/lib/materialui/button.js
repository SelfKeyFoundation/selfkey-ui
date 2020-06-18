import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core';
const styles = createStyles({
    bold: {
        fontWeight: 600
    },
});
export const BackButton = withStyles(styles)(({ classes, onclick, leftPosition, position, ...props }) => {
    return (React.createElement("div", { style: { left: leftPosition || 'initial', position: position || 'initial' } },
        React.createElement(Button, { variant: "outlined", color: "secondary", size: "small", onClick: onclick },
            React.createElement(Typography, { variant: "subtitle2", color: "secondary", className: classes.bold }, "\u2039 Back"))));
});
//# sourceMappingURL=button.js.map