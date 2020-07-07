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
exports.Erc20Icon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        },
    }
});
exports.Erc20Icon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '44px', height: props.height || '44px' } }, props, { viewBox: props.viewBox || "0 0 44 44" }),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "307-Send-ERC20-Tokens", transform: "translate(-371.000000, -149.000000)" },
            React.createElement("g", { id: "Modal", transform: "translate(341.000000, 122.000000)" },
                React.createElement("g", { id: "Title" },
                    React.createElement("g", { id: "icon-dashboard-tokens", transform: "translate(30.000000, 27.000000)" },
                        React.createElement("rect", { id: "Path", fill: "#00C0D9", x: "0", y: "0", width: "44", height: "44", rx: "8" }),
                        React.createElement("path", { d: "M27,10 C25.208036,10 23.580266,10.3348668 22.3125,10.96875 C21.044734,11.6026332 20,12.6311327 20,14 L20,18 C20,18.128986 20.044634,18.252102 20.0625,18.375 C19.131532,18.130927 18.100002,18 17,18 C15.2080357,18 13.5802664,18.334867 12.3125,18.96875 C11.0447336,19.602633 10,20.631133 10,22 L10,26 L10,30 C10,31.368834 11.0447479,32.397374 12.3125,33.03125 C13.5802521,33.665126 15.2079165,34 17,34 C18.792083,34 20.419748,33.665126 21.6875,33.03125 C22.955252,32.397374 24,31.368834 24,30 L24,29.59375 C24.917641,29.835585 25.920054,30 27,30 C28.792083,30 30.419748,29.665126 31.6875,29.03125 C32.955252,28.397374 34,27.368834 34,26 L34,22 L34,18 L34,14 C34,12.6311327 32.955266,11.6026332 31.6875,10.96875 C30.419734,10.3348668 28.791964,10 27,10 Z M27,12 C28.521744,12 29.877443,12.3293467 30.78125,12.78125 C31.685057,13.2331533 32,13.7120131 32,14 C32,14.2879869 31.685057,14.7668467 30.78125,15.21875 C29.877443,15.6706533 28.521744,16 27,16 C25.478256,16 24.122557,15.6706533 23.21875,15.21875 C22.314943,14.7668467 22,14.2879869 22,14 C22,13.7120131 22.314943,13.2331533 23.21875,12.78125 C24.122557,12.3293467 25.478256,12 27,12 Z M22,16.84375 C22.104511,16.903612 22.204223,16.977111 22.3125,17.03125 C23.580266,17.665133 25.208036,18 27,18 C28.791964,18 30.419734,17.665133 31.6875,17.03125 C31.795777,16.977111 31.895489,16.903612 32,16.84375 L32,18 C32,18.288166 31.684998,18.766876 30.78125,19.21875 C29.877502,19.670624 28.521917,20 27,20 C25.478083,20 24.122498,19.670624 23.21875,19.21875 C22.315002,18.766876 22,18.288166 22,18 L22,16.84375 Z M17,20 C18.521744,20 19.877443,20.329347 20.78125,20.78125 C21.685057,21.233153 22,21.712013 22,22 C22,22.287987 21.685057,22.766847 20.78125,23.21875 C19.877443,23.670653 18.521744,24 17,24 C15.4782558,24 14.1225565,23.670653 13.21875,23.21875 C12.3149435,22.766847 12,22.287987 12,22 C12,21.712013 12.3149435,21.233153 13.21875,20.78125 C14.1225565,20.329347 15.4782558,20 17,20 Z M32,20.84375 L32,22 C32,22.288166 31.684998,22.766876 30.78125,23.21875 C29.877502,23.670624 28.521917,24 27,24 C25.863017,24 24.837159,23.812747 24,23.53125 L24,22 C24,21.871011 23.955366,21.747899 23.9375,21.625 C24.868445,21.869074 25.899925,22 27,22 C28.792083,22 30.419748,21.665126 31.6875,21.03125 C31.795776,20.977112 31.89549,20.903612 32,20.84375 Z M12,24.84375 C12.1045113,24.903612 12.204223,24.977111 12.3125,25.03125 C13.5802664,25.665133 15.2080357,26 17,26 C18.791964,26 20.419734,25.665133 21.6875,25.03125 C21.795777,24.977111 21.895489,24.903612 22,24.84375 L22,26 C22,26.288166 21.684998,26.766876 20.78125,27.21875 C19.877502,27.670624 18.521917,28 17,28 C15.4780835,28 14.1224979,27.670624 13.21875,27.21875 C12.3150021,26.766876 12,26.288166 12,26 L12,24.84375 Z M32,24.84375 L32,26 C32,26.288166 31.684998,26.766876 30.78125,27.21875 C29.877502,27.670624 28.521917,28 27,28 C25.863889,28 24.834348,27.839185 24,27.5625 L24,26 L24,25.625 C24.916158,25.865337 25.917937,26 27,26 C28.792083,26 30.419748,25.665126 31.6875,25.03125 C31.795776,24.977112 31.89549,24.903612 32,24.84375 Z M12,28.84375 C12.1045105,28.903612 12.2042242,28.977112 12.3125,29.03125 C13.5802521,29.665126 15.2079165,30 17,30 C18.792083,30 20.419748,29.665126 21.6875,29.03125 C21.795776,28.977112 21.89549,28.903612 22,28.84375 L22,30 C22,30.288166 21.684998,30.766876 20.78125,31.21875 C19.877502,31.670624 18.521917,32 17,32 C15.4780835,32 14.1224979,31.670624 13.21875,31.21875 C12.3150021,30.766876 12,30.288166 12,30 L12,28.84375 Z", id: "Shape", fill: "#FFFFFF", fillRule: "nonzero" })))))))); });
exports.default = exports.Erc20Icon;
//# sourceMappingURL=erc20.js.map