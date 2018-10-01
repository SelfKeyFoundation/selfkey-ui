"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../typography/headings");
var unlock_1 = require("../icons/unlock");
var styles = {};
exports.UnlockBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement(core_1.Grid, { container: true },
        React.createElement(core_1.Grid, { item: true, id: 'header' },
            React.createElement(headings_1.H2, null,
                React.createElement(unlock_1.UnlockIcon, null),
                " Unlock This Marketplace: Crypto Exchanges")),
        React.createElement(core_1.Grid, { item: true, id: 'body' }, children)));
});
exports.default = exports.UnlockBox;
//# sourceMappingURL=unlock-box.js.map