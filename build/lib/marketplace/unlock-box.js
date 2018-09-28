"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../typography/headings");
var close_button_1 = require("../icons/close-button");
var styles = {
    root: {
        boxSizing: 'border-box',
        minHeight: '423px',
        width: '781px',
        border: '1px solid #303C49',
        borderRadius: '4px',
        backgroundColor: '#262F39',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)'
    },
    header: {
        height: '65px',
        width: '780px',
        borderRadius: '4px 4px 0 0',
        backgroundColor: '#2A3540',
        boxShadow: 'inset 0 -1px 0 0 #374758, 1px 0 0 0 rgba(118,128,147,0.2), 0 4px 2px 0 rgba(76,76,76,0.2)',
        '& h2': {
            height: '22px',
            width: '346px',
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '22px',
            marginLeft: '30px',
            marginTop: '20px'
        },
        overflow: 'visible',
        position: 'relative'
    },
    body: {
        padding: '30px 42px'
    },
    closeButton: {
        position: 'absolute',
        top: '-18px',
        right: '-18px',
    },
};
exports.UnlockBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, closeAction = _a.closeAction;
    return (React.createElement(core_1.Grid, { container: true, className: classes.root, direction: 'column', justify: 'flex-start', alignItems: 'flex-start' },
        React.createElement(core_1.Grid, { item: true, id: 'header', className: classes.header },
            React.createElement(headings_1.H2, null, "Unlock This Marketplace: Crypto Exchanges"),
            React.createElement("a", { className: classes.closeButton, onClick: closeAction },
                React.createElement(close_button_1.CloseButtonIcon, null))),
        React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body }, children)));
});
exports.default = exports.UnlockBox;
//# sourceMappingURL=unlock-box.js.map