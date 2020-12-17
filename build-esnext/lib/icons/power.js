import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white'
        }
    }
});
export const PowerIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '16px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || '0 0 16 16' }),
    React.createElement("defs", null),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard-pi", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "300.4-Navigation-collapsed-pi", transform: "translate(-20.000000, -1366.000000)" },
            React.createElement("g", { id: "Menu" },
                React.createElement("g", { id: "Bottom-menu", transform: "translate(20.000000, 1263.000000)" },
                    React.createElement("path", { d: "M8.88888889,103 L7.11111111,103 L7.11111111,111.888889 L8.88888889,111.888889 L8.88888889,103 Z M13.1822222,104.928889 L11.92,106.191111 C13.3244444,107.32 14.2222222,109.053333 14.2222222,111 C14.2222222,114.44 11.44,117.222222 8,117.222222 C4.56,117.222222 1.77777778,114.44 1.77777778,111 C1.77777778,109.053333 2.67555556,107.32 4.07111111,106.182222 L2.81777778,104.928889 C1.09333333,106.395556 0,108.564444 0,111 C0,115.417778 3.58222222,119 8,119 C12.4177778,119 16,115.417778 16,111 C16,108.564444 14.9066667,106.395556 13.1822222,104.928889 Z", id: "pi-m" }))))))));
export default PowerIcon;
//# sourceMappingURL=power.js.map