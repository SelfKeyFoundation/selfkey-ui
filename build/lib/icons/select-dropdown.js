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
exports.SelectDropdownIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        fill: '#93A4AF',
        marginTop: '8px',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white'
        }
    }
});
exports.SelectDropdownIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '18px', height: props.height || '10px' } }, props, { viewBox: props.viewBox || '0 0 18 10' }),
    React.createElement("g", { id: "select-dropdown-icon", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "Top-Header-Personal-dropdown-icon", transform: "translate(-1372.000000, -33.000000)" },
            React.createElement("g", { id: "Tosp-Header-dropdown-icon" },
                React.createElement("path", { d: "M1381.88592,33.3262947 C1381.44762,32.8911161 1380.59838,32.8911161 1380.15882,33.327009 L1372.32954,41.0937947 C1371.89016,41.5296876 1371.89016,42.237009 1372.32954,42.6730804 C1372.76892,43.1079018 1373.48081,43.1089733 1373.92037,42.6730804 L1380.99995,35.6496876 L1388.07954,42.6730804 C1388.51892,43.1089733 1389.23135,43.1079018 1389.67037,42.6730804 C1390.10975,42.2371876 1390.10975,41.5298661 1389.67037,41.0937947 C1389.67037,41.0937947 1381.95071,33.3902233 1381.88592,33.3262947 Z", id: "icon-dropdown", transform: "translate(1381.000000, 38.000000) scale(1, -1) translate(-1381.000000, -38.000000) " })))))); });
exports.default = exports.SelectDropdownIcon;
//# sourceMappingURL=select-dropdown.js.map