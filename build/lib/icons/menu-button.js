import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core';
const styles = createStyles({
    root: {
        fill: '#00c0d9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#23E6FE',
        }
    }
});
export const MenuButtonIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ width: "512px", height: "512px" }, props, { viewBox: "0 0 459 459" }),
    React.createElement("g", null,
        React.createElement("g", { id: "menu" },
            React.createElement("path", { d: "M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" }))))));
export default MenuButtonIcon;
//# sourceMappingURL=menu-button.js.map