"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    root: {
        width: '20px !important',
        height: '20px !important'
    }
};
exports.EditIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 20 20' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "Modal---Dark", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "1.3.-Required-Information---missing-info", transform: "translate(-930.000000, -501.000000)", fill: "#93B0C1" },
            React.createElement("g", { id: "Modal-content", transform: "translate(420.000000, 100.000000)" },
                React.createElement("g", { id: "Form", transform: "translate(70.000000, 177.000000)" },
                    React.createElement("g", { id: "line-4", transform: "translate(0.000000, 224.000000)" },
                        React.createElement("path", { d: "M440,15.8333333 L452.291667,3.54166667 L456.458333,7.70833333 L444.166667,20 L440,20 L440,15.8333333 Z M459.6875,4.47916667 L457.65625,6.51041667 L453.489583,2.34375 L455.520833,0.3125 C455.729168,0.104165625 455.989582,0 456.302083,0 C456.614585,0 456.874999,0.104165625 457.083333,0.3125 L459.6875,2.91666667 C459.895834,3.12500104 460,3.3854151 460,3.69791667 C460,4.01041823 459.895834,4.27083229 459.6875,4.47916667 Z", id: "icon-edit" })))))))); });
exports.default = exports.EditIcon;
//# sourceMappingURL=edit.js.map