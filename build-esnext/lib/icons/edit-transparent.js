import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            cursor: 'pointer',
            fill: 'white'
        }
    }
});
export const EditTransparentIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '16px', height: props.height || '16px' } }, props, { viewBox: props.viewBox || '0 0 16 16' }),
    React.createElement("g", { id: "\uD83D\uDCBB-ID-Dashboard", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "403---Identity-Summary", transform: "translate(-835.000000, -645.000000)" },
            React.createElement("g", { id: "Area-box-2", transform: "translate(150.000000, 513.000000)" },
                React.createElement("g", { id: "Table", transform: "translate(14.000000, 80.000000)" },
                    React.createElement("g", { id: "Col7", transform: "translate(661.000000, 12.000000)" },
                        React.createElement("g", { id: "actions", transform: "translate(10.000000, 40.000000)" },
                            React.createElement("path", { d: "M11.3837648,3.5704 L12.5185222,2.3816 L13.6564966,3.5728 L12.5209349,4.7616 L11.3837648,3.5704 Z M3.13646645,14.5888 L1.99849208,13.3976 L10.2465946,4.7616 L11.3837648,5.952 L3.13646645,14.5888 Z M12.6568485,0 L0,13.3976 L0,16 L3.13646645,16 L16,3.0872 L12.6568485,0 Z", id: "icon-edit" }))))))))));
export default EditTransparentIcon;
//# sourceMappingURL=edit-transparent.js.map