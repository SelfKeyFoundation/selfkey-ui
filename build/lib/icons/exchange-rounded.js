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
exports.ExchangeRoundedIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white'
        }
    }
});
exports.ExchangeRoundedIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '34px', height: props.height || '34px' } }, props, { viewBox: props.viewBox || '0 0 34 34' }),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard-exchange-rounded", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "300.9-transactions-list-exchange-rounded", transform: "translate(-327.000000, -578.000000)" },
            React.createElement("g", { id: "Modal-exchange-rounded", transform: "translate(268.000000, 153.000000)" },
                React.createElement("g", { id: "Area-Body-exchange-rounded" },
                    React.createElement("g", { id: "Table", transform: "translate(30.000000, 207.000000)" },
                        React.createElement("g", { id: "Col-0", transform: "translate(30.000000, 71.000000)" },
                            React.createElement("g", { id: "icon-exchange-rounded", transform: "translate(0.000000, 148.000000)" },
                                React.createElement("rect", { id: "Rectangle", stroke: "#475768", fill: "#262F39", x: "0", y: "0", width: "32", height: "32", rx: "4" }),
                                React.createElement("path", { d: "M22.9047619,13 L26,16.0952381 L23.5948662,16.0952381 C23.3474705,20.0740329 20.0401786,23.2380952 16,23.2380952 C13.7790181,23.2380952 11.78311,22.2764138 10.389881,20.7529762 L10.389881,20.7529762 L11.3980657,19.7447919 C12.5327381,21.0078124 14.1715029,21.8095238 16,21.8095238 C19.2533481,21.8095238 21.922619,19.2872024 22.1662948,16.0952381 L22.1662948,16.0952381 L19.8095238,16.0952381 L22.9047619,13 Z M16,8 C18.2209824,8 20.21689,8.96168143 21.610119,10.485119 L21.610119,10.485119 L20.6019348,11.4933038 C19.4672619,10.2302829 17.8284971,9.42857143 16,9.42857143 C12.7466519,9.42857143 10.077381,11.9508929 9.83370524,15.1428571 L9.83370524,15.1428571 L12.1904762,15.1428571 L9.0952381,18.2380952 L6,15.1428571 L8.40513381,15.1428571 C8.65253,11.1640624 11.9598214,8 16,8 Z", id: "Combined-Shape-exchange-rounded", fill: "#93B0C1", fillRule: "nonzero" })))))))))); });
exports.default = exports.ExchangeRoundedIcon;
//# sourceMappingURL=exchange-rounded.js.map