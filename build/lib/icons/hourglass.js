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
var styles = {};
exports.HourglassIcon = react_jss_1.default(styles)(function (props) {
    var width = props.width || '20px';
    var height = props.height || '26px';
    return (React.createElement(core_1.SvgIcon, __assign({}, props, { style: { width: width, height: height }, viewBox: "0 0 20 26" }),
        React.createElement("title", null, "icon-hourglass"),
        React.createElement("desc", null, "Created with Sketch."),
        React.createElement("defs", null),
        React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React.createElement("g", { id: "302-Dashboard-Full-State-Expanded", transform: "translate(-186.000000, -1871.000000)", fill: "#697C95", "fill-rule": "nonzero" },
                React.createElement("g", { id: "Transactions", transform: "translate(150.000000, 1616.000000)" },
                    React.createElement("g", { id: "Table", transform: "translate(29.000000, 105.000000)" },
                        React.createElement("g", { id: "Col0", transform: "translate(1.000000, 0.000000)" },
                            React.createElement("path", { d: "M24.28125,150 L7.21875,150 C6.54564453,150 6,150.545645 6,151.21875 L6,152.03125 C6,152.704355 6.54564453,153.25 7.21875,153.25 C7.21875,157.869316 9.80940625,161.767742 13.3552578,163 C9.80940625,164.232258 7.21875,168.130684 7.21875,172.75 C6.54564453,172.75 6,173.295645 6,173.96875 L6,174.78125 C6,175.454355 6.54564453,176 7.21875,176 L24.28125,176 C24.9543555,176 25.5,175.454355 25.5,174.78125 L25.5,173.96875 C25.5,173.295645 24.9543555,172.75 24.28125,172.75 C24.28125,168.130684 21.6905937,164.232258 18.1447422,163 C21.6905937,161.767742 24.28125,157.869316 24.28125,153.25 C24.9543555,153.25 25.5,152.704355 25.5,152.03125 L25.5,151.21875 C25.5,150.545645 24.9543555,150 24.28125,150 Z M20.4686953,169.5 L11.0314062,169.5 C11.8976836,167.12359 13.6769062,165.4375 15.75,165.4375 C17.8229414,165.4375 19.6023672,167.123234 20.4686953,169.5 Z M20.4696602,156.5 L11.0313047,156.5 C10.6712656,155.512203 10.46875,154.405172 10.46875,153.25 L21.03125,153.25 C21.03125,154.408066 20.8287852,155.514184 20.4696602,156.5 Z", id: "icon-hourglass" }))))))));
});
exports.default = exports.HourglassIcon;
//# sourceMappingURL=hourglass.js.map