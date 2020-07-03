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
exports.FileAudioIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        width: '29px !important',
        height: '36px !important',
    }
});
exports.FileAudioIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({}, props, { viewBox: "0 0 29 36" }),
    React.createElement("g", { id: "Page-audio-file", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "Audio-File-595b40b75ba036ed117d54ba", fill: "#697C95", fillRule: "nonzero" },
            React.createElement("path", { d: "M0,0 L0,36 L28.173913,36 L28.173913,35.2173913 L28.173913,10.6324732 L17.5414398,0 L0,0 Z M1.56521739,1.56521739 L16.4347826,1.56521739 L16.4347826,11.7391304 L26.6086957,11.7391304 L26.6086957,34.4347826 L1.56521739,34.4347826 L1.56521739,1.56521739 Z M18,2.671875 L25.5020384,10.173913 L18,10.173913 L18,2.671875 Z M14.088485,14.4140627 C13.6455284,14.4140627 13.3486756,14.7005092 13.3486756,15.130944 L13.3486756,22.1606656 C13.3486756,23.0215351 13.0535703,23.7396397 11.4273094,23.7396397 C9.13583191,23.7396397 8.174592,24.2417692 8.174592,25.676291 C8.174592,26.6091605 8.3970493,28.0439875 11.4273094,28.0439875 C14.2353102,28.0439875 14.8267659,25.9636547 14.8267659,24.8875677 L14.8267659,18.1436823 C17.4876355,18.1436823 17.1920176,19.1482341 19.1876697,19.3634515 C19.6306263,19.4346681 20.0008495,19.1488453 20.0008495,18.7184105 L20.0008495,16.5662366 C20.0008495,16.2070192 19.7038002,15.8478261 19.3344089,15.8478261 C17.1172784,15.6326087 17.5612007,14.4140627 14.8267659,14.4140627 L14.088485,14.4140627 Z", id: "icon-file-audio" }))))); });
exports.default = exports.FileAudioIcon;
//# sourceMappingURL=file-audio.js.map