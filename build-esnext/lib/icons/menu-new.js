import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '& #icon-menu-new-mn': {
            width: '200px'
        },
    }
});
export const MenuNewIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '30px', height: props.height || '21px' } }, props, { viewBox: props.viewBox || "0 0 30 21" }),
    React.createElement("g", { id: "MD-mn", stroke: "none", strokeWidth: "1" },
        React.createElement("g", { id: "300.4-Nc-mn", transform: "translate(-76.000000, -27.000000)", fill: "#00C0D9", fillRule: "nonzero" },
            React.createElement("path", { d: "M76,27 L76,28.96 L101,28.96 L101,27 L76,27 Z M76,36.52 L76,38.48 L106,38.48 L106,36.52 L76,36.52 Z M76,46.04 L76,48 L96,48 L96,46.04 L76,46.04 Z", id: "icon-menu-new-mn", stroke: "transparent", strokeWidth: "10" }),
            React.createElement("polygon", { id: "Path", points: "220 36.52 220 38.48 250 38.48 250 36.52" }))))));
export default MenuNewIcon;
//# sourceMappingURL=menu-new.js.map