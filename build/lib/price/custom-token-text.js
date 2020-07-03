import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
var styles = createStyles({
    customTokenText: {
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '14px',
        color: '#93b0c1',
        paddingTop: '8px',
        paddingBottom: '50px',
        textAlign: 'center'
    }
});
export var CustomTokenText = withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.customTokenText }, children));
});
export default CustomTokenText;
//# sourceMappingURL=custom-token-text.js.map