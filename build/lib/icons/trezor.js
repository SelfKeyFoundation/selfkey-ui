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
exports.TrezorIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var TrezorIcon = function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '18px', height: props.height || '25px' } }, props, { viewBox: "0 0 18 25" }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDEE0-Wallet-Setup", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "111---Import-Keystore-File-(UTC)", transform: "translate(-1071.000000, -399.000000)", fill: "#23E6FE", fillRule: "nonzero" },
            React.createElement("g", { id: "Modal", transform: "translate(240.000000, 268.000000)" },
                React.createElement("g", { id: "Buttons", transform: "translate(40.000000, 106.000000)" },
                    React.createElement("g", { id: "button5", transform: "translate(720.000000, 0.000000)" },
                        React.createElement("path", { d: "M79.6099585,25 C76.1832642,25 73.4100968,27.7731674 73.4100968,31.1998617 L73.4100968,33.5235131 C72.2067773,33.7413555 71,34.0318119 71,34.4087137 L71,46.5352697 C71,46.5352697 71,46.8706777 71.3769018,47.0297372 C72.7427386,47.5829876 78.1161826,49.4847856 79.3506224,49.9204703 C79.5096819,49.9792531 79.5546335,49.9792531 79.5961272,49.9792531 C79.6549101,49.9792531 79.6825726,49.9792531 79.8416321,49.9204703 C81.0760719,49.4847856 86.4633472,47.5829876 87.829184,47.0297372 C88.1784232,46.884509 88.1922545,46.549101 88.1922545,46.549101 L88.1922545,34.4087137 C88.1922545,34.0318119 87.0027663,33.7275242 85.7959889,33.5235131 L85.7959889,31.1998617 C85.813278,27.7731674 83.0228216,25 79.6099585,25 Z M79.6099585,27.9633472 C81.6293223,27.9633472 82.8499308,29.1839557 82.8499308,31.2033195 L82.8499308,33.2226833 C80.5850622,33.0636238 78.6521438,33.0636238 76.373444,33.2226833 L76.373444,31.2033195 C76.373444,29.1804979 77.5940526,27.9633472 79.6099585,27.9633472 Z M79.5961272,36.1964039 C82.4142462,36.1964039 84.7793914,36.4142462 84.7793914,36.8049793 L84.7793914,44.3706777 C84.7793914,44.4882434 84.7655602,44.5020747 84.6618257,44.5435685 C84.5615491,44.5885201 79.8554633,46.2863071 79.8554633,46.2863071 C79.8554633,46.2863071 79.6652835,46.3450899 79.6099585,46.3450899 C79.5511757,46.3450899 79.3644537,46.2724758 79.3644537,46.2724758 C79.3644537,46.2724758 74.6583679,44.5746888 74.5580913,44.5297372 C74.4578147,44.4847856 74.4405256,44.4709544 74.4405256,44.3568465 L74.4405256,36.791148 C74.4128631,36.4004149 76.7780083,36.1964039 79.5961272,36.1964039 Z", id: "icon-trezor" })))))))); };
exports.TrezorIcon = TrezorIcon;
exports.default = exports.TrezorIcon;
//# sourceMappingURL=trezor.js.map