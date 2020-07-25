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
exports.SentIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({});
exports.SentIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '26px', height: props.height || '26px' } }, props, { viewBox: props.viewBox || '0 0 26 26' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "302-Dashboard-Full-State-Expanded", transform: "translate(-183.000000, -1721.000000)", fill: "#1CBA7D", fillRule: "nonzero" },
            React.createElement("g", { id: "Transactions", transform: "translate(150.000000, 1616.000000)" },
                React.createElement("g", { id: "Table", transform: "translate(29.000000, 105.000000)" },
                    React.createElement("g", { id: "Col0", transform: "translate(1.000000, 0.000000)" },
                        React.createElement("g", { id: "icon-sent", transform: "translate(3.000000, 0.000000)" },
                            React.createElement("path", { d: "M25.7980284,0.108955359 C25.6375046,-0.0170252371 25.4180545,-0.0353127689 25.2372116,0.0622204915 L0.268670245,13.586847 C0.0878272622,13.6843804 -0.0178341427,13.8814795 0.0024853082,14.0867058 C0.0207728401,14.2919321 0.15894495,14.4666796 0.354011679,14.5296696 L7.45159628,16.846087 L6.76479858,23.8725534 C6.74244705,24.0960671 6.86639609,24.3073893 7.07162242,24.3947631 C7.13664466,24.4252424 7.20776287,24.4394662 7.27684874,24.4394662 C7.42111697,24.4394662 7.56335287,24.3785076 7.66291857,24.2647186 L12.1392932,19.2072074 L18.8792555,25.8516676 C18.9767889,25.9471692 19.1068333,26 19.2409415,26 C19.2876763,26 19.3344112,25.9918722 19.3811455,25.9796803 C19.5579249,25.9309136 19.6960972,25.7886777 19.7408002,25.6098665 L25.9829355,0.641325233 C26.0317022,0.442194354 25.960584,0.232903879 25.7980284,0.108955359 Z M8.4960158,16.7505859 L18.6455817,8.54355957 L11.7288406,18.1201167 L7.94332673,22.3932973 L8.4960158,16.7505859 Z", id: "Shape" }))))))))); });
exports.default = exports.SentIcon;
//# sourceMappingURL=sent.js.map