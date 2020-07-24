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
exports.LedgerIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
exports.LedgerIcon = function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '25px', height: props.height || '25px' } }, props, { viewBox: props.viewBox || '0 0 25 25' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDEE0-Wallet-Setup", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "111---Import-Keystore-File-(UTC)", transform: "translate(-888.000000, -399.000000)", fill: "#23E6FE", fillRule: "nonzero" },
            React.createElement("g", { id: "Modal", transform: "translate(240.000000, 268.000000)" },
                React.createElement("g", { id: "Buttons", transform: "translate(40.000000, 106.000000)" },
                    React.createElement("g", { id: "button4", transform: "translate(540.000000, 0.000000)" },
                        React.createElement("path", { d: "M88.9210526,25 L77.4548872,25 L77.4548872,40.3884712 L92.843375,40.3884712 L92.8433584,29.0037594 C92.8496241,26.8421053 91.0827068,25 88.9210526,25 Z M73.933584,25 L72.0100251,25 C69.8483709,25 68,26.7606516 68,29.0100251 L68,30.933584 L73.933584,30.933584 L73.933584,25 Z M68,34.5363409 L73.933584,34.5363409 L73.933584,40.4699248 L68,40.4699248 L68,34.5363409 Z M86.9160401,49.924812 L88.839599,49.924812 C91.0012531,49.924812 92.8496241,48.1641604 92.8496241,45.914787 L92.8496241,43.9974937 L86.9160401,43.9974937 L86.9160401,49.924812 Z M77.4548872,43.9974937 L83.3884712,43.9974937 L83.3884712,49.9310777 L77.4548872,49.9310777 L77.4548872,43.9974937 Z M68,43.9974937 L68,45.9210526 C68,48.0827068 69.7606516,49.9310777 72.0100251,49.9310777 L73.933584,49.9310777 L73.933584,43.9974937 L68,43.9974937 Z", id: "icon-ledger" })))))))); };
exports.default = exports.LedgerIcon;
//# sourceMappingURL=ledger.js.map