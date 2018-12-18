"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../typography/headings");
var hour_glass_1 = require("../icons/hour-glass");
var styles = {
    text: {
        color: '#FFFFFF',
        fontSize: '18px',
        lineHeight: '30px'
    },
    body: {
        paddingTop: '20px'
    }
};
exports.UnlockProgress = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes;
    return (React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'flex-start' },
        React.createElement(core_1.Grid, { item: true, xs: 2 },
            React.createElement(hour_glass_1.default, null)),
        React.createElement(core_1.Grid, { item: true, xs: 10 },
            React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start' },
                React.createElement(core_1.Grid, { item: true, id: 'header' },
                    React.createElement(headings_1.H2, { className: classes.headerText }, "Transaction Processing")),
                React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                    React.createElement(core_1.Typography, { variant: "body2", className: classes.text }, "Your transaction is pending. The time it takes to complete will depend on the amount of network traffic."))))));
});
exports.default = exports.UnlockProgress;
//# sourceMappingURL=unlock-progress.js.map