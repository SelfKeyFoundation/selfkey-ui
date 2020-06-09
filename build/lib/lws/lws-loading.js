import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import AnimatedLoadingIcon from '../icons/animated-loading';
const styles = createStyles({
    loading: {
        minHeight: '300px',
        textAlign: 'center',
        lineHeight: '300px',
        '& svg circle': {
            fill: '#1CA9BA',
        },
    }
});
export const LWSLoading = withStyles(styles)(({ classes }) => (React.createElement("div", { className: classes.loading },
    React.createElement(AnimatedLoadingIcon, null))));
export default LWSLoading;
//# sourceMappingURL=lws-loading.js.map