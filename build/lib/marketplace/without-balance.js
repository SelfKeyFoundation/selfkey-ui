"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../typography/headings");
var paragraph_1 = require("../typography/paragraph");
var shield_1 = require("../icons/shield");
var styles = {
    headerText: {
        color: '#E98548',
        fontFamily: 'Proxima Nova',
        fontSize: '16px',
        lineHeight: '24px'
    },
    exchangeItem: {
        columnBreakInside: 'avoid',
        color: '#FFFFFF',
        fontFamily: 'Proxima Nova',
        fontSize: '18px',
        lineHeight: '3px',
        '& a': {
            textDecoration: 'none',
            color: '#FFFFFF'
        },
    },
    body: {
        color: '#FFFFFF',
        fontFamily: 'Proxima Nova',
        fontSize: '18px',
        lineHeight: '30px'
    },
    exchanges: {
        columnCount: 2,
        marginLeft: '-15px'
    },
    circle: {
        fontSize: '16px',
        paddingRight: '10px'
    }
};
var getExchanges = function (exchanges, classes) {
    return exchanges.map(function (exchange) {
        return (React.createElement(core_1.ListItem, { className: classes.exchangeItem },
            React.createElement("a", { href: exchange.url, target: '_blank' },
                React.createElement("span", { className: classes.circle }, "\u25CB"),
                " ",
                exchange.name)));
    });
};
exports.WithoutBalance = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, exchanges = _a.exchanges;
    return (React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'flex-start' },
        React.createElement(core_1.Grid, { item: true, xs: 2 },
            React.createElement(shield_1.ShieldIcon, null)),
        React.createElement(core_1.Grid, { item: true, xs: 10 },
            React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start' },
                React.createElement(core_1.Grid, { item: true, id: 'header' },
                    React.createElement(headings_1.H3, { className: classes.headerText }, "You need at least 25 KEY tokens to unlock this listing.")),
                React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                    React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start', spacing: 16 },
                        React.createElement(core_1.Grid, { item: true },
                            React.createElement(paragraph_1.P, null, "To access this marketplace, you will need a deposit of 25 KEY tokens. This deposit is reclaimable after 30 days. KEY tokens are listed on many exchanges worldwide:")),
                        React.createElement(core_1.List, { className: classes.exchanges }, getExchanges(exchanges, classes))))))));
});
exports.default = exports.WithoutBalance;
//# sourceMappingURL=without-balance.js.map