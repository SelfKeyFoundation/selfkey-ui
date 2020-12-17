import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white'
        }
    }
});
export const FilterIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '26px', height: props.height || '26px' } }, props, { viewBox: props.viewBox || '0 0 26 26' }),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "300.7-dashboard-alternate1---full-state", transform: "translate(-1295.000000, -472.000000)", fill: "#93B0C1" },
            React.createElement("g", { id: "Transactions", transform: "translate(1020.000000, 447.000000)" },
                React.createElement("g", { id: "Title", transform: "translate(30.000000, 18.000000)" },
                    React.createElement("path", { d: "M268.498384,14.0989419 L266.723648,14.0989419 L266.723648,11.7326279 C266.723648,10.7524686 265.929072,9.95789247 264.948913,9.95789247 L262.582599,9.95789247 L262.582599,8.77473548 C262.582599,7.79457614 261.788023,7 260.807863,7 L250.751029,7 C249.77087,7 248.976293,7.79457614 248.976293,8.77473548 L248.976293,14.0989419 L246.757874,14.0989419 C246.029338,14.1058923 245.379057,14.5573942 245.117954,15.2375694 C244.85685,15.9177445 245.037971,16.6884025 245.574717,17.1810659 L253.726669,24.6408707 L253.726669,31.2547182 C253.738697,31.9777623 254.188221,32.6212004 254.862997,32.8812296 C255.537773,33.1412588 256.302837,32.9658704 256.796961,32.4378752 L260.938011,28.0010365 C261.238952,27.6797319 261.409735,27.2580461 261.417189,26.8178795 L261.417189,24.9248283 L269.699288,17.1988132 C270.249545,16.7085964 270.439594,15.9293292 270.176806,15.2408254 C269.914019,14.5523217 269.25308,14.097859 268.516131,14.0989419 L268.498384,14.0989419 Z M250.751029,8.77473548 L260.807863,8.77473548 L260.807863,11.7326279 L264.948913,11.7326279 L264.948913,14.0989419 L250.751029,14.0989419 L250.751029,8.77473548 Z M259.624706,24.1557763 L259.624706,26.8178795 L255.483657,31.2547182 L255.483657,23.8599871 L246.751958,15.8736774 L268.492468,15.8736774 L259.624706,24.1557763 Z", id: "icon-filter" }))))))));
export default FilterIcon;
//# sourceMappingURL=filter.js.map