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
import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
var styles = createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
});
export var PersonIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '46px', height: props.height || '46px' } }, props, { viewBox: props.viewBox || "0 0 46 46" }),
    React.createElement("g", { id: "ldsaj", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "4.-Style-Guide---Tables", transform: "translate(-1217.000000, -249.000000)" },
            React.createElement("g", { id: "Multi-Line-Table", transform: "translate(1193.000000, 124.000000)" },
                React.createElement("g", { id: "Table-multi-line", transform: "translate(0.000000, 61.000000)" },
                    React.createElement("g", { id: "Col0", transform: "translate(24.000000, 64.000000)" },
                        React.createElement("g", { id: "icon-round-person" },
                            React.createElement("circle", { id: "Oval-2", fill: "#293743", cx: "23", cy: "23", r: "23" }),
                            React.createElement("path", { d: "M22.75,23 C21.8385371,23 20.9987018,22.778648 20.2304688,22.3359375 C19.4622357,21.893227 18.856773,21.2877643 18.4140625,20.5195312 C17.971352,19.7512982 17.75,18.9114629 17.75,18 C17.75,17.0885371 17.971352,16.2487018 18.4140625,15.4804688 C18.856773,14.7122357 19.4622357,14.106773 20.2304688,13.6640625 C20.9987018,13.221352 21.8385371,13 22.75,13 C23.6614629,13 24.5012982,13.221352 25.2695312,13.6640625 C26.0377643,14.106773 26.643227,14.7122357 27.0859375,15.4804688 C27.528648,16.2487018 27.75,17.0885371 27.75,18 C27.75,18.9114629 27.528648,19.7512982 27.0859375,20.5195312 C26.643227,21.2877643 26.0377643,21.893227 25.2695312,22.3359375 C24.5012982,22.778648 23.6614629,23 22.75,23 Z M26.5,24.2890625 C27.4114629,24.3151043 28.2512982,24.569008 29.0195312,25.0507812 C29.7877643,25.5325545 30.393227,26.1640586 30.8359375,26.9453125 C31.278648,27.7265664 31.5,28.5729121 31.5,29.484375 L31.5,31.125 C31.5,31.6458359 31.3177102,32.0885398 30.953125,32.453125 C30.5885398,32.8177102 30.1458359,33 29.625,33 L15.875,33 C15.3541641,33 14.9114602,32.8177102 14.546875,32.453125 C14.1822898,32.0885398 14,31.6458359 14,31.125 L14,29.484375 C14,28.5729121 14.221352,27.7265664 14.6640625,26.9453125 C15.106773,26.1640586 15.7122357,25.5325545 16.4804688,25.0507812 C17.2487018,24.569008 18.0885371,24.3151043 19,24.2890625 L20.875,31.75 L22.125,26.4375 L20.875,24.25 L24.625,24.25 L23.375,26.4375 L24.625,31.75 L26.5,24.2890625 Z", id: "icon-person", fill: "#697C95" }))))))))); });
export default PersonIcon;
//# sourceMappingURL=person.js.map