"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var copy_1 = require("./copy");
var core_1 = require("@material-ui/core");
var styles = {
    addressBox: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    publicKey: {
        outline: 'none',
        cursor: 'pointer',
        fontFamily: 'ProximaNovaRegular',
        fontSize: '12px',
        color: '#93b0c1'
    },
};
exports.CopyApiKey = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, publicKey = _a.publicKey;
    return (React.createElement(core_1.Grid, { container: true, className: classes.addressBox },
        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 10 },
            React.createElement("span", { className: classes.publicKey }, publicKey)),
        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 2 },
            React.createElement(copy_1.default, { text: publicKey }))));
});
exports.default = exports.CopyApiKey;
//# sourceMappingURL=copy-api-key.js.map