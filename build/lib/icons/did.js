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
var styles = {
    root: {
        width: '60px !important',
        height: '60px !important'
    }
};
exports.DIDIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 60 60' }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { x1: "50%", y1: "97.783801%", x2: "41.8489583%", y2: "-16.3970588%", id: "linearGradient-1" },
            React.createElement("stop", { stopColor: "#08BCCD", offset: "0%" }),
            React.createElement("stop", { stopColor: "#2DA1F8", offset: "100%" }))),
    React.createElement("g", { id: "\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80-ID-Dashboard-DID-icon", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "403.1---Identity-Summary---No-DID", transform: "translate(-242.000000, -548.000000)", fill: "url(#linearGradient-1)", fillRule: "nonzero" },
            React.createElement("g", { id: "Area-box-2", transform: "translate(149.000000, 462.000000)" },
                React.createElement("g", { id: "Explanatory", transform: "translate(24.000000, 86.000000)" },
                    React.createElement("path", { d: "M81,0 C74.384428,0 69,5.384428 69,12 C69,18.615572 74.384428,24 81,24 C87.615572,24 93,18.615572 93,12 C93,5.384428 87.615572,0 81,0 Z M81,2 C86.534692,2 91,6.465308 91,12 C91,17.534692 86.534692,22 81,22 C75.465308,22 71,17.534692 71,12 C71,6.465308 75.465308,2 81,2 Z M107,2 L107,3 L107,22 L127,22 L127,2 L107,2 Z M109,4 L125,4 L125,20 L109,20 L109,4 Z M81,5 C80.4477153,5 80,5.44771525 80,6 C80,6.55228475 80.4477153,7 81,7 C81.5522847,7 82,6.55228475 82,6 C82,5.44771525 81.5522847,5 81,5 Z M76.771484,6.757812 C76.5015533,6.75418643 76.2416233,6.85984913 76.050781,7.050781 C75.6603571,7.44128806 75.6603571,8.07433694 76.050781,8.464844 C76.4412881,8.85526793 77.0743369,8.85526793 77.464844,8.464844 C77.8552679,8.07433694 77.8552679,7.44128806 77.464844,7.050781 C77.2807013,6.86654832 77.0319395,6.76143774 76.771484,6.757812 Z M85.255859,6.757812 C84.9859283,6.75418643 84.7259983,6.85984913 84.535156,7.050781 C84.1447321,7.44128806 84.1447321,8.07433694 84.535156,8.464844 C84.9256631,8.85526793 85.5587119,8.85526793 85.949219,8.464844 C86.3396429,8.07433694 86.3396429,7.44128806 85.949219,7.050781 C85.7650763,6.86654832 85.5163145,6.76143774 85.255859,6.757812 Z M113,7 C112.447715,7 112,7.44771525 112,8 C112,8.55228475 112.447715,9 113,9 C113.552285,9 114,8.55228475 114,8 C114,7.44771525 113.552285,7 113,7 Z M117,7 C116.447715,7 116,7.44771525 116,8 C116,8.55228475 116.447715,9 117,9 C117.552285,9 118,8.55228475 118,8 C118,7.44771525 117.552285,7 117,7 Z M121,7 C120.447715,7 120,7.44771525 120,8 C120,8.55228475 120.447715,9 121,9 C121.552285,9 122,8.55228475 122,8 C122,7.44771525 121.552285,7 121,7 Z M75,11 C74.4477153,11 74,11.4477153 74,12 C74,12.5522847 74.4477153,13 75,13 C75.5522847,13 76,12.5522847 76,12 C76,11.4477153 75.5522847,11 75,11 Z M87,11 C86.4477153,11 86,11.4477153 86,12 C86,12.5522847 86.4477153,13 87,13 C87.5522847,13 88,12.5522847 88,12 C88,11.4477153 87.5522847,11 87,11 Z M113,11 C112.447715,11 112,11.4477153 112,12 C112,12.5522847 112.447715,13 113,13 C113.552285,13 114,12.5522847 114,12 C114,11.4477153 113.552285,11 113,11 Z M121,11 C120.447715,11 120,11.4477153 120,12 C120,12.5522847 120.447715,13 121,13 C121.552285,13 122,12.5522847 122,12 C122,11.4477153 121.552285,11 121,11 Z M113,15 C112.447715,15 112,15.4477153 112,16 C112,16.5522847 112.447715,17 113,17 C113.552285,17 114,16.5522847 114,16 C114,15.4477153 113.552285,15 113,15 Z M117,15 C116.447715,15 116,15.4477153 116,16 C116,16.5522847 116.447715,17 117,17 C117.552285,17 118,16.5522847 118,16 C118,15.4477153 117.552285,15 117,15 Z M121,15 C120.447715,15 120,15.4477153 120,16 C120,16.5522847 120.447715,17 121,17 C121.552285,17 122,16.5522847 122,16 C122,15.4477153 121.552285,15 121,15 Z M76.771484,15.242188 C76.5015534,15.2385622 76.2416234,15.3442245 76.050781,15.535156 C75.6603571,15.9256631 75.6603571,16.5587119 76.050781,16.949219 C76.4412881,17.3396429 77.0743369,17.3396429 77.464844,16.949219 C77.8552679,16.5587119 77.8552679,15.9256631 77.464844,15.535156 C77.2807011,15.3509237 77.0319394,15.2458135 76.771484,15.242188 Z M85.255859,15.242188 C84.9859284,15.2385622 84.7259984,15.3442245 84.535156,15.535156 C84.1447321,15.9256631 84.1447321,16.5587119 84.535156,16.949219 C84.9256631,17.3396429 85.5587119,17.3396429 85.949219,16.949219 C86.3396429,16.5587119 86.3396429,15.9256631 85.949219,15.535156 C85.7650761,15.3509237 85.5163144,15.2458135 85.255859,15.242188 Z M81,17 C80.4477153,17 80,17.4477153 80,18 C80,18.5522847 80.4477153,19 81,19 C81.5522847,19 82,18.5522847 82,18 C82,17.4477153 81.5522847,17 81,17 Z M81,36 C74.384428,36 69,41.384428 69,48 C69,54.615572 74.384428,60 81,60 C87.615572,60 93,54.615572 93,48 C93,41.384428 87.615572,36 81,36 Z M117,36 C110.384428,36 105,41.384428 105,48 C105,54.615572 110.384428,60 117,60 C123.615572,60 129,54.615572 129,48 C129,41.384428 123.615572,36 117,36 Z M81,38 C86.534692,38 91,42.465308 91,48 C91,53.534692 86.534692,58 81,58 C75.465308,58 71,53.534692 71,48 C71,42.465308 75.465308,38 81,38 Z M117,38 C122.534692,38 127,42.465308 127,48 C127,53.534692 122.534692,58 117,58 C111.465308,58 107,53.534692 107,48 C107,42.465308 111.465308,38 117,38 Z M81,41 C80.4477153,41 80,41.4477153 80,42 C80,42.5522847 80.4477153,43 81,43 C81.5522847,43 82,42.5522847 82,42 C82,41.4477153 81.5522847,41 81,41 Z M117,41 C116.447715,41 116,41.4477153 116,42 C116,42.5522847 116.447715,43 117,43 C117.552285,43 118,42.5522847 118,42 C118,41.4477153 117.552285,41 117,41 Z M76.771484,42.757812 C76.5015533,42.7541864 76.2416233,42.8598491 76.050781,43.050781 C75.6603571,43.4412881 75.6603571,44.0743369 76.050781,44.464844 C76.4412881,44.8552679 77.0743369,44.8552679 77.464844,44.464844 C77.8552679,44.0743369 77.8552679,43.4412881 77.464844,43.050781 C77.2807013,42.8665483 77.0319395,42.7614377 76.771484,42.757812 Z M85.255859,42.757812 C84.9859283,42.7541864 84.7259983,42.8598491 84.535156,43.050781 C84.1447321,43.4412881 84.1447321,44.0743369 84.535156,44.464844 C84.9256631,44.8552679 85.5587119,44.8552679 85.949219,44.464844 C86.3396429,44.0743369 86.3396429,43.4412881 85.949219,43.050781 C85.7650763,42.8665483 85.5163145,42.7614377 85.255859,42.757812 Z M112.771484,42.757812 C112.500879,42.7536562 112.240145,42.8593594 112.048828,43.050781 C111.658404,43.4412881 111.658404,44.0743369 112.048828,44.464844 C112.439335,44.8552679 113.072384,44.8552679 113.462891,44.464844 C113.853315,44.0743369 113.853315,43.4412881 113.462891,43.050781 C113.279231,42.8670157 113.03126,42.7619435 112.771484,42.757812 Z M121.255859,42.757812 C120.985254,42.7536562 120.72452,42.8593594 120.533203,43.050781 C120.143318,43.4418271 120.144192,44.0748764 120.535156,44.464844 C120.925663,44.8552679 121.558712,44.8552679 121.949219,44.464844 C122.339643,44.0743369 122.339643,43.4412881 121.949219,43.050781 C121.765076,42.8665483 121.516315,42.7614377 121.255859,42.757812 Z M75,47 C74.4477153,47 74,47.4477153 74,48 C74,48.5522847 74.4477153,49 75,49 C75.5522847,49 76,48.5522847 76,48 C76,47.4477153 75.5522847,47 75,47 Z M87,47 C86.4477153,47 86,47.4477153 86,48 C86,48.5522847 86.4477153,49 87,49 C87.5522847,49 88,48.5522847 88,48 C88,47.4477153 87.5522847,47 87,47 Z M111,47 C110.447715,47 110,47.4477153 110,48 C110,48.5522847 110.447715,49 111,49 C111.552285,49 112,48.5522847 112,48 C112,47.4477153 111.552285,47 111,47 Z M123,47 C122.447715,47 122,47.4477153 122,48 C122,48.5522847 122.447715,49 123,49 C123.552285,49 124,48.5522847 124,48 C124,47.4477153 123.552285,47 123,47 Z M76.771484,51.242188 C76.5008792,51.2380319 76.2401449,51.3437348 76.048828,51.535156 C75.6584041,51.9256631 75.6584041,52.5587119 76.048828,52.949219 C76.4393351,53.3396429 77.0723839,53.3396429 77.462891,52.949219 C77.8533149,52.5587119 77.8533149,51.9256631 77.462891,51.535156 C77.2792306,51.351391 77.0312601,51.2463192 76.771484,51.242188 Z M85.255859,51.244141 C84.9852542,51.2399849 84.7245199,51.3456878 84.533203,51.537109 C84.1433179,51.9281551 84.1441922,52.5612044 84.535156,52.951172 C84.9256631,53.3415959 85.5587119,53.3415959 85.949219,52.951172 C86.3396429,52.5606649 86.3396429,51.9276161 85.949219,51.537109 C85.7650761,51.3528767 85.5163144,51.2477665 85.255859,51.244141 Z M112.771484,51.244141 C112.500879,51.2399849 112.240145,51.3456878 112.048828,51.537109 C111.658404,51.9276161 111.658404,52.5606649 112.048828,52.951172 C112.439335,53.3415959 113.072384,53.3415959 113.462891,52.951172 C113.853315,52.5606649 113.853315,51.9276161 113.462891,51.537109 C113.279231,51.353344 113.03126,51.2482722 112.771484,51.244141 Z M121.255859,51.244141 C120.985254,51.2399849 120.72452,51.3456878 120.533203,51.537109 C120.143318,51.9281551 120.144192,52.5612044 120.535156,52.951172 C120.925663,53.3415959 121.558712,53.3415959 121.949219,52.951172 C122.339643,52.5606649 122.339643,51.9276161 121.949219,51.537109 C121.765076,51.3528767 121.516314,51.2477665 121.255859,51.244141 Z M81,53 C80.4477153,53 80,53.4477153 80,54 C80,54.5522847 80.4477153,55 81,55 C81.5522847,55 82,54.5522847 82,54 C82,53.4477153 81.5522847,53 81,53 Z M117,53 C116.447715,53 116,53.4477153 116,54 C116,54.5522847 116.447715,55 117,55 C117.552285,55 118,54.5522847 118,54 C118,53.4477153 117.552285,53 117,53 Z", id: "icon-did" }))))))); });
exports.default = exports.DIDIcon;
//# sourceMappingURL=did.js.map