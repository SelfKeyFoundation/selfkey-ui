"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var styles = {
    stakingBox: {
        padding: '90px 30px 40px 30px',
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#262f39',
        border: 'solid 1px #303c49',
        boxShadow: '0 0 16px 1px #15222e',
    },
};
exports.StakingBox = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement("div", { className: classes.stakingBox }, children));
});
exports.default = exports.StakingBox;
//# sourceMappingURL=staking-box.js.map