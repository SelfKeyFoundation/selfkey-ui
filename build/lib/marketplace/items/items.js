"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../../typography/headings");
var item_1 = require("./item");
var exchange_1 = require("../../icons/exchange");
var styles = {
    wrapper: {
        width: '1140px',
    },
    header: {
        borderBottom: 'solid 1px #475768',
        '& h1': {
            marginLeft: '20px',
        },
        '& svg': {
            marginLeft: '20px',
        },
        width: '100%',
        height: '120px'
    },
    body: {
        marginTop: '20px'
    },
    headerContent: {
        marginTop: '30px'
    },
    button: {
        color: '#93b0c1',
        borderColor: '#3b4a5a',
        '&:disabled': {
            color: '#48565f'
        }
    },
};
var getItems = function (items) {
    return items.map(function (item) {
        return (React.createElement(item_1.Item, { name: item.name, description: item.description, status: item.status, logoUrl: item.logoUrl }));
    });
};
exports.Items = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, category = _a.category, items = _a.items, backAction = _a.backAction;
    return (React.createElement(core_1.Grid, { container: true },
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Button, { variant: "outlined", className: classes.button, onClick: backAction }, "< Back")),
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'center', alignItems: 'center', className: classes.wrapper },
                React.createElement(core_1.Grid, { item: true, id: 'header', className: classes.header, xs: 12 },
                    React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'center', className: classes.headerContent },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(exchange_1.ExchangeIcon, null)),
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(headings_1.H1, null, category)))),
                React.createElement(core_1.Grid, { item: true, id: 'body', xs: 12, className: classes.body },
                    React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'space-between', alignItems: 'center' }, getItems(items)))))));
});
exports.default = exports.Items;
//# sourceMappingURL=items.js.map