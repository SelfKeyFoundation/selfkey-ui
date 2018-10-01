"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var animated_loading_1 = require("../icons/animated-loading");
var styles = {
    loading: {
        minHeight: '300px',
        textAlign: 'center',
        lineHeight: '300px',
        '& svg circle': {
            fill: '#1CA9BA',
        },
    },
};
exports.LWSLoading = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.loading },
        React.createElement(animated_loading_1.default, null)));
});
exports.default = exports.LWSLoading;
//# sourceMappingURL=lws-loading.js.map