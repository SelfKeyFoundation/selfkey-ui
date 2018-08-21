"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../../typography/headings");
var item_1 = require("./item");
var styles = {
    header: {
        borderBottom: 'solid 1px #475768',
        '& h1': {
            marginLeft: '20px'
        },
        '& svg': {
            marginLeft: '20px'
        }
    },
    svgIcon: {
        fontSize: '50px',
        color: '#FFF'
    },
};
var getItems = function (items) {
    return items.map(function (item) {
        return (React.createElement(item_1.Item, { name: item.name, description: item.description, status: item.status, logoUrl: item.logoUrl }));
    });
};
exports.Items = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, category = _a.category, items = _a.items, svgIcon = _a.svgIcon;
    return (React.createElement(core_1.Grid, { container: true, justify: 'center', alignItems: 'center' },
        React.createElement(core_1.Grid, { item: true, id: 'header', className: classes.header, xs: 12 },
            React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'center' },
                React.createElement(core_1.Grid, { item: true }, svgIcon &&
                    React.createElement(core_1.SvgIcon, { className: classes.svgIcon },
                        React.createElement("path", { d: svgIcon }))),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(headings_1.H1, null, category)))),
        React.createElement(core_1.Grid, { item: true, id: 'body', xs: 12 },
            React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'space-evenly', alignItems: 'center' }, getItems(items)))));
});
exports.default = exports.Items;
//# sourceMappingURL=items.js.map