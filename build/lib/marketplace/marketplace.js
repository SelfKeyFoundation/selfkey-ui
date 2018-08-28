"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../typography/headings");
var marketplace_item_1 = require("./marketplace-item");
var styles = {
    header: {
        borderBottom: 'solid 1px #475768',
        '& h1': {
            marginLeft: '50px'
        }
    }
};
var getItems = function (items) {
    return items.map(function (item) {
        return (React.createElement(marketplace_item_1.MarketplaceItem, { title: item.title, description: item.description, active: item.active, svgIcon: item.svgIcon, learnMoreAction: item.learnMoreAction }));
    });
};
exports.Marketplace = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, items = _a.items;
    return (React.createElement(core_1.Grid, { container: true, justify: 'center', alignItems: 'center' },
        React.createElement(core_1.Grid, { item: true, id: 'header', className: classes.header, xs: 12 },
            React.createElement(headings_1.H1, null, "SelfKey Marketplace")),
        React.createElement(core_1.Grid, { item: true, id: 'body', xs: 12 },
            React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'space-evenly', alignItems: 'center' }, getItems(items)))));
});
exports.default = exports.Marketplace;
//# sourceMappingURL=marketplace.js.map