"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSLoading = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var animated_loading_1 = require("../icons/animated-loading");
var styles = core_1.createStyles({
    loading: {
        minHeight: '300px',
        textAlign: 'center',
        lineHeight: '300px',
        '& svg circle': {
            fill: '#1CA9BA',
        },
    }
});
exports.LWSLoading = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.loading },
        React.createElement(animated_loading_1.default, null)));
});
exports.default = exports.LWSLoading;
//# sourceMappingURL=lws-loading.js.map