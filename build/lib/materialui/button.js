var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core';
var styles = createStyles({
    bold: {
        fontWeight: 600
    },
});
export var BackButton = withStyles(styles)(function (_a) {
    var classes = _a.classes, onclick = _a.onclick, leftPosition = _a.leftPosition, position = _a.position, props = __rest(_a, ["classes", "onclick", "leftPosition", "position"]);
    return (React.createElement("div", { style: { left: leftPosition || 'initial', position: position || 'initial' } },
        React.createElement(Button, { variant: "outlined", color: "secondary", size: "small", onClick: onclick },
            React.createElement(Typography, { variant: "subtitle2", color: "secondary", className: classes.bold }, "\u2039 Back"))));
});
//# sourceMappingURL=button.js.map