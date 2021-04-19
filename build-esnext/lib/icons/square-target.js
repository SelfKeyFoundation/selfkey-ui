import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        cursor: 'pointer',
        fill: '#FFF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#00C0D9'
        }
    }
});
export const SquareTargetIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '20px', height: props.height || 'auto' } }, props, { viewBox: props.viewBox || '0 0 1000 1000' }),
    React.createElement("g", null,
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M49,361.2c21.5,0,39-17.5,39-39V88.1h234.2c21.5,0,39-17.5,39-39c0-21.6-17.5-39-39-39H49c-21.5,0-39,17.5-39,39v273.2C10,343.8,27.5,361.2,49,361.2z" }),
                React.createElement("path", { d: "M677.8,88.1h234.2v234.1c0,21.6,17.5,39,39,39s39-17.5,39-39V49c0-21.6-17.5-39-39-39H677.8c-21.5,0-39,17.5-39,39C638.8,70.6,656.2,88.1,677.8,88.1z" }),
                React.createElement("path", { d: "M677.8,990H951c21.5,0,39-17.5,39-39V677.8c0-21.6-17.5-39-39-39s-39,17.5-39,39v234.2H677.8c-21.5,0-39,17.5-39,39C638.8,972.5,656.2,990,677.8,990z" }),
                React.createElement("path", { d: "M49,990h273.2c21.5,0,39-17.5,39-39c0-21.6-17.5-39-39-39H88.1V677.8c0-21.6-17.5-39-39-39c-21.5,0-39,17.5-39,39V951C10,972.5,27.5,990,49,990z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)))));
//# sourceMappingURL=square-target.js.map