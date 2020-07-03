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
exports.ExchangesSmallIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        cursor: 'pointer',
        fill: '#C5DCE9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#00C0D9',
        }
    }
});
exports.ExchangesSmallIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '20px', height: props.height || '22px' } }, props, { viewBox: props.viewBox || "0 0 20 22" }),
    React.createElement("g", { id: "\uD83C\uDF10-Web-Marketplace", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "6000.1---Mobile-Web-Marketplace---Menu-open", transform: "translate(-64.000000, -126.000000)", fill: "inherit" },
            React.createElement("g", { id: "menu-items", transform: "translate(40.000000, 66.000000)" },
                React.createElement("g", { id: "submenu", transform: "translate(24.000000, 56.000000)" },
                    React.createElement("g", { id: "exchanges" },
                        React.createElement("path", { d: "M19.4991056,11.6653844 C20.8705579,15.8360708 19.3597228,20.4134272 15.7750041,22.9482443 C12.1902854,25.4830615 7.37109926,25.3817734 3.89605103,22.6985764 L3.89605103,22.6985764 L4.17923814,24.6975442 C4.21097403,24.9162463 4.15449354,25.1385954 4.02223142,25.3156392 C3.88996931,25.492683 3.69276919,25.6099063 3.47404671,25.6415013 L3.47404671,25.6415013 L3.35744025,25.6415013 C2.94359453,25.6400587 2.5935786,25.3349772 2.53564236,24.9252044 L2.53564236,24.9252044 L1.98037351,21.0383225 C1.94863762,20.8196204 2.00511812,20.5972713 2.13738023,20.4202275 C2.26964235,20.2431837 2.46684246,20.1259604 2.68556495,20.0943655 L2.68556495,20.0943655 L6.57244687,19.5390966 C7.03244664,19.4746967 7.45755663,19.7953937 7.5219566,20.2553934 C7.58635657,20.7153932 7.26565956,21.1405032 6.80565979,21.2049032 L6.80565979,21.2049032 L5.00103604,21.4603268 C7.78475733,23.5547695 11.5778795,23.6955255 14.5091732,21.8131569 C17.4404669,19.9307883 18.8906236,16.4229922 18.1442496,13.0202404 L18.1442496,13.0202404 L19.4935529,11.6709371 Z M15.9953592,4.008227 C16.455359,3.94382703 16.880469,4.26452404 16.9448689,4.72452381 L16.9448689,4.72452381 L17.5001378,8.61140574 C17.5318737,8.83010781 17.4753932,9.05245696 17.343131,9.22950074 C17.2108689,9.40654452 17.0136688,9.52376783 16.7949463,9.55536277 L16.7949463,9.55536277 L12.9080644,10.1106316 L12.7914579,10.1106316 C12.3314582,10.1428316 11.9324514,9.79603135 11.9002515,9.33603158 C11.8680515,8.87603181 12.2148517,8.47702507 12.6748515,8.44482508 L12.6748515,8.44482508 L14.9459011,8.12276915 C13.5192841,7.06575734 11.7906446,6.49538418 10.0151137,6.49583143 C7.4822138,6.48725538 5.08304517,7.63172787 3.4958757,9.60569561 C1.90870624,11.5796633 1.3060245,14.1686018 1.85821437,16.6405933 L1.85821437,16.6405933 L0.508911069,17.9898965 C-0.831915455,13.9477877 0.535790448,9.50002239 3.91612017,6.90968825 C7.2964499,4.3193541 11.9468662,4.15545457 15.5011699,6.50138412 L15.5011699,6.50138412 L15.2790624,4.95773673 C15.2146624,4.49773695 15.5353594,4.07262697 15.9953592,4.008227 Z", id: "icon-small-exchanges" })))))))); });
exports.default = exports.ExchangesSmallIcon;
//# sourceMappingURL=exchanges-small.js.map