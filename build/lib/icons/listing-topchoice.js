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
exports.ListingTopChoiceIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({});
exports.ListingTopChoiceIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '21px', height: props.height || '21px' } }, props, { viewBox: props.viewBox || "0 0 21 21" }),
    React.createElement("defs", null,
        React.createElement("path", { d: "M1.73940887,0.564032323 C1.73940887,0.564032323 15.0628586,0.533425722 15.0628586,0.564032323 L15.0628586,8.6727175 C15.0628586,12.3548866 12.0816006,15.3398745 8.39934967,15.3398745 L8.51545984,15.3398745 C4.83530549,15.3398745 1.83647955,12.3568269 1.81741977,8.6818991 L1.73940887,0.564032323 Z", id: "path-1" }),
        React.createElement("filter", { x: "-75.1%", y: "-67.6%", width: "250.1%", height: "235.2%", filterUnits: "objectBoundingBox", id: "filter-2" },
            React.createElement("feGaussianBlur", { stdDeviation: "10", in: "SourceAlpha", result: "shadowBlurInner1" }),
            React.createElement("feOffset", { dx: "0", dy: "0", in: "shadowBlurInner1", result: "shadowOffsetInner1" }),
            React.createElement("feComposite", { in: "shadowOffsetInner1", in2: "SourceAlpha", operator: "arithmetic", k2: "-1", k3: "1", result: "shadowInnerInner1" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.200393357 0", type: "matrix", in: "shadowInnerInner1" })),
        React.createElement("linearGradient", { x1: "0%", y1: "49.3079585%", x2: "100%", y2: "50%", id: "linearGradient-3" },
            React.createElement("stop", { stopColor: "#CCCCCC", stopOpacity: "0.5", offset: "0%" }),
            React.createElement("stop", { stopColor: "#FFFFFF", stopOpacity: "0.5", offset: "61.0565065%" }),
            React.createElement("stop", { stopColor: "#000000", stopOpacity: "0.5", offset: "100%" })),
        React.createElement("path", { d: "M0.839408866,1.1 C0.839408866,0.602943725 1.24864691,0.2 1.73937305,0.2 L15.2394447,0.2 C15.7364812,0.2 16.1394089,0.59947834 16.1394089,1.1 L16.1394089,1.1 C16.1394089,1.59705627 15.7301708,2 15.2394447,2 L1.73937305,2 C1.24233655,2 0.839408866,1.60052166 0.839408866,1.1 L0.839408866,1.1 Z", id: "path-4" }),
        React.createElement("filter", { x: "-19.6%", y: "-166.7%", width: "139.2%", height: "433.3%", filterUnits: "objectBoundingBox", id: "filter-5" },
            React.createElement("feGaussianBlur", { stdDeviation: "2", in: "SourceAlpha", result: "shadowBlurInner1" }),
            React.createElement("feOffset", { dx: "0", dy: "2", in: "shadowBlurInner1", result: "shadowOffsetInner1" }),
            React.createElement("feComposite", { in: "shadowOffsetInner1", in2: "SourceAlpha", operator: "arithmetic", k2: "-1", k3: "1", result: "shadowInnerInner1" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.366340691 0", type: "matrix", in: "shadowInnerInner1" }))),
    React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "Group", transform: "translate(1.710591, -0.200000)" },
            React.createElement("path", { d: "M0,4.28177417 C4.7930785,4.28177417 4.7930785,4.28177417 7.79959275,4.28177417 C11.1657625,4.28177417 11.1657625,4.28177417 17.0394089,4.28177417 L17.8055443,4.28177417 L17.789239,5.0477361 C17.695221,9.46434188 13.244247,13.0474186 8.40113372,13.0474186 C3.54723645,13.0474186 -0.75,9.49828297 -0.75,5.03177417 L-0.75,4.28177417 L0,4.28177417 Z", id: "Path", stroke: "#D7A156", strokeWidth: "1.5" }),
            React.createElement("rect", { id: "Mask", fill: "#FF8E16", x: "7.43940887", y: "14.3", width: "2.1", height: "5.1" }),
            React.createElement("g", { id: "Rectangle-38" },
                React.createElement("use", { fill: "#ECA714", fillRule: "evenodd", xlinkHref: "#path-1" }),
                React.createElement("use", { fill: "black", fillOpacity: "1", filter: "url(#filter-2)", xlinkHref: "#path-1" })),
            React.createElement("g", { id: "Rectangle-43" },
                React.createElement("use", { fill: "#FFC155", fillRule: "evenodd", xlinkHref: "#path-4" }),
                React.createElement("use", { fillOpacity: "0.6", fill: "url(#linearGradient-3)", fillRule: "evenodd", style: { mixBlendMode: 'overlay' }, xlinkHref: "#path-4" }),
                React.createElement("use", { fill: "black", fillOpacity: "1", filter: "url(#filter-5)", xlinkHref: "#path-4" })),
            React.createElement("rect", { id: "Rectangle-41", fill: "#FFA62F", x: "5.93940887", y: "17.357699", width: "5.12004831", height: "1.48076374", rx: "0.740381869" }),
            React.createElement("rect", { id: "Rectangle-41", fill: "#AF3700", x: "3.83940887", y: "18.2", width: "9.3", height: "3", rx: "1.5" }),
            React.createElement("path", { d: "M10.2384089,11.13596 L10.2384089,10.10108 L9.12960887,10.10108 L9.12960887,4.4 L7.94688887,4.4 L5.84940887,6.16022 L6.30216887,6.76082 C6.33296887,6.80086 6.37993887,6.83859 6.44307887,6.87401 C6.50621887,6.90943 6.57782887,6.92714 6.65790887,6.92714 C6.70410887,6.92714 6.75184887,6.91867 6.80112887,6.90173 C6.85040887,6.88479 6.89968887,6.8563 6.94896887,6.81626 L6.94896887,6.81626 L7.71126887,6.18332 C7.70202887,6.36504 7.69740887,6.53906 7.69740887,6.70538 L7.69740887,6.70538 L7.69740887,10.10108 L6.40380887,10.10108 L6.40380887,11.13596 L10.2384089,11.13596 Z", id: "1", fill: "#FFEEB4", fillRule: "nonzero" }))))); });
exports.default = exports.ListingTopChoiceIcon;
//# sourceMappingURL=listing-topchoice.js.map