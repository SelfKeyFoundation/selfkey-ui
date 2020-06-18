import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { grey, white } from '../colors';
const styles = createStyles({
    root: {
        fill: grey,
        height: '16px !important',
        width: '16px !important',
        '&:hover': {
            fill: white,
        },
    }
});
export const MuiDeleteIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({}, props, { viewBox: "0 0 16 16", version: "1.1" }),
    React.createElement("defs", null),
    React.createElement("g", { id: "-Main-Dashboard", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "304-Manage-My-Tokens", transform: "translate(-1244.000000, -597.000000)", fill: "inherit" },
            React.createElement("g", { id: "Table", transform: "translate(150.000000, 442.000000)" },
                React.createElement("g", { id: "Col7", transform: "translate(1094.000000, 155.000000)" },
                    React.createElement("path", { d: "M9.13137085,8 L10.8284271,9.69705627 L9.69705627,10.8284271 L8,9.13137085 L6.30294373,10.8284271 L5.17157288,9.69705627 L6.86862915,8 L5.17157288,6.30294373 L6.30294373,5.17157288 L8,6.86862915 L9.69705627,5.17157288 L10.8284271,6.30294373 L9.13137085,8 Z M8,14.4 C4.4712,14.4 1.6,11.5288 1.6,8 C1.6,4.4712 4.4712,1.6 8,1.6 C11.5288,1.6 14.4,4.4712 14.4,8 C14.4,11.5288 11.5288,14.4 8,14.4 L8,14.4 Z M8,0 C3.5816,0 0,3.5816 0,8 C0,12.4184 3.5816,16 8,16 C12.4184,16 16,12.4184 16,8 C16,3.5816 12.4184,0 8,0 L8,0 Z", id: "icon-delete" }))))))));
export default MuiDeleteIcon;
//# sourceMappingURL=muidelete.js.map