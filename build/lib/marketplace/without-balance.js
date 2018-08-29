"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../typography/headings");
var paragraph_1 = require("../typography/paragraph");
var styles = {
    headerText: {
        color: 'red'
    }
};
var getExchanges = function (exchanges) {
    return exchanges.map(function (exchange) {
        return (React.createElement(core_1.Grid, { item: true },
            React.createElement("a", { href: exchange.url }, exchange.name)));
    });
};
exports.WithoutBalance = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, exchanges = _a.exchanges, closeAction = _a.closeAction;
    return (React.createElement(core_1.Grid, { container: true },
        React.createElement(core_1.Grid, { item: true, id: 'header' },
            React.createElement(headings_1.H3, { className: classes.headerText }, "You need at least 25 KEY tokens to unlock this listing.")),
        React.createElement(core_1.Grid, { item: true, id: 'body' },
            React.createElement(paragraph_1.P, null, "To access this marketplace, you will need a deposit of 25 KEY tokens. This deposit is reclaimable after 30 days. KEY tokens are listed on many exchanges worldwide:"),
            React.createElement(core_1.Grid, { container: true }, getExchanges(exchanges))),
        React.createElement(core_1.Grid, { item: true, id: 'footer' },
            React.createElement(core_1.Button, { onClick: closeAction }, "Close"))));
});
exports.default = exports.WithoutBalance;
//# sourceMappingURL=without-balance.js.map