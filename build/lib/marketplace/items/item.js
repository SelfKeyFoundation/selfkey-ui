"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var paragraph_1 = require("../../typography/paragraph");
var headings_1 = require("../../typography/headings");
var react_truncate_1 = require("react-truncate");
var styles = {
    root: {
        width: '360px',
        height: '326px',
        marginTop: '30px',
        marginBottom: '30px',
        border: 'solid 1px #303c49',
        borderRadius: '4px',
        fontFamily: 'Lato, arial, sans-serif'
    },
    svgIcon: {
        fontSize: '50px',
        color: '#FFF'
    },
    title: {
        margin: '20px'
    },
    icon: {
        marginLeft: '20px'
    },
    button: {
        color: '#93b0c1',
        borderColor: '#3b4a5a',
        fontFamily: 'Lato, arial, sans-serif',
        '&:disabled': {
            color: '#48565f'
        }
    },
    header: {
        backgroundColor: '#2a3540'
    },
    body: {
        width: '320px',
        textAlign: 'left',
        margin: '20px',
        color: '#fff',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
        height: '130px',
    },
    footer: {
        margin: '20px',
    }
};
exports.Item = react_jss_1.default(styles)(function (_a, viewAction) {
    var classes = _a.classes, children = _a.children, name = _a.name, description = _a.description, status = _a.status, logoUrl = _a.logoUrl;
    return (React.createElement(core_1.Grid, { container: true, className: classes.root },
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, id: 'header', direction: 'row', justify: 'flex-start', alignItems: 'center', className: classes.header },
                React.createElement(core_1.Grid, { item: true, id: 'icon', className: classes.icon },
                    React.createElement("img", { src: logoUrl })),
                React.createElement(core_1.Grid, { item: true, id: 'title', className: classes.title },
                    React.createElement(headings_1.H2, null, name))),
            React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                React.createElement(paragraph_1.P, null,
                    React.createElement(react_truncate_1.default, { lines: 5 }, description))),
            React.createElement(core_1.Grid, { item: true, id: 'footer', className: classes.footer },
                React.createElement(core_1.Button, { variant: "outlined", className: classes.button, onClick: function () { return viewAction(name); } }, "View")))));
});
exports.default = exports.Item;
//# sourceMappingURL=item.js.map