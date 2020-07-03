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
export var MenuAffiliateIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '16px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || "0 0 16 16" }),
    React.createElement("g", { id: "Main-Dashboard-affiliate", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "300.3-Navigation-open-default-state-affiliate", transform: "translate(-21.000000, -313.000000)" },
            React.createElement("g", { id: "Menu-affiliate" },
                React.createElement("g", { id: "Top-menu", transform: "translate(20.000000, 126.000000)" },
                    React.createElement("path", { d: "M12.0127975,187 C14.8439086,187 16.9016864,188.306667 16.9016864,190.111111 C16.8956248,190.682638 16.6788034,191.231813 16.2927975,191.653333 C16.6802288,192.084584 16.8967646,192.642519 16.9016864,193.222222 C16.8956248,193.793749 16.6788034,194.342924 16.2927975,194.764444 C16.6802288,195.195695 16.8967646,195.75363 16.9016864,196.333333 C16.8956248,196.90486 16.6788034,197.454036 16.2927975,197.875556 C16.6802288,198.306806 16.8967646,198.864741 16.9016864,199.444444 C16.9016864,201.248889 14.7327975,202.555556 11.9016864,202.555556 C9.07057528,202.555556 7.12390861,201.248889 7.12390861,199.444444 C7.1281494,198.878777 7.33467369,198.333301 7.70613083,197.906667 C7.33152422,197.467917 7.12515497,196.910247 7.12390861,196.333333 C7.1281494,195.767666 7.33467369,195.22219 7.70613083,194.795556 C7.33152422,194.356806 7.12515497,193.799136 7.12390861,193.222222 C7.1281494,192.656555 7.33467369,192.111079 7.70613083,191.684444 C7.33152422,191.245695 7.12515497,190.688025 7.12390861,190.111111 C7.12390861,188.306667 9.18168639,187 12.0127975,187 Z M15.2305753,198.693333 C14.1987856,199.211381 13.0559602,199.469241 11.9016864,199.444444 C10.809505,199.47354 9.72705568,199.232317 8.75057528,198.742222 C8.57013551,198.932498 8.46576477,199.182355 8.45724194,199.444444 C8.45724194,200.426667 9.93724194,201.222222 11.9016864,201.222222 C13.8661308,201.222222 15.5683531,200.426667 15.5683531,199.444444 C15.5570402,199.159835 15.4359888,198.890655 15.2305753,198.693333 Z M3.23057528,191.017778 C3.59876511,191.017778 3.89724194,191.316255 3.89724194,191.684444 L3.89724194,191.684444 L3.92390861,192.128889 C4.80692325,192.39795 5.40863861,193.214693 5.40390861,194.137778 C5.40390861,194.505968 5.10543178,194.804444 4.73724194,194.804444 C4.36905211,194.804444 4.07057528,194.505968 4.07057528,194.137778 C4.071191,193.929086 3.9879144,193.728902 3.83946416,193.582222 C3.52917119,193.288179 3.04309047,193.288179 2.7327975,193.582222 C2.51019939,193.806436 2.44433948,194.142546 2.56585702,194.434188 C2.68737457,194.72583 2.97240748,194.915735 3.28835305,194.915556 L3.28835305,194.915556 L3.27946416,194.928889 C4.20169052,194.927221 5.03373203,195.482342 5.38629016,196.334519 C5.73884829,197.186697 5.54219971,198.167402 4.88835305,198.817778 C4.61049057,199.092521 4.26583557,199.290123 3.88835305,199.391111 L3.88835305,199.391111 L3.88835305,200.128889 C3.88835305,200.497079 3.58987622,200.795556 3.22168639,200.795556 C2.85349655,200.795556 2.55501972,200.497079 2.55501972,200.128889 L2.55501972,200.128889 L2.55501972,199.36 C1.54336226,199.031803 0.899937742,198.039779 1.0127975,196.982222 C1.04961648,196.614032 1.377941,196.345403 1.74613083,196.382222 C2.11432066,196.419041 2.38294981,196.747366 2.34613083,197.115556 C2.30753843,197.503239 2.51153008,197.874693 2.85938372,198.050151 C3.20723737,198.22561 3.62720466,198.168883 3.91604181,197.907423 C4.20487897,197.645964 4.30301038,197.233701 4.16294522,196.87015 C4.02288005,196.506599 3.67350817,196.266745 3.28390861,196.266667 C2.25668811,196.269546 1.37649629,195.532626 1.19873096,194.5209 C1.02096564,193.509174 1.59723222,192.516347 2.56390861,192.168889 L2.56390861,192.168889 L2.56390861,191.684444 C2.56390861,191.316255 2.86238544,191.017778 3.23057528,191.017778 Z M15.2305753,195.582222 C14.1987856,196.10027 13.0559602,196.35813 11.9016864,196.333333 C10.809505,196.362429 9.72705568,196.121206 8.75057528,195.631111 C8.57013551,195.821387 8.46576477,196.071244 8.45724194,196.333333 C8.45724194,197.315556 9.93724194,198.111111 11.9016864,198.111111 C13.8661308,198.111111 15.5683531,197.315556 15.5683531,196.333333 C15.5570402,196.048724 15.4359888,195.779544 15.2305753,195.582222 Z M15.2305753,192.471111 C14.1987856,192.989158 13.0559602,193.247019 11.9016864,193.222222 C10.809505,193.251317 9.72705568,193.010095 8.75057528,192.52 C8.57013551,192.710276 8.46576477,192.960133 8.45724194,193.222222 C8.45724194,194.204444 9.93724194,195 11.9016864,195 C13.8661308,195 15.5683531,194.204444 15.5683531,193.222222 C15.5570402,192.937613 15.4359888,192.668433 15.2305753,192.471111 Z M12.0127975,188.333333 C10.0483531,188.333333 8.45724194,189.128889 8.45724194,190.111111 C8.45724194,191.093333 9.93724194,191.888889 11.9016864,191.888889 C13.8661308,191.888889 15.5683531,191.093333 15.5683531,190.111111 C15.5683531,189.128889 13.9772419,188.333333 12.0127975,188.333333 Z", id: "icon-menu-affiliate" }))))))); });
export default MenuAffiliateIcon;
//# sourceMappingURL=menu-affiliate.js.map