"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var paragraph_1 = require("../typography/paragraph");
var headings_1 = require("../typography/headings");
var styles = {
    root: {
        width: '360px',
        height: '312px',
        padding: '50px'
    },
    svgIcon: {
        fontSize: '50px',
        color: '#FFF'
    },
    title: {
        marginLeft: '30px'
    },
    button: {
        color: '#93b0c1',
        borderColor: '#3b4a5a',
        '&:disabled': {
            color: '#48565f'
        }
    },
    body: {
        textAlign: 'justify'
    }
};
exports.MarketplaceItem = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, title = _a.title, description = _a.description, active = _a.active, svgIcon = _a.svgIcon;
    return (React.createElement(core_1.Grid, { container: true, className: classes.root },
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, id: 'header', direction: 'row', justify: 'flex-start', alignItems: 'center' },
                React.createElement(core_1.Grid, { item: true, id: 'icon' }, svgIcon &&
                    React.createElement(core_1.SvgIcon, { className: classes.svgIcon },
                        React.createElement("path", { d: svgIcon }))),
                React.createElement(core_1.Grid, { item: true, id: 'title', className: classes.title },
                    React.createElement(headings_1.H2, null, title))),
            React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                React.createElement(paragraph_1.P, null, description)),
            React.createElement(core_1.Grid, { item: true, id: 'footer' },
                React.createElement(core_1.Button, { variant: "outlined", disabled: !active, className: classes.button }, active ? 'Learn More' : 'Comming Soon')))));
});
exports.default = exports.MarketplaceItem;
//# sourceMappingURL=marketplace-item.js.map