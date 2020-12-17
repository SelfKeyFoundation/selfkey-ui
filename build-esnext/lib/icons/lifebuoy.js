import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        cursor: 'pointer',
        fill: '#C5DCE9',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: '#00C0D9'
        }
    }
});
export const LifebuoyIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '20px', height: props.height || '20px' } }, props, { viewBox: props.viewBox || '0 0 20 20' }),
    React.createElement("g", { id: "Symbols-web-help", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "Web-Nav", transform: "translate(-1433.000000, -12.000000)", fill: "inherit" },
            React.createElement("g", { id: "menu-items" },
                React.createElement("g", { transform: "translate(1032.000000, 7.000000)" },
                    React.createElement("g", { id: "help", transform: "translate(401.000000, 0.000000)" },
                        React.createElement("path", { d: "M10,5 C4.4771525,5 0,9.4771525 0,15 C0,20.5228475 4.4771525,25 10,25 C15.5228475,25 20,20.5228475 20,15 C20,9.4771525 15.5228475,5 10,5 L10,5 Z M15.6,8.43181818 L13.3681818,10.6636364 L13.3409091,10.6954545 C11.3787403,9.15862835 8.62125974,9.15862835 6.65909091,10.6954545 L6.63181818,10.6636364 L4.4,8.43181818 C7.62457532,5.67080898 12.3799701,5.67080898 15.6045455,8.43181818 L15.6,8.43181818 Z M10,19.0909091 C7.7406533,19.0909091 5.90909091,17.2593467 5.90909091,15 C5.90909091,12.7406533 7.7406533,10.9090909 10,10.9090909 C12.2593467,10.9090909 14.0909091,12.7406533 14.0909091,15 C14.0909091,17.2593467 12.2593467,19.0909091 10,19.0909091 L10,19.0909091 Z M1.36363636,15 C1.36185575,12.946194 2.09552905,10.9596325 3.43181818,9.4 L5.66363636,11.6318182 L5.69545455,11.6590909 C4.15862835,13.6212597 4.15862835,16.3787403 5.69545455,18.3409091 L5.66363636,18.3681818 L3.43181818,20.6 C2.09552905,19.0403675 1.36185575,17.053806 1.36363636,15 L1.36363636,15 Z M4.4,21.5681818 L6.63181818,19.3363636 L6.65909091,19.3045455 C8.62125974,20.8413716 11.3787403,20.8413716 13.3409091,19.3045455 L13.3681818,19.3363636 L15.6,21.5681818 C12.3754247,24.329191 7.62002987,24.329191 4.39545455,21.5681818 L4.4,21.5681818 Z M16.5681818,20.6045455 L14.3181818,18.3681818 L14.2863636,18.3409091 C15.8231898,16.3787403 15.8231898,13.6212597 14.2863636,11.6590909 L14.3181818,11.6318182 L16.55,9.4 C19.3110092,12.6245753 19.3110092,17.3799701 16.55,20.6045455 L16.5681818,20.6045455 Z", id: "icon-lifebuoy" })))))))));
export default LifebuoyIcon;
//# sourceMappingURL=lifebuoy.js.map