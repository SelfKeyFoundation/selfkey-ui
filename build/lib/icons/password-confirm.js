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
var _linearGradient_1 = require("./_linearGradient");
var styles = {
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        },
    }
};
var linearGradientColor = 'url(#default-linear-gradient)';
exports.PasswordConfirmIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '66px', height: props.height || '68px', fill: props.fill || linearGradientColor } }, props, { viewBox: props.viewBox || "0 0 66 68" }),
    React.createElement(_linearGradient_1.default, null),
    React.createElement("g", { id: "\uD83D\uDEE0-Vault-Setup", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "107-Confirm-Password", transform: "translate(-375.000000, -386.000000)", fill: "inherit", fillRule: "nonzero" },
            React.createElement("g", { id: "Modal", transform: "translate(330.000000, 291.000000)" },
                React.createElement("g", { id: "Content", transform: "translate(45.000000, 94.000000)" },
                    React.createElement("g", { id: "icon-password-confirm", transform: "translate(0.000000, 1.000000)" },
                        React.createElement("path", { d: "M27.9661017,0 C16.2460678,0 6.71186441,9.53420339 6.71186441,21.2542373 L6.71186441,26.8474576 L3.3559322,26.8474576 C1.51016949,26.8474576 0,28.3576271 0,30.2033898 L0,63.7627119 C0,65.6084746 1.51016949,67.1186441 3.3559322,67.1186441 L54.8135593,67.1186441 C56.659322,67.1186441 58.1694915,65.6084746 58.1694915,63.7627119 L58.1694915,57.3305085 C62.7559322,55.540678 66,51.0772881 66,45.8644068 C66,40.6515254 62.7559322,36.1881356 58.1694915,34.3983051 L58.1694915,30.2033898 C58.1694915,28.3576271 56.659322,26.8474576 54.8135593,26.8474576 L51.4576271,26.8474576 L51.4576271,21.2542373 C51.4576271,9.53420339 41.9234237,0 30.2033898,0 L27.9661017,0 Z M27.9661017,2.23728814 L30.2033898,2.23728814 C30.5814915,2.23728814 30.9495254,2.27172134 31.3220339,2.29409422 L31.3220339,6.76867049 C30.9517627,6.73958586 30.5814915,6.71186441 30.2033898,6.71186441 L27.9661017,6.71186441 C27.588,6.71186441 27.2177288,6.73958586 26.8474576,6.76867049 L26.8474576,2.29409422 C27.2199661,2.27172134 27.588,2.23728814 27.9661017,2.23728814 Z M24.6101695,2.55190678 L24.6101695,7.11824677 C18.2070508,8.63960281 13.4237288,14.3924746 13.4237288,21.2542373 L13.4237288,26.8474576 L8.94915254,26.8474576 L8.94915254,21.2542373 C8.94915254,11.914678 15.7214237,4.14373729 24.6101695,2.55190678 Z M33.559322,2.55190678 C42.4480678,4.14373729 49.220339,11.914678 49.220339,21.2542373 L49.220339,26.8474576 L44.7457627,26.8474576 L44.7457627,21.2542373 C44.7457627,14.3924746 39.9624407,8.63960281 33.559322,7.11824677 L33.559322,2.55190678 Z M27.9661017,8.94915254 L30.2033898,8.94915254 C36.9879661,8.94915254 42.5084746,14.469661 42.5084746,21.2542373 L42.5084746,26.8474576 L15.6610169,26.8474576 L15.6610169,21.2542373 C15.6610169,14.469661 21.1815254,8.94915254 27.9661017,8.94915254 Z M3.3559322,29.0847458 L6.71186441,29.0847458 L13.4237288,29.0847458 L44.7457627,29.0847458 L51.4576271,29.0847458 L54.8135593,29.0847458 C55.4288136,29.0847458 55.9322034,29.5881356 55.9322034,30.2033898 L55.9322034,33.7603289 C55.2050847,33.6260905 54.4555932,33.559322 53.6949153,33.559322 C46.9047458,33.559322 41.3898305,39.0742373 41.3898305,45.8644068 C41.3898305,52.6545763 46.9047458,58.1694915 53.6949153,58.1694915 C54.4555932,58.1694915 55.2050847,58.102723 55.9322034,57.9684846 L55.9322034,63.7627119 C55.9322034,64.3779661 55.4288136,64.8813559 54.8135593,64.8813559 L3.3559322,64.8813559 C2.74067797,64.8813559 2.23728814,64.3779661 2.23728814,63.7627119 L2.23728814,30.2033898 C2.23728814,29.5881356 2.74067797,29.0847458 3.3559322,29.0847458 Z M53.6949153,35.7966102 C54.4667797,35.7966102 55.2162712,35.8868881 55.9322034,36.0434983 C56.7152542,36.2224813 57.4647458,36.500744 58.1694915,36.8475237 C61.480678,38.4919305 63.7627119,41.9155932 63.7627119,45.8644068 C63.7627119,49.8132203 61.480678,53.2368831 58.1694915,54.8812899 C57.4647458,55.2280695 56.7152542,55.5063322 55.9322034,55.6853153 C55.2162712,55.8419255 54.4667797,55.9322034 53.6949153,55.9322034 C48.1464407,55.9322034 43.6271186,51.4128814 43.6271186,45.8644068 C43.6271186,40.3159322 48.1464407,35.7966102 53.6949153,35.7966102 Z M58.1694915,41.761255 C57.8831186,41.761255 57.5972704,41.8724728 57.3785755,42.0911678 L52.2048467,47.2670813 L50.011255,45.0734907 C49.5738652,44.6361009 48.8689975,44.6361009 48.4316077,45.0734907 C47.9942178,45.5108806 47.9942178,46.217933 48.4316077,46.6553228 L51.4139306,49.6376458 C51.6242357,49.8479509 51.908406,49.9675585 52.2048467,49.9675585 C52.5012874,49.9675585 52.7865763,49.8479509 52.9957627,49.6376458 L58.9604076,43.6708151 C59.3977974,43.2334264 59.3977974,42.5285576 58.9604076,42.0911678 C58.7417126,41.8724728 58.4558644,41.761255 58.1694915,41.761255 Z M13.4237288,42.5084746 C12.1881087,42.5084746 11.1864407,43.5101426 11.1864407,44.7457627 C11.1864407,45.9813828 12.1881087,46.9830508 13.4237288,46.9830508 C14.6593489,46.9830508 15.6610169,45.9813828 15.6610169,44.7457627 C15.6610169,43.5101426 14.6593489,42.5084746 13.4237288,42.5084746 Z M23.4915254,42.5084746 C22.2559053,42.5084746 21.2542373,43.5101426 21.2542373,44.7457627 C21.2542373,45.9813828 22.2559053,46.9830508 23.4915254,46.9830508 C24.7271455,46.9830508 25.7288136,45.9813828 25.7288136,44.7457627 C25.7288136,43.5101426 24.7271455,42.5084746 23.4915254,42.5084746 Z M33.559322,42.5084746 C32.3237019,42.5084746 31.3220339,43.5101426 31.3220339,44.7457627 C31.3220339,45.9813828 32.3237019,46.9830508 33.559322,46.9830508 C34.7949422,46.9830508 35.7966102,45.9813828 35.7966102,44.7457627 C35.7966102,43.5101426 34.7949422,42.5084746 33.559322,42.5084746 Z M5.59322034,60.4067797 C4.97572881,60.4067797 4.47457627,60.9068136 4.47457627,61.5254237 C4.47457627,62.1440339 4.97572881,62.6440678 5.59322034,62.6440678 L43.6271186,62.6440678 C44.2446102,62.6440678 44.7457627,62.1440339 44.7457627,61.5254237 C44.7457627,60.9068136 44.2446102,60.4067797 43.6271186,60.4067797 L5.59322034,60.4067797 Z M48.1016949,60.4067797 C47.4842034,60.4067797 46.9830508,60.9068136 46.9830508,61.5254237 C46.9830508,62.1440339 47.4842034,62.6440678 48.1016949,62.6440678 L52.5762712,62.6440678 C53.1937627,62.6440678 53.6949153,62.1440339 53.6949153,61.5254237 C53.6949153,60.9068136 53.1937627,60.4067797 52.5762712,60.4067797 L48.1016949,60.4067797 Z", id: "Shape" })))))))); });
exports.default = exports.PasswordConfirmIcon;
//# sourceMappingURL=password-confirm.js.map