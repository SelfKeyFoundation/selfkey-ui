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
exports.MenuExportIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
});
exports.MenuExportIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '17px', height: props.height || '20px' } }, props, { viewBox: props.viewBox || "0 0 17 20" }),
    React.createElement("g", { id: "Main-Dashboard-export", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "300.3-Navigation-open-default-state-export", transform: "translate(-20.000000, -1266.000000)" },
            React.createElement("g", { id: "Menu-export" },
                React.createElement("g", { id: "Bottom-menu", transform: "translate(20.000000, 1211.000000)" },
                    React.createElement("path", { d: "M4.61189189,62.6027027 C4.97013065,62.6027027 5.26054054,62.8931126 5.26054054,63.2513514 C5.26054054,63.6095901 4.97013065,63.9 4.61189189,63.9 L2.0172973,63.9 L2.0172973,72.9810811 L15.4227027,72.9810811 L15.4227027,63.9 L12.3956757,63.9 C12.0374369,63.9 11.747027,63.6095901 11.747027,63.2513514 C11.747027,62.8931126 12.0374369,62.6027027 12.3956757,62.6027027 L16.0713514,62.6027027 C16.4295901,62.6027027 16.72,62.8931126 16.72,63.2513514 L16.72,73.6297297 C16.72,73.9879685 16.4295901,74.2783784 16.0713514,74.2783784 L1.36864865,74.2783784 C1.01040989,74.2783784 0.72,73.9879685 0.72,73.6297297 L0.72,63.2513514 C0.72,62.8931126 1.01040989,62.6027027 1.36864865,62.6027027 L4.61189189,62.6027027 Z M8.70702703,55.9 C8.88242763,55.9643153 9.0505631,56.0469336 9.20864865,56.1464865 L12.0194595,59.6059459 C12.1276068,59.7388466 12.1783651,59.9093498 12.1605126,60.0797603 C12.1426601,60.2501708 12.0576672,60.4064523 11.9243243,60.5140541 C11.7907163,60.6224437 11.6195206,60.6733139 11.4484034,60.6554723 C11.2772862,60.6376307 11.1202667,60.552539 11.0118919,60.4189189 L9.35135135,58.3778378 L9.35135135,68.6567568 C9.35147638,69.0083478 9.07146603,69.2960297 8.72,69.3054054 C8.36176124,69.3054054 8.07135135,69.0149955 8.07135135,68.6567568 L8.07135135,58.3735135 L6.41081081,60.4145946 C6.18512036,60.6928266 5.77661054,60.73542 5.4983785,60.5097296 C5.22014646,60.2840392 5.17755296,59.8755294 5.40324324,59.5972973 L8.27459459,56.072973 C8.36732426,56.0266013 8.4625202,55.9854296 8.55973844,55.9496356 L8.70702703,55.9 Z", id: "Dashboard-icon-menu-export" }))))))); });
exports.default = exports.MenuExportIcon;
//# sourceMappingURL=menu-export.js.map