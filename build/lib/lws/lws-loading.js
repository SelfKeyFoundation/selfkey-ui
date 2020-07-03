import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import AnimatedLoadingIcon from '../icons/animated-loading';
var styles = createStyles({
    loading: {
        minHeight: '300px',
        textAlign: 'center',
        lineHeight: '300px',
        '& svg circle': {
            fill: '#1CA9BA',
        },
    }
});
export var LWSLoading = withStyles(styles)(function (_a) {
    var classes = _a.classes;
    return (React.createElement("div", { className: classes.loading },
        React.createElement(AnimatedLoadingIcon, null)));
});
export default LWSLoading;
//# sourceMappingURL=lws-loading.js.map