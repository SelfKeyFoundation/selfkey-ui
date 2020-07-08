"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearGradient = void 0;
var React = require("react");
exports.LinearGradient = (function (_a) {
    var color = _a.color;
    var color1, color2, id;
    switch (color) {
        case 'orange':
            color1 = '#B44000';
            color2 = '#DB7400';
            id = 'orange-linear-gradient';
            break;
        case 'grey':
            color1 = '#93B0C1';
            color2 = '#647A86';
            id = 'grey-linear-gradient';
            break;
        default:
            color1 = '#09A8BA';
            color2 = '#0ABBD0';
            id = 'default-linear-gradient';
    }
    return (React.createElement("defs", null,
        React.createElement("linearGradient", { x1: "11.0842631%", y1: "68.33943%", x2: "36.0705554%", y2: "0%", id: id },
            React.createElement("stop", { stopColor: color1, offset: "0%" }),
            React.createElement("stop", { stopColor: color2, offset: "100%" }))));
});
exports.default = exports.LinearGradient;
//# sourceMappingURL=_linearGradient.js.map