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
exports.GreenTickIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({});
exports.GreenTickIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '16px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || '0 0 16 16' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "-ID-Dashboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "403---Identity-Summary", transform: "translate(-321.000000, -347.000000)" },
            React.createElement("g", { id: "Area-box-1", transform: "translate(150.000000, 264.000000)" },
                React.createElement("g", { id: "Content", transform: "translate(15.000000, 81.000000)" },
                    React.createElement("g", { id: "DL1" },
                        React.createElement("g", { id: "DD", transform: "translate(156.000000, 0.000000)" },
                            React.createElement("g", { id: "icon-attr-check", transform: "translate(0.000000, 2.000000)" },
                                React.createElement("rect", { id: "Base", stroke: "#22C73C", fill: "#1BB934", x: "0.5", y: "0.5", width: "15", height: "15", rx: "4" }),
                                React.createElement("path", { d: "M12.7232,4.70478222 C12.3756444,4.35722667 11.8129778,4.35722667 11.4663111,4.70478222 L6.69831111,9.47278222 L5.07253333,7.84789333 C4.72586667,7.50033778 4.1632,7.50033778 3.81564444,7.84789333 C3.46897778,8.19456 3.46897778,8.75722667 3.81564444,9.10478222 L6.06986667,11.3581156 C6.41653333,11.7056711 6.9792,11.7056711 7.32675556,11.3581156 L12.7232,5.96167111 C13.0707556,5.61500444 13.0707556,5.05233778 12.7232,4.70478222", id: "Tick", fill: "#FFFFFF" })))))))))); });
exports.default = exports.GreenTickIcon;
//# sourceMappingURL=green-tick.js.map